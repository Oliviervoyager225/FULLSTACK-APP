import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function PersonneDeConfiance() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}
            >
                <div className="page-hero-content">
                    <h1>Personne de confiance</h1>
                    <p>Un droit fondamental pour être accompagné dans votre parcours de soins</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>QU'EST-CE QUE LA PERSONNE DE CONFIANCE ?</h2>
                        <p>
                            La personne de confiance est une personne de votre choix (un proche,
                            un ami, un médecin de ville…) que vous désignez pour vous accompagner
                            lors de vos démarches et consultations, vous aider à formuler vos
                            souhaits, et être consultée si vous n'êtes plus en état d'exprimer
                            votre volonté.
                        </p>
                        <p>
                            Pour les mineurs, ce rôle est généralement assuré par les titulaires
                            de l'autorité parentale, mais une désignation spécifique peut être
                            envisagée en accord avec l'équipe médicale.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('data:image/png;base64,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')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQV643iufROhNkyNuB1DESg2KNB346DLhPA&s')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>COMMENT LA DÉSIGNER ?</h2>
                        <p>
                            La désignation s'effectue par écrit lors de votre admission à La
                            La Fée Rima, à l'aide du formulaire dédié remis par notre secrétariat.
                            Cette désignation est valable pour la durée de votre prise en charge
                            et peut être modifiée ou révoquée à tout moment sur simple demande.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/personne_confiance.png')",
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
