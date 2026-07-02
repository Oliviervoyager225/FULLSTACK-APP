import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/CentreSpecialise2Plateaux.css';

const CentreSpecialise2Plateaux = () => {
    const services = [
        {
            id: 1,
            title: "Les Consultations",
            icon: "🩺",
            description: "Rendez-vous dans diverses spécialités : psychiatrie, psychologie, orthophonie, éducation spécialisée, etc."
        },
        {
            id: 2,
            title: "L'Hôpital de Jour",
            icon: "🏥",
            description: "Ateliers et programmes pour soutenir le bien-être, la socialisation et l'autonomie des bénéficiaires, animés par une équipe pluridisciplinaire, dans un lieu ouvert toute la journée."
        },
        {
            id: 3,
            title: "La Mise en Observation",
            icon: "👁️",
            description: "Prise en charge ponctuelle d'une situation de crise dans un cadre sécurisé pour identifier les besoins du bénéficiaire, l'orienter et le référer."
        }
    ];

    const requiredDocs = [
        "Une pièce d'identité des 2 parents (carte d'identité, passeport, carte de séjour, etc.)",
        "Une pièce d'identité du bénéficiaire (carte d'identité, livret de famille, passeport, etc.)",
        "Le carnet de santé",
        "Les coordonnées du médecin traitant, pédiatre ou autres professionnels de santé",
        "Les documents médicaux récents (ordonnances, bilans, résultats d'examens, comptes rendus d'hospitalisation...)",
        "Une attestation d'assurance, si concerné"
    ];

    return (
        <div className="centre-2plateaux-page">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="page-hero centre-hero">
                    <div className="hero-content">
                        <h1>Centre Spécialisé des 2 Plateaux</h1>
                        <p className="hero-subtitle">
                            Une prise en charge globale et spécialisée pour la santé mentale des adolescents et des jeunes.
                        </p>
                    </div>
                </section>

                {/* Hero Section avec image de bannière */}
                {/* <section className="page-hero centre-hero"> */}
                    {/* Image de fond avec overlay */}
                    {/* <div className="hero-background">
                        <img
                            src="/assets/feerima/images/centre2plateaux.png"
                            alt="Centre spécialisé La Fée Rima des 2 Plateaux - Abidjan"
                            className="hero-image"
                            loading="eager"
                        />
                        <div className="hero-overlay"></div>
                    </div> */}

                    {/* Contenu texte */}
                    {/* <div className="hero-content">
                        <h1>Centre Spécialisé des 2 Plateaux</h1>
                        <p className="hero-subtitle">
                            Une prise en charge globale et spécialisée pour la santé mentale des adolescents et des jeunes.
                        </p>
                    </div> */}
                {/* </section> */}

                {/* Services Section */}
                <section className="section services-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Nos Services</h2>
                            <div className="divider"></div>
                            <p className="section-intro">
                                Le centre spécialisé La Fée Rima offre une gamme complète de services liés à la santé mentale.
                            </p>
                        </div>
                        <div className="services-grid">
                            {services.map((service) => (
                                <div key={service.id} className="service-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Admission Section */}
                <section className="section admission-section">
                    <div className="container">
                        <div className="admission-grid">
                            <div className="admission-info">
                                <div className="section-header admission-header">
                                    <h2>Préparez votre venue</h2>
                                    <div className="divider"></div>
                                </div>
                                <p className="admission-text">
                                    Futur(e)s visiteur.se.s ? Préparez votre venue à la Fée Rima en téléchargeant les formulaires d'admission et en nous les envoyant par mail.
                                </p>
                                <div className="contact-box">
                                    <span className="contact-label">Envoyez vos formulaires à :</span>
                                    {/* ⚠️ Remplacez par votre véritable adresse e-mail */}
                                    <a href="mailto:admission@lafeerima.org" className="contact-email">admission@lafeerima.org</a>
                                </div>
                                <div className="download-btns">
                                    {/* ⚠️ Remplacez par le chemin réel de votre PDF */}
                                    <a href="/assets/formulaires/formulaire_admission.pdf" download className="btn btn-primary">
                                        📄 Télécharger le formulaire d'admission
                                    </a>
                                </div>
                            </div>

                            <div className="admission-docs">
                                <h3>Documents à présenter au secrétariat</h3>
                                <ul className="docs-list">
                                    {requiredDocs.map((doc, index) => (
                                        <li key={index} className="doc-item">
                                            <span className="doc-icon">📋</span>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section contact-cta-section">
                    <div className="container">
                        <div className="contact-cta-content">
                            <h2>Besoin d'un accompagnement ?</h2>
                            <p>
                                Notre équipe est à votre écoute pour répondre à vos questions et vous guider dans votre parcours.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CentreSpecialise2Plateaux;