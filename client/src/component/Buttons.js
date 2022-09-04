import React from 'react';





function Buttons() {
  return (
    <div className='navBtnContainer'>
      <a href="/createad">
      <button className='navbutton' id='navlink'>Get Started!</button>
      </a>
      <a href="/profile">
      <button className='navbutton' id='navlink'>advocate</button>
      </a>
    </div>
  );
}

export default Buttons;
