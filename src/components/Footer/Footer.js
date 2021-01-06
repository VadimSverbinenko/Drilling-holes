import React from 'react';
import './Footer.css';
import { Button } from '../Navbar/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Platus skyliu asortimentas
        </p>
        <p className='footer-subscription-text'>
            Esame jaunų žmonių komanda, kurie myli savo darbą. Stengiamės tobulėti kiekvieną dieną tam, kad atliktume savo darbą vis geriau.
            Esame puikiai vertinami bei turime daugybę gerų atsiliepimų apie aukštą mūsų paslaugų kokybę. Dėl Skylių gręžimo darbų kreipkitės į mus, atsakysime į visus jūsų klausimus, o netrukus jau galėsite džiaugtis naujais namais. Kreipkitės į mus jau šiandien!
        </p>

      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-contact-item'>
            <h2>Kontaktai</h2>
            <div>Kontaktas +3700000000</div>
            <div>Kontaktas +3700000000</div>
          </div>
          <div className='footer-contact-item'>
            <h2>El-paštas</h2>
            <div>jusugmailas@gmail.com</div>        
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class='fab fa-chrome' />
            &nbsp;Skylių Gręžimas
              
            </Link>
          </div>
          <small class='website-rights'>Skylių Gręžimas © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.google.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/linkedin.com/in/vadim-sverbinenko-8475b619b'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;