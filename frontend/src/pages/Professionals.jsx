// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Professionals.css';
// import '../styles/PageHero.css';

// // const doctors = [
// //     {
// //         id: 1,
// //         name: 'ALLO Valérie',
// //         specialty: 'Infirmière spécialisée',
// //         image: '/assets/feerima/images/hero.png', // Placholder image
// //     },
// //     {
// //         id: 2,
// //         name: 'ALLOU Adeline Amena',
// //         specialty: 'Infirmière',
// //         image: '/assets/feerima/images/hero2.png',
// //     },
// //     {
// //         id: 3,
// //         name: 'BAUDHUIN Elise',
// //         specialty: 'Psychologue CS',
// //         image: '/assets/feerima/images/hero3.png',
// //     },
// //     {
// //         id: 4,
// //         name: 'DONGO Angèle',
// //         specialty: 'Maîtresse de maison',
// //         image: '/assets/feerima/images/hero4.png',
// //     },
// //     {
// //         id: 5,
// //         name: 'GARDIMAN Alexandra',
// //         specialty: 'Orthophoniste',
// //         image: '/assets/feerima/images/hero.png',
// //     },
// //     {
// //         id: 6,
// //         name: 'HOUNDJI Fulgence',
// //         specialty: 'Éducateur spécialisé',
// //         image: '/assets/feerima/images/hero2.png',
// //     },
// //     {
// //         id: 7,
// //         name: 'KOUADIO Yao Etienne',
// //         specialty: 'Art-thérapeute',
// //         image: '/assets/feerima/images/hero3.png',
// //     },
// //     {
// //         id: 8,
// //         name: 'MANOUAN ép GRAH Ange Charlotte',
// //         specialty: 'Éducatrice spécialisée',
// //         image: '/assets/feerima/images/hero4.png',
// //     },
// //     {
// //         id: 9,
// //         name: 'MANOUAN Ludovic',
// //         specialty: 'Psychologue',
// //         image: '/assets/feerima/images/hero.png',
// //     },
// //     {
// //         id: 10,
// //         name: 'MESSAN Bhipeu Emmanuel',
// //         specialty: 'Coach sportif',
// //         image: '/assets/feerima/images/hero2.png',
// //     },
// //     {
// //         id: 11,
// //         name: 'N’GUESSAN Olivia',
// //         specialty: 'Pédopsychiatre',
// //         image: '/assets/feerima/images/hero3.png',
// //     },
// //     {
// //         id: 12,
// //         name: 'YAO ép KONAN Olga',
// //         specialty: 'Secrétaire médicale',
// //         image: '/assets/feerima/images/hero4.png',
// //     }
// // ];

// const teams = [
//     {
//         id: 'soins',
//         label: "L'équipe de soins",
//         members: [
//             { id: 1, name: 'Dr Danmaukan', specialty: 'Pédopsychiatre / Psychiatre', image: '/assets/feerima/images/hero.png' },
//             { id: 2, name: "Dr N'Guessan Olivia", specialty: 'Pédopsychiatre / Psychiatre', image: '/assets/feerima/images/hero3.png' },
//             { id: 3, name: 'ALLOU Adeline Amena', specialty: 'Infirmière Spécialisée', image: '/assets/feerima/images/hero2.png' },
//             { id: 4, name: 'ALLO Valérie', specialty: 'Infirmier Spécialisé', image: '/assets/feerima/images/hero.png' },
//             { id: 5, name: 'KONAN Aya Clarisse', specialty: 'Aide-soignante', image: '/assets/feerima/images/hero4.png' },
//             { id: 6, name: 'BAUDHUIN Elise', specialty: 'Psychologue clinicienne', image: '/assets/feerima/images/hero3.png' },
//             { id: 7, name: 'MANOUAN Ludovic', specialty: 'Psychologue clinicien', image: '/assets/feerima/images/hero.png' },
//             { id: 8, name: 'KOUADIO Yao Etienne', specialty: 'Art-thérapeute', image: '/assets/feerima/images/hero3.png' },
//         ],
//     },
//     {
//         id: 'educative',
//         label: "L'équipe éducative",
//         members: [
//             { id: 9, name: 'HOUNDJI Fulgence', specialty: 'Éducateur spécialisé', image: '/assets/feerima/images/hero2.png' },
//             { id: 10, name: 'MANOUAN ép GRAH Ange Charlotte', specialty: 'Éducatrice spécialisée', image: '/assets/feerima/images/hero4.png' },
//             { id: 11, name: 'DONGO Angèle', specialty: 'Référente Cadre de Vie', image: '/assets/feerima/images/hero4.png' },
//             { id: 12, name: 'MESSAN Bhipeu Emmanuel', specialty: 'Coach sportif', image: '/assets/feerima/images/hero2.png' },
//         ],
//     },
//     {
//         id: 'administrative',
//         label: "L'équipe administrative et de gestion",
//         members: [
//             { id: 13, name: 'Malick Lago', specialty: 'Comptable / Responsable administratif', image: '/assets/feerima/images/hero.png' },
//             { id: 14, name: 'YAO ép KONAN Olga', specialty: 'Agente Médico-administratif', image: '/assets/feerima/images/hero4.png' },
//         ],
//     },
//     {
//         id: 'direction',
//         label: "L'équipe de direction",
//         members: [
//             { id: 15, name: 'Noura Férima Sarassoro', specialty: 'Directrice Générale', image: '/assets/feerima/images/hero.png' },
//             { id: 16, name: 'Salfou ZERBO', specialty: "Directeur d'exploitation", image: '/assets/feerima/images/hero2.png' },
//         ],
//     },
// ];

