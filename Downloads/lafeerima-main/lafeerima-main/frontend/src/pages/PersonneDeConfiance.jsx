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
                style={{ backgroundImage: "url('/assets/feerima/pers_conf.png')" }}
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
                            backgroundImage: "url('/assets/feerima/per_conf.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/choisir.png')",
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

                        <p>
                            Toute personne majeure peut désigner une personne de confiance. Celle-ci peut assister aux entretiens médicaux afin d’aider dans les prises de décisions et d’être consulté dans le cas où le bénéficiaire ne serait pas en état d’exprimer sa volonté. Cette désignation se fait pour une durée laissée à l’appréciation du patient et est révocable à tout moment par écrit. La personne de confiance doit avoir accepté cette désignation et être majeure.
                        </p>
                    </div>
                    <div 
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/conf1.png')",
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
