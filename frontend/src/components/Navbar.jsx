import React, { useState } from 'react';
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
      { label: 'Nos spécificités',                  to: '/nos-specificites' },
      { label: 'Centre spécialisé des 2 plateaux',  to: '/centre-specialise' },
      { label: 'Les consultations',                 to: '/consultations' },
      { label: "L'hôpital de jour",                 to: '/hopital-de-jour' },
      { label: "Le service d'accueil d'urgence",    to: '/service-accueil-urgence' },
      { label: 'Tarifications',                     to: '/tarifications' },
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

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveDropdown(null);
    }
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
      <div className="container nav-row">
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
                <div key={index} className="dropdown" onBlur={handleDropdownBlur}>
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
                    {item.items.map((subItem, subIndex) =>
                      item.type === 'anchor' ? (
                        <button
                          key={subIndex}
                          type="button"
                          className="dropdown-item"
                          onClick={() => scrollToAnchor(subItem.anchor)}
                        >
                          {subItem.label}
                        </button>
                      ) : (
                        <Link
                          key={subIndex}
                          to={subItem.to}
                          className="dropdown-item"
                          onClick={closeNav}
                        >
                          {subItem.label}
                        </Link>
                      )
                    )}
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
          <button type="button" className="btn-don">&#10084; Faire un don</button>
        </div>

      </div>
    </header>
  );
}