// export default function Professionals() {
//     const renderStars = (rating) => {
//         // Simple star rendering logic
//         const stars = [];
//         for (let i = 0; i < 5; i++) {
//             if (i < Math.floor(rating)) {
//                 stars.push(<span key={i} className="star full">★</span>);
//             } else if (i < rating) {
//                 stars.push(<span key={i} className="star half">★</span>); // approximations for now
//             } else {
//                 stars.push(<span key={i} className="star empty">☆</span>);
//             }
//         }
//         return stars;
//     };

//     return (
//         <div className="professionals-page">
//             <Navbar />

//             {/* Hero Banner */}
//             <section
//                 className="page-hero page-hero--ltr"
//                 style={{ backgroundImage: "url('/assets/feerima/images/profession.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Nos professionnels</h1>
//                     <p>Des professionnels de santé dévoués pour accompagner les jeunes vers le mieux-être</p>
//                 </div>
//             </section>

//             <main className="professionals-content">

//                 {teams.map((team) => (
//                     <section key={team.id} className="team-section">

//                         {/* En-tête de l'équipe */}
//                         <div className="team-header">
//                             <h2 className="team-title">{team.label}</h2>
//                             <div className="team-divider" />
//                         </div>

//                         {/* Grille des membres */}
//                         <div className="professionals-grid">
//                             {team.members.map((doc) => (
//                                 <div key={doc.id} className="doctor-card">
//                                     <div className="doctor-image-container">
//                                         <img src={doc.image} alt={doc.name} className="doctor-image" />
//                                     </div>
//                                     <div className="doctor-info">
//                                         <h3>{doc.name}</h3>
//                                         <span className="doctor-specialty">{doc.specialty}</span>
//                                         <div className="doctor-rating-spacer"></div>
//                                         <button className="doctor-btn">En savoir plus</button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                     </section>
//                 ))}

//             </main>
//             <Footer />
//         </div>
//     );
// }


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const NAVY = '#1a3a5c';
const GREEN = '#7cb518';

const teamConfig = {
    soins: { icon: '🏥', color: '#185FA5', colorLight: '#E6F1FB', colorText: '#0C447C' },
    educative: { icon: '📚', color: '#3B6D11', colorLight: '#EAF3DE', colorText: '#27500A' },
    administrative: { icon: '📋', color: '#854F0B', colorLight: '#FAEEDA', colorText: '#633806' },
    direction: { icon: '🌟', color: '#534AB7', colorLight: '#EEEDFE', colorText: '#3C3489' },
};

