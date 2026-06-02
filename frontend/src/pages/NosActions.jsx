import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NosActions.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NosActions = () => {
    const visionPoints = [
        "Promotion de la santé mentale et du bien-être psychosocial des adolescents et jeunes",
        "Renforcement des connaissances en santé mentale pour faciliter l'accès aux soins",
        "Amélioration de l'insertion socio-professionnelle des jeunes de 10 à 25 ans",
        "Accompagnement sans discrimination socio-économique"
    ];

    const sensibilisationActions = [
        "Informer sur les questions de santé mentale",
        "Favoriser le dialogue et l'expression",
        "Lever le tabou sur le sujet de la santé mentale",
        "Identifier les cas à risque"
    ];

    const formationThemes = [
        "Le cerveau et son développement",
        "Les troubles psychologiques",
        "L'attachement et les relations",
        "Les addictions chez les jeunes",
        "Prise en charge et accompagnement"
    ];

    return (

        <div>
            <Navbar />
            <main className="nos-actions-page">

                {/* Hero Section */}
                {/* Hero Section avec image de bannière */}
                <section className="page-hero nos-actions-hero">
                    {/* Image de fond avec overlay */}
                    <div className="hero-background">
                        <img
                            src="/assets/feerima/action.png"
                            alt="Jeunes ivoiriens participant à une activité de sensibilisation en santé mentale"
                            className="hero-image"
                            loading="eager"
                        />
                        <div className="hero-overlay"></div>
                    </div>

                    {/* Contenu texte */}
                    {/* <div className="hero-content">
                        <h1>Nos Actions</h1>
                        <p className="hero-subtitle">
                            Une vision tournée vers l'avenir pour la santé mentale des jeunes en Côte d'Ivoire
                        </p>
                    </div> */}
                </section>

                {/* Vision Section */}
                <section className="section vision-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Notre Vision</h2>
                            <div className="divider"></div>
                        </div>
                        <p className="vision-intro">
                            La Fondation <strong>La Fée Rima</strong> s'engage dans la promotion de la santé mentale et du
                            bien-être psychosocial des adolescents et jeunes en Côte d'Ivoire.
                        </p>
                        <p className="vision-text">
                            En ce qui concerne ses activités de promotion, un accent particulier est porté sur
                            le renforcement des connaissances en santé mentale afin de faciliter l'accès aux
                            soins des adolescents et jeunes. L'objectif est d'améliorer leur bien-être
                            psychosocial, contribuant ainsi à une meilleure insertion socio-professionnelle.
                        </p>
                        <p className="vision-text">
                            À travers ses actions de sensibilisation, de formation et d'accompagnement, la
                            fondation œuvre pour une meilleure prise en charge des problématiques
                            psychologiques, en particulier chez les adolescents et jeunes âgés de
                            <strong> 10 à 25 ans</strong> quel que soit leur niveau socio-économique.
                        </p>

                        <ul className="vision-list">
                            {visionPoints.map((point, index) => (
                                <li key={index} className="vision-item">
                                    <span className="check-icon">✓</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Sensibilisation Section */}
                <section className="section sensibilisation-section">
                    <div className="container">
                        <div className="section-grid">
                            <div className="section-content">
                                <div className="section-header">
                                    <h2>Sensibilisation</h2>
                                    <div className="divider"></div>
                                </div>
                                <p className="section-description">
                                    Informer, échanger et agir pour briser les tabous autour de la santé mentale.
                                </p>

                                <ul className="action-list">
                                    {sensibilisationActions.map((action, index) => (
                                        <li key={index} className="action-item">
                                            <span className="action-icon">🗣️</span>
                                            {action}
                                        </li>
                                    ))}
                                </ul>

                                <div className="stats-card">
                                    <h3>Impact 2025</h3>
                                    <p className="stats-description">
                                        Activités de sensibilisation et enquêtes menées dans certains
                                        lycées techniques et professionnels d'Abidjan.
                                    </p>
                                    <div className="stats-number">
                                        <span className="number">81</span>
                                        <span className="label">élèves sensibilisés</span>
                                    </div>
                                </div>
                            </div>
                            <div className="section-image">
                                <div className="image-placeholder">
                                    <span className="placeholder-text">Image : Sensibilisation en milieu scolaire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Renforcement des capacités Section */}
                <section className="section formation-section">
                    <div className="container">
                        <div className="section-grid reverse">
                            <div className="section-image">
                                <div className="image-placeholder">
                                    <span className="placeholder-text">Image : Formation des professionnels</span>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="section-header">
                                    <h2>Renforcement des Capacités</h2>
                                    <div className="divider"></div>
                                </div>
                                <p className="section-description">
                                    Former les acteurs clés pour une prise en charge qualité de la santé mentale.
                                </p>
                                <p className="section-text">
                                    La Fondation mène des activités de renforcement de capacités sur le dépistage
                                    et la prise en charge en santé mentale des adolescents et jeunes. Elles
                                    s'adressent à des <strong>professionnels de santé</strong>, des
                                    <strong> travailleurs sociaux</strong> et des <strong>professionnels pédagogiques</strong>.
                                    L'objectif étant de faciliter l'accès et la qualité des soins pour tous.
                                </p>

                                {/* <div className="partnership-card">
                                <h3>Partenariat Stratégique</h3>
                                <p>
                                    En collaboration avec le <strong>Ministère en charge de la Santé</strong>,
                                    la Fondation La Fée Rima a initié une formation continue assurée par le :
                                </p>
                                <div className="partner-logo">
                                    <strong>CRESP</strong>
                                    <span>Centre de Formation, Ressources et d'Enseignement Supérieur en Psychologie</span>
                                </div>
                            </div>

                            <div className="formation-details">
                                <div className="cohort-info">
                                    <span className="cohort-number">50</span>
                                    <span className="cohort-label">professionnels formés (1ère cohorte)</span>
                                </div>
                                <h4>Thème de formation : Psychologie de l'enfant et de l'adolescent</h4>
                                <ul className="themes-list">
                                    {formationThemes.map((theme, index) => (
                                        <li key={index}>{theme}</li>
                                    ))}
                                </ul>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
                {/* CTA Section */}
                {/* <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ensemble, agissons pour la santé mentale des jeunes</h2>
                        <p>
                            Vous souhaitez vous impliquer, participer à nos formations ou organiser
                            une séance de sensibilisation dans votre structure ?
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">
                                Nous contacter
                            </Link>
                            <Link to="/espace-ressources" className="btn btn-secondary">
                                Explorer nos ressources
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            </main>
        </div>


    );
};

export default NosActions;