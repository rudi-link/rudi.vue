export function generateDatesForYear(year: number): Date[] {
  const dates: Date[] = [];
  const startDate = new Date(year, 0, 1); // January 1st of the selected year
  const endDate = new Date(year, 11, 31); // December 31st of the selected year

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    dates.push(new Date(d));
  }

  return dates;
}

export function getContributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function getAvailableYears(contributions: { createdAt: string }[]): number[] {
  const years = new Set<number>();
  contributions?.forEach(contribution => {
    const year = new Date(contribution.createdAt).getFullYear();
    years.add(year);
  });
  return Array.from(years).sort((a, b) => b - a); // Sort descending
}

export function formatContributionDate(date: Date): string {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}