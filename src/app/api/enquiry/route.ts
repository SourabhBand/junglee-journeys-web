import { NextResponse } from 'next/server';

const RECIPIENT = 'jungleejourneys@gmail.com';

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

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();

    if (!body.name || !body.email || !body.park || !body.dates) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured. Please try WhatsApp or email directly.' },
        { status: 500 }
      );
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

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

    await resend.emails.send({
      from: 'Junglee Journeys <enquiry@jungleejourneys.com>',
      to: RECIPIENT,
      replyTo: body.email,
      subject: `Safari enquiry from ${body.name}`,
      text,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send enquiry. Please try WhatsApp or email directly.' },
      { status: 500 }
    );
  }
}
