interface Env {
  RESEND_API_KEY: string;
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

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'Failed to send enquiry. Please try WhatsApp or email directly.' },
      { status: 500 }
    );
  }
};
