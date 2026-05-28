import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Professionals.css';
import '../styles/PageHero.css';

// const doctors = [
//     {
//         id: 1,
//         name: 'ALLO Valérie',
//         specialty: 'Infirmière spécialisée',
//         image: '/assets/feerima/hero.png', // Placholder image
//     },
//     {
//         id: 2,
//         name: 'ALLOU Adeline Amena',
//         specialty: 'Infirmière',
//         image: '/assets/feerima/hero2.png',
//     },
//     {
//         id: 3,
//         name: 'BAUDHUIN Elise',
//         specialty: 'Psychologue CS',
//         image: '/assets/feerima/hero3.png',
//     },
//     {
//         id: 4,
//         name: 'DONGO Angèle',
//         specialty: 'Maîtresse de maison',
//         image: '/assets/feerima/hero4.png',
//     },
//     {
//         id: 5,
//         name: 'GARDIMAN Alexandra',
//         specialty: 'Orthophoniste',
//         image: '/assets/feerima/hero.png',
//     },
//     {
//         id: 6,
//         name: 'HOUNDJI Fulgence',
//         specialty: 'Éducateur spécialisé',
//         image: '/assets/feerima/hero2.png',
//     },
//     {
//         id: 7,
//         name: 'KOUADIO Yao Etienne',
//         specialty: 'Art-thérapeute',
//         image: '/assets/feerima/hero3.png',
//     },
//     {
//         id: 8,
//         name: 'MANOUAN ép GRAH Ange Charlotte',
//         specialty: 'Éducatrice spécialisée',
//         image: '/assets/feerima/hero4.png',
//     },
//     {
//         id: 9,
//         name: 'MANOUAN Ludovic',
//         specialty: 'Psychologue',
//         image: '/assets/feerima/hero.png',
//     },
//     {
//         id: 10,
//         name: 'MESSAN Bhipeu Emmanuel',
//         specialty: 'Coach sportif',
//         image: '/assets/feerima/hero2.png',
//     },
//     {
//         id: 11,
//         name: 'N’GUESSAN Olivia',
//         specialty: 'Pédopsychiatre',
//         image: '/assets/feerima/hero3.png',
//     },
//     {
//         id: 12,
//         name: 'YAO ép KONAN Olga',
//         specialty: 'Secrétaire médicale',
//         image: '/assets/feerima/hero4.png',
//     }
// ];

const teams = [
    {
        id: 'soins',
        label: "L'équipe de soins",
        members: [
            { id: 1, name: 'Dr Danmaukan', specialty: 'Pédopsychiatre / Psychiatre', image: '/assets/feerima/hero.png' },
            { id: 2, name: "Dr N'Guessan Olivia", specialty: 'Pédopsychiatre / Psychiatre', image: '/assets/feerima/hero3.png' },
            { id: 3, name: 'ALLOU Adeline Amena', specialty: 'Infirmière Spécialisée', image: '/assets/feerima/hero2.png' },
            { id: 4, name: 'ALLO Valérie', specialty: 'Infirmier Spécialisé', image: '/assets/feerima/hero.png' },
            { id: 5, name: 'KONAN Aya Clarisse', specialty: 'Aide-soignante', image: '/assets/feerima/hero4.png' },
            { id: 6, name: 'BAUDHUIN Elise', specialty: 'Psychologue clinicienne', image: '/assets/feerima/hero3.png' },
            { id: 7, name: 'MANOUAN Ludovic', specialty: 'Psychologue clinicien', image: '/assets/feerima/hero.png' },
            { id: 8, name: 'KOUADIO Yao Etienne', specialty: 'Art-thérapeute', image: '/assets/feerima/hero3.png' },
        ],
    },
    {
        id: 'educative',
        label: "L'équipe éducative",
        members: [
            { id: 9, name: 'HOUNDJI Fulgence', specialty: 'Éducateur spécialisé', image: '/assets/feerima/hero2.png' },
            { id: 10, name: 'MANOUAN ép GRAH Ange Charlotte', specialty: 'Éducatrice spécialisée', image: '/assets/feerima/hero4.png' },
            { id: 11, name: 'DONGO Angèle', specialty: 'Référente Cadre de Vie', image: '/assets/feerima/hero4.png' },
            { id: 12, name: 'MESSAN Bhipeu Emmanuel', specialty: 'Coach sportif', image: '/assets/feerima/hero2.png' },
        ],
    },
    {
        id: 'administrative',
        label: "L'équipe administrative et de gestion",
        members: [
            { id: 13, name: 'Malick Lago', specialty: 'Comptable / Responsable administratif', image: '/assets/feerima/hero.png' },
            { id: 14, name: 'YAO ép KONAN Olga', specialty: 'Agente Médico-administratif', image: '/assets/feerima/hero4.png' },
        ],
    },
    {
        id: 'direction',
        label: "L'équipe de direction",
        members: [
            { id: 15, name: 'Noura Férima Sarassoro', specialty: 'Directrice Générale', image: '/assets/feerima/hero.png' },
            { id: 16, name: 'Salfou ZERBO', specialty: "Directeur d'exploitation", image: '/assets/feerima/hero2.png' },
        ],
    },
];

export default function Professionals() {
    const renderStars = (rating) => {
        // Simple star rendering logic
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(rating)) {
                stars.push(<span key={i} className="star full">★</span>);
            } else if (i < rating) {
                stars.push(<span key={i} className="star half">★</span>); // approximations for now
            } else {
                stars.push(<span key={i} className="star empty">☆</span>);
            }
        }
        return stars;
    };

    return (
        <div className="professionals-page">
            <Navbar />

            {/* Hero Banner */}
            <section
                className="page-hero page-hero--ltr"
                style={{ backgroundImage: "url('/assets/feerima/profession.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Nos professionnels</h1>
                    <p>Des professionnels de santé dévoués pour accompagner les jeunes vers le mieux-être</p>
                </div>
            </section>

            <main className="professionals-content">

                {teams.map((team) => (
                    <section key={team.id} className="team-section">

                        {/* En-tête de l'équipe */}
                        <div className="team-header">
                            <h2 className="team-title">{team.label}</h2>
                            <div className="team-divider" />
                        </div>

                        {/* Grille des membres */}
                        <div className="professionals-grid">
                            {team.members.map((doc) => (
                                <div key={doc.id} className="doctor-card">
                                    <div className="doctor-image-container">
                                        <img src={doc.image} alt={doc.name} className="doctor-image" />
                                    </div>
                                    <div className="doctor-info">
                                        <h3>{doc.name}</h3>
                                        <span className="doctor-specialty">{doc.specialty}</span>
                                        <div className="doctor-rating-spacer"></div>
                                        <button className="doctor-btn">En savoir plus</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </section>
                ))}

            </main>
            <Footer />
        </div>
    );
}
