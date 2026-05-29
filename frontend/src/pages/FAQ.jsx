// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const faqData = [
//     {
//         question: 'Comment prendre un premier rendez-vous à La Fée Rima ?',
//         answer:
//             "Vous pouvez contacter notre secrétariat par téléphone ou via le formulaire en ligne sur notre site. Une orientation médicale préalable est recommandée mais pas toujours obligatoire selon la situation.",
//     },
//     {
//         question: 'La prise en charge est-elle remboursée par la Sécurité Sociale ?',
//         answer:
//             "Oui, la majorité de nos prestations sont prises en charge par l'Assurance Maladie. Le taux de remboursement dépend de votre situation et de votre complémentaire santé.",
//     },
//     {
//         question: "Quelles tranches d'âge sont accueillies ?",
//         answer:
//             "La Fée Rima accompagne les jeunes et adolescents de 10 à 25 ans présentant des besoins en santé mentale.",
//     },
//     {
//         question: "Peut-on venir sans rendez-vous en cas d'urgence ?",
//         answer:
//             "Oui. Notre service d'accueil d'urgence est accessible sans rendez-vous. En cas de situation de crise, n'hésitez pas à vous présenter directement à l'établissement.",
//     },
//     {
//         question: 'Les familles peuvent-elles être impliquées dans le suivi ?',
//         answer:
//             "Absolument. La Fée Rima encourage la participation des familles dans le parcours de soins. Des consultations familiales et des espaces d'échange sont proposés régulièrement.",
//     },
//     {
//         question: 'Où se situe La Fée Rima ?',
//         answer:
//             "Retrouvez notre adresse complète, ainsi qu'un plan d'accès, dans la section Contact de notre site ou en bas de page.",
//     },
// ];


// // export default function FAQ() {
// //     const [openIndex, setOpenIndex] = useState(null);

// //     const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

// //     return (
// //         <div className="historique-page">
// //             <Navbar />

// //             <section
// //                 className="page-hero"
// //                 style={{ backgroundImage: "url('/assets/feerima/hero3.png')" }}
// //             >
// //                 <div className="page-hero-content">
// //                     <h1>FAQ</h1>
// //                     <p>Les réponses aux questions les plus fréquentes</p>
// //                 </div>
// //             </section>

// //             <main className="historique-main">
// //                 <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
// //                     <div className="hist-content" style={{ maxWidth: '800px', width: '100%' }}>
// //                         <h2 style={{ marginBottom: '1.5rem' }}>VOS QUESTIONS, NOS RÉPONSES</h2>

// //                         {faqData.map((item, i) => (
// //                             <div
// //                                 key={i}
// //                                 style={{
// //                                     marginBottom: '1rem',
// //                                     borderRadius: '10px',
// //                                     overflow: 'hidden',
// //                                     boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
// //                                     background: '#fff',
// //                                 }}
// //                             >
// //                                 <button
// //                                     onClick={() => toggle(i)}
// //                                     aria-expanded={openIndex === i}
// //                                     style={{
// //                                         width: '100%',
// //                                         display: 'flex',
// //                                         justifyContent: 'space-between',
// //                                         alignItems: 'center',
// //                                         padding: '1.1rem 1.25rem',
// //                                         background: openIndex === i ? '#7cb518' : '#f9f9f9',
// //                                         color: openIndex === i ? '#fff' : '#1a3a5c',
// //                                         border: 'none',
// //                                         cursor: 'pointer',
// //                                         fontWeight: 600,
// //                                         fontSize: '0.97rem',
// //                                         textAlign: 'left',
// //                                         transition: 'background 0.25s, color 0.25s',
// //                                     }}
// //                                 >
// //                                     {item.question}
// //                                     <span style={{ marginLeft: '1rem', fontSize: '1.25rem', lineHeight: 1 }}>
// //                                         {openIndex === i ? '−' : '+'}
// //                                     </span>
// //                                 </button>
// //                                 {openIndex === i && (
// //                                     <div
// //                                         style={{
// //                                             padding: '1rem 1.25rem',
// //                                             borderTop: '1px solid #e5e7eb',
// //                                             color: '#444',
// //                                             lineHeight: 1.7,
// //                                         }}
// //                                     >
// //                                         {item.answer}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </section>
// //             </main>

// //             <Footer />
// //         </div>
// //     );
// // }

// import React, { useState } from "react";

// const faqData = [
//     {
//         question: "Proposez-vous des bilans psychologiques ?",
//         answer:
//             "Oui, nous proposons des bilans psychologiques réalisés par des professionnels qualifiés."
//     },
//     {
//         question: "Que faire si le thérapeute ne me convient pas ?",
//         answer:
//             "Vous pouvez demander un changement de thérapeute. Notre équipe vous aidera à trouver la meilleure solution."
//     },
//     {
//         question: "Quelles sont vos mesures d'accessibilité ?",
//         answer:
//             "Notre établissement est accessible aux personnes à mobilité réduite et nous proposons plusieurs moyens de communication."
//     },
//     {
//         question: "Que faire en cas d'urgence ou de crise ?",
//         answer:
//             "En cas d'urgence, veuillez contacter immédiatement les services d'urgence ou vous rendre dans l'établissement le plus proche."
//     }
// ];

// export default function FAQ() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggle = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div style={{ maxWidth: "800px", margin: "auto" }}>
//             <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
//                 Questions Fréquentes
//             </h2>

//             {faqData.map((item, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         border: "1px solid #d4a373",
//                         borderRadius: "6px",
//                         marginBottom: "15px",
//                         overflow: "hidden"
//                     }}
//                 >
//                     <button
//                         onClick={() => toggle(index)}
//                         style={{
//                             width: "100%",
//                             padding: "15px",
//                             display: "flex",
//                             justifyContent: "space-between",
//                             background: "#f5efe6",
//                             border: "none",
//                             cursor: "pointer",
//                             fontWeight: "bold"
//                         }}
//                     >
//                         {item.question}
//                         <span>{openIndex === index ? "−" : "→"}</span>
//                     </button>

//                     {openIndex === index && (
//                         <div style={{ padding: "15px", background: "#fff" }}>
//                             {item.answer}
//                         </div>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const faqData = [
    {
        question: 'Comment prendre un premier rendez-vous à La Fée Rima ?',
        answer:
            "Vous pouvez contacter notre secrétariat par téléphone ou via le formulaire en ligne sur notre site. Une orientation médicale préalable est recommandée mais pas toujours obligatoire selon la situation.",
    },
    {
        question: 'La prise en charge est-elle remboursée par la Sécurité Sociale ?',
        answer:
            "Oui, la majorité de nos prestations sont prises en charge par l'Assurance Maladie. Le taux de remboursement dépend de votre situation et de votre complémentaire santé.",
    },
    {
        question: "Quelles tranches d'âge sont accueillies ?",
        answer:
            "La Fée Rima accompagne les jeunes et adolescents de 10 à 25 ans présentant des besoins en santé mentale.",
    },
    {
        question: "Peut-on venir sans rendez-vous en cas d'urgence ?",
        answer:
            "Oui. Notre service d'accueil d'urgence est accessible sans rendez-vous. En cas de situation de crise, n'hésitez pas à vous présenter directement à l'établissement.",
    },
    {
        question: 'Les familles peuvent-elles être impliquées dans le suivi ?',
        answer:
            "Absolument. La Fée Rima encourage la participation des familles dans le parcours de soins. Des consultations familiales et des espaces d'échange sont proposés régulièrement.",
    },
    {
        question: 'Où se situe La Fée Rima ?',
        answer:
            "Retrouvez notre adresse complète, ainsi qu'un plan d'accès, dans la section Contact de notre site ou en bas de page.",
    },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}
            >
                <div className="page-hero-content">
                    <h1>FAQ</h1>
                    <p>Les réponses aux questions les plus fréquentes</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <div className="hist-content" style={{ maxWidth: '1000px', width: '100%' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>VOS QUESTIONS, NOS RÉPONSES</h2>
                        {faqData.map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    marginBottom: '1rem',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                                    background: '#fff',
                                }}
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    aria-expanded={openIndex === i}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1.1rem 1.25rem',
                                        background: openIndex === i ? '#7cb518' : '#f9f9f9',
                                        color: openIndex === i ? '#fff' : '#1a3a5c',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '1.0rem',
                                        textAlign: 'left',
                                        transition: 'background 0.25s, color 0.25s',
                                    }}
                                >
                                    {item.question}
                                    <span style={{ marginLeft: '1rem', fontSize: '1.25rem', lineHeight: 1 }}>
                                        {openIndex === i ? '−' : '+'}
                                    </span>
                                </button>
                                {openIndex === i && (
                                    <div
                                        style={{
                                            padding: '1rem 1.25rem',
                                            borderTop: '1px solid #e5e7eb',
                                            color: '#444',
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
