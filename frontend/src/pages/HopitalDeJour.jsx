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
                // style={{ backgroundImage: "url('/assets/feerima/hopital.png')" }}
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
                            {/* L'hôpital de jour est une forme de soins psychiatriques à temps partiel.
                            Le jeune est accueilli plusieurs jours par semaine au sein de La Fée Rima
                            pour bénéficier d'un programme de soins structuré, sans séjourner la nuit.
                            Ce dispositif constitue une alternative à l'hospitalisation complète en
                            maintenant le lien avec l'environnement familial et scolaire. */}
                            L’hôpital de jour est une structure de soins où les bénéficiaires peuvent être accueillis plusieurs jours, de 8h30 à 17h. C’est une forme de soins à temps partiel permettant de maintenir les liens familiaux, sociaux, scolaires ou professionnels. Il s'adresse aux adolescents et jeunes adultes de 10 à 25 ans présentant des troubles psychiatriques nécessitant une prise en charge intensive mais ne justifiant pas une hospitalisation à temps plein.
                        </p>
                        <p>
                            Pour faciliter l’intégration à l’hôpital de jour, un livret d’accueil est remis à l’arrivée, détaillant le fonctionnement et les activités proposées.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/hh.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/dest.png')",
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
                            backgroundImage: "url('/assets/feerima/destiné.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-3">
                    <div className="hist-stacked-images">
                        <div className="hist-stacked-images">
                            <img
                                src="/assets/feerima/jeu.png"
                                alt="Ma mission"
                                className="hist-image"
                            />
                        </div>
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
