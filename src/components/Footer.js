import React from 'react';

const Footer = () => {
  return (
    <footer className='center'>
      <span>Come Hang out with us!</span>  
      <span>
        <div className="social">
          <a href="https://www.youtube.com/@yourboxofyarn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/yourboxofyarn/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://t.me/yourboxofyarn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram-plane" aria-hidden="true"></i>
          </a>
        </div>
      </span>
    </footer>
  )
}

export default Footer;
