import { warYears } from '../data';

export default function getWarInfo(year: number): string {
  const warInfoArr = warYears.find(arr => {
    const [startYear, endYear] = arr[0];

    return (
      year === startYear || year === endYear ||
        (startYear < year && year < endYear)
    )
  });

  return warInfoArr ? warInfoArr[1] : "";
}
