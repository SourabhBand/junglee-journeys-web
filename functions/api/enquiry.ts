interface Env {
  RESEND_API_KEY: string;
  GOOGLE_SHEETS_WEBHOOK?: string;
}

interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  park: string;
  dates: string;
  adults: string;
  children: string;
  rooms: string;
  safaris: string;
}

const RECIPIENT = 'jungleejourneys@gmail.com';

async function logToSheet(webhookUrl: string, data: EnquiryPayload, source: string) {
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        park: data.park,
        dates: data.dates,
        adults: data.adults,
        children: data.children,
        rooms: data.rooms,
        safaris: data.safaris,
        source,
      }),
    });
  } catch {
    // Sheet logging is non-blocking; email delivery is primary
  }
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body: EnquiryPayload = await context.request.json();

    if (!body.name || !body.email || !body.park || !body.dates) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = context.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: 'Email service not configured. Please try WhatsApp or email directly.' },
        { status: 500 }
      );
    }

    const text = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || 'Not provided'}`,
      `Park: ${body.park}`,
      `Dates: ${body.dates}`,
      `Adults (above 12): ${body.adults}`,
      `Children (below 12): ${body.children}`,
      `Rooms: ${body.rooms}`,
      `Safaris: ${body.safaris}`,
      '',
      'Sent via the jungleejourneys.com enquiry form.',
    ].join('\n');

    const source = context.request.headers.get('referer') || 'direct';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Junglee Journeys <onboarding@resend.dev>',
        to: RECIPIENT,
        reply_to: body.email,
        subject: `Safari enquiry from ${body.name}`,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend API error:', err);
      return Response.json(
        { error: 'Failed to send enquiry. Please try WhatsApp or email directly.' },
        { status: 500 }
      );
    }

    // Log to Google Sheet (non-blocking, don't await)
    const sheetWebhook = context.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetWebhook) {
      context.waitUntil(logToSheet(sheetWebhook, body, source));
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'Failed to send enquiry. Please try WhatsApp or email directly.' },
      { status: 500 }
    );
  }
};
