// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const axes = [
//     {
//         titre: 'Innovation thérapeutique',
//         icone: '🔬',
//         description:
//             'Nous développons et évaluons de nouveaux protocoles de soins adaptés aux spécificités de la psychiatrie infanto-juvénile, en intégrant les dernières avancées scientifiques.',
//     },
//     {
//         titre: 'Recherche clinique',
//         icone: '📋',
//         description:
//             'La Fée Rima participe à des études cliniques nationales et internationales visant à mieux comprendre les troubles psychiatriques chez les jeunes et à améliorer les prises en charge.',
//     },
//     {
//         titre: 'Formation & enseignement',
//         icone: '🎓',
//         description:
//             'Notre pôle contribue à la formation des professionnels de santé en accueillant des stagiaires, internes et chercheurs, et en animant des séminaires scientifiques.',
//     },
//     {
//         titre: 'Partenariats académiques',
//         icone: '🤝',
//         description:
//             'Nous collaborons avec des universités, des CHU et des instituts de recherche pour produire des travaux publiés dans des revues scientifiques à comité de lecture.',
//     },
// ];

// export default function PoleRechercheInnovation() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/hero8.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Pôle Recherche &amp; Innovation</h1>
//                     <p>Repousser les frontières de la connaissance au service des jeunes</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>NOTRE MISSION</h2>
//                         <p>
//                             Le Pôle Recherche &amp; Innovation de La Fée Rima a pour mission de
//                             soutenir le développement des connaissances en psychiatrie de l'adolescent
//                             et du jeune adulte. En liant étroitement la pratique clinique et la
//                             démarche scientifique, nous contribuons à l'amélioration des soins pour
//                             les jeunes de 10 à 25 ans, aujourd'hui et demain.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/hero2.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 {/* Axes de recherche */}
//                 <section style={{ padding: '3rem 2rem', maxWidth: '950px', margin: '0 auto' }}>
//                     <h2 style={{ marginBottom: '2rem', color: '#1a3a5c', textAlign: 'center' }}>
//                         NOS AXES DE RECHERCHE
//                     </h2>
//                     <div
//                         style={{
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
//                             gap: '1.5rem',
//                         }}
//                     >
//                         {axes.map((axe, i) => (
//                             <div
//                                 key={i}
//                                 style={{
//                                     background: '#fff',
//                                     borderRadius: '12px',
//                                     padding: '1.75rem 1.25rem',
//                                     boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
//                                     textAlign: 'center',
//                                     transition: 'transform 0.2s',
//                                 }}
//                                 onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
//                                 onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
//                             >
//                                 <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{axe.icone}</div>
//                                 <h3 style={{ color: '#7cb518', marginBottom: '0.75rem', fontSize: '1rem' }}>
//                                     {axe.titre}
//                                 </h3>
//                                 <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.6 }}>{axe.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/hero4.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>REJOINDRE NOS TRAVAUX</h2>
//                         <p>
//                             Vous êtes chercheur, interne en psychiatrie ou étudiant en sciences de
//                             la santé ? La Fée Rima ouvre ses portes aux profils motivés souhaitant
//                             contribuer à ses programmes de recherche. Contactez notre pôle pour
//                             découvrir les opportunités disponibles.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/images.jpg')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

