import React from 'react';

interface iWarMessage {
  warMessage: JSX.Element;
}

const WarMessage: React.FC<iWarMessage> = ({ warMessage }) => {
  return (
    <div id="war-message">
      {warMessage}
    </div>
  );
}

export default WarMessage;
