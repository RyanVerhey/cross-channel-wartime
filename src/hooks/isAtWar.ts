import { warYears } from '../data';

export default function isAtWar(year: number): boolean {
  const warYearRanges = warYears.map(warInfoArr => warInfoArr[0]);
  return warYearRanges.some(yearRange => {
    const [startYear, endYear] = yearRange;
    return (
      year === startYear ||
        year === endYear ||
        (startYear <= year && year <= endYear)
    );
  })
}
