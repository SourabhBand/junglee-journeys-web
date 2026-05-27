interface Env {
  GOOGLE_SHEETS_WEBHOOK?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const sheetWebhook = context.env.GOOGLE_SHEETS_WEBHOOK;
  if (!sheetWebhook) {
    return Response.json({ ok: true });
  }

  try {
    const body = await context.request.json() as { page?: string };

    context.waitUntil(
      fetch(sheetWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: '',
          email: '',
          phone: '',
          park: '',
          dates: '',
          adults: '',
          children: '',
          rooms: '',
          safaris: '',
          source: `WhatsApp click — ${body.page || 'unknown'}`,
        }),
      })
    );
  } catch {
    // Non-critical, don't block
  }

  return Response.json({ ok: true });
};
