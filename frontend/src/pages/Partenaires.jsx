// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function Partenaires() {
//   return (
//     <div className="historique-page">
//       <Navbar />

//       {/* Hero Banner */}
//       <section
//         className="hero-partners"
//         style={{ backgroundImage: "url('/assets/feerima/images/pat1.png')" }}
//       > 
//         {/* <div className="page-hero-content">
//           <h1>Nos partenaires</h1>
//           <p>Ensemble, construisons un avenir meilleur pour la santé mentale des jeunes</p>
//         </div> */}
//       </section>

//       <main className="historique-main">
//         {/* Section 1: Intro */}
//         <section className="hist-section section-1">
//           <div className="hist-content">
//             <h1>ILS NOUS FONT<br />CONFIANCE</h1>
//             <p>
//               La Fée Rima collabore avec de nombreuses organisations pour mener à bien sa mission. Nous sommes fiers de travailler avec des fondations, des associations, des ONG, des institutions publiques et des universités qui partagent notre engagement pour le bien-être psychologique des jeunes.
//             </p>
//             <p>
//               Découvrez les acteurs engagés à nos côtés pour faire avancer la santé mentale en Côte d'Ivoire.
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/images/confiance.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 2: Logos (Placeholder) */}
//         <section className="hist-section section-2">
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/images/conf.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           <div className="hist-content center-content">
//             <h2>NOS<br />COLLABORATIONS</h2>
//             <p>
//               [Logos cliquables renvoyant vers les sites partenaires - À intégrer]
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/images/collab.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 3: Soutiens */}
//         <section className="hist-section section-3">
//           <div className="hist-stacked-images">
//             <div className="hist-stacked-images">
//               <img
//                 src="/assets/feerima/images/soutient.png"
//                 alt="Ma mission"
//                 className="hist-image"
//               />
//             </div>          </div>
//           <div className="hist-content">
//             <h2>MESSAGES DE<br />SOUTIEN</h2>
//             <p className="emphasis-text">
//               "Nous soutenons pleinement l'initiative de La Fée Rima. Leur approche est essentielle pour répondre aux besoins grandissants des jeunes." - [Partenaire Stratégique]
//             </p>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// ancien code
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NosPartenaires.css';

