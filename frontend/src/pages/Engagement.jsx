// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function Engagement() {
//   return (
//     <div className="historique-page">
//       <Navbar />

//       {/* Hero Banner */}
//       <section
//         className="page-hero"
//         style={{ backgroundImage: "url('/assets/feerima/engag.png')" }}
//       >
//         <div className="page-hero-content">
//           <h1>Notre engagement qualité</h1>
//           <p>L’ensemble des professionnels s’engage au quotidien pour garantir la qualité et la sécurité des soins</p>
//         </div>
//       </section>

//       <main className="historique-main">
//         {/* Section 1: Intro */}
//         <section className="hist-section section-1">
//           <div className="hist-content">
//             <h1>NOTRE ENGAGEMENT<br />QUALITÉ</h1>
//             {/* <p>
//               À La Fée Rima, l’ensemble des professionnels s’engage au quotidien pour garantir la qualité et la sécurité des soins.
//             </p> */}
//             <p>
//               Nos centres placent le bénéficiaire au cœur de toutes nos actions, avec une prise en charge personnalisée, de l’accueil aux soins, en passant par les services techniques et administratifs. Nous mettons notre expertise au service de chaque jeune et de sa famille.            </p>
//             <p>
//               Il existe une politique d’amélioration continue, qui s’appuie sur l’évaluation de la satisfaction des bénéficiaires, de leurs familles et des partenaires ainsi que la réalisation d’audits annuels sur la qualité et la sécurité des activités et des soins.  Ces évaluations facilitent la mise en œuvre d’actions concrètes d’amélioration, comme l’ajustement des pratiques et les formations ciblées pour nos équipes.            </p>
//             <p>
//               A La Fée Rima, notre engagement qualité nous permet de faire évoluer constamment nos pratiques, afin de mener des activités toujours plus déterminantes, fondées sur l’excellence et l’expertise de nos équipes.            </p>
//           </div>
//           <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/enga.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 2: Amélioration continue */}
//         <section className="hist-section section-2">
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/amelioration.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           <div className="hist-content center-content">
//             <h2>AMÉLIORATION<br />CONTINUE</h2>
//             <p>
//               Nous avons mis en place une politique d’amélioration continue, qui s’appuie sur l’évaluation de la satisfaction des bénéficiaires et de leurs familles, la réalisation d’audits annuels sur la qualité et la sécurité des soins, ainsi que la mise en œuvre d’actions concrètes d’amélioration, comme l’ajustement des pratiques et les formations ciblées pour nos équipes.
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/am.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 3: Conclusion */}
//         <section className="hist-section section-3">
//           <div className="hist-stacked-images">
//             {/* <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/evolution.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
//             <div className="hist-stacked-images">
//               <img
//                 src="/assets/feerima/evolution.png"
//                 alt="Ma mission"
//                 className="hist-image"
//               />
//             </div>
//           </div>
//           <div className="hist-content">
//             <h2>ÉVOLUTION<br />CONSTANTE</h2>
//             <p>
//               Chez La Fée Rima, notre engagement qualité nous permet de faire évoluer constamment nos pratiques, afin d’offrir un accompagnement toujours plus personnalisé, fondé sur l’excellence et l’expertise de nos équipes.
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

