import React from 'react';
import Button from '../../components/button/button.jsx';
import './accountPage.styl';

export default () => {
  return (
    <div className="container recurrent-expanses">
      <div></div>
      <span>Recurrent Expanses</span>
      <Button icon="/icons/plus.svg" isCircle={true}/>
    </div>
  );
};
