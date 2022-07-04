import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({ toggleForm, showForm, toggleLogIn, showLogIn }) => {
 
  const className = ()=> `button btn m-1 ${showLogIn ? 'btn-success' : 'btn-danger'}`;
   
  return (
    <div className='card'> 
      <img className='img-fluid' src='climb.jpg'></img>
      <div className="button-wrapper"> 
      {!showLogIn  ? <div className='button btn m-1 btn-info'>
         Witaj Michał
        </div> : null}
      <Link to={`./createnew`} className='button btn m-1 btn-warning'>
              Dodaj wspinaczkę
            </Link> 
        <Link 
           to={`./login`} 
          onClick={toggleLogIn}
          className={className()}
        >
          {showLogIn ? 'Zaloguj się' : 'Wyloguj się'}
        </Link>
      </div>
    </div>
  );
};

export default Header;
