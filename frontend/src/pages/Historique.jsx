// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function Historique() {
//   return (
//     <div className="historique-page">
//       <Navbar />

//       {/* Hero Banner */}
//       <section
//         className="page-hero"
//         style={{ backgroundImage: "url('/assets/feerima/notre_histoire.png')" }}
//       >
//         {/* <div className="page-hero-content">
//           <h1>Notre histoire</h1>
//           <p>Une mission de cœur, au service de la santé mentale des jeunes depuis notre création</p>
//         </div> */}
//       </section>

//       <main className="historique-main">
//         {/* Section 1: Histoire personnelle */}
//         <section className="hist-section section-1">
//           <div className="hist-content">
//             <h1>UNE HISTOIRE<br />PERSONNELLE</h1>
//             <p>
//               La Fée Rima est d’abord inspirée d’une histoire personnelle. Très tôt, j’ai été confrontée à la réalité de la souffrance psychologique, et cette expérience m’a profondément sensibilisée aux enjeux du bien-être mental. J’ai compris à quel point un accompagnement humain, adapté et accessible peut faire la différence.
//             </p>
//             <p>
//               En observant la situation en Côte d’Ivoire, j’ai réalisé que de nombreux jeunes vivent eux aussi des difficultés émotionnelles ou psychologiques, souvent dans le silence, faute de sensibilisation et de structures de prise en charge.
//             </p>
//           </div>
//           <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/histoire.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 2: La réalité */}
//         <section className="hist-section section-2">
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/hero3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           <div className="hist-content center-content">
//             <h2>La réalité des jeunes en Afrique Subsaharienne</h2>
//             <ul style={{ textAlign: 'left', margin: '20px auto', maxWidth: '400px', lineHeight: '1.6', color: '#333' }}>
//               <li><strong>1 adolescent sur 4</strong> souffre d’un trouble mental.</li>
//               <li><strong>Près de 40 %</strong> présentent des troubles émotionnels ou comportementaux.</li>
//               <li>Près de la moitié des troubles psychologiques apparaissent avant l’âge de 18 ans.</li>
//             </ul>
//             {/* <p>
//               De cette double expérience — personnelle et collective — est née une conviction forte : chaque adolescent et chaque jeune adulte mérite la chance de mener une vie épanouie grâce à une meilleure santé mentale.
//             </p> */}
//           </div>
//           <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/IMG.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//         </section>

//         {/* Section 3: Vision et mission */}
//         <section className="hist-section section-3">
//           {/* <div className="hist-stacked-images">
//             <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/hero.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}></div>
//             <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/ma_mission.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
//           </div> */}
//           <div className="hist-stacked-images">
//             <img
//               src="/assets/feerima/ma_mission.png"
//               alt="Ma mission"
//               className="hist-image"
//             />
//           </div>
//           <div className="hist-content">
//             <h3>Ma vision & Ma mission</h3>
//             <p>
//               Animée par cette conviction, j’ai fondé en 2024, à seulement 19 ans, La Fée Rima, une fondation à but non lucratif. Ma mission : sensibiliser le grand public, briser les tabous autour de la santé mentale et développer des solutions concrètes d’accompagnement adaptées à la réalité des jeunes en Côte d’Ivoire.
//             </p>
//             <p>
//               À travers le centre spécialisé La Fée Rima, je souhaite bâtir un environnement bienveillant, inclusif et innovant, où chaque jeune peut trouver écoute, soutien et accompagnement adapté à sa situation.
//             </p>
//             <p className="emphasis-text">
//               Le centre s’inscrit dans la mission globale de la fondation : promouvoir le bien-être psychique des adolescents et jeunes adultes, renforcer la prévention et faciliter l’accès à des soins de qualité.
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
import styles from '../styles/Historique.module.css'; // Import du CSS Module

export default function Historique() {
  return (
    <div className={styles.page}>
      <Navbar />
      
      {/* Hero Banner avec Overlay pour la lisibilité */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          {/* <h1>Notre histoire</h1>
          <p>Une mission de cœur, au service de la santé mentale des jeunes depuis notre création.</p> */}
        </div>
      </section>

      <main className={styles.main}>
        {/* Section 1: Histoire personnelle */}
        <section className={styles.section}>
          <div className={styles.content}>
            <span className={styles.tag}>Nos origines</span>
            <h2>Une histoire<br />personnelle</h2>
            <p>
              La Fée Rima est d’abord inspirée d’une histoire personnelle. Très tôt, j’ai été confrontée à la réalité de la souffrance psychologique, et cette expérience m’a profondément sensibilisée aux enjeux du bien-être mental. J’ai compris à quel point un accompagnement humain, adapté et accessible peut faire la différence.
            </p>
            <p>
              En observant la situation en Côte d’Ivoire, j’ai réalisé que de nombreux jeunes vivent eux aussi des difficultés émotionnelles ou psychologiques, souvent dans le silence, faute de sensibilisation et de structures de prise en charge.
            </p>
          </div>
          <div 
            className={styles.imageBox} 
            style={{ backgroundImage: "url('/assets/feerima/histoire.png')" }}
          ></div>
        </section>

        {/* Section 2: La réalité (Transformée en cartes de statistiques) */}
        <section className={`${styles.section} ${styles.realitySection}`}>
          <div className={styles.content}>
            <span className={styles.tag}>Le constat</span>
            <h2>La réalité des jeunes en Afrique Subsaharienne</h2>
            <p className={styles.introText}>
              De cette double expérience — personnelle et collective — est née une conviction forte : chaque adolescent mérite la chance de mener une vie épanouie.
            </p>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>1/4</span>
                <span className={styles.statLabel}>des adolescents souffre d’un trouble mental.</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>présentent des troubles émotionnels ou comportementaux.</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>50%</span>
                <span className={styles.statLabel}>des troubles psychologiques apparaissent avant 18 ans.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Vision et mission */}
        <section className={styles.section}>
          <div className={styles.stackedImages}>
            <img
              src="/assets/feerima/ma_mission.png"
              alt="Illustration de notre mission"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>Notre engagement</span>
            <h3>Ma vision & Ma mission</h3>
            <p>
              Animée par cette conviction, j’ai fondé en 2024, à seulement 19 ans, <strong>La Fée Rima</strong>, une fondation à but non lucratif. Ma mission : sensibiliser le grand public, briser les tabous autour de la santé mentale et développer des solutions concrètes d’accompagnement adaptées à la réalité des jeunes en Côte d’Ivoire.
            </p>
            <p>
              À travers le centre spécialisé La Fée Rima, je souhaite bâtir un environnement bienveillant, inclusif et innovant, où chaque jeune peut trouver écoute, soutien et accompagnement adapté à sa situation.
            </p>
            <div className={styles.emphasisBox}>
              <p>
                Le centre s’inscrit dans la mission globale de la fondation : promouvoir le bien-être psychique des adolescents et jeunes adultes, renforcer la prévention et faciliter l’accès à des soins de qualité.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}