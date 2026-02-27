export const normalizePin = (value?: string, maxLength = 6) => {
  return (value ?? "").replace(/\D/g, "").slice(0, maxLength);
};
