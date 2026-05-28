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
                style={{ backgroundImage: "url('/assets/feerima/camera.jpg')" }}
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
                        <p>
                            La Fée Rima a mis en place un système de vidéosurveillance dans certaines
                            zones communes de l'établissement (entrées, couloirs, parkings) afin
                            d'assurer la sécurité des patients, des familles et des professionnels.
                            Ce dispositif est déclaré auprès des autorités compétentes conformément
                            à la réglementation en vigueur.
                        </p>
                    </div>
                    <div
                        className="hist-image-box gray-box-large"
                        style={{
                            backgroundImage: "url('/assets/feerima/camera1.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </section>

                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium"
                        style={{
                            backgroundImage: "url('data:image/jpeg;base64,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')",
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
                            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXLtMF10J-DLVVVvdh4aK2g8pYS-xWz6kLhQ&s')",
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
