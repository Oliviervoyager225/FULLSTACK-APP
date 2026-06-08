// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function ConsultationsExternes() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/consultation.png')" }}
//             >
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>QU'EST-CE QU'UNE CONSULTATION EXTERNE ?</h2>
//                         <p>
//                             Les consultations externes permettent à un jeune de bénéficier d'un
//                             suivi psychiatrique ou psychologique sans être hospitalisé. Elles
//                             sont proposées directement au sein de La Fée Rima, en journée, sur
//                             rendez-vous. Ce dispositif favorise la continuité des soins tout en
//                             maintenant le jeune dans son cadre de vie habituel (école, famille,
//                             activités).
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/consultation_ex.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/acc.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>COMMENT ACCÉDER AUX CONSULTATIONS?</h2>
//                         <p>
//                             L'accès aux consultations externes se fait sur orientation médicale
//                             (médecin traitant, pédiatre, urgences…) ou par démarche spontanée.
//                             Un premier rendez-vous d'évaluation est proposé afin de définir le
//                             plan de soins le plus adapté à la situation du jeune et de sa
//                             famille.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/acc1.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-3">
//                     <div className="hist-stacked-images">

//                         <div className="hist-stacked-images">
//                             <img
//                                 src="/assets/feerima/professionnel.png"
//                                 alt="Ma mission"
//                                 className="hist-image"
//                             />
//                         </div>
//                     </div>
//                     <div className="hist-content">
//                         <h2>LES PROFESSIONNELS IMPLIQUÉS</h2>
//                         <p>
//                             <strong>Une équipe pluridisciplinaire</strong>
//                             <br />
//                             Chaque consultation mobilise une équipe composée de psychiatres,
//                             psychologues, infirmiers et éducateurs spécialisés. Ensemble, ils
//                             assurent un suivi global qui prend en compte les dimensions médicale,
//                             psychologique et sociale du jeune.
//                         </p>
//                         <p>
//                             <strong>Un accompagnement de la famille</strong>
//                             <br />
//                             La famille est associée au parcours de soins dès le premier entretien.
//                             Des consultations familiales peuvent être proposées en complément du
//                             suivi individuel.
//                         </p>
//                     </div>
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

const ACCENT = '#109cdd';
const ACCENT_LIGHT = '#e0f2fe';
const GREEN = '#7cb518';
const GREEN_LIGHT = '#eaf3de';
const NAVY = '#1a3a5c';

const consultations = [
    {
        icon: '🧠',
        titre: 'Consultations pédopsychiatriques / psychiatriques',
        desc: "Diagnostic et prise en charge individualisée des troubles psychiques, comportementaux, de l'apprentissage, du neurodéveloppement, des conduites addictives et autres.",
    },
    {
        icon: '💬',
        titre: 'Consultations et bilans psychologiques',
        desc: "Évaluation et accompagnement du développement cognitif, émotionnel et comportemental à travers des entretiens, des outils et méthodes cliniques tel que la psychothérapie.",
    },
    {
        icon: '🗣️',
        titre: 'Consultations et bilans orthophoniques',
        desc: "Évaluation et rééducation des troubles de la parole, du langage oral et écrit, de la déglutition…",
    },
    {
        icon: '👨‍👩‍👧',
        titre: 'Thérapies familiales',
        desc: "Accompagnement des familles visant à améliorer la communication, à apaiser les tensions relationnelles et à renforcer les liens familiaux, dans le respect de chacun.",
    },
    {
        icon: '📚',
        titre: 'Consultations éducatives',
        desc: "Bilan et accompagnement des compétences d'autonomie : sociales, émotionnelles, scolaires, motrices…",
    },
    {
        icon: '🎨',
        titre: 'Consultations en art-thérapie',
        desc: "Ateliers individuels utilisant l'expression artistique pour explorer émotions et expériences. Médiums proposés : dessin, peinture, modelage, musique, collage, créations textiles et bijoux, etc.",
    },
];

