export function formatAmount(amount: number | string): string {
  if (amount === null || amount === undefined || amount === "") {
    return "0";
  }

  const [integerPart, decimalPart] = amount.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export async function encryptPayload(
  payload: object,
  secretKey: string
): Promise<string> {
  const encoder = new TextEncoder();

  const keyBuffer = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(secretKey)
  );

  const key = await crypto.subtle.importKey(
    "raw",
    keyBuffer,
    { name: "AES-GCM" },
    false,
    ["encrypt"]
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(JSON.stringify(payload))
  );

  const combined = new Uint8Array(iv.length + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), iv.length);

  return btoa(String.fromCharCode(...combined));
}
