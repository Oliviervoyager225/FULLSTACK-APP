import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function NosValeurs() {
  return (
    <div className="historique-page">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('/assets/feerima/nos_valeurs.png')" }}
      >
        {/* <div className="page-hero-content">
          <h1>Nos valeurs</h1>
          <p>L’accueil, l’écoute et le respect au cœur de notre pratique</p>
        </div> */}
      </section>

      <main className="historique-main">
        {/* Section 1: Intro */}
        <section className="hist-section section-1">
          <div className="hist-content">
            <h2>Nos valeurs aux services des jeunes et de leurs familles</h2>
            <p>
              À La Fée Rima, l’humain est au cœur de nos actions. L’accueil, l’écoute et le respect guident notre engagement auprès des jeunes et de leurs familles.
              Nous offrons un environnement sécurisant, bienveillant et sans jugement, où chaque jeune est reconnu dans sa singularité et encouragé à s’exprimer librement.
              Grâce à une écoute active et respectueuse, nous proposons un accompagnement adapté, favorisant le bien-être, la confiance et l’épanouissement personnel.            </p>
          </div>
          <div className="hist-image-box gray-box-large" style={{ backgroundImage: "url('/assets/feerima/val_service.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 2: L'accueil */}
        <section className="hist-section section-2">
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/accueil.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="hist-content center-content">
            <h2>Accueil</h2>
            <p>
              L’accueil du bénéficiaire et de son entourage est le premier soin que nous offrons. Toute personne est la bienvenue au centre spécialisé La Fée Rima, dans le respect de son identité et de ses opinions. Nous proposons un accueil personnalisé et bienveillant, où chaque jeune et sa famille sont accompagnés dès leur arrivée, informés de manière claire et soutenus dans leurs besoins.            </p>
          </div>
          <div className="hist-image-box gray-box-medium" style={{ backgroundImage: "url('/assets/feerima/acceuil.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </section>

        {/* Section 3: L'écoute et Le respect */}
        <section className="hist-section section-3">
          <div className="hist-stacked-images">
            <img
              src="/assets/feerima/ecoute1.png"
              alt="Ecoute et respect"
              className="hist-img"
            />
          </div>
          <div className="hist-content">
            <h3>L'écoute et le respect </h3>
            <p><strong>L’écoute</strong><br />
              À La Fée Rima, nous prenons le temps d’être à l’écoute du bénéficiaire et ses proches. Leurs paroles, leurs questions et leurs inquiétudes sont importantes pour nous, elles nous permettent de mieux comprendre les besoins et de créer un lien de confiance avec nos équipes. Nous voulons que chacun puisse s’exprimer librement, sans crainte d’indifférence ou de jugement. C’est dans ce climat de confiance que nous pouvons accompagner de manière adaptée, avec respect et empathie.            </p>
            <p><strong>Le respect</strong><br />
              Le respect est une valeur institutionnelle qui guide nos interactions, qu’elles soient thérapeutiques, professionnelles ou partenariales. Au quotidien, l’acceptation et la considération bienveillante de l’autre dans sa globalité sont notre priorité, qu’il s’agisse d’un bénéficiaire, d’un collègue ou d’un partenaire.            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
