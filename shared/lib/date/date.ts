export const formatDate = (dateString: string, format: string) => {

  if (!dateString) return "";

  const date = new Date(dateString);

  const yyyy = String(date.getFullYear());
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const M = String(date.getMonth() + 1);
  const dd = String(date.getDate()).padStart(2, "0");
  const d = String(date.getDate());

  return format
    .replace("yyyy", yyyy)
    .replace("MM", MM)
    .replace("M", M)
    .replace("dd", dd)
    .replace("d", d);
}

export const formatRelativeDate = (dateString: string) => {

  if (!dateString) return "";

  // Today → time (오후 2:32)
  // Yesterday → 어제
  // Same year → M월 D일
  // Different year → YYYY. M. D

  const date = new Date(dateString);
  const now = new Date();

  const isSameYear = date.getFullYear() === now.getFullYear();
  const isSameMonth = date.getMonth() === now.getMonth();
  const isSameDate = date.getDate() === now.getDate();

  // Today
  if (isSameYear && isSameMonth && isSameDate) {
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");

    const period = hour < 12 ? "오전" : "오후";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;

    return `${period} ${displayHour}:${minute}`;
  }

  // Yesterday
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    date.getFullYear() === yesterday.getFullYear() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getDate() === yesterday.getDate();

  if (isYesterday) {
    return "어제";
  }

  // Same year
  if (isSameYear) {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  }

  // Different year
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};