export default function Engagement() {
  return (
    <div className="engagement-page">
      <Navbar />

      {/* Hero Banner simplifié et élégant */}
      <section
        className="engagement-hero"
        style={{ backgroundImage: "url('/assets/feerima/engag.png')" }}
      >
        <div className="engagement-hero-overlay"></div>
        <div className="engagement-hero-content">
          <h1>Notre engagement qualité</h1>
          <p>
            L'ensemble des professionnels s'engage au quotidien pour garantir
            la qualité et la sécurité des soins
          </p>
        </div>
      </section>

      <main className="engagement-main">
        {/* Section 1 : Notre engagement qualité */}
        <section className="engagement-section">
          <div className="engagement-container">
            <div className="engagement-header">
              <h2>NOTRE ENGAGEMENT QUALITÉ</h2>
              <div className="engagement-underline"></div>
            </div>
            <div className="engagement-content">
              <p>
                Nos centres placent le bénéficiaire au cœur de toutes nos actions, avec une prise en charge personnalisée, de l'accueil aux soins, en passant par les services techniques et administratifs. Nous mettons notre expertise au service de chaque jeune et de sa famille.
              </p>
              <p>
                Il existe une politique d'amélioration continue, qui s'appuie sur l'évaluation de la satisfaction des bénéficiaires, de leurs familles et des partenaires ainsi que la réalisation d'audits annuels sur la qualité et la sécurité des activités et des soins. Ces évaluations facilitent la mise en œuvre d'actions concrètes d'amélioration, comme l'ajustement des pratiques et les formations ciblées pour nos équipes.
              </p>
              <p>
                À La Fée Rima, notre engagement qualité nous permet de faire évoluer constamment nos pratiques, afin de mener des activités toujours plus déterminantes, fondées sur l'excellence et l'expertise de nos équipes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 : Amélioration continue avec image centrale */}
        <section className="engagement-section alt-bg">
          <div className="engagement-container">
            <div className="engagement-header">
              <h2>AMÉLIORATION CONTINUE</h2>
              <div className="engagement-underline"></div>
            </div>
            <div className="engagement-grid-2cols">
              <div className="engagement-text-block">
                <p>
                  Nous avons mis en place une politique d'amélioration continue, qui s'appuie sur l'évaluation de la satisfaction des bénéficiaires et de leurs familles, la réalisation d'audits annuels sur la qualité et la sécurité des soins.
                </p>
              </div>
              <div className="engagement-image-center">
                <img
                  src="/assets/feerima/amelioration.png"
                  alt="Amélioration continue"
                />
              </div>
              <div className="engagement-text-block">
                <p>
                  Ainsi que la mise en œuvre d'actions concrètes d'amélioration, comme l'ajustement des pratiques et les formations ciblées pour nos équipes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 : Évolution constante */}
        <section className="engagement-section">
          <div className="engagement-container">
            <div className="engagement-header">
              <h2>ÉVOLUTION CONSTANTE</h2>
              <div className="engagement-underline"></div>
            </div>
            <div className="engagement-evolution">
              <div className="evolution-image">
                <img
                  src="/assets/feerima/evolution.png"
                  alt="Évolution constante"
                />
              </div>
              <div className="evolution-text">
                <p>
                  Chez La Fée Rima, notre engagement qualité nous permet de faire évoluer constamment nos pratiques, afin d'offrir un accompagnement toujours plus personnalisé, fondé sur l'excellence et l'expertise de nos équipes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .engagement-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a2e;
          background: #fafafa;
        }

        /* Hero Banner */
        .engagement-hero {
          position: relative;
          height: 60vh;
          min-height: 500px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .engagement-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(140, 146, 133, 0.5);
        }

        .engagement-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 0 24px;
          color: white;
        }

        .engagement-hero-content h1 {
          font-size: 3.5rem;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .engagement-hero-content p {
          font-size: 1.25rem;
          line-height: 1.6;
          opacity: 0.95;
        }

        /* Main */
        .engagement-main {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Sections */
        .engagement-section {
          padding: 80px 40px;
        }

        .alt-bg {
          background: #f0f4f8;
        }

        .engagement-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Header de section */
        .engagement-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .engagement-header h2 {
          font-size: 2.2rem;
          font-weight: 600;
          color: #1e3a5f;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
        }

        .engagement-underline {
          width: 60px;
          height: 3px;
          background: #2c7a6e;
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Contenu texte simple */
        .engagement-content p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #2d3e50;
          margin-bottom: 24px;
          text-align: center;
        }

        .engagement-content p:last-child {
          margin-bottom: 0;
        }

        /* Grille 2 colonnes pour amélioration continue */
        .engagement-grid-2cols {
          display: flex;
          gap: 48px;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .engagement-text-block {
          flex: 1;
          min-width: 200px;
        }

        .engagement-text-block p {
          font-size: 1rem;
          line-height: 1.7;
          color: #2d3e50;
        }

        .engagement-image-center {
          flex: 1.2;
          text-align: center;
        }

        .engagement-image-center img {
          max-width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        /* Évolution constante */
        .engagement-evolution {
          display: flex;
          gap: 50px;
          align-items: center;
          flex-wrap: wrap;
        }

        .evolution-image {
          flex: 1;
        }

        .evolution-image img {
          width: 100%;
          max-height: 320px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }

        .evolution-text {
          flex: 1;
        }

        .evolution-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #2d3e50;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .engagement-section {
            padding: 60px 24px;
          }
          .engagement-grid-2cols {
            flex-direction: column;
            gap: 32px;
          }
          .engagement-text-block,
          .engagement-image-center {
            text-align: center;
          }
          .engagement-evolution {
            flex-direction: column;
            text-align: center;
          }
          .engagement-header h2 {
            font-size: 1.8rem;
          }
          .engagement-hero-content h1 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .engagement-section {
            padding: 40px 20px;
          }
          .engagement-header h2 {
            font-size: 1.5rem;
          }
          .engagement-content p {
            font-size: 0.95rem;
            text-align: left;
          }
          .engagement-hero {
            min-height: 350px;
          }
          .engagement-hero-content h1 {
            font-size: 1.8rem;
          }
          .engagement-hero-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}