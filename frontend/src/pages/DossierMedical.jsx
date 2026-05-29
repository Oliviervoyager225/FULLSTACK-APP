import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function DossierMedical() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj7eJqqaYjGtC0LjW1pX6HvYoObq0haUEPA&s')" }}
            >
                <div className="page-hero-content">
                    <h1>Accès à votre dossier médical</h1>
                    <p>Un droit garanti par la loi, un engagement de transparence</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>VOTRE DROIT D'ACCÈS AU DOSSIER</h2>
                        <p>
                            Conformément à la loi du 4 mars 2002 relative aux droits des malades,
                            tout patient a le droit d'accéder à l'ensemble des informations
                            contenues dans son dossier médical. Ce droit peut être exercé
                            directement ou par l'intermédiaire d'un médecin de votre choix.
                        </p>
                        <p>
                            Pour les mineurs, les titulaires de l'autorité parentale exercent ce
                            droit pour leur compte, sauf opposition du mineur lui-même dans certaines
                            conditions prévues par la loi.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('data:image/jpeg;base64,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')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxENhfB2EwR7fs57QhD1-4uftzJM3BK9ES9g&s')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'left',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>COMMENT FAIRE LA DEMANDE ?</h2>
                        <p>
                            La demande doit être adressée par courrier au médecin responsable de
                            votre prise en charge ou au secrétariat médical de La Fée Rima.
                            Accompagnez-la d'une copie d'une pièce d'identité. Les documents vous
                            seront communiqués dans un délai de 8 jours (ou 2 mois si les
                            informations datent de plus de 5 ans).
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6jFPZElPhGojF8C_SyqkTYY2HwzMi9rFCw&s')",
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
