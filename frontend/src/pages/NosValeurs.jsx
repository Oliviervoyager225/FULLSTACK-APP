import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NosValeurs.css';

export default function NosValeurs() {
  // Pour l'animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="nv-page">
      <Navbar />

      {/* Hero Banner */}
      <section className="nv-hero">
        <div className="nv-hero-overlay"></div>
        {/* <div className="nv-hero-content">
          <h1>Nos Valeurs</h1>
          <p>L’accueil, l’écoute et le respect au cœur de notre pratique.</p>
        </div> */}
      </section>

      <main className="nv-container">
        {/* Section 1 : Intro / Mission */}
        <section className="nv-section fade-in">
          <div className="nv-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Notre Mission
          </div>
          <h2>Nos valeurs au service des jeunes et de leurs familles</h2>
          <p>
            À La Fée Rima, l’humain est au cœur de nos actions. L’accueil, l’écoute et le respect guident notre engagement auprès des jeunes et de leurs familles.
            Nous offrons un environnement sécurisant, bienveillant et sans jugement, où chaque jeune est reconnu dans sa singularité et encouragé à s’exprimer librement.
            Grâce à une écoute active et respectueuse, nous proposons un accompagnement adapté, favorisant le bien-être, la confiance et l’épanouissement personnel.
          </p>
        </section>

        {/* Section 2 : L'accueil */}
        <section className="nv-welcome fade-in">
          <h2>L'Accueil</h2>
          <p>
            L’accueil du bénéficiaire et de son entourage est le premier soin que nous offrons. Toute personne est la bienvenue au centre spécialisé La Fée Rima, dans le respect de son identité et de ses opinions.
            Nous proposons un accueil personnalisé et bienveillant, où chaque jeune et sa famille sont accompagnés dès leur arrivée, informés de manière claire et soutenus dans leurs besoins.
          </p>
        </section>

        {/* Section 3 : Piliers (Écoute et Respect) */}
        <section>
          <div className="nv-pillars-header fade-in">
            <h2>Nos piliers au quotidien</h2>
            <div className="nv-divider"></div>
          </div>

          <div className="nv-grid">
            {/* Carte Écoute */}
            <div className="nv-card fade-in">
              <div className="nv-card-header">
                <div className="nv-icon-box nv-icon-ear">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
                    <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
                  </svg>
                </div>
                <h3>L'Écoute</h3>
              </div>
              <p>
                À La Fée Rima, nous prenons le temps d’être à l’écoute du bénéficiaire et de ses proches. Leurs paroles, leurs questions et leurs inquiétudes sont importantes pour nous ; elles nous permettent de mieux comprendre les besoins et de créer un lien de confiance avec nos équipes.
                <br /><br />
                Nous voulons que chacun puisse s’exprimer librement, sans crainte d’indifférence ou de jugement. C’est dans ce climat de confiance que nous pouvons accompagner de manière adaptée, avec respect et empathie.
              </p>
            </div>

            {/* Carte Respect */}
            <div className="nv-card fade-in">
              <div className="nv-card-header">
                <div className="nv-icon-box nv-icon-shield">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>Le Respect</h3>
              </div>
              <p>
                Le respect est une valeur institutionnelle qui guide nos interactions, qu’elles soient thérapeutiques, professionnelles ou partenariales.
                <br /><br />
                Au quotidien, l’acceptation et la considération bienveillante de l’autre dans sa globalité sont notre priorité, qu’il s’agisse d’un bénéficiaire, d’un collègue ou d’un partenaire.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}