import getWarInfo from "./getWarInfo";
import isAtWar from "./isAtWar";

export default function generateWarMessage(warYear: number): JSX.Element {
  const thisYear: number = new Date().getFullYear();

  if (warYear || warYear === 0) {
    const yearStr = warYear < 0 ? (warYear * -1) + " BCE" : warYear + " CE";
    const timeWord = thisYear ? "ARE" : "WERE"

    if (isAtWar(warYear)) {
      const warInfo = getWarInfo(warYear);
      return (
        <>
          <p>Yes, in <span className="year">{yearStr}</span> England and France <b>{timeWord}</b> at war.</p>
          <p style={{fontSize: 'small'}}>{warInfo}</p>
        </>
      )
    } else if (warYear > thisYear) {
      return (
        <p>The year <span className="year">{yearStr}</span> is still in the future! How am I supposed to know?</p>
      )
    } else {
      return (
        <p>No, in <span className="year">{yearStr}</span> England and France <b>{timeWord} NOT</b> at war.</p>
      )
    }
  } else {
    return (
      <p>That's not a valid year! Try typing a year above.</p>
    );
  }
}
