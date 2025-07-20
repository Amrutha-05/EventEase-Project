// src/utils/helpers.js

export function formatGoogleCalendarDate(dateString) {
  if (!dateString) return "Date not available";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export function getEventStatus(startDateTime) {
  if (!startDateTime) return "Unknown";

  const now = new Date();
  const eventDate = new Date(startDateTime);

  if (isNaN(eventDate.getTime())) return "Date Ended";

  return now < eventDate ? "Upcoming" : "Closed";
}
