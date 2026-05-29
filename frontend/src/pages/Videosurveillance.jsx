import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';

export default function Videosurveillance() {
    return (
        <div className="historique-page">
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/cam.png')" }}
            >
                <div className="page-hero-content">
                    <h1>Système de vidéosurveillance</h1>
                    <p>Transparence sur le dispositif de sécurité de l'établissement</p>
                </div>
            </section>

            <main className="historique-main">
                <section className="hist-section section-1">
                    <div className="hist-content">
                        <h2>POURQUOI UN SYSTÈME DE VIDÉOSURVEILLANCE ?</h2>
                        {/* <p>
                            La Fée Rima a mis en place un système de vidéosurveillance dans certaines
                            zones communes de l'établissement (entrées, couloirs, parkings) afin
                            d'assurer la sécurité des patients, des familles et des professionnels.
                        </p>
                        <p>
                            Les enregistrements sont réalisés uniquement à des fins de sécurité et sont strictement réservés aux personnes autorisées. Ils ne sont jamais diffusés et sont conservés pour une durée limitée, conformément aux exigences légales.
                            Cette démarche vise à renforcer la protection des personnes et des biens, tout en respectant les droits et libertés individuelles.
                        </p>
                        <p>
                            Ce dispositif est déclaré auprès des autorités compétentes conformément
                            à la réglementation en vigueur.
                        </p> */}

                        <p>
                            Pour assurer la sécurité des bénéficiaires, du personnel et des locaux, La Fée Rima a mis en place un système de vidéosurveillance conforme à la réglementation en vigueur. Les enregistrements sont réalisés uniquement à des fins de sécurité et sont strictement réservés aux personnes autorisées. Ils ne sont jamais diffusés et sont conservés pour une durée limitée, conformément aux exigences légales
                        </p>
                        <p>
                            Cette démarche vise à renforcer la protection des personnes et des biens, tout en respectant les droits et libertés individuelles.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/expl_cam.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/droit_image.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'right',
                        }}
                    />
                    <div className="hist-content center-content">
                        <h2>VOS DROITS SUR LES IMAGES</h2>
                        <p>
                            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
                            d'un droit d'accès aux images vous concernant, sous réserve que celles-ci
                            soient encore disponibles (durée de conservation limitée à 30 jours).
                            Pour exercer ce droit, adressez votre demande par écrit au secrétariat
                            de direction de l'établissement en justifiant de votre identité.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('/assets/feerima/droi_img.png')",
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