// code de base
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const axes = [
//     {
//         titre: 'Innovation thérapeutique',
//         icone: '🔬',
//         description:
//             'Nous développons et évaluons de nouveaux protocoles de soins adaptés aux spécificités de la psychiatrie infanto-juvénile, en intégrant les dernières avancées scientifiques.',
//     },
//     {
//         titre: 'Recherche clinique',
//         icone: '📋',
//         description:
//             'La Fée Rima participe à des études cliniques nationales et internationales visant à mieux comprendre les troubles psychiatriques chez les jeunes et à améliorer les prises en charge.',
//     },
//     {
//         titre: 'Formation & enseignement',
//         icone: '🎓',
//         description:
//             'Notre pôle contribue à la formation des professionnels de santé en accueillant des stagiaires, internes et chercheurs, et en animant des séminaires scientifiques.',
//     },
//     {
//         titre: 'Partenariats académiques',
//         icone: '🤝',
//         description:
//             'Nous collaborons avec des universités, des CHU et des instituts de recherche pour produire des travaux publiés dans des revues scientifiques à comité de lecture.',
//     },
// ];

// export default function PoleRechercheInnovation() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/recherche.png')" }}
//             >
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         {/* <h2>MISSIONS</h2> */}
//                         <p>
//                             Ce pôle va permettre de générer de nouvelles connaissances sur les problèmes de santé mentale dans le contexte ivoirien particulièrement chez les adolescents et jeunes.

//                         </p>
//                         <p>
//                             Elle va permettre également de déstigmatiser les maladies mentales par une meilleure compréhension scientifique et une sensibilisation accrue.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/mission.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 {/* Axes de recherche */}
//                 <section style={{ padding: '3rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
//                     <h2 style={{ marginBottom: '2.5rem', color: '#1a3a5c', textAlign: 'center' }}>
//                         {/* NOS AXES DE RECHERCHE */}
//                         MISSIONS
//                     </h2>
//                     <div
//                         style={{
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(2, 1fr)',
//                             gap: '1.5rem',
//                         }}
//                     >
//                         {axes.map((axe, i) => (
//                             <div
//                                 key={i}
//                                 style={{
//                                     background: '#fff',
//                                     borderRadius: '16px',
//                                     padding: '2.5rem 2rem',
//                                     boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
//                                     textAlign: 'center',
//                                     transition: 'transform 0.2s, box-shadow 0.2s',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     gap: '1rem',
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.currentTarget.style.transform = 'translateY(-5px)';
//                                     e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.13)';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.currentTarget.style.transform = 'translateY(0)';
//                                     e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.09)';
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         width: '64px',
//                                         height: '64px',
//                                         borderRadius: '50%',
//                                         background: '#f0f7e6',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         fontSize: '28px',
//                                         flexShrink: 0,
//                                     }}
//                                 >
//                                     {axe.icone}
//                                 </div>
//                                 <h3 style={{ color: '#7cb518', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>
//                                     {axe.titre}
//                                 </h3>
//                                 <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
//                                     {axe.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/travaux.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>REJOINDRE NOS TRAVAUX</h2>
//                         <p>
//                             Vous êtes chercheur, interne en psychiatrie ou étudiant en sciences de
//                             la santé ? La Fée Rima ouvre ses portes aux profils motivés souhaitant
//                             contribuer à ses programmes de recherche. Contactez notre pôle pour
//                             découvrir les opportunités disponibles.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/travaux1.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const missions = [
    {
        numero: '01',
        titre: 'Révolutionner le Diagnostic et la Prise en Charge',
        icone: '🔬',
        color: '#185FA5',
        colorLight: '#E6F1FB',
        points: [
            {
                label: 'Outils de suivi personnalisé',
                detail: 'Développer des outils biologiques ou d\'imagerie pour un suivi personnalisé de l\'efficacité des traitements.',
            },
            {
                label: 'Réduction de l\'errance thérapeutique',
                detail: 'Créer des parcours de soins mieux coordonnés pour limiter les délais et ruptures de prise en charge.',
            },
        ],
    },
    {
        numero: '02',
        titre: 'Innover dans la Prévention et la Promotion',
        icone: '🌱',
        color: '#3B6D11',
        colorLight: '#EAF3DE',
        points: [
            {
                label: 'Repérage précoce',
                detail: 'Mettre en place des stratégies de dépistage rapide, notamment chez les jeunes et adolescents, pour éviter l\'aggravation des troubles.',
            },
            {
                label: 'Interventions non médicamenteuses (INM)',
                detail: 'Évaluer et intégrer des méthodes basées sur le mode de vie : sport, nutrition, méditation.',
            },
        ],
    },
    {
        numero: '03',
        titre: 'Valoriser l\'Impact et la Coordination de la Recherche',
        icone: '🤝',
        color: '#534AB7',
        colorLight: '#EEEDFE',
        points: [
            {
                label: 'Collaboration interdisciplinaire',
                detail: 'Faire travailler ensemble chercheurs, cliniciens, patients (approche participative) et entreprises technologiques.',
            },
            {
                label: 'Structuration de la recherche',
                detail: 'Créer des cohortes de patients, des registres et des infrastructures de données pour accélérer la découverte scientifique.',
            },
            {
                label: 'Accès rapide aux innovations',
                detail: 'Permettre aux patients de bénéficier de nouvelles thérapies dès leur validation.',
            },
        ],
    },
    {
        numero: '04',
        titre: 'Réduire l\'Impact Socio-Économique',
        icone: '📈',
        color: '#854F0B',
        colorLight: '#FAEEDA',
        points: [
            {
                label: 'Diminution des hospitalisations',
                detail: 'Optimiser le suivi ambulatoire pour réduire les réadmissions et alléger la charge sur les structures de soins.',
            },
            {
                label: 'Amélioration de la réinsertion',
                detail: 'Faciliter le retour ou le maintien dans l\'emploi et la vie sociale des bénéficiaires.',
            },
        ],
    },
];