const teams = [
    {
        id: 'soins',
        label: "L'équipe de soins",
        members: [
            { id: 1, name: 'Dr Danmaukan', specialty: 'Pédopsychiatre / Psychiatre', image: '/assets/feerima/images/hero.png' },
            { id: 2, name: "Dr N'Guessan Olivia", specialty: 'Pédopsychiatre / Psychiatre', image: '/assets/feerima/images/hero3.png' },
            { id: 3, name: 'ALLOU Adeline Amena', specialty: 'Infirmière Spécialisée', image: '/assets/feerima/images/hero2.png' },
            { id: 4, name: 'ALLO Valérie', specialty: 'Infirmier Spécialisé', image: '/assets/feerima/images/hero.png' },
            { id: 5, name: 'KONAN Aya Clarisse', specialty: 'Aide-soignante', image: '/assets/feerima/images/hero4.png' },
            { id: 6, name: 'BAUDHUIN Elise', specialty: 'Psychologue clinicienne', image: '/assets/feerima/images/hero3.png' },
            { id: 7, name: 'MANOUAN Ludovic', specialty: 'Psychologue clinicien', image: '/assets/feerima/images/hero.png' },
            { id: 8, name: 'KOUADIO Yao Etienne', specialty: 'Art-thérapeute', image: '/assets/feerima/images/hero3.png' },
        ],
    },
    {
        id: 'educative',
        label: "L'équipe éducative",
        members: [
            { id: 9, name: 'HOUNDJI Fulgence', specialty: 'Éducateur spécialisé', image: '/assets/feerima/images/hero2.png' },
            { id: 10, name: 'MANOUAN ép GRAH Ange Charlotte', specialty: 'Éducatrice spécialisée', image: '/assets/feerima/images/hero4.png' },
            { id: 11, name: 'DONGO Angèle', specialty: 'Référente Cadre de Vie', image: '/assets/feerima/images/hero4.png' },
            { id: 12, name: 'MESSAN Bhipeu Emmanuel', specialty: 'Coach sportif', image: '/assets/feerima/images/hero2.png' },
        ],
    },
    {
        id: 'administrative',
        label: "L'équipe administrative et de gestion",
        members: [
            { id: 13, name: 'Malick Lago', specialty: 'Comptable / Responsable administratif', image: '/assets/feerima/images/hero.png' },
            { id: 14, name: 'YAO ép KONAN Olga', specialty: 'Agente Médico-administratif', image: '/assets/feerima/images/hero4.png' },
        ],
    },
    {
        id: 'direction',
        label: "L'équipe de direction",
        members: [
            { id: 15, name: 'Noura Férima Sarassoro', specialty: 'Directrice Générale', image: '/assets/feerima/images/hero.png' },
            { id: 16, name: 'Salfou ZERBO', specialty: "Directeur d'exploitation", image: '/assets/feerima/images/hero2.png' },
        ],
    },
];

/* Génère les initiales depuis le nom */
function getInitials(name) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(w => w[0].toUpperCase())
        .join('');
}

function MemberCard({ member, cfg }) {
    const [imgError, setImgError] = useState(false);
    return (
        <div
            style={{
                background: '#fff',
                borderRadius: '14px',
                border: '1.5px solid #e8edf2',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s, border-color 0.2s, transform 0.2s',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = cfg.color + '50';
                e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e8edf2';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Photo ou avatar initiales */}
            {!imgError ? (
                <img
                    src={member.image}
                    alt={member.name}
                    onError={() => setImgError(true)}
                    style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }}
                />
            ) : (
                <div style={{
                    width: '100%', aspectRatio: '1',
                    background: cfg.colorLight,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.75rem', fontWeight: 800, color: cfg.colorText,
                }}>
                    {getInitials(member.name)}
                </div>
            )}

            {/* Infos */}
            <div style={{ padding: '12px 14px 14px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                {/* Badge spécialité */}
                <span style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    background: cfg.colorLight,
                    color: cfg.colorText,
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    marginBottom: '6px',
                    alignSelf: 'flex-start',
                }}>
                    {member.specialty}
                </span>

                <p style={{ fontSize: '13px', fontWeight: 800, color: NAVY, margin: '0 0 10px', lineHeight: 1.3, flex: 1 }}>
                    {member.name}
                </p>

                <button
                    style={{
                        width: '100%', padding: '7px',
                        borderRadius: '8px',
                        border: '1.5px solid #e2e8f0',
                        background: '#fff',
                        fontSize: '11px', fontWeight: 700, color: NAVY,
                        cursor: 'pointer',
                        transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = NAVY;
                        e.currentTarget.style.borderColor = NAVY;
                        e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.color = NAVY;
                    }}
                >
                    En savoir plus
                </button>
            </div>
        </div>
    );
}

