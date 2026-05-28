import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const dropdownItems = [
  'Historique',
  'Les professionnels',
  'Nos valeurs',
  'Notre engagement qualite',
  'RSE',
  'Actualites',
  'Partenaires',
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setDropdownOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand">
          <img src="/assets/feerima/logo.png" alt="FeeRima" className="brand-logo" />
          <span className="brand-name">FeeRima</span>
          <span className="brand-sub">Centre specialise</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setNavOpen((open) => !open)}
          aria-expanded={navOpen}
          aria-controls="primary-nav"
        >
          Menu
        </button>

        <nav id="primary-nav" className={`nav-links ${navOpen ? 'open' : ''}`}>
          <div
            className="dropdown"
            onBlur={handleDropdownBlur}
          >
            <button
              type="button"
              className="nav-link"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Le centre specialise
              <span className="caret" aria-hidden="true">v</span>
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {dropdownItems.map((item) => (
                <a key={item} href="#" className="dropdown-item">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <a href="#" className="nav-link">L offre de soins</a>
          <a href="#" className="nav-link">Vos droits</a>
          <a href="#" className="nav-link">FAQ</a>
          <a href="#" className="nav-link">Ressources</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn outline">Se connecter</button>
          <Link to="/preadmission" className="btn primary small">S inscrire</Link>
        </div>
      </div>
    </header>
  );
}
