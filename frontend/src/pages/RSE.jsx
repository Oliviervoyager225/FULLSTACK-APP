import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function RSE() {
  return (
    <div className="historique-page">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/assets/feerima/rse1.png')" }}
      >
        <div className="page-hero-content">
          <h1>Notre politique RSE</h1>
          <p>Le bien-être psychologique des jeunes, placé au cœur de notre responsabilité sociétale</p>
        </div>
      </section>

      <main className="historique-main">
        {/* Section 1: Intro */}
        <section className="hist-section section-1">
          <div className="hist-content">
            <h1>NOTRE POLITIQUE<br />RSE</h1>
            <p>
              La Fondation la Fée Rima, dédiée au bien-être psychologique des jeunes, place la responsabilité sociétale au cœur de ses actions. Notre engagement RSE reflète notre volonté d’avoir un impact positif sur nos bénéficiaires, nos collaborateurs, la communauté et l’environnement.
            </p>
            <p>
              <strong>Bien-être et accompagnement des jeunes</strong><br />
              Nous offrons un accueil respectueux, bienveillant et accessible à tous les jeunes de 10 à 25 ans. Chaque projet de soins est personnalisé, dans le respect de la dignité et de la confidentialité.
            </p>
          </div>
          <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/politique.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 2: Actions & Conditions */}
        <section className="hist-section section-2">
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/ethique.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hist-content center-content">
            <h2>ÉTHIQUE ET<br />GOUVERNANCE</h2>
            <p>
              Nos actions reposent sur la transparence, l’intégrité et l’écoute. Nous associons bénéficiaires, familles, partenaires et intervenants extérieurs pour des prestations de qualité.
            </p>
            <p><strong>Conditions de travail</strong><br />
              Parce que prendre soin des adolescents et des jeunes, c’est aussi s’occuper de ceux qui les accompagnent. Nous favorisons donc la formation continue, l’esprit d’équipe et le bien-être au travail.
            </p>
          </div>
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/eth_gouv.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 3: Environnement */}
        <section className="hist-section section-3">
          <div className="hist-stacked-images">
            {/* <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/hero.png')", backgroundSize: 'cover', backgroundPosition: 'top' }}></div> */}
            
            <div className="hist-stacked-images">
            <img
              src="/assets/feerima/environnement.png"
              alt="Ma mission"
              className="hist-image"
            />
          </div>
            {/* <div className="hist-image-box gray-box-small" style={{ backgroundImage: "url('/assets/feerima/environnement.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
          </div>
          <div className="hist-content">
            <h2>ENVIRONNEMENT ET<br />DURABILITÉ</h2>
            <p>
              Nous nous engageons à réduire notre empreinte écologique grâce à une gestion responsable des ressources, à la diminution de l’usage du papier et à la sensibilisation aux éco-gestes. Nous privilégions également des équipements durables respectueux de l’environnement et nous assurons une prise en charge adéquate des déchets médicaux.
            </p>
            <p className="emphasis-text">
              Notre ambition est claire : renforcer chaque année nos actions RSE afin de favoriser une société plus inclusive, respectueuse de l’environnement et solidaire, tout en restant fidèles à notre mission de sensibilisation, prévention, soins et recherche.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
