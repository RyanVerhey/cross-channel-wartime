import React from 'react';

const Footer: React.FC = () => {
  const fullYear: number = new Date().getFullYear();

  return (
    <footer>
      <div id="ryan">
        <a href="https://ryanverhey.com">&copy;{fullYear} Ryan Verhey. All Rights Reserved.</a>
      </div>
      <div id="history">
        <a href="https://missedinhistory.com">Inspired by "Stuff You Missed in History Class"</a>
      </div>
    </footer>
  );
}

export default Footer;
