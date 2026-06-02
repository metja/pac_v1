import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <span className='logo-icon'>🧮</span>
        <span className='logo-text'>GraniteCalc</span>
      </div>
      <div className='header-action'>
        <button className='header-btn'>💾 Зберегти</button>
        <button className='header-btn'>📂 Завантажити</button>
      </div>
    </header>
  )
}

export default Header;