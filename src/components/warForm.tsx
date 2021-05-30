import React from 'react';

interface iWarForm {
  onSubmit: (submittedYear: number) => void;
}

const WarForm: React.FC<iWarForm> = ({ onSubmit }) => {
  const [year, setYear] = React.useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("year", year);
    console.log("int year", parseInt(year));
    onSubmit(parseInt(year));
  }

  return (
    <form id="year-input" onSubmit={handleSubmit}>
      <input
        id="year"
        onChange={(e) => setYear(e.target.value)}
        autoFocus={true}
        placeholder="Type year here"
        type="number"
      />
      <br/><br/>
      <input type="submit" value="Were They At War?" />
    </form>
  );
}

export default WarForm;
