import { siteConfig } from '@/config/site';

const ENDPOINT = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT;

function buildMailto({ name, email, message }) {
  const subject = `Inquiry from ${name}`;
  const body = `${message}\n\n${name}\n${email}`;
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

/*
  Delivers an inquiry. With NEXT_PUBLIC_INQUIRY_ENDPOINT set it posts JSON there
  and resolves to 'sent'. Otherwise it hands the message to the visitor's email
  app and resolves to 'mailto'.
*/
export async function submitInquiry(values) {
  if (!ENDPOINT) {
    window.location.href = buildMailto(values);
    return 'mailto';
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error(`Inquiry endpoint responded with ${response.status}`);
  }

  return 'sent';
}
