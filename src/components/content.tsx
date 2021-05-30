import React from 'react';
import Header from './header';
import WarForm from './warForm';
import WarMessage from './warMessage';
import generateWarMessage from '../hooks/generateWarMessage';

const Content: React.FC = () => {
  const [warMessage, setWarMessage] = React.useState<JSX.Element>(<p />)

  const handleFormSubmit = (submittedYear: number): void => {
    setWarMessage(generateWarMessage(submittedYear));
  }

  return (
    <div id="content">
      <Header />
      <br/><br/>
      <WarForm onSubmit={handleFormSubmit} />
      <br/>
      <WarMessage warMessage={warMessage} />
    </div>
  );
}

export default Content;
