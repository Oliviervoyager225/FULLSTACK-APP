import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';
import '../styles/Historique.css';

export default function MiseEnObservation() {
  return (
    <div className="historique-page">
      <Navbar />

      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #0fa0b6 0%, #0d7a8a 100%)' }}>
        <div className="page-hero-content">
          <h1>La mise en observation</h1>
          <p>Un cadre sécurisé pour évaluer et orienter les jeunes en situation de crise</p>
        </div>
      </section>

      <main className="historique-main">
        <section className="hist-section section-1">
          <div className="hist-content">
            <h2>QU&apos;EST-CE QUE LA MISE EN OBSERVATION ?</h2>
            <p>
              La mise en observation est une mesure d&apos;accueil temporaire permettant d&apos;évaluer
              l&apos;état de santé mentale d&apos;un jeune (10-25 ans) dans un environnement sécurisé
              et bienveillant. Elle intervient généralement en situation de crise ou d&apos;urgence
              psychiatrique, avant une orientation vers le dispositif de soin adapté.
            </p>
          </div>
        </section>

        <section className="hist-section section-2" style={{ background: '#f7fcfd' }}>
          <div className="hist-content">
            <h2>DÉROULEMENT</h2>
            <ul style={{ paddingLeft: '1.4rem', lineHeight: '2' }}>
              <li>Accueil et évaluation clinique initiale par l&apos;équipe pluridisciplinaire</li>
              <li>Bilan psychiatrique et somatique complet</li>
              <li>Surveillance continue dans un espace dédié et sécurisé</li>
              <li>Concertation d&apos;équipe pour l&apos;orientation (HDJ, consultations, hospitalisation)</li>
              <li>Information et accompagnement de la famille ou du tuteur légal</li>
            </ul>
          </div>
        </section>

        <section className="hist-section section-3">
          <div className="hist-content">
            <h2>DURÉE ET CONDITIONS</h2>
            <p>
              La durée de la mise en observation est variable selon la situation clinique du jeune.
              Elle peut durer de quelques heures à plusieurs jours dans le respect du cadre légal
              en vigueur. Toutes les mesures sont prises avec le consentement éclairé du patient
              et/ou de ses représentants légaux.
            </p>
          </div>
        </section>

        <section className="hist-section section-2" style={{ background: '#f7fcfd' }}>
          <div className="hist-content">
            <h2>CONTACT &amp; URGENCES</h2>
            <p>
              Pour toute situation d&apos;urgence ou pour obtenir des informations sur la mise en
              observation, contactez directement notre service d&apos;accueil :
            </p>
            <p style={{ marginTop: '1rem', fontWeight: 700, color: '#0fa0b6', fontSize: '1.1rem' }}>
              +225 XX XX XX XX XX &nbsp;|&nbsp; urgences@lafeerima.ci
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
