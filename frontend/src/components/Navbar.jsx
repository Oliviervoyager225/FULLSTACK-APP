// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Navbar.css';

// const navItems = [
//   {
//     label: 'La fondation',
//     type: 'dropdown',
//     items: [
//       { label: 'Notre histoire', to: '/historique' },
//       { label: 'Nos actions', to: '/nos-actions' },
//       { label: 'Notre responsabilité sociétale', to: '/rse' },
//       { label: 'Nos actualités', to: '/actualites' },
//       { label: 'Nos partenaires', to: '/partenaires' },
//     ],
//   },
//   {
//     label: "Nos centres",
//     type: 'dropdown-columns',
//     columns: [
//       {
//         title: 'Nos spécificités',
//         items: [
//           { label: 'Nos spécificités', to: '/nos-specificites' },
//         ],
//       },
//       {
//         title: 'Centre spécialisé des 2 Plateaux',
//         items: [
//           { label: 'Les consultations', to: '/consultations' },
//           { label: "L'hôpital de jour", to: '/hopital-de-jour' },
//           { label: 'La mise en observation', to: '/mise-observation' },
//           { label: 'Nos équipes', to: '/equipes' },
//         ],
//       },
//       {
//         title: 'Valeurs et engagements',
//         items: [
//           { label: 'Nos valeurs', to: '/nos-valeurs' },
//           { label: 'Notre engagement qualité', to: '/engagement-qualite' },

//           // { label: 'S\'informer', to: '/faq' },
//           // { label: 'Ressources utiles', to: '/espace-ressources' },
//           // { label: 'Recherche & Innovation', to: '/recherche-innovation' },
//         ],
//       },
//       {
//         title: 'Vos droits',
//         items: [
//           { label: 'Chartes et règlement intérieur', to: '/chartes-reglement' },
//           { label: 'Personne de confiance', to: '/personne-de-confiance' },
//           { label: 'Sécurité des données personnelles', to: '/securite-donnees' },
//           { label: 'Système de vidéosurveillance', to: '/videosurveillance' },
//           { label: 'Accès au dossier médical', to: '/dossier-medical' },
//           { label: 'Satisfaction', to: '/satisfaction' },
//         ],
//       },
//       {
//         title: 'Nos Collaborateurs',
//         items: [
//           { label: 'Nos Collaborateurs', to: '/nos-collaborateurs' },
//         ],
//       },
//     ],
//   },
//   {
//     label: "S'informer",
//     type: 'dropdown',
//     items: [
//       { label: 'Questions fréquentes', to: '/faq' },
//       { label: 'Ressources utiles', to: '/espace-ressources' },
//     ],
//   },

//   { label: 'Recherche & Innovation', type: 'link', to: '/recherche-innovation' },
//   {
//     label: 'Nous rejoindre',
//     type: 'dropdown',
//     items: [
//       { label: 'Pourquoi nous rejoindre ?', to: '/nous-rejoindre' },
//       { label: 'Offres d\'emploi', to: '/offres-emploi' },
//       { label: 'Devenir partenaire', to: '/devenir-partenaire' },
//       { label: 'Devenir bénévole', to: '/devenir-benevole' },
//     ],
//   },

// ];

// export default function Navbar() {
//   const navigate = useNavigate();
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [navOpen, setNavOpen] = useState(false);

//   const handleDropdownToggle = (label) => {
//     setActiveDropdown((prev) => (prev === label ? null : label));
//   };

//   const handleDropdownBlur = (event) => {
//     // Si le nouveau focus est en dehors du dropdown actuel, on ferme
//     if (!event.currentTarget.contains(event.relatedTarget)) {
//       setActiveDropdown(null);
//     }
//   };

//   const closeNav = () => {
//     setNavOpen(false);
//     setActiveDropdown(null);
//   };

//   return (
//     <header className="site-header">
//       <div className="container nav-row">
//         <Link to="/" className="brand" onClick={closeNav}>
//           <img src="/assets/feerima/log1.png" alt="La Fée Rima" className="brand-logo" />
//         </Link>

//         <button
//           type="button"
//           className="nav-toggle"
//           onClick={() => setNavOpen((open) => !open)}
//           aria-expanded={navOpen}
//           aria-controls="primary-nav"
//         >
//           Menu
//         </button>

