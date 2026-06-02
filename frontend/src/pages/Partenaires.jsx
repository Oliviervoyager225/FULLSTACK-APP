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
//         style={{ backgroundImage: "url('/assets/feerima/pat1.png')" }}
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
//           <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/confiance.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 2: Logos (Placeholder) */}
//         <section className="hist-section section-2">
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/conf.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           <div className="hist-content center-content">
//             <h2>NOS<br />COLLABORATIONS</h2>
//             <p>
//               [Logos cliquables renvoyant vers les sites partenaires - À intégrer]
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/collab.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 3: Soutiens */}
//         <section className="hist-section section-3">
//           <div className="hist-stacked-images">
//             <div className="hist-stacked-images">
//               <img
//                 src="/assets/feerima/soutient.png"
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


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NosPartenaires.css';

const partnersData = [
  {
    id: 1,
    name: "Programme National de Santé Mentale (PNSM)",
    logo: "/assets/feerima/pnsm.jpg", // Remplacez par le chemin réel de votre image
    description: "Le Programme National de Santé Mentale est l'organe du Ministère de la Santé en charge de l'élaboration, de la coordination et du suivi des politiques publiques en santé mentale en Côte d'Ivoire.",
    nature: "Partenariat institutionnel",
    badgeClass: "badge-institutionnel"
  },
  {
    id: 2,
    name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)",
    logo: "/assets/feerima/creps.jpg", // Remplacez par le chemin réel de votre image
    description: "Le Centre de Ressources et d'Enseignement Supérieur en Psychologie, situé en France, est une structure dédiée à la formation, à la recherche et au développement des compétences en psychologie et disciplines associées.",
    nature: "Partenariat académique et technique",
    badgeClass: "badge-academique"
  },
  {
    id: 3,
    name: "Fondation Eman",
    logo: "/assets/feerima/eman.png", // Remplacez par le chemin réel de votre image
    description: "Fondation engagée dans des actions sociales et solidaires, intervenant notamment dans le soutien aux populations vulnérables.",
    nature: "Partenariat solidaire",
    badgeClass: "badge-solidaire"
  }
];

const Partenaires = () => {
  return (
    <div className="nos-partners-page">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="page-hero partners-hero">
          <div className="hero-content">
            <h1>Nos Partenaires</h1>
            <p className="hero-subtitle">
              Ensemble, nous œuvrons pour une santé mentale accessible et un avenir meilleur pour les jeunes.
            </p>
          </div>
        </section>

        {/* <section
        className="hero-partners"
        style={{ backgroundImage: "url('/assets/feerima/pate.png')" }} */}
      {/* >  */}
        {/* <div className="page-hero-content">
          <h1>Nos partenaires</h1>
          <p>Ensemble, construisons un avenir meilleur pour la santé mentale des jeunes</p>
        </div> */}
      {/* </section> */}

        {/* Partners Grid Section */}
        <section className="section partners-section">
          <div className="container">
            <div className="section-header">
              <h2>Ils nous accompagnent</h2>
              <div className="divider"></div>
            </div>
            
            <div className="partners-grid">
              {partnersData.map((partner) => (
                <article key={partner.id} className="partner-card">
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={`Logo ${partner.name}`} 
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <span className={`partner-badge ${partner.badgeClass}`}>
                    {partner.nature}
                  </span>
                  <p className="partner-description">{partner.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partenaires;