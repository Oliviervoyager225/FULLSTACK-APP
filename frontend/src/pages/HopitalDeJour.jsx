import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function HopitalDeJour() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}
            >
                <div className="page-hero-content">
                    <h1>L'hôpital de jour</h1>
                    <p>Un dispositif intensif au cœur des soins psychiatriques pour les jeunes</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>QU'EST-CE QUE L'HÔPITAL DE JOUR ?</h2>
                        <p>
                            L'hôpital de jour est une forme de soins psychiatriques à temps partiel.
                            Le jeune est accueilli plusieurs jours par semaine au sein de La Fée Rima
                            pour bénéficier d'un programme de soins structuré, sans séjourner la nuit.
                            Ce dispositif constitue une alternative à l'hospitalisation complète en
                            maintenant le lien avec l'environnement familial et scolaire.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hero3.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
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
                        <h2>POUR QUI EST-IL DESTINÉ ?</h2>
                        <p>
                            L'hôpital de jour s'adresse aux adolescents et jeunes adultes de 10 à
                            25 ans présentant des troubles psychiatriques nécessitant une prise en
                            charge intensive mais ne justifiant pas une hospitalisation à temps
                            plein. Il est particulièrement adapté aux situations de crise stabilisées,
                            aux troubles du comportement, aux troubles anxieux sévères ou aux
                            troubles de l'humeur.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('https://i.notretemps.com/1200x0/smart/2019/11/21/crise-de-lhopital-le-plan-durgence-du-gouvernement.jpeg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-3">
                    <div className="hist-stacked-images">
                        <div
                            className="hist-image-box gray-box-small"
                            style={{
                                backgroundImage: "url('/assets/feerima/prog_soins.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <div
                            className="hist-image-box gray-box-small"
                            style={{
                                backgroundImage: "url('/assets/feerima/programme.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                    </div>
                    <div className="hist-content">
                        <h2>LE PROGRAMME DE SOINS</h2>
                        <p>
                            <strong>Des activités thérapeutiques variées</strong>
                            <br />
                            Le programme comprend des ateliers thérapeutiques (art-thérapie,
                            psychomotricité, groupes de parole), des consultations médicales et
                            psychologiques individuelles, ainsi que des activités éducatives
                            adaptées.
                        </p>
                        <p>
                            <strong>Une coordination étroite</strong>
                            <br />
                            L'équipe pluridisciplinaire assure un suivi coordonné avec la famille,
                            l'école et les autres acteurs du parcours de vie du jeune, pour garantir
                            une continuité optimale des soins.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
