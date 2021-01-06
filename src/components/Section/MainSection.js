import React from 'react';
import '../../App.css';
import { Button } from '../Navbar/Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='hero-container'>
      <h1>Skyles Jum!</h1>
      <p>Lengva ir paprasta.</p>
      <div className='hero-btns'>
        <Button
          to='/sign-up'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Trumpai Apie Mus
        </Button>
      </div>
    </div>
  );
}

export default MainSection;