const partnersSections = [
  {
    id: 'institutionnel',
    title: 'Partenariat institutionnel',
    partners: [
      { id: 1,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/pnsm.jpg",   url: null },
      { id: 2,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/sante.png",   url: null },
      { id: 3,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/health.png",   url: null },
      { id: 4,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/ministere.png",   url: "https://www.sante.gouv.ci/accueil" },
      { id: 5,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/sant.png",   url: null },
      { id: 6,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/pnsm.jpg",   url: null },
      { id: 7,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/unicef.png",   url: "https://help.unicef.org/wcaro/fr/wcar" },
      { id: 8,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/sante.png",   url: null },
      { id: 9,  name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/pnsm.jpg",   url: null },
      { id: 10, name: "Programme National de Santé Mentale (PNSM)",                        logo: "/assets/feerima/images/OIP.png",   url: null },
    ],
  },
  {
    id: 'academique',
    title: 'Partenariat académique et technique',
    partners: [
      { id: 11, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: "https://cresp-formations.fr/" },
      { id: 12, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 13, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 14, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 15, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 16, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 17, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 18, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 19, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
      { id: 20, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: "/assets/feerima/images/cresp.png", url: null },
    ],
  },
  {
    id: 'solidaire',
    title: 'Partenariat solidaire',
    partners: [
      { id: 21, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 22, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 23, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 24, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 25, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 26, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 27, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 28, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 29, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
      { id: 30, name: "Fondation Eman", logo: "/assets/feerima/images/emane.png", url: null },
    ],
  },
];

const Partenaires = () => {
  return (
    <div className="nos-partners-page">
      <Navbar />

      <div
        className="partners-banner"
        style={{
          backgroundImage: 'url("/assets/feerima/images/parte.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="banner-overlay">
          <div className="container">
            <h2>Nos partenaires</h2>
            <p>Des collaborations solides pour un impact durable</p>
          </div>
        </div>
      </div>

      <main id="main-wrapper" className="partners-main">
        <div className="partners-page-header">
          <div className="container">
            <h1>Nos partenaires</h1>
            <p className="partners-intro">
              La force de FEERIMA réside dans le travail que nous faisons avec nos nombreux partenaires.
              Nous remercions sincèrement les organismes et entreprises participants qui rendent notre travail possible.
            </p>
            <hr className="partners-divider" />
          </div>
        </div>

        {partnersSections.map((section) => (
          <section key={section.id} className="partners-section">
            <div className="container">
              <h2 className="section-title">{section.title}</h2>
              <div className="partners-logos-grid">
                {section.partners.map((partner) => (
                  <div key={partner.id} className="partner-logo-wrapper">
                    {partner.url ? (
                      <a
                        href={partner.url}
                        className="partner-logo-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={partner.name}
                      >
                        <img src={partner.logo} alt={partner.name} className="partner-logo-img" loading="lazy" />
                      </a>
                    ) : (
                      <img src={partner.logo} alt={partner.name} className="partner-logo-img" loading="lazy" title={partner.name} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Partenaires;

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/NosPartenaires.css';

// const partnersSections = [
//   {
//     id: 'institutionnel',
//     title: 'Partenaires institutionnels',
//     partners: [
//       {
//         id: 1,
//         name: "Programme National de Santé Mentale (PNSM)",
//         logo: "/assets/feerima/images/pnsm.jpg",
//         url: null,
//       },
      
//       {
//         id: 2,
//         name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)",
//         logo: "/assets/feerima/images/cresp.png",
//         url: null,
//       },
//       {
//         id: 3,
//         name: "Fondation Eman",
//         logo: "/assets/feerima/images/emane.png",
//         url: null,
//       },
//       {
//         id: 4,
//         name: "Fondation Eman",
//         logo: "/assets/feerima/images/emane.png",
//         url: null,
//       },
//       {
//         id: 5,
//         name: "Fondation Eman",
//         logo: "/assets/feerima/images/emane.png",
//         url: null,
//       },
//       {
//         id: 6,
//         name: "Programme National de Santé Mentale (PNSM)",
//         logo: "/assets/feerima/images/pnsm.jpg",
//         url: null,
//       },
//       {
//         id: 7,
//         name: "Programme National de Santé Mentale (PNSM)",
//         logo: "/assets/feerima/images/pnsm.jpg",
//         url: null,
//       },
//       {
//         id: 8,
//         name: "Programme National de Santé Mentale (PNSM)",
//         logo: "/assets/feerima/images/pnsm.jpg",
//         url: null,
//       },
//       {
//         id: 9,
//         name: "Programme National de Santé Mentale (PNSM)",
//         logo: "/assets/feerima/images/pnsm.jpg",
//         url: null,
//       },
//       {
//         id: 10,
//         name: "Programme National de Santé Mentale (PNSM)",
//         logo: "/assets/feerima/images/pnsm.jpg",
//         url: null,
//       },
//     ],
//   },
// ];

// const Partenaires = () => {
//   return (
//     <div className="nos-partners-page">
//       <Navbar />

//  {/* Bannière avec image */}
//       <div className="partners-banner" style={{
//         backgroundImage: 'url("/assets/feerima/images/banner-partners.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="banner-overlay">
//           <div className="container">
//             <h2>Nos partenaires</h2>
//             <p>Des collaborations solides pour un impact durable</p>
//           </div>
//         </div>
//       </div>

//       <main id="main-wrapper" className="partners-main">
//         {/* En-tête de page */}
//         <div className="partners-page-header">
//           <div className="container">
//             <h1>Nos partenaires</h1>
//             <p className="partners-intro">
//               La force de FEERIMA réside dans le travail que nous faisons avec nos nombreux partenaires.
//               Nous remercions sincèrement les organismes et entreprises participants qui rendent notre travail possible.
//             </p>
//             <hr className="partners-divider" />
//           </div>
//         </div>

//         {/* Sections de partenaires */}
//         {partnersSections.map((section) => (
//           <section key={section.id} className="partners-section">
//             <div className="container">
//               <h2 className="section-title">{section.title}</h2>
//               <div className="partners-logos-grid">
//                 {section.partners.map((partner) => (
//                   <div key={partner.id} className="partner-logo-wrapper">
//                     {partner.url ? (
//                       <a
//                         href={partner.url}
//                         className="partner-logo-link"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         title={partner.name}
//                       >
//                         <img
//                           src={partner.logo}
//                           alt={partner.name}
//                           className="partner-logo-img"
//                           loading="lazy"
//                         />
//                       </a>
//                     ) : (
//                       <img
//                         src={partner.logo}
//                         alt={partner.name}
//                         className="partner-logo-img"
//                         loading="lazy"
//                         title={partner.name}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         ))}
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Partenaires;

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/NosPartenaires.css';

// const partnersData = [
//   {
//     id: 1,
//     name: "Programme National de Santé Mentale (PNSM)",
//     logo: "/assets/feerima/images/pnsm.jpg", // Remplacez par le chemin réel de votre image
//     description: "Le Programme National de Santé Mentale est l'organe du Ministère de la Santé en charge de l'élaboration, de la coordination et du suivi des politiques publiques en santé mentale en Côte d'Ivoire.",
//     nature: "Partenariat institutionnel",
//     badgeClass: "badge-institutionnel"
//   },
//   {
//     id: 2,
//     name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)",
//     logo: "/assets/feerima/images/cresp.png", // Remplacez par le chemin réel de votre image
//     description: "Le Centre de Ressources et d'Enseignement Supérieur en Psychologie, situé en France, est une structure dédiée à la formation, à la recherche et au développement des compétences en psychologie et disciplines associées.",
//     nature: "Partenariat académique et technique",
//     badgeClass: "badge-academique"
//   },
//   {
//     id: 3,
//     name: "Fondation Eman",
//     logo: "/assets/feerima/images/eman.png", // Remplacez par le chemin réel de votre image
//     description: "Fondation engagée dans des actions sociales et solidaires, intervenant notamment dans le soutien aux populations vulnérables.",
//     nature: "Partenariat solidaire",
//     badgeClass: "badge-solidaire"
//   }
// ];

// const Partenaires = () => {
//   return (
//     <div className="nos-partners-page">
//       <Navbar />
//       <main>
//         {/* Hero Section */}
//         <section className="page-hero partners-hero">
//           <div className="hero-content">
//             <h1>Nos Partenaires</h1>
//             <p className="hero-subtitle">
//               Ensemble, nous œuvrons pour une santé mentale accessible et un avenir meilleur pour les jeunes.
//             </p>
//           </div>
//         </section>

//         {/* <section
//         className="hero-partners"
//         style={{ backgroundImage: "url('/assets/feerima/images/pate.png')" }} */}
//       {/* >  */}
//         {/* <div className="page-hero-content">
//           <h1>Nos partenaires</h1>
//           <p>Ensemble, construisons un avenir meilleur pour la santé mentale des jeunes</p>
//         </div> */}
//       {/* </section> */}

//         {/* Partners Grid Section */}
//         <section className="section partners-section">
//           <div className="container">
//             <div className="section-header">
//               <h2>Ils nous accompagnent</h2>
//               <div className="divider"></div>
//             </div>
            
//             <div className="partners-grid">
//               {partnersData.map((partner) => (
//                 <article key={partner.id} className="partner-card">
//                   <div className="partner-logo-wrapper">
//                     <img 
//                       src={partner.logo} 
//                       alt={`Logo ${partner.name}`} 
//                       className="partner-logo"
//                       loading="lazy"
//                     />
//                   </div>
//                   <h3 className="partner-name">{partner.name}</h3>
//                   <span className={`partner-badge ${partner.badgeClass}`}>
//                     {partner.nature}
//                   </span>
//                   <p className="partner-description">{partner.description}</p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Partenaires;