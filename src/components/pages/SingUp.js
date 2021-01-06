import React from 'react';
import '../../App.css';
import transperent from '../../img/images/transperent.png';


function SignUp() {
  return(
    <div className='sign-up'>
      <div>
      <img className='contacts-img2' src={transperent} alt="Logo" />
      </div>
      <div className='sizing'>
      <ul>
        <li>Kontaktai +370000000</li>
        <li>Kontaktai +370000000</li>
        <li><p>El. paštas: kaskoksemailas@gmail.com</p></li>
        <li><p>FB: https://www.facebook.com/skylesskyles</p></li>
        
      </ul>
      </div>




    </div>
  ) 
}



export default SignUp