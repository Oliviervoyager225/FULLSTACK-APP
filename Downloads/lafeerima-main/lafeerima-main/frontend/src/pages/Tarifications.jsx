import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

const tarifications = [
    {
        service: 'Consultation psychiatrique initiale',
        duree: '60 min',
        tarif: 'Prise en charge Sécurité Sociale',
    },
    {
        service: 'Consultation psychiatrique de suivi',
        duree: '30 min',
        tarif: 'Prise en charge Sécurité Sociale',
    },
    {
        service: 'Consultation psychologique',
        duree: '45 min',
        tarif: 'Prise en charge selon convention',
    },
    {
        service: "Hôpital de jour (par journée)",
        duree: 'Journée',
        tarif: 'Forfait journalier — voir service',
    },
    {
        service: "Service d'accueil d'urgence",
        duree: 'Variable',
        tarif: 'Sans avance de frais sous conditions',
    },
];

export default function Tarifications() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('data:image/png;base64,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  ')" }}
            >
                <div className="page-hero-content">
                    <h1>Tarifications</h1>
                    <p>Transparence et accessibilité pour tous les jeunes et leurs familles</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>NOS TARIFS ET MODES DE PRISE EN CHARGE</h2>
                        <p>
                            La Fée Rima s'engage à rendre ses soins accessibles à tous. La majorité
                            de nos prestations sont prises en charge par l'Assurance Maladie
                            obligatoire, sous réserve de disposer d'une prescription médicale et
                            d'être affilié à un régime de Sécurité Sociale.
                        </p>
                        <p>
                            Pour les familles sans couverture sociale ou en situation précaire, des
                            dispositifs d'aide existent. N'hésitez pas à contacter notre service
                            administratif pour en savoir plus.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                {/* Tableau des tarifs */}
                <section style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: '#1a3a5c' }}>TABLEAU DES PRESTATIONS</h2>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '0.95rem',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                    >
                        <thead>
                            <tr style={{ background: '#7cb518', color: '#fff' }}>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Prestation</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Durée</th>
                                <th style={{ padding: '1rem', textAlign: 'left' }}>Tarification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarifications.map((row, i) => (
                                <tr
                                    key={i}
                                    style={{
                                        background: i % 2 === 0 ? '#f9f9f9' : '#fff',
                                        borderBottom: '1px solid #e5e7eb',
                                    }}
                                >
                                    <td style={{ padding: '0.9rem 1rem' }}>{row.service}</td>
                                    <td style={{ padding: '0.9rem 1rem' }}>{row.duree}</td>
                                    <td style={{ padding: '0.9rem 1rem' }}>{row.tarif}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero3.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>MUTUELLE ET COMPLÉMENTAIRE</h2>
                        <p>
                            Selon votre contrat de complémentaire santé, une partie ou la totalité
                            de votre ticket modérateur peut être remboursée. Rapprochez-vous de votre
                            mutuelle pour connaître les modalités de prise en charge applicables à
                            votre situation.
                        </p>
                        <p>
                            Notre secrétariat médical est disponible pour vous accompagner dans vos
                            démarches administratives et vous orienter vers les bons interlocuteurs.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero2.png')",
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