//         <nav id="primary-nav" className={`nav-links ${navOpen ? 'open' : ''}`}>
//           {navItems.map((item, index) => {
//             if (item.type === 'dropdown') {
//               const isOpen = activeDropdown === item.label;
//               return (
//                 <div
//                   key={index}
//                   className="dropdown"
//                   onBlur={handleDropdownBlur}
//                 >
//                   <button
//                     type="button"
//                     className={`nav-link ${isOpen ? 'active' : ''}`}
//                     onClick={() => handleDropdownToggle(item.label)}
//                     aria-expanded={isOpen}
//                     aria-haspopup="true"
//                   >
//                     {item.label}
//                     <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//                       <path d="M7 10l5 5 5-5z" />
//                     </svg>
//                   </button>
//                   <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
//                     {item.items.map((subItem, subIndex) => (
//                       <Link
//                         key={subIndex}
//                         to={subItem.to}
//                         className="dropdown-item"
//                         onClick={closeNav}
//                       >
//                         {subItem.label}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               );
//             } else if (item.type === 'dropdown-columns') {
//               const isOpen = activeDropdown === item.label;
//               return (
//                 <div
//                   key={index}
//                   className="dropdown dropdown-columns"
//                   onBlur={handleDropdownBlur}
//                 >
//                   <button
//                     type="button"
//                     className={`nav-link ${isOpen ? 'active' : ''}`}
//                     onClick={() => handleDropdownToggle(item.label)}
//                     aria-expanded={isOpen}
//                     aria-haspopup="true"
//                   >
//                     {item.label}
//                     <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//                       <path d="M7 10l5 5 5-5z" />
//                     </svg>
//                   </button>
//                   <div className={`dropdown-menu dropdown-menu-columns ${isOpen ? 'show' : ''}`}>
//                     {item.columns.map((column, colIndex) => (
//                       <div key={colIndex} className="dropdown-column">
//                         <div className="dropdown-column-title">{column.title}</div>
//                         <div className="dropdown-column-items">
//                           {column.items.map((subItem, subIndex) => (
//                             <Link
//                               key={subIndex}
//                               to={subItem.to}
//                               className="dropdown-item"
//                               onClick={closeNav}
//                             >
//                               {subItem.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             } else {
//               return (
//                 <Link
//                   key={index}
//                   to={item.to}
//                   className="nav-link"
//                   onClick={closeNav}
//                 >
//                   {item.label}
//                 </Link>
//               );
//             }
//           })}
//         </nav>

//         <div className="nav-actions">
//           <Link to="/faire-un-don" className="btn accent">Faire un don</Link>
//           <button type="button" className="btn outline">Se connecter</button>
//           <Link to="/preadmission" className="btn primary small" onClick={closeNav}>S'inscrire</Link>
//         </div>

//       </div>
//     </header>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

/* ──────────────────────────────────────────────────────────────
   scrollToSection
   Navigue vers /nous-rejoindre puis scrolle vers l'ancre.
   - Si on est déjà sur /nous-rejoindre → scroll direct (smooth)
   - Sinon → navigate vers la route avec le hash ; le useEffect
     dans NousRejoindre.jsx se charge du scroll au montage.
────────────────────────────────────────────────────────────── */
function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();

  return (targetPath, sectionId) => {
    if (location.pathname === targetPath) {
      // Déjà sur la page → scroll immédiat
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Autre page → navigation + ancre (la page cible gère le scroll via useEffect)
      navigate(`${targetPath}#${sectionId}`);
    }
  };
}

