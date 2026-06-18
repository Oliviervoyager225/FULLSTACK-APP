import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HandHeart, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import '../styles/MiseObservation.css';

const orientationData = [
    {
        title: "Les consultations",
        desc: "Un suivi ambulatoire adapté, en lien avec les professionnels de santé mentale.",
    },
    {
        title: "L'hôpital de jour",
        desc: "Une prise en charge intensive à temps partiel, sans hospitalisation complète.",
    },
    {
        title: "Une hospitalisation",
        desc: "Un accompagnement en continu pour les situations nécessitant une prise en charge plus poussée.",
    },
];

export default function MiseObservation() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('mo-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.mo-fade-up').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="mise-observation-page">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="mo-hero">
                    <div className="mo-hero-background">
                        {/* <img
                            src="/assets/feerima/urgence.png"
                            alt="Mise en observation - La Fée Rima"
                            className="mo-hero-image"
                            loading="eager"
                        /> */}
                        <div className="mo-hero-overlay"></div>
                    </div>
                    <div className="mo-hero-content mo-fade-up">
                        <h1>La Mise en Observation</h1>
                        <p className="mo-hero-subtitle">Une réponse rapide et adaptée pour sécuriser le bénéficiaire en situation de crise</p>
                        <Link to="/contact" className="mo-btn-hero">Nous contacter</Link>
                    </div>
                </section>

                {/* Introduction */}
                <section className="mo-section mo-intro-section">
                    <div className="mo-container">
                        <div className="mo-section-header mo-fade-up">
                            <h2>Notre équipe à votre écoute</h2>
                            <div className="mo-divider"></div>
                        </div>
                        <div className="mo-intro-grid">
                            <div className="mo-intro-text mo-fade-up">
                                <p>
                                    Dans ce service, notre équipe pluridisciplinaire intervient auprès des adolescents et jeunes en
                                    souffrance psychique : situation de crise, comportement à risque, repli sur soi.
                                </p>
                                <p className="mo-highlight-note">
                                    Notre équipe intervient avec <strong>calme et bienveillance</strong>, afin de sécuriser le bénéficiaire,
                                    rassurer la famille et d'évaluer la situation dans les meilleures conditions. Une mise en observation
                                    est proposée afin d'apporter une réponse rapide et adaptée.
                                </p>
                            </div>
                            <div className="mo-intro-features mo-fade-up">
                                <div className="mo-feature-card">
                                    <ShieldCheck size={40} strokeWidth={1.8} />
                                    <h3>Sécurisation</h3>
                                    <p>Du bénéficiaire et de son entourage</p>
                                </div>
                                <div className="mo-feature-card">
                                    <HandHeart size={40} strokeWidth={1.8} />
                                    <h3>Bienveillance</h3>
                                    <p>Une écoute calme et rassurante</p>
                                </div>
                                <div className="mo-feature-card">
                                    <Zap size={40} strokeWidth={1.8} />
                                    <h3>Réponse rapide</h3>
                                    <p>Une prise en charge immédiate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Évaluation et orientation */}
                <section className="mo-section mo-evaluation-section">
                    <div className="mo-container">
                        <div className="mo-section-header mo-fade-up">
                            <h2>Une évaluation complète</h2>
                            <div className="mo-divider"></div>
                        </div>
                        <p className="mo-evaluation-intro mo-fade-up">
                            Chaque admission fait l'objet d'une <strong>évaluation médico-psychologique approfondie</strong>.
                            Ensuite, une orientation vers les consultations, l'hôpital de jour ou une hospitalisation peut être proposée.
                        </p>
                        <div className="mo-orientation-grid">
                            {orientationData.map((step, index) => (
                                <div key={index} className="mo-orientation-step mo-fade-up">
                                    <div className="mo-step-number">{String(index + 1).padStart(2, '0')}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                {/* <section className="mo-section mo-cta-section">
                    <div className="mo-container">
                        <div className="mo-cta-content mo-fade-up">
                            <h2>Une situation de crise ?</h2>
                            <p>Notre équipe est disponible pour vous accompagner et répondre à vos questions.</p>
                            <Link to="/contact" className="mo-btn-primary">Contactez-nous</Link>
                        </div>
                    </div>
                </section> */}
            </main>
            {/* <Footer /> */}
        </div>
    );
}