export default function ConsultationsExternes() {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/consultation.png')" }}
            />

            <main style={{ background: '#f7f8fa', minHeight: '100vh' }}>

                {/* ── Section 1 : Qu'est-ce qu'une consultation externe ? ── */}
                <section style={{
                    maxWidth: '1100px', margin: '0 auto',
                    padding: '4rem 1.5rem 3rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                }}>
                    <div>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: '0.5rem' }}>
                            Dispositif ambulatoire
                        </p>
                        <h1 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: NAVY, margin: '0 0 1.25rem', lineHeight: 1.25 }}>
                            Qu'est-ce qu'une consultation externe ?
                        </h1>
                        <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
                            Les consultations externes permettent à un jeune de bénéficier d'un suivi psychiatrique ou psychologique <strong>sans être hospitalisé</strong>. Elles sont proposées directement au sein de La Fée Rima, en journée, sur rendez-vous.
                        </p>
                        <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.8, margin: '0.75rem 0 0' }}>
                            Ce dispositif favorise la continuité des soins tout en maintenant le jeune dans son cadre de vie habituel : école, famille, activités.
                        </p>
                    </div>
                    <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', background: '#dde6f0' }}>
                        <img src="/assets/feerima/consultation_ex.png" alt="Consultation externe" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </section>

                {/* ── Section 2 : Accès + Types de consultations ── */}
                <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 4rem' }}>

                    {/* Accès */}
                    <div style={{
                        background: '#fff', borderRadius: '16px',
                        border: '1.5px solid #e8edf2',
                        padding: '1.75rem 2rem',
                        marginBottom: '2rem',
                        display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}>
                        <span style={{
                            flexShrink: 0, width: '44px', height: '44px', borderRadius: '12px',
                            background: ACCENT_LIGHT, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', fontSize: '1.3rem',
                        }}>📅</span>
                        <div>
                            <p style={{ fontWeight: 800, fontSize: '1rem', color: NAVY, margin: '0 0 6px' }}>
                                Comment accéder aux consultations ?
                            </p>
                            <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.8, margin: 0 }}>
                                L'accès aux consultations se fait <strong>sur rendez-vous</strong>, à la suite d'une orientation médicale (médecin traitant, pédiatre, urgences…) ou par démarche spontanée. Un premier rendez-vous d'évaluation est proposé afin de définir le plan de soins le plus adapté à la situation du bénéficiaire et de sa famille.
                            </p>
                        </div>
                    </div>

                    {/* Titre section types */}
                    <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN, marginBottom: '4px' }}>
                            Nos spécialités
                        </p>
                        <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: NAVY, margin: 0 }}>
                            Les consultations
                        </h2>
                    </div>

                    {/* Grille des types de consultations */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '14px',
                        marginBottom: '1.5rem',
                    }}>
                        {consultations.map((c, i) => {
                            const isOpen = openIdx === i;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        background: '#fff',
                                        borderRadius: '14px',
                                        border: isOpen ? `1.5px solid ${ACCENT}50` : '1.5px solid #e8edf2',
                                        overflow: 'hidden',
                                        boxShadow: isOpen ? `0 4px 20px ${ACCENT}14` : '0 1px 4px rgba(0,0,0,0.04)',
                                        transition: 'box-shadow 0.25s, border-color 0.25s',
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenIdx(isOpen ? null : i)}
                                        style={{
                                            width: '100%', display: 'flex', alignItems: 'center',
                                            gap: '12px', padding: '1rem 1.25rem',
                                            background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                                        }}
                                    >
                                        <span style={{
                                            flexShrink: 0, width: '38px', height: '38px', borderRadius: '10px',
                                            background: isOpen ? ACCENT : ACCENT_LIGHT,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '1.1rem', transition: 'background 0.25s',
                                        }}>{c.icon}</span>
                                        <span style={{
                                            flex: 1, fontSize: '0.875rem', fontWeight: 700,
                                            color: isOpen ? ACCENT : NAVY,
                                            lineHeight: 1.4, transition: 'color 0.2s',
                                        }}>{c.titre}</span>
                                        <span style={{
                                            flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
                                            background: isOpen ? ACCENT_LIGHT : '#f1f5f9',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '0.9rem', fontWeight: 700,
                                            color: isOpen ? ACCENT : '#94a3b8',
                                            transform: isOpen ? 'rotate(45deg)' : 'none',
                                            transition: 'all 0.3s',
                                        }}>+</span>
                                    </button>
                                    {isOpen && (
                                        <div style={{
                                            padding: '0 1.25rem 1.1rem',
                                            borderTop: `1px solid ${ACCENT}20`,
                                        }}>
                                            <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.75, margin: '0.75rem 0 0' }}>
                                                {c.desc}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Bannière téléconsultation */}
                    <div style={{
                        background: `linear-gradient(135deg, ${NAVY} 0%, #1e6fa8 100%)`,
                        borderRadius: '16px',
                        padding: '1.5rem 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        color: '#fff',
                    }}>
                        <span style={{
                            flexShrink: 0, width: '48px', height: '48px', borderRadius: '14px',
                            background: 'rgba(255,255,255,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem',
                        }}>💻</span>
                        <div>
                            <p style={{ fontWeight: 800, fontSize: '0.9375rem', margin: '0 0 4px' }}>
                                Téléconsultation disponible
                            </p>
                            <p style={{ fontSize: '0.875rem', opacity: 0.85, lineHeight: 1.7, margin: 0 }}>
                                Pour plus de flexibilité, certaines consultations peuvent se dérouler à distance grâce à notre dispositif de téléconsultation, <strong>avec l'accord du professionnel concerné</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Section 3 : Les professionnels ── */}
                <section style={{
                    maxWidth: '1100px', margin: '0 auto',
                    padding: '0 1.5rem 4rem',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '3rem',
                    alignItems: 'center',
                }}>
                    <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', background: '#dde6f0' }}>
                        <img src="/assets/feerima/professionnel.png" alt="Professionnels" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN, marginBottom: '0.5rem' }}>
                            Notre équipe
                        </p>
                        <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: NAVY, margin: '0 0 1.5rem', lineHeight: 1.3 }}>
                            Les professionnels impliqués
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div style={{
                                display: 'flex', gap: '12px', alignItems: 'flex-start',
                                background: '#fff', borderRadius: '12px',
                                border: '1.5px solid #e8edf2', padding: '1rem 1.25rem',
                            }}>
                                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>👥</span>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '0.875rem', color: NAVY, margin: '0 0 4px' }}>
                                        Une équipe pluridisciplinaire
                                    </p>
                                    <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>
                                        Chaque consultation mobilise une équipe composée de psychiatres, psychologues, infirmiers et éducateurs spécialisés. Ensemble, ils assurent un suivi global qui prend en compte les dimensions médicale, psychologique et sociale du jeune.
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex', gap: '12px', alignItems: 'flex-start',
                                background: GREEN_LIGHT, borderRadius: '12px',
                                border: `1.5px solid ${GREEN}30`, padding: '1rem 1.25rem',
                            }}>
                                <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>🏠</span>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '0.875rem', color: '#27500A', margin: '0 0 4px' }}>
                                        Un accompagnement de la famille
                                    </p>
                                    <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>
                                        La famille est associée au parcours de soins dès le premier entretien. Des consultations familiales peuvent être proposées en complément du suivi individuel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA bas de page ── */}
                <section style={{ padding: '0 1.5rem 4rem' }}>
                    <div style={{
                        maxWidth: '1100px', margin: '0 auto',
                        background: `linear-gradient(135deg, ${NAVY} 0%, ${GREEN} 100%)`,
                        borderRadius: '20px', padding: '2.5rem 2rem',
                        textAlign: 'center', color: '#fff',
                    }}>
                        <p style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 0.5rem' }}>
                            Vous souhaitez prendre rendez-vous ?
                        </p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.5rem', lineHeight: 1.7 }}>
                            Notre secrétariat est disponible pour vous orienter et fixer un premier entretien d'évaluation.
                        </p>
                        <a href="/contact" style={{
                            display: 'inline-block', padding: '0.7rem 1.75rem',
                            background: '#fff', color: NAVY,
                            borderRadius: '50px', fontWeight: 800,
                            fontSize: '0.875rem', textDecoration: 'none',
                        }}>
                            Prendre rendez-vous →
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}