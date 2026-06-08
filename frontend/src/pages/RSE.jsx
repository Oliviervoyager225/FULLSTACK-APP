// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function RSE() {
//   return (
//     <div className="historique-page">
//       <Navbar />

//       {/* Hero Banner */}
//       <section
//         className="page-hero"
//         style={{ backgroundImage: "url('/assets/feerima/rse1.png')" }}
//       >
//         <div className="page-hero-content">
//           <h1>Notre politique RSE</h1>
//           <p>Le bien-être psychologique des jeunes, placé au cœur de notre responsabilité sociétale</p>
//         </div>
//       </section>

//       <main className="historique-main">
//         {/* Section 1: Intro */}
//         <section className="hist-section section-1">
//           <div className="hist-content">
//             <h1>NOTRE POLITIQUE<br />RSE</h1>
//             <p>
//               La Fondation la Fée Rima, dédiée au bien-être psychologique des jeunes, place la responsabilité sociétale au cœur de ses actions. Notre engagement RSE reflète notre volonté d’avoir un impact positif sur nos bénéficiaires, nos collaborateurs, la communauté et l’environnement.
//             </p>
//             <p>
//               <strong>Bien-être et accompagnement des jeunes</strong><br />
//               Nous offrons un accueil respectueux, bienveillant et accessible à tous les jeunes de 10 à 25 ans. Chaque projet de soins est personnalisé, dans le respect de la dignité et de la confidentialité.
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/politique.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 2: Actions & Conditions */}
//         <section className="hist-section section-2">
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/ethique.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           <div className="hist-content center-content">
//             <h2>ÉTHIQUE ET<br />GOUVERNANCE</h2>
//             <p>
//               Nos actions reposent sur la transparence, l’intégrité et l’écoute. Nous associons bénéficiaires, familles, partenaires et intervenants extérieurs pour des prestations de qualité.
//             </p>
//             <p><strong>Conditions de travail</strong><br />
//               Parce que prendre soin des adolescents et des jeunes, c’est aussi s’occuper de ceux qui les accompagnent. Nous favorisons donc la formation continue, l’esprit d’équipe et le bien-être au travail.
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/eth_gouv.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 3: Environnement */}
//         <section className="hist-section section-3">
//           <div className="hist-stacked-images">
//             {/* <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/hero.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}></div> */}

//             <div className="hist-stacked-images">
//             <img
//               src="/assets/feerima/environnement.png"
//               alt="Ma mission"
//               className="hist-image"
//             />
//           </div>
//             {/* <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/environnement.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
//           </div>
//           <div className="hist-content">
//             <h2>ENVIRONNEMENT ET<br />DURABILITÉ</h2>
//             <p>
//               Nous nous engageons à réduire notre empreinte écologique grâce à une gestion responsable des ressources, à la diminution de l’usage du papier et à la sensibilisation aux éco-gestes. Nous privilégions également des équipements durables respectueux de l’environnement et nous assurons une prise en charge adéquate des déchets médicaux.
//             </p>
//             <p className="emphasis-text">
//               Notre ambition est claire : renforcer chaque année nos actions RSE afin de favoriser une société plus inclusive, respectueuse de l’environnement et solidaire, tout en restant fidèles à notre mission de sensibilisation, prévention, soins et recherche.
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
import '../styles/RSE.css';

