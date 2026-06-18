// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/NosSpecificites.css';

// const NosSpecificites = () => {
//     const teamRoles = [
//         "Pédopsychiatre",
//         "Psychologues",
//         "Éducateurs spécialisés",
//         "Infirmiers-psy",
//         "Orthophoniste",
//         "Art-thérapeute",
//         "Coach sportif",
//         "Référente cadre de vie"
//     ];

//     const activities = [
//         { icon: "🩺", text: "Diagnostic et prise en charge médicamenteuse" },
//         { icon: "", text: "Écoute active et bienveillante, thérapie individuelle" },
//         { icon: "🎓", text: "Accompagnement socio-éducatif et professionnel" },
//         { icon: "️", text: "Traitement des troubles du langage et de l’apprentissage" },
//         { icon: "🎨", text: "Expressions artistiques" },
//         { icon: "", text: "Éducation sportive" },
//         { icon: "🌿", text: "Ateliers thérapeutiques (pâtisserie, jardinage...)" }
//     ];

//     const pillars = [
//         {
//             id: 2,
//             title: "Approche Personnalisée",
//             icon: "📋",
//             text: (
//                 <>
//                     Un accompagnement adapté aux besoins et au rythme de chaque bénéficiaire, grâce à un
//                     <strong>Projet Personnalisé de Soins (PPS)</strong> définissant les objectifs précis à atteindre.
//                     <br /><br />
//                     Le bénéficiaire participe à l’élaboration de son projet. Le PPS est mis en place à partir de la
//                     mise en commun des appréciations du bénéficiaire, de sa famille et des évaluations professionnelles.
//                 </>
//             )
//         },
//         {
//             id: 3,
//             title: "Cadre Bienveillant et Sécurisé",
//             icon: "🛡️",
//             text: (
//                 <>
//                     La Fondation La Fée Rima offre un cadre moderne et attrayant où <strong>l’accueil est le premier soin</strong>.
//                     <br /><br />
//                     Les droits, la sécurité et la confidentialité sont garantis : respect de la dignité, protection de la
//                     vie privée, et accès à une information claire sur la prise en charge.
//                 </>
//             )
//         },
//         {
//             id: 4,
//             title: "Méthodes Validées et Innovantes",
//             icon: "💡",
//             text: (
//                 <>
//                     Des pratiques d’efficacité reconnue, actualisées selon les avancées scientifiques (comme les
//                     <strong> thérapies cognitivo-comportementales</strong> et l'art-thérapie).
//                     <br /><br />
//                     L’équipe s'actualise régulièrement grâce à la formation continue, à la veille scientifique et aux
//                     échanges professionnels pour proposer des interventions adaptées.
//                 </>
//             )
//         },
//         {
//             id: 5,
//             title: "Implication des Familles",
//             icon: "🤝",
//             text: (
//                 <>
//                     Les bénéficiaires et leurs familles participent activement au projet thérapeutique,
//                     dans le respect de leur rythme et de leurs capacités.
//                     <br /><br />
//                     Nous prônons une <strong>collaboration étroite avec la famille</strong> tout au long de l’accompagnement pour assurer
//                     une continuité des soins.
//                 </>
//             )
//         }
//     ];

//     return (
//         <div className="nos-specificites-page">
//             <Navbar />
//             <main>
//                 {/* Hero Section */}
//                 {/* Hero Section avec image de bannière */}
//                 <section className="page-hero specificites-hero">
//                     {/* Image de fond avec overlay */}
//                     <div className="hero-background">
//                         <img
//                             src="/assets/feerima/specificité.png"
//                             alt="Équipe pluridisciplinaire de La Fée Rima - Santé mentale des jeunes"
//                             className="hero-image"
//                             loading="eager"
//                         />
//                         <div className="hero-overlay"></div>
//                     </div>