function MissionCard({ mission, index }) {
    const [open, setOpen] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <div
            style={{
                background: '#fff',
                borderRadius: '16px',
                border: open ? `1.5px solid ${mission.color}40` : '1.5px solid #e8edf2',
                overflow: 'hidden',
                transition: 'box-shadow 0.25s, border-color 0.25s',
                boxShadow: open ? `0 8px 32px ${mission.color}14` : '0 2px 8px rgba(0,0,0,0.05)',
            }}
        >
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                }}
            >
                {/* Numéro */}
                <span style={{
                    flexShrink: 0,
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: open ? mission.color : mission.colorLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    color: open ? '#fff' : mission.color,
                    transition: 'background 0.25s, color 0.25s',
                }}>
                    {mission.numero}
                </span>

                {/* Icone + titre */}
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <span style={{ fontSize: '1rem' }}>{mission.icone}</span>
                        <span style={{
                            fontSize: '0.9375rem',
                            fontWeight: 700,
                            color: open ? mission.color : '#1a3a5c',
                            lineHeight: 1.4,
                            transition: 'color 0.2s',
                        }}>
                            {mission.titre}
                        </span>
                    </div>
                    <p style={{
                        fontSize: '0.8rem',
                        color: '#94a3b8',
                        margin: 0,
                        fontWeight: 500,
                    }}>
                        {mission.points.length} axe{mission.points.length > 1 ? 's' : ''} d'action
                    </p>
                </div>

                {/* Toggle */}
                <span style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: open ? mission.colorLight : '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: open ? mission.color : '#94a3b8',
                    transform: open ? 'rotate(45deg)' : 'none',
                    transition: 'all 0.3s',
                }}>
                    +
                </span>
            </button>

            {/* Body */}
            {open && (
                <div style={{
                    borderTop: `1px solid ${mission.color}20`,
                    padding: '1.25rem 1.5rem 1.5rem',
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {mission.points.map((pt, j) => (
                            <div key={j} style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'flex-start',
                                padding: '0.875rem 1rem',
                                background: mission.colorLight,
                                borderRadius: '10px',
                            }}>
                                <span style={{
                                    flexShrink: 0,
                                    marginTop: '2px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: mission.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.65rem',
                                    fontWeight: 800,
                                    color: '#fff',
                                }}>
                                    {j + 1}
                                </span>
                                <div>
                                    <p style={{
                                        margin: '0 0 3px',
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        color: mission.color,
                                    }}>
                                        {pt.label}
                                    </p>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '0.875rem',
                                        color: '#4a5568',
                                        lineHeight: 1.7,
                                    }}>
                                        {pt.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function PoleRechercheInnovation() {
    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/recherche.png')" }}
            />

            <main style={{ background: '#f7f8fa', minHeight: '100vh' }}>

                {/* ── Section intro ── */}
                <section style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '4rem 1.5rem 2rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                }}>
                    <div>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#7cb518',
                            marginBottom: '0.75rem',
                        }}>
                            Pôle scientifique
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                            fontWeight: 800,
                            color: '#1a3a5c',
                            margin: '0 0 1.25rem',
                            lineHeight: 1.25,
                        }}>
                            Recherche &amp; Innovation
                        </h1>
                        <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.8, margin: '0 0 0.875rem' }}>
                            Ce pôle va permettre de générer de nouvelles connaissances sur les problèmes de santé mentale dans le contexte ivoirien, particulièrement chez les adolescents et les jeunes.
                        </p>
                        <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
                            Il va permettre également de déstigmatiser les maladies mentales par une meilleure compréhension scientifique et une sensibilisation accrue.
                        </p>
                    </div>

                    <div style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        aspectRatio: '4/3',
                        background: '#e2e8f0',
                    }}>
                        <img
                            src="/assets/feerima/mission.png"
                            alt="Mission recherche"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                {/* ── Stats rapides ── */}
                <section style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 1.5rem 3rem',
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '12px',
                    }}>
                        {[
                            { val: '4', label: 'Axes de mission', icon: '🎯' },
                            { val: '10+', label: 'Partenaires académiques', icon: '🏛️' },
                            { val: '100%', label: 'Dédié aux jeunes', icon: '👥' },
                            { val: '∞', label: 'Impact attendu', icon: '🌍' },
                        ].map((stat, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                border: '1.5px solid #e8edf2',
                                borderRadius: '14px',
                                padding: '1.25rem 1rem',
                                textAlign: 'center',
                            }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{stat.icon}</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a3a5c', lineHeight: 1 }}>{stat.val}</div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px', fontWeight: 600 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Missions ── */}
                <section style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 1.5rem 4rem',
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#7cb518',
                            marginBottom: '0.4rem',
                        }}>
                            Nos axes stratégiques
                        </p>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: '#1a3a5c',
                            margin: 0,
                        }}>
                            Missions
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {missions.map((mission, i) => (
                            <MissionCard key={i} mission={mission} index={i} />
                        ))}
                    </div>
                </section>

                {/* ── Rejoindre nos travaux ── */}
                <section style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 1.5rem 3rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '2.5rem',
                    alignItems: 'center',
                }}>
                    <div style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        aspectRatio: '4/3',
                        background: '#e2e8f0',
                    }}>
                        <img
                            src="/assets/feerima/travaux.png"
                            alt="Rejoindre les travaux"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#7cb518',
                            marginBottom: '0.75rem',
                        }}>
                            Nous rejoindre
                        </p>
                        <h2 style={{
                            fontSize: '1.375rem',
                            fontWeight: 800,
                            color: '#1a3a5c',
                            margin: '0 0 1rem',
                            lineHeight: 1.3,
                        }}>
                            Rejoindre nos travaux
                        </h2>
                        <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            Vous êtes chercheur, interne en psychiatrie ou étudiant en sciences de la santé ? La Fée Rima ouvre ses portes aux profils motivés souhaitant contribuer à ses programmes de recherche.
                        </p>
                        <a href="/contact" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '0.7rem 1.5rem',
                            background: '#7cb518',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            letterSpacing: '0.02em',
                        }}>
                            Nous contacter <span>→</span>
                        </a>
                    </div>
                </section>

                {/* ── Bannière "Prochainement" ── */}
                <section style={{ padding: '0 1.5rem 4rem' }}>
                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)',
                        borderRadius: '20px',
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        color: '#fff',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Décoration */}
                        <div style={{
                            position: 'absolute',
                            top: '-40px',
                            right: '-40px',
                            width: '160px',
                            height: '160px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.06)',
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-30px',
                            left: '-30px',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.06)',
                        }} />

                        <span style={{
                            display: 'inline-block',
                            padding: '4px 16px',
                            borderRadius: '20px',
                            background: 'rgba(255,255,255,0.15)',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                        }}>
                            🔭 À venir
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                            fontWeight: 800,
                            margin: '0 0 0.875rem',
                            lineHeight: 1.3,
                        }}>
                            Découvrez prochainement nos recherches et innovations en cours
                        </h2>
                        <p style={{
                            fontSize: '0.9375rem',
                            opacity: 0.85,
                            maxWidth: '520px',
                            margin: '0 auto 1.5rem',
                            lineHeight: 1.7,
                        }}>
                            Notre équipe travaille activement à la publication de nos premiers travaux scientifiques. Restez connectés.
                        </p>
                        <a href="/contact" style={{
                            display: 'inline-block',
                            padding: '0.7rem 1.75rem',
                            background: '#fff',
                            color: '#1a3a5c',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                        }}>
                            Être notifié
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}