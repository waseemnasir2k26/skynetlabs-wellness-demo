import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, source } = (await req.json()) as { email?: string; source?: string };
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
    }

    const webhook = process.env.WAITLIST_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: source ?? '/', ts: new Date().toISOString() }),
      }).catch(() => null);
    } else {
      console.log('[waitlist]', { email, source, ts: new Date().toISOString() });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }
}
