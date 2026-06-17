import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const navItems = [
  {
    label: 'Accueil',
    type: 'anchor',
    items: [
      { label: 'Mot de bienvenue de la DG', anchor: 'bienvenue' },
      { label: 'Contact & géolocalisation',  anchor: 'contact' },
      { label: 'Actualités',                 anchor: 'actualites' },
    ],
  },
  {
    label: 'La fondation',
    type: 'dropdown',
    items: [
      { label: 'Notre histoire',               to: '/historique' },
      { label: 'Nos actions',                  to: '/nos-actions' },
      { label: 'Notre responsabilité sociétale', to: '/rse' },
      { label: 'Actualités',                   to: '/actualites' },
      { label: 'Partenaires',                  to: '/partenaires' },
    ],
  },
  {
    label: 'Nos centres',
    type: 'dropdown',
    items: [
      {
        label: 'Nos spécificités',
        to: '/nos-specificites',
        items: [
          { label: 'Centre spécialisé des 2 Plateaux', to: '/centre-specialise' },
          { label: 'Les consultations',                to: '/consultations' },
          { label: "L'hôpital de jour",                to: '/hopital-de-jour' },
          { label: 'La mise en observation',           to: '/mise-en-observation' },
          { label: 'Nos équipes',                      to: '/equipes' },
        ],
      },
      { label: 'Nos valeurs',               to: '/nos-valeurs' },
      { label: 'Notre engagement qualité',  to: '/engagement-qualite' },
      {
        label: 'Vos droits',
        items: [
          { label: 'Chartes et règlement intérieur',     to: '/chartes-reglement' },
          { label: 'Personne de confiance',              to: '/personne-de-confiance' },
          { label: 'Sécurité des données personnelles',  to: '/securite-donnees' },
          { label: 'Système de vidéosurveillance',       to: '/videosurveillance' },
          { label: 'Accès au dossier médical',           to: '/dossier-medical' },
          { label: 'Satisfaction',                       to: '/satisfaction' },
        ],
      },
      { label: 'Nos Collaborateurs', to: '/nos-collaborateurs' },
    ],
  },
  // ── Sous-menus à venir (en attente de confirmation) ──
  // { label: 'Vos droits', type: 'dropdown', items: [
  //   { label: 'Chartes et règlement intérieur',        to: '/chartes-reglement' },
  //   { label: 'Chartes Usager',                        to: '/chartes-usager' },
  //   { label: 'Personne de confiance',                 to: '/personne-de-confiance' },
  //   { label: 'Sécurité des données personnelles',     to: '/securite-donnees' },
  //   { label: 'Système de vidéosurveillance',          to: '/videosurveillance' },
  //   { label: 'Accès à votre dossier médical',         to: '/dossier-medical' },
  //   { label: 'Plaintes et réclamations',              to: '/plaintes-reclamations' },
  //   { label: 'Satisfaction',                          to: '/satisfaction' },
  // ]},
  // { label: 'Ressources utils', type: 'link', to: '/espace-ressources' },
  { label: "S'informer",          type: 'link', to: '/faq' },
  { label: 'Recherche & Innovation', type: 'link', to: '/recherche-innovation' },
  { label: 'Nous rejoindre',      type: 'link', to: '/nous-rejoindre' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const closeNav = () => {
    setNavOpen(false);
    setActiveDropdown(null);
  };

  const scrollToAnchor = (anchor) => {
    closeNav();
    const doScroll = () => {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 400);
    } else {
      doScroll();
    }
  };

  return (
    <header className="site-header">
      <div className="container nav-row" ref={navRef}>
        <Link to="/" className="brand" onClick={closeNav}>
          <img src="/assets/logo/logo-feerima.png" alt="La Fée Rima" className="brand-logo" />
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
          {navItems.map((item, index) => {
            if (item.type === 'dropdown' || item.type === 'anchor') {
              const isOpen = activeDropdown === item.label;
              return (
                <div key={index} className="dropdown">
                  <button
                    type="button"
                    className={`nav-link ${isOpen ? 'active' : ''}`}
                    onClick={() => handleDropdownToggle(item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </button>
                  <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    {item.items.map((subItem, subIndex) => {
                      if (item.type === 'anchor') {
                        return (
                          <button
                            key={subIndex}
                            type="button"
                            className="dropdown-item"
                            onClick={() => scrollToAnchor(subItem.anchor)}
                          >
                            {subItem.label}
                          </button>
                        );
                      }
                      if (subItem.items) {
                        return (
                          <div key={subIndex} className="flyout-wrapper">
                            <Link
                              to={subItem.to || '#'}
                              className="dropdown-item has-flyout"
                              onClick={closeNav}
                            >
                              {subItem.label}
                              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="flyout-icon">
                                <path d="M10 17l5-5-5-5v10z" />
                              </svg>
                            </Link>
                            <div className="flyout-menu">
                              {subItem.items.map((fly, flyIndex) => (
                                <Link
                                  key={flyIndex}
                                  to={fly.to}
                                  className="dropdown-item"
                                  onClick={closeNav}
                                >
                                  {fly.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={subIndex}
                          to={subItem.to}
                          className="dropdown-item"
                          onClick={closeNav}
                        >
                          {subItem.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return (
                <Link key={index} to={item.to} className="nav-link" onClick={closeNav}>
                  {item.label}
                </Link>
              );
            }
          })}
        </nav>

        <div className="nav-actions">
          <button type="button" className="btn outline">Se connecter</button>
          <Link to="/preadmission" className="btn primary small" onClick={closeNav}>S'inscrire</Link>
          <Link to="/faire-un-don" className="btn-don" onClick={closeNav}>&#10084; Faire un don</Link>
        </div>

      </div>
    </header>
  );
}