export default function RSE() {
  return (
    <div className="rse-page">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="rse-hero"
        style={{ backgroundImage: "url('/assets/feerima/rse1.png')" }}
      >
        <div className="rse-hero-overlay" />
        <div className="rse-hero-content">
          <span className="rse-hero-tag">Fondation La Fée Rima</span>
          <h1>Notre Politique RSE</h1>
          <p>Le bien-être psychologique des jeunes, placé au cœur de notre responsabilité sociétale</p>
        </div>
      </section>

      <main className="rse-main">

        {/* Section 1 : Intro */}
        <section className="rse-intro-section">
          <div className="rse-text-block">
            <span className="rse-eyebrow">Notre engagement</span>
            <h2>Notre Politique RSE</h2>
            <p>
              La Fondation la Fée Rima, dédiée au bien-être psychologique des jeunes, place
              la responsabilité sociétale au cœur de ses actions. Notre engagement RSE reflète
              notre volonté d'avoir un impact positif sur nos bénéficiaires, nos collaborateurs,
              la communauté et l'environnement.
            </p>
            <p>
              <h3>              <strong>Bien-être et accompagnement des jeunes</strong><br />
              </h3>
              {/* <strong>Bien-être et accompagnement des jeunes</strong><br /> */}
              Nous offrons un accueil respectueux, bienveillant et accessible à tous les jeunes
              de 10 à 25 ans. Chaque projet de soins est personnalisé, dans le respect de la
              dignité et de la confidentialité.
            </p>
          </div>
          <div
            className="rse-image-block"
            style={{
              backgroundImage: "url('/assets/feerima/politique.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </section>

        {/* Citation mise en valeur */}
        <blockquote className="rse-quote">
          <p>
            Renforcer chaque année nos actions RSE afin de favoriser une société plus inclusive,
            respectueuse de l'environnement et solidaire, tout en restant fidèles à notre mission
            de sensibilisation, prévention, soins et recherche.
          </p>
          <cite>Notre ambition</cite>
        </blockquote>

        {/* Section 2 : Piliers RSE (4 cartes) */}
        <section className="rse-pillars">
          <div className="rse-pillar-card rse-pillar--green">
            <span className="rse-pillar-number">01</span>
            <h3>Éthique &amp; gouvernance</h3>
            <p>
              Nos actions reposent sur la transparence, l'intégrité et l'écoute. Nous associons
              bénéficiaires, familles, partenaires et intervenants extérieurs pour des prestations
              de qualité.
            </p>
            <div
              className="rse-pillar-image"
              style={{
                backgroundImage: "url('/assets/feerima/ethique.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          <div className="rse-pillar-card rse-pillar--teal">
            <span className="rse-pillar-number">02</span>
            <h3>Conditions de travail</h3>
            <p>
              Parce que prendre soin des adolescents et des jeunes, c'est aussi s'occuper de ceux
              qui les accompagnent. Nous favorisons la formation continue, l'esprit d'équipe et
              le bien-être au travail.
            </p>
            <div
              className="rse-pillar-image"
              style={{
                backgroundImage: "url('/assets/feerima/eth_gouv.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          <div className="rse-pillar-card rse-pillar--olive">
            <span className="rse-pillar-number">03</span>
            <h3>Accessibilité &amp; inclusion</h3>
            <p>
              Un accueil respectueux et bienveillant, accessible à tous les jeunes de 10 à 25 ans,
              avec un projet de soins personnalisé dans le respect de la dignité de chacun.
            </p>
          </div>

          <div className="rse-pillar-card rse-pillar--sage">
            <span className="rse-pillar-number">04</span>
            <h3>Impact communautaire</h3>
            <p>
              Nous œuvrons pour sensibiliser et prévenir, en tissant des liens durables avec les
              acteurs de la communauté autour du bien-être des jeunes.
            </p>
          </div>
        </section>

        {/* Section 3 : Environnement */}
        <section className="rse-env-section">
          <div
            className="rse-env-image"
            style={{
              backgroundImage: "url('/assets/feerima/environnement.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="rse-text-block">
            <span className="rse-eyebrow">Durabilité</span>
            <h2>Environnement &amp;<br />Durabilité</h2>
            <p>
              Nous nous engageons à réduire notre empreinte écologique grâce à une gestion
              responsable des ressources, à la diminution de l'usage du papier et à la
              sensibilisation aux éco-gestes.
            </p>
            <p>
              Nous privilégions des équipements durables respectueux de l'environnement et
              assurons une prise en charge adéquate des déchets médicaux.
            </p>
            <div className="rse-eco-badges">
              <span>Réduction papier</span>
              <span>Équipements durables</span>
              <span>Déchets médicaux</span>
              <span>Éco-gestes</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/RSE.css'


// export default function RSE() {
//   return (
//     <div className="rse-page">
//       <Navbar />

//       {/* Hero Banner avec overlay et animation */}
//       <section className="rse-hero">
//         <div className="rse-hero-overlay"></div>
//         <div className="rse-hero-content">
//           <span className="rse-hero-badge">Responsabilité Sociétale</span>
//           <h1>Notre politique RSE</h1>
//           <p className="rse-hero-subtitle">
//             Le bien-être psychologique des jeunes, <br />
//             placé au cœur de notre responsabilité sociétale
//           </p>
//           <div className="rse-hero-scroll">
//             <span>Découvrir</span>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M12 5v14M19 12l-7 7-7-7" />
//             </svg>
//           </div>
//         </div>
//       </section>

//       <main className="rse-main">
//         {/* Section 1: Intro - Style alterné */}
//         <section className="rse-section section-intro">
//           <div className="rse-container">
//             <div className="rse-grid reverse">
//               <div className="rse-content">
//                 <div className="rse-tag">Notre engagement</div>
//                 <h2>NOTRE POLITIQUE <br />RSE</h2>
//                 <p className="rse-lead">
//                   La Fondation la Fée Rima, dédiée au bien-être psychologique des jeunes,
//                   place la responsabilité sociétale au cœur de ses actions.
//                 </p>
//                 <p>
//                   Notre engagement RSE reflète notre volonté d'avoir un impact positif
//                   sur nos bénéficiaires, nos collaborateurs, la communauté et l'environnement.
//                 </p>
//                 <div className="rse-highlight">
//                   <h4>Bien-être et accompagnement des jeunes</h4>
//                   <p>
//                     Nous offrons un accueil respectueux, bienveillant et accessible à tous
//                     les jeunes de 10 à 25 ans. Chaque projet de soins est personnalisé,
//                     dans le respect de la dignité et de la confidentialité.
//                   </p>
//                 </div>
//               </div>
//               <div className="rse-image-wrapper">
//                 <div className="rse-image-card">
//                   <img src="/assets/feerima/politique.png" alt="Politique RSE" />
//                   <div className="rse-image-shape"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Section 2: Éthique & Gouvernance - Design carte */}
//         <section className="rse-section section-ethique">
//           <div className="rse-container">
//             <div className="rse-section-header">
//               <span className="rse-tag light">Intégrité & Transparence</span>
//               <h2>ÉTHIQUE ET GOUVERNANCE</h2>
//             </div>
//             <div className="rse-cards-grid">
//               <div className="rse-card">
//                 <div className="rse-card-icon">
//                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
//                     <circle cx="12" cy="12" r="3" />
//                   </svg>
//                 </div>
//                 <h3>Gouvernance éthique</h3>
//                 <p>
//                   Nos actions reposent sur la transparence, l'intégrité et l'écoute.
//                   Nous associons bénéficiaires, familles, partenaires et intervenants
//                   extérieurs pour des prestations de qualité.
//                 </p>
//               </div>
//               <div className="rse-card">
//                 <div className="rse-card-icon">
//                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                     <path d="M12 6v6l4 2M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
//                   </svg>
//                 </div>
//                 <h3>Conditions de travail</h3>
//                 <p>
//                   Parce que prendre soin des jeunes, c'est aussi s'occuper de ceux qui
//                   les accompagnent. Nous favorisons la formation continue, l'esprit
//                   d'équipe et le bien-être au travail.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Section 3: Environnement & Durabilité - Style split */}
//         <section className="rse-section section-environnement">
//           <div className="rse-container full">
//             <div className="rse-split">
//               <div className="rse-split-image">
//                 <img src="/assets/feerima/environnement.png" alt="Environnement" />
//                 {/* <div className="rse-stats">
//                   <div className="rse-stat">
//                     <span className="rse-stat-number">-30%</span>
//                     <span className="rse-stat-label">d'empreinte carbone</span>
//                   </div>
//                   <div className="rse-stat">
//                     <span className="rse-stat-number">100%</span>
//                     <span className="rse-stat-label">déchets médicaux traçables</span>
//                   </div>
//                 </div> */}
//               </div>
//               <div className="rse-split-content">
//                 <div className="rse-tag">Planète & Durabilité</div>
//                 <h2>ENVIRONNEMENT ET DURABILITÉ</h2>
//                 <p>
//                   Nous nous engageons à réduire notre empreinte écologique grâce à une
//                   gestion responsable des ressources, à la diminution de l'usage du
//                   papier et à la sensibilisation aux éco-gestes.
//                 </p>
//                 <ul className="rse-list">
//                   <li>✓ Gestion responsable des ressources</li>
//                   <li>✓ Équipements durables et certifiés</li>
//                   <li>✓ Prise en charge adéquate des déchets médicaux</li>
//                   <li>✓ Sensibilisation aux éco-gestes</li>
//                 </ul>
//                 <div className="rse-quote">
//                   <p>
//                     "Notre ambition est claire : renforcer chaque année nos actions RSE
//                     afin de favoriser une société plus inclusive, respectueuse de
//                     l'environnement et solidaire."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Section finale - Call to action */}
//         {/* <section className="rse-cta">
//           <div className="rse-container">
//             <div className="rse-cta-content">
//               <h3>Engagés pour demain</h3>
//               <p>Découvrez comment nous mettons en œuvre notre politique RSE au quotidien</p>
//               <button className="rse-cta-button">
//                 Nos actions <span>→</span>
//               </button>
//             </div>
//           </div>
//         </section> */}
//       </main>

//       <Footer />
//     </div>
//   );
// }