const navItems = [
  { label: 'Accueil', type: 'link', to: '/' },

  {
    label: 'La fondation',
    type: 'dropdown',
    to: '/la-fondation', // ← clic sur le label navigue vers la page
    // ↓ "anchor" = id de la section cible dans LaFondation.jsx
    items: [
      { label: 'Notre histoire', anchor: 'historique' },
      { label: 'Nos actions', anchor: 'nos-actions' },
      { label: 'Notre responsabilité sociétale', anchor: 'rse' },
      { label: 'Nos actualités', anchor: 'actualites' },
      { label: 'Nos partenaires', anchor: 'partenaires' },
    ],
  },
  {
    label: "Nos centres",
    type: 'dropdown-columns',
    columns: [
      {
        title: 'Nos spécificités',
        items: [
          { label: 'Nos spécificités', to: '/nos-specificites' },
        ],
      },
      {
        title: 'Centre spécialisé des 2 Plateaux',
        items: [
          { label: 'Les consultations', to: '/consultations' },
          { label: "L'hôpital de jour", to: '/hopital-de-jour' },
          { label: 'La mise en observation', to: '/mise-observation' },
          { label: 'Nos équipes', to: '/equipes' },
        ],
      },
      {
        title: 'Valeurs et engagements',
        items: [
          { label: 'Nos valeurs', to: '/nos-valeurs' },
          { label: 'Notre engagement qualité', to: '/engagement-qualite' },
        ],
      },
      {
        title: 'Vos droits',
        items: [
          { label: 'Chartes et règlement intérieur', to: '/chartes-reglement' },
          { label: 'Personne de confiance', to: '/personne-de-confiance' },
          { label: 'Sécurité des données personnelles', to: '/securite-donnees' },
          { label: 'Système de vidéosurveillance', to: '/videosurveillance' },
          { label: 'Accès au dossier médical', to: '/dossier-medical' },
          { label: 'Satisfaction', to: '/satisfaction' },
        ],
      },
      {
        title: 'Nos Collaborateurs',
        items: [
          { label: 'Nos Collaborateurs', to: '/nos-collaborateurs' },
        ],
      },
    ],
  },
  {
    label: "S'informer",
    type: 'dropdown',
    to: '/s-informer', // ← clic sur le label navigue vers la page
    // ↓ "anchor" = id de la section cible dans SInformer.jsx
    items: [
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Ressources utiles', anchor: 'ressources' },
    ],
  },

  { label: 'Recherche & Innovation', type: 'link', to: '/recherche-innovation' },

  {
    label: 'Nous rejoindre',
    type: 'dropdown',
    to: '/nous-rejoindre', // ← clic sur le label navigue vers la page
    // ↓ "anchor" = id de la section cible dans NousRejoindre.jsx
    items: [
      { label: 'Pourquoi nous rejoindre ?', anchor: 'pourquoi-nous-rejoindre' },
      { label: "Offres d'emploi", anchor: 'offres-emploi' },
      { label: 'Devenir partenaire', anchor: 'devenir-partenaire' },
      { label: 'Devenir bénévole', anchor: 'devenir-benevole' },
    ],
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const scrollToSection = useScrollToSection();

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

  // Gestion du clic sur un item ancre (one-page)
  const handleAnchorClick = (targetPath, anchor) => {
    closeNav();
    scrollToSection(targetPath, anchor);
  };

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link to="/" className="brand" onClick={closeNav}>
          <img src="/assets/feerima/log1.png" alt="La Fée Rima" className="brand-logo" />
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
            if (item.type === 'dropdown') {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={index}
                  className="dropdown"
                  onBlur={handleDropdownBlur}
                >
                  {/* ── Label = lien direct si item.to existe, sinon bouton toggle ── */}
                  {item.to ? (
                    <div className={`nav-link nav-link-split ${isOpen ? 'active' : ''}`}>
                      <Link
                        to={item.to}
                        className="nav-link-label"
                        onClick={closeNav}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="nav-link-chevron"
                        onClick={() => handleDropdownToggle(item.label)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        <svg className="dropdown-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </button>
                    </div>
                  ) : (
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
                  )}
                  <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    {item.items.map((subItem, subIndex) =>
                      // ── Item ancre (one-page) ──
                      subItem.anchor ? (
                        <button
                          key={subIndex}
                          type="button"
                          className="dropdown-item"
                          onClick={() => handleAnchorClick(item.to, subItem.anchor)}
                        >
                          {subItem.label}
                        </button>
                      ) : (
                        // ── Item lien classique ──
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
            } else if (item.type === 'dropdown-columns') {
              const isOpen = activeDropdown === item.label;
              return (
                <div
                  key={index}
                  className="dropdown dropdown-columns"
                  onBlur={handleDropdownBlur}
                >
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
                  <div className={`dropdown-menu dropdown-menu-columns ${isOpen ? 'show' : ''}`}>
                    {item.columns.map((column, colIndex) => (
                      <div key={colIndex} className="dropdown-column">
                        <div className="dropdown-column-title">{column.title}</div>
                        <div className="dropdown-column-items">
                          {column.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.to}
                              className="dropdown-item"
                              onClick={closeNav}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={index}
                  to={item.to}
                  className="nav-link"
                  onClick={closeNav}
                >
                  {item.label}
                </Link>
              );
            }
          })}
        </nav>

        <div className="nav-actions">
          <Link to="/faire-un-don" className="btn primary">Faire un don</Link>
          <button type="button" className="btn outline">Se connecter</button>
          <Link to="/preadmission" className="btn primary small" onClick={closeNav}>S'inscrire</Link>
        </div>

      </div>
    </header>
  );
}