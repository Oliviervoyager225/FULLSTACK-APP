import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">*</span>
            <div>
              <p className="brand-name">FeeRima</p>
              <p className="brand-sub">Centre specialise</p>
            </div>
          </div>
          <div className="socials">
            <span className="social">f</span>
            <span className="social">in</span>
            <span className="social">t</span>
          </div>
        </div>
        <div>
          <h4>Le centre specialise Fee Rima</h4>
          <ul>
            <li>Accueil</li>
            <li>Le centre specialise</li>
            <li>L offre de soins</li>
            <li>Vos droits</li>
            <li>FAQ</li>
            <li>Ressources</li>
          </ul>
        </div>
        <div>
          <h4>Contacts</h4>
          <p>Angre - Commissariat du 12eme arr. ABIDJAN</p>
          <p>0700000000</p>
          <p>lafeerima@lafeerima.com</p>
        </div>
      </div>
    </footer>
  );
}
