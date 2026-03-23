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


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const axes = [
    {
        titre: 'Innovation thérapeutique',
        icone: '🔬',
        description:
            'Nous développons et évaluons de nouveaux protocoles de soins adaptés aux spécificités de la psychiatrie infanto-juvénile, en intégrant les dernières avancées scientifiques.',
    },
    {
        titre: 'Recherche clinique',
        icone: '📋',
        description:
            'La Fée Rima participe à des études cliniques nationales et internationales visant à mieux comprendre les troubles psychiatriques chez les jeunes et à améliorer les prises en charge.',
    },
    {
        titre: 'Formation & enseignement',
        icone: '🎓',
        description:
            'Notre pôle contribue à la formation des professionnels de santé en accueillant des stagiaires, internes et chercheurs, et en animant des séminaires scientifiques.',
    },
    {
        titre: 'Partenariats académiques',
        icone: '🤝',
        description:
            'Nous collaborons avec des universités, des CHU et des instituts de recherche pour produire des travaux publiés dans des revues scientifiques à comité de lecture.',
    },
];

export default function PoleRechercheInnovation() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/hero8.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Pôle Recherche &amp; Innovation</h1>
                    <p>Repousser les frontières de la connaissance au service des jeunes</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>NOTRE MISSION</h2>
                        <p>
                            Le Pôle Recherche &amp; Innovation de La Fée Rima a pour mission de
                            soutenir le développement des connaissances en psychiatrie de l'adolescent
                            et du jeune adulte. En liant étroitement la pratique clinique et la
                            démarche scientifique, nous contribuons à l'amélioration des soins pour
                            les jeunes de 10 à 25 ans, aujourd'hui et demain.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/mission.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                {/* Axes de recherche */}
                <section style={{ padding: '3rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '2.5rem', color: '#1a3a5c', textAlign: 'center' }}>
                        NOS AXES DE RECHERCHE
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1.5rem',
                        }}
                    >
                        {axes.map((axe, i) => (
                            <div
                                key={i}
                                style={{
                                    background: '#fff',
                                    borderRadius: '16px',
                                    padding: '2.5rem 2rem',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.09)',
                                    textAlign: 'center',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.13)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.09)';
                                }}
                            >
                                <div
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        background: '#f0f7e6',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '28px',
                                        flexShrink: 0,
                                    }}
                                >
                                    {axe.icone}
                                </div>
                                <h3 style={{ color: '#7cb518', margin: 0, fontSize: '1.05rem', fontWeight: 500 }}>
                                    {axe.titre}
                                </h3>
                                <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
                                    {axe.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero4.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>REJOINDRE NOS TRAVAUX</h2>
                        <p>
                            Vous êtes chercheur, interne en psychiatrie ou étudiant en sciences de
                            la santé ? La Fée Rima ouvre ses portes aux profils motivés souhaitant
                            contribuer à ses programmes de recherche. Contactez notre pôle pour
                            découvrir les opportunités disponibles.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('data:image/jpeg;base64,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')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>
            </main>

            <Footer />
        </div>
    );
}