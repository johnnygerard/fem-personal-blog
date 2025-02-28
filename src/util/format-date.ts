const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/**
 * Format an ISO date string to a human-readable date string
 * @param date - ISO date string
 * @returns human-readable date string
 * @example
 * formatDate("2025-02-10T00:00:00Z"); // February 10, 2025
 */
export const formatDate = (date: string): string =>
  formatter.format(new Date(date));
