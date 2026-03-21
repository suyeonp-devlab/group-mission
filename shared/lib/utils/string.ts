/** Keep only digits and trim to max length */
export const normalizeDigits = (value?: string, maxLength = 6) => {
  return (value ?? "").replace(/\D/g, "").slice(0, maxLength);
};