const FILTERS = [
    { id: 'all', label: 'Tous' },
    { id: 'soins', label: 'Équipe de soins' },
    { id: 'educative', label: 'Équipe éducative' },
    { id: 'administrative', label: 'Administration' },
    { id: 'direction', label: 'Direction' },
];

export default function Professionals() {
    const [activeFilter, setActiveFilter] = useState('all');

    const visibleTeams = teams.filter(t => activeFilter === 'all' || t.id === activeFilter);

    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            {/* Hero */}
            <section
                className="page-hero page-hero--ltr"
                style={{ backgroundImage: "url('/assets/feerima/images/profession.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Nos professionnels</h1>
                    <p>Des professionnels de santé dévoués pour accompagner les jeunes vers le mieux-être</p>
                </div>
            </section>

            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '0 0 4rem' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

                    {/* ── Filtres ── */}
                    <div style={{
                        display: 'flex', gap: '8px', justifyContent: 'center',
                        flexWrap: 'wrap', padding: '2rem 0 1.5rem',
                    }}>
                        {FILTERS.map(f => (
                            <button
                                key={f.id}
                                onClick={() => setActiveFilter(f.id)}
                                style={{
                                    padding: '6px 16px',
                                    borderRadius: '50px',
                                    border: activeFilter === f.id ? `1.5px solid ${NAVY}` : '1.5px solid #e2e8f0',
                                    background: activeFilter === f.id ? NAVY : '#fff',
                                    color: activeFilter === f.id ? '#fff' : '#64748b',
                                    fontSize: '13px', fontWeight: 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                }}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* ── Sections par équipe ── */}
                    {visibleTeams.map(team => {
                        const cfg = teamConfig[team.id];
                        return (
                            <section key={team.id} style={{ marginBottom: '2.5rem' }}>
                                {/* En-tête équipe */}
                                <div style={{
                                    display: 'flex', alignItems: 'center',
                                    gap: '12px', marginBottom: '14px',
                                }}>
                                    <div style={{
                                        width: '38px', height: '38px', borderRadius: '10px',
                                        background: cfg.colorLight,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.1rem', flexShrink: 0,
                                    }}>
                                        {cfg.icon}
                                    </div>
                                    <h2 style={{
                                        fontSize: '1.125rem', fontWeight: 800,
                                        color: NAVY, margin: 0,
                                    }}>
                                        {team.label}
                                    </h2>
                                    <span style={{
                                        marginLeft: 'auto',
                                        padding: '3px 10px', borderRadius: '20px',
                                        background: cfg.colorLight, color: cfg.colorText,
                                        fontSize: '11px', fontWeight: 700,
                                    }}>
                                        {/* {team.members.length} membre{team.members.length > 1 ? 's' : ''} */}
                                    </span>
                                </div>

                                <div style={{ height: '1px', background: '#e8edf2', marginBottom: '16px' }} />

                                {/* Grille membres */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                                    gap: '14px',
                                }}>
                                    {team.members.map(member => (
                                        <MemberCard key={member.id} member={member} cfg={cfg} />
                                    ))}
                                </div>
                            </section>
                        );
                    })}

                    {/* ── CTA bas de page ── */}
                    <div style={{
                        background: `linear-gradient(135deg, ${NAVY} 0%, ${GREEN} 100%)`,
                        borderRadius: '20px', padding: '2.5rem 2rem',
                        textAlign: 'center', color: '#fff', marginTop: '1rem',
                    }}>
                        <p style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 6px' }}>
                            Vous souhaitez rejoindre notre équipe ?
                        </p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.25rem', lineHeight: 1.7 }}>
                            Nous recherchons des professionnels engagés et passionnés par la santé mentale des jeunes.
                        </p>
                        <a href="/nous-rejoindre" style={{
                            display: 'inline-block', padding: '0.7rem 1.75rem',
                            background: '#fff', color: NAVY,
                            borderRadius: '50px', fontWeight: 800,
                            fontSize: '0.875rem', textDecoration: 'none',
                        }}>
                            Voir les offres d'emploi →
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}