//                     {/* Contenu texte */}
//                     <div className="hero-content">
//                         <h1>Nos Spécificités</h1>
//                         <p className="hero-subtitle">
//                             Un parcours de soins complet et humain, au cœur de la santé mentale des jeunes.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Section Équipe */}
//                 <section className="section team-section">
//                     <div className="container">
//                         <div className="section-header">
//                             <h2>Équipe Pluridisciplinaire</h2>
//                             <div className="divider"></div>
//                             <p className="section-intro">
//                                 Chaque bénéficiaire dispose d’un accès intégral à plusieurs professionnels qualifiés selon ses besoins.
//                             </p>
//                         </div>

//                         <div className="team-grid">
//                             <div className="team-roles-card">
//                                 <h3>Professionnels sur place</h3>
//                                 <ul className="roles-list">
//                                     {teamRoles.map((role, index) => (
//                                         <li key={index} className="role-item">
//                                             <span className="bullet">•</span> {role}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <div className="team-activities-card">
//                                 <h3>Nos interventions</h3>
//                                 <ul className="activities-list">
//                                     {activities.map((activity, index) => (
//                                         <li key={index} className="activity-item">
//                                             <span className="activity-icon">{activity.icon}</span>
//                                             <span>{activity.text}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Section Les 4 Piliers */}
//                 <section className="section pillars-section">
//                     <div className="container">
//                         <div className="section-header">
//                             <h2>Notre Approche</h2>
//                             <div className="divider"></div>
//                         </div>

//                         <div className="pillars-grid">
//                             {pillars.map((pillar) => (
//                                 <div key={pillar.id} className="pillar-card">
//                                     <div className="pillar-icon">{pillar.icon}</div>
//                                     <h3>{pillar.title}</h3>
//                                     <p>{pillar.text}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}

//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default NosSpecificites;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NosSpecificites.css';

const NosSpecificites = () => {
    // Animation au scroll (reveal)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const teamRoles = [
        'Pédopsychiatre',
        'Psychologues',
        'Éducateurs spécialisés',
        'Infirmiers-psy',
        'Orthophoniste',
        'Art-thérapeute',
        'Coach sportif',
        'Référente cadre de vie',
    ];

    const activities = [
        { /*icon: '🩺',*/ text: 'Diagnostic et prise en charge médicamenteuse' },
        { /*icon: '🧠',*/ text: 'Écoute active et bienveillante, thérapie individuelle' },
        { /*icon: '🎓',*/ text: 'Accompagnement socio-éducatif et professionnel' },
        { /*icon: '🗣️',*/ text: 'Traitement des troubles du langage et de l’apprentissage' },
        { /*icon: '🎨',*/ text: 'Expressions artistiques (art-thérapie)' },
        { /*icon: '🏃',*/ text: 'Éducation sportive adaptée' },
        { /*icon: '🌿',*/ text: 'Ateliers thérapeutiques (pâtisserie, jardinage...)' },
    ];

    const pillars = [
        {
            id: 2,
            title: 'Approche Personnalisée',
            // icon: '📋',
            text: (
                <>
                    Un accompagnement adapté aux besoins et au rythme de chaque bénéficiaire, grâce à un
                    <strong> Projet Personnalisé de Soins (PPS)</strong> définissant les objectifs précis à
                    atteindre.
                    <br />
                    <br />
                    Le bénéficiaire participe à l’élaboration de son projet. Le PPS est mis en place à partir
                    de la mise en commun des appréciations du bénéficiaire, de sa famille et des évaluations
                    professionnelles.
                </>
            ),
        },
        {
            id: 3,
            title: 'Cadre Bienveillant et Sécurisé',
            // icon: '🛡️',
            text: (
                <>
                    La Fondation La Fée Rima offre un cadre moderne et attrayant où{' '}
                    <strong>l’accueil est le premier soin</strong>.
                    <br />
                    <br />
                    Les droits, la sécurité et la confidentialité sont garantis : respect de la dignité,
                    protection de la vie privée, et accès à une information claire sur la prise en charge.
                </>
            ),
        },
        {
            id: 4,
            title: 'Méthodes Validées et Innovantes',
            // icon: '💡',
            text: (
                <>
                    Des pratiques d’efficacité reconnue, actualisées selon les avancées scientifiques (comme
                    les <strong>thérapies cognitivo-comportementales</strong> et l'art-thérapie).
                    <br />
                    <br />
                    L’équipe s'actualise régulièrement grâce à la formation continue, à la veille scientifique
                    et aux échanges professionnels pour proposer des interventions adaptées.
                </>
            ),
        },
        {
            id: 5,
            title: 'Implication des Familles',
            // icon: '🤝',
            text: (
                <>
                    Les bénéficiaires et leurs familles participent activement au projet thérapeutique, dans
                    le respect de leur rythme et de leurs capacités.
                    <br />
                    <br />
                    Nous prônons une <strong>collaboration étroite avec la famille</strong> tout au long de
                    l’accompagnement pour assurer une continuité des soins.
                </>
            ),
        },
    ];

    return (
        <div className="nos-specificites-page">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="page-hero specificites-hero">
                    <div className="hero-background">
                        <img
                            src="/assets/feerima/specifi.png"
                            alt="Équipe pluridisciplinaire de La Fée Rima - Santé mentale des jeunes"
                            className="hero-image"
                            loading="eager"
                        />
                        {/* <div className="hero-overlay"></div> */}
                    </div>
                    <div className="hero-content">
                        <h1>Nos Spécificités</h1>
                        <p className="hero-subtitle">
                            Un parcours de soins complet et humain, au cœur de la santé mentale des jeunes.
                        </p>
                        <Link to="/contact" className="btn btn-hero">
                            Prendre rendez-vous
                        </Link>
                    </div>
                </section>

                {/* Section Équipe */}
                <section className="section team-section reveal-on-scroll">
                    <div className="container">
                        <div className="section-header">
                            <h2>Équipe Pluridisciplinaire</h2>
                            <div className="divider"></div>
                            <p className="section-intro">
                                Chaque bénéficiaire dispose d’un accès intégral à plusieurs professionnels qualifiés
                                selon ses besoins.
                            </p>
                        </div>
                        <div className="team-grid">
                            <div className="team-roles-card card-hover">
                                <h3>
                                    {/* <span className="card-icon">👥</span> */} Professionnels sur place
                                </h3>
                                <ul className="roles-list">
                                    {teamRoles.map((role, index) => (
                                        <li key={index} className="role-item">
                                            <span className="bullet">✓</span> {role}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="team-activities-card card-hover">
                                <h3>
                                    {/* <span className="card-icon">⚙️</span> */} Nos interventions
                                </h3>
                                <ul className="activities-list">
                                    {activities.map((activity, index) => (
                                        <li key={index} className="activity-item">
                                            <span className="activity-icon" aria-hidden="true">
                                                {activity.icon}
                                            </span>
                                            <span>{activity.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Les 4 Piliers */}
                <section className="section pillars-section reveal-on-scroll">
                    <div className="container">
                        <div className="section-header">
                            <h2>Notre Approche</h2>
                            <div className="divider"></div>
                            <p className="section-intro">
                                Quatre piliers fondamentaux pour une prise en charge globale et respectueuse.
                            </p>
                        </div>
                        <div className="pillars-grid">
                            {pillars.map((pillar) => (
                                <div key={pillar.id} className="pillar-card card-hover">
                                    <div className="pillar-icon">{pillar.icon}</div>
                                    <h3>{pillar.title}</h3>
                                    <p>{pillar.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section CTA */}
                {/* <section className="cta-section">
                    <div className="container">
                        <div className="cta-content">
                            <h2>Prêt à démarrer l’accompagnement ?</h2>
                            <p>
                                Notre équipe est là pour répondre à vos questions et vous guider vers le parcours le
                                plus adapté.
                            </p>
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </section> */}
            </main>
            <Footer />
        </div>
    );
};

export default NosSpecificites;