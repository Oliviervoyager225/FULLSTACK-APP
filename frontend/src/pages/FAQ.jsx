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
import '../styles/PageHero.css';

const categoryConfig = {
    'Fondamentaux': { color: '#185FA5', bg: '#E6F1FB', icon: '💡' },
    'Conseils': { color: '#3B6D11', bg: '#EAF3DE', icon: '🌱' },
    "Signes d'alerte": { color: '#854F0B', bg: '#FAEEDA', icon: '⚠️' },
    'Agir': { color: '#993556', bg: '#FBEAF0', icon: '🤝' },
    'Professionnels': { color: '#534AB7', bg: '#EEEDFE', icon: '🏥' },
};

const faqData = [
    {
        category: 'Fondamentaux',
        question: "Qu'est-ce que la santé mentale ?",
        answer: [
            {
                type: 'text',
                content:
                    "La santé mentale est une composante de notre santé au même titre que la santé physique. L’Organisation mondiale de la santé (OMS) explique qu’« il n’y pas de santé sans santé mentale ». Elle définit la santé mentale comme « un état de bien-être dans lequel une personne peut se réaliser, surmonter les tensions normales de la vie, accomplir un travail productif et contribuer à la vie de sa communauté ».",
            },
            {
                type: 'text',
                content:
                    "Selon Psycom, la santé mentale est une affaire d’équilibre entre les ressources qu’une personne peut mobiliser pour se sentir bien, et les obstacles qu’elle rencontre au cours de sa vie.  Cet équilibre n’est pas figé : il évolue en permanence. Il peut être brisé puis rétabli. Ainsi, tout le monde connaît des périodes de bien-être et de mal-être.",
            },
        ],
    },
    {
        category: 'Fondamentaux',
        question: 'Quelle est la différence entre santé mentale et maladie mentale ?',
        answer: [
            {
                type: 'text',
                content:
                    "La maladie mentale est la détérioration de la santé mentale. Sur le plan de la santé physique, on fait référence à des maladies tels que le paludisme, la fièvre typhoïde… Au niveau de la santé mentale, cette dégradation peut se manifester par la dépression, l’anxiété généralisée, l’addiction……",
            },
            {
                type: 'text',
                content:
                    'Tout le monde peut un jour être atteint par une maladie mentale. Grâce à une prise en charge adaptée, elle peut se guérir.',
            },
        ],
    },
    {
        category: 'Conseils',
        question: 'Comment prendre soin de sa santé mentale ?',
        answer: [
            { type: 'text', content: "L’Organisation mondiale de la santé (OMS) donne 10 conseils pour préserver sa santé mentale : " },
            { type: 'heading', content: "10 conseils de l'OMS :" },
            { type: 'bullet', content: "Parler de ses émotions" },
            { type: 'bullet', content: "Rester actif en faisant de l’exercice régulièrement " },
            { type: 'bullet', content: "Manger équilibré et faire attention à son sommeil" },
            { type: 'bullet', content: "Éviter les excès d'alcool" },
            { type: 'bullet', content: "Rester en contact avec ses proches, famille ou amis" },
            { type: 'bullet', content: "Demander de l'aide quand les choses deviennent difficiles" },
            { type: 'bullet', content: "Faire des activités que l'on aime" },
            { type: 'bullet', content: "S'accepter avec ses imperfections" },
            { type: 'bullet', content: "S'investir pour les autres, par l'entraide, la solidarité" },
        ],
    },
    {
        category: 'Conseils',
        question: 'Comment soutenir la santé mentale des adolescents ?',
        answer: [
            { type: 'bullet', content: "Créer un environnement sécurisant et bienveillant" },
            { type: 'bullet', content: "Encourager l'expression des émotions" },
            { type: 'bullet', content: "Limiter le temps d'écran, favoriser les activités créatives" },
            { type: 'bullet', content: "Être attentif aux changements de comportement" },
            { type: 'bullet', content: "Consulter en cas de difficultés scolaires ou émotionnelles" },
        ],
    },
    {
        category: "Signes d'alerte",
        question: "À partir de quand s'inquiéter ?",
        answer: [
            {
                type: 'text',
                content:
                    "Il ne faut pas attendre d'être malade pour demander de l'aide. Certains signes doivent alerter, surtout lorsqu'ils persistent ou sont très intenses.",
            },
            { type: 'heading', content: "Quelques signaux à surveiller :" },
            { type: 'bullet', content: "perte d’appétit, excès ou privation de nourriture " },
            { type: 'bullet', content: "Troubles du sommeil" },
            { type: 'bullet', content: "Tristesse, irritabilité ou colère constante" },
            { type: 'bullet', content: "Mauvaise estime de soi, difficultés à se concentrer" },
            { type: 'bullet', content: "perte de motivation, d’enthousiasme " },
            { type: 'bullet', content: "Idées noires ou pensées suicidaires" },
            { type: 'bullet', content: "Consommation excessive d'alcool ou de substances (drogues), de médicaments" },
            { type: 'bullet', content: "difficultés dans les tâches quotidiennes" },
            { type: 'bullet', content: "isolement social, repli sur soi" },
            { type: 'bullet', content: "sentiment d’être visé par ce que disent les autres, de ne plus pouvoir faire confiance à ses proches " },
            { type: 'bullet', content: "comportements à risque (conduite dangereuse, automutilation...)" },
        ],
    },
    {
        category: 'Agir',
        question: 'Que faire en cas de souffrance psychologique ?',
        answer: [
            {
                type: 'text',
                content:
                    "Il est essentiel d'exprimer ce que l'on ressent et de ne pas rester seul dans ses difficultés. Garder tout pour soi peut rendre les choses plus difficiles. Parfois, le simple fait d’être écouté permet déjà de se sentir mieux.",
            },
            {
                type: 'text',
                content:
                    "Lorsque les signes deviennent préoccupants et s’installent dans la durée il est essentiel de consulter un professionnel : médecin, psychiatre, psychologue… Vous pouvez prendre rendez-vous pour une consultation dans un de nos centres.",
            },
            { type: 'heading', content: "Ressources disponibles" },
            { type: 'callout', content: "Ligne d'écoute gratuite : 143 (lun–ven, 8h–17h)" },
            { type: 'callout', content: "Urgences : 180 (Sapeurs-Pompiers)" },
            {
                type: 'highlight',
                content: "Demander de l'aide n'est pas un signe de faiblesse. C'est un acte de courage.",
            },
        ],
    },
    {
        category: 'Agir',
        question: "Que faire si un proche a besoin d'aide ?",
        answer: [
            {
                type: 'text',
                content:
                    "Si vous remarquez qu'un proche ne va pas bien, vous pouvez jouer un rôle important : être attentif, écouter sans juger et l'encourager à parler à un professionnel.",
            },
            { type: 'bullet', content: "Écouter sans jugement et éviter les phrases minimisantes comme « C’est dans ta tête »." },
            { type: 'bullet', content: "Encouragez-le à consulter un professionnel (psychologue, psychiatre ou pédopsychiatre). " },
            { type: 'bullet', content: "Proposer votre soutien au quotidien." },
            { type: 'bullet', content: "Informez-vous sur les ressources disponibles (lignes d’écoute, centres de prise en charge)." },
            { type: 'bullet', content: "Prendre soin de vous pour éviter l'épuisement" },
        ],
    },
    {
        category: 'Professionnels',
        question: "Quelle est la différence entre psychiatre, pédopsychiatre et psychologue ?",
        answer: [
            { type: 'text', content: "Dans le domaine de la prise en charge en santé mentale, les spécialistes sont le psychiatre, le pédopsychiatre et le psychologue." },
            { type: 'heading', content: "Psychiatre" },
            {
                type: 'text',
                content:
                    "Le psychiatre est un médecin spécialisé dans le domaine de la psychiatrie. Autrement dit il est un médecin spécialiste des maladies mentales. Il pose les diagnostics des maladies et propose des thérapies. Il intervient notamment pour les troubles nécessitant un traitement médicamenteux.",
            },
            { type: 'heading', content: "Pédopsychiatre" },
            {
                type: 'text',
                content:
                    "Le pédopsychiatre est un psychiatre qui s’est spécialisé dans la prise en charge des personnes de 0 à 18 ans : bébé, enfant, adolescent, jeune adulte.",
            },
            { type: 'heading', content: "Psychologue" },
            {
                type: 'text',
                content:
                    "Le psychologue propose des thérapies par la parole, il accompagne les personnes en souffrance psychologique ou émotionnelle sans prescription de médicaments. Parce qu’ils ont une formation spécifique, et parce qu’ils ne font pas partie de l’entourage, les personnes peuvent aborder avec lui des questions très personnelles.",
            },
        ],
    },
];

function AnswerBlock({ item, accentColor, accentBg }) {
    switch (item.type) {
        case 'text':
            return (
                <p style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.8,
                    color: '#4a5568',
                    margin: '0 0 0.75rem',
                }}>
                    {item.content}
                </p>
            );
        case 'heading':
            return (
                <p style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: accentColor,
                    margin: '1.25rem 0 0.5rem',
                }}>
                    {item.content}
                </p>
            );
        case 'bullet':
            return (
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    marginBottom: '0.5rem',
                }}>
                    <span style={{
                        flexShrink: 0,
                        marginTop: '0.45rem',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: accentColor,
                        opacity: 0.7,
                    }} />
                    <span style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.7,
                        color: '#4a5568',
                    }}>
                        {item.content}
                    </span>
                </div>
            );
        case 'callout':
            return (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.625rem 0.875rem',
                    background: accentBg,
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                }}>
                    <span style={{ fontSize: '1rem' }}>📞</span>
                    <span style={{
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: accentColor,
                    }}>
                        {item.content}
                    </span>
                </div>
            );
        case 'highlight':
            return (
                <p style={{
                    fontSize: '0.9375rem',
                    fontStyle: 'italic',
                    fontWeight: 500,
                    color: accentColor,
                    borderLeft: `3px solid ${accentColor}`,
                    paddingLeft: '0.875rem',
                    marginTop: '1rem',
                    lineHeight: 1.7,
                    opacity: 0.9,
                }}>
                    {item.content}
                </p>
            );
        default:
            return null;
    }
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/faq1.png')" }}
            />

            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '3rem 1rem' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#7cb518',
                            marginBottom: '0.5rem',
                        }}>
                            QUESTIONS FREQUENTES
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                            fontWeight: 800,
                            color: '#1a3a5c',
                            margin: 0,
                            lineHeight: 1.2,
                        }}>
                            Vos questions, nos réponses
                        </h1>
                        <p style={{
                            marginTop: '0.75rem',
                            fontSize: '1rem',
                            color: '#718096',
                            maxWidth: '480px',
                            margin: '0.75rem auto 0',
                            lineHeight: 1.7,
                        }}>
                            Tout ce que vous devez savoir sur la santé mentale, les signes à surveiller et comment agir.
                        </p>
                    </div>

                    {/* FAQ items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {faqData.map((item, i) => {
                            const isOpen = openIndex === i;
                            const cat = categoryConfig[item.category] || categoryConfig['Fondamentaux'];

                            return (
                                <div
                                    key={i}
                                    style={{
                                        background: '#ffffff',
                                        borderRadius: '14px',
                                        border: isOpen
                                            ? `1.5px solid ${cat.color}30`
                                            : '1.5px solid #e8edf2',
                                        overflow: 'hidden',
                                        transition: 'border-color 0.25s, box-shadow 0.25s',
                                        boxShadow: isOpen
                                            ? `0 4px 20px ${cat.color}14`
                                            : '0 1px 4px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    {/* Question button */}
                                    <button
                                        onClick={() => toggle(i)}
                                        aria-expanded={isOpen}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1.1rem 1.25rem',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {/* Category badge */}
                                        <span style={{
                                            flexShrink: 0,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            padding: '3px 10px',
                                            borderRadius: '20px',
                                            background: cat.bg,
                                            color: cat.color,
                                            fontSize: '0.725rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.04em',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {item.category}
                                        </span>

                                        {/* Question text */}
                                        <span style={{
                                            flex: 1,
                                            fontSize: '0.9375rem',
                                            fontWeight: 600,
                                            color: isOpen ? cat.color : '#1a3a5c',
                                            lineHeight: 1.5,
                                            transition: 'color 0.2s',
                                        }}>
                                            {item.question}
                                        </span>

                                        {/* Toggle icon */}
                                        <span style={{
                                            flexShrink: 0,
                                            width: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            background: isOpen ? cat.bg : '#f1f5f9',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1rem',
                                            color: isOpen ? cat.color : '#94a3b8',
                                            transition: 'background 0.25s, color 0.25s, transform 0.3s',
                                            transform: isOpen ? 'rotate(45deg)' : 'none',
                                            fontWeight: 700,
                                        }}>
                                            +
                                        </span>
                                    </button>

                                    {/* Answer body */}
                                    {isOpen && (
                                        <div style={{
                                            padding: '0 1.25rem 1.25rem',
                                            borderTop: `1px solid ${cat.color}20`,
                                            marginTop: '0',
                                        }}>
                                            <div style={{ paddingTop: '1rem' }}>
                                                {item.answer.map((block, j) => (
                                                    <AnswerBlock
                                                        key={j}
                                                        item={block}
                                                        accentColor={cat.color}
                                                        accentBg={cat.bg}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer CTA */}
                    <div style={{
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)',
                        borderRadius: '16px',
                        textAlign: 'center',
                        color: '#fff',
                    }}>
                        <p style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            margin: '0 0 0.5rem',
                        }}>
                            Vous avez d'autres questions ?
                        </p>
                        <p style={{
                            fontSize: '0.9rem',
                            opacity: 0.85,
                            margin: '0 0 1.25rem',
                            lineHeight: 1.6,
                        }}>
                            Notre équipe est disponible pour vous accompagner.
                        </p>
                        <a
                            href="/contact"
                            style={{
                                display: 'inline-block',
                                padding: '0.625rem 1.5rem',
                                background: '#fff',
                                color: '#1a3a5c',
                                borderRadius: '30px',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                textDecoration: 'none',
                                letterSpacing: '0.02em',
                            }}
                        >
                            Nous contacter
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}