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
  masterKeyHex: string,
): Promise<string> {
  const encoder = new TextEncoder();

  const iv = crypto.getRandomValues(new Uint8Array(16));
  const salt = crypto.getRandomValues(new Uint8Array(64));

  const masterKeyBytes = hexToBytes(masterKeyHex);
  const baseKey = await crypto.subtle.importKey(
    "raw",
    masterKeyBytes.buffer as ArrayBuffer,
    "PBKDF2",
    false,
    ["deriveKey"],
  );

  const aesKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 10000,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"],
  );

  const encryptedBuffer = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    encoder.encode(JSON.stringify(payload)),
  );

  const encryptedBytes = new Uint8Array(encryptedBuffer);

  const authTag = encryptedBytes.slice(encryptedBytes.length - 16);
  const ciphertext = encryptedBytes.slice(0, encryptedBytes.length - 16);

  const combined = new Uint8Array(
    iv.length + salt.length + authTag.length + ciphertext.length,
  );

  let offset = 0;
  combined.set(iv, offset);
  offset += iv.length;
  combined.set(salt, offset);
  offset += salt.length;
  combined.set(authTag, offset);
  offset += authTag.length;
  combined.set(ciphertext, offset);

  return btoa(String.fromCharCode(...combined));
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
}
