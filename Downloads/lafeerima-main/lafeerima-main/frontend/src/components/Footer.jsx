// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/FooterSection.css';


// export default function Footer() {
//   return (
//     <section className="footer-section">
//       <div className="container footer-grid">
//         {/* Right Column - Navigation Links */}
//         <div className="footer-right">
//           <h3>Le centre spécialisé La Fée Rima</h3>
//           <ul className="footer-nav">
//             <li><Link to="/">Accueil</Link></li>
//             <li><Link to="/centre">Le centre spécialisé</Link></li>
//             <li><Link to="/offre">L'offre de soins</Link></li>
//             <li><Link to="/droits">Vos droits</Link></li>
//             <li><Link to="/faq">FAQ</Link></li>
//             <li><Link to="/ressources">Ressources</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Row - Logo + Social Icons */}
//       <div className="container footer-bottom">
//         <div className="footer-logos">
//           <div className="footer-logo">
//             <img src="/assets/feerima/logo.png" alt="La Fée Rima Logo" />
//           </div>
//           <div className="footer-social">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" width="48" height="48">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//               </svg>
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" width="48" height="48">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterSection.css';

export default function Footer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    '/assets/feerima/centre1.png',
    '/assets/feerima/centre 2.png',
    '/assets/feerima/centre 3.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-grid">
            {/* Left Column - Image Carousel */}
            <div className="footer-left">
              <h3>Découvrez notre centre</h3>
              <div className="center-carousel">
                {carouselImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Centre La Fée Rima ${index + 1}`}
                    className={`center-carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
                <div className="carousel-dots">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column - Description */}
            <div className="footer-center">
              <div className="footer-description">
                <p>
                  Le centre spécialisé La Fée Rima vous accueille dans un cadre apaisant 
                  et bienveillant. Notre équipe pluridisciplinaire est dédiée à votre 
                  bien-être et à votre épanouissement personnel.
                </p>
              </div>
              <div className="footer-contact">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#00a9bc"/>
                    <circle cx="12" cy="9" r="3" fill="white"/>
                  </svg>
                  <span>123 Rue de la Santé, 75001 Paris</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="#00a9bc"/>
                    <path d="M22 6L12 13 2 6" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                  <span>contact@feerima.fr</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-.9.3l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" fill="#00a9bc"/>
                  </svg>
                  <span>01 23 45 67 89</span>
                </div>
              </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="footer-right">
              <h3>Navigation</h3>
              <ul className="footer-nav">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/centre">Le centre spécialisé</Link></li>
                <li><Link to="/offre">L'offre de soins</Link></li>
                <li><Link to="/droits">Vos droits</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/ressources">Ressources</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Logo + Social + Copyright */}
        <div className="footer-bottom">
          <div className="footer-logos">
            <div className="footer-logo">
              <img src="/assets/feerima/logo.png" alt="La Fée Rima Logo" />
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© 2024 La Fée Rima - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}