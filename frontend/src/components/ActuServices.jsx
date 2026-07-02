import React, { useState, useRef, useEffect } from 'react';
import '../styles/ActuServices.css';

/*
 * Section « Nos Actualités » — vue et animations reprises du bloc
 * « Our Services » du template Arkitektur :
 *  - en-tête : petit titre uppercase espacé + grand titre centré
 *  - cartes claires ; au survol la photo de fond se révèle (voile sombre),
 *    le texte passe en blanc et le bouton « + » s'élargit (40px -> texte)
 *  - apparition au scroll en cascade (wow fadeInUp, délais 0.1/0.3/0.5/0.7s)
 * Couleurs : palette du site (cyan / vert).
 */

const actus = [
    { icon: '/assets/feerima/icons/centre-de-sante.png', img: '/assets/feerima/images/hero.png', categorie: 'Vie du centre', titre: 'Journée portes ouvertes à La Fée Rima' },
    { icon: '/assets/feerima/icons/sante-mentale.png', img: '/assets/feerima/images/hero2.png', categorie: 'Santé mentale', titre: 'Mieux comprendre les troubles anxieux chez les adolescents' },
    { icon: '/assets/feerima/icons/inspiration.png', img: '/assets/feerima/images/hero3.png', categorie: 'Innovation', titre: "Nouveau protocole d'art-thérapie au programme" },
    { icon: '/assets/feerima/icons/partenariat.png', img: '/assets/feerima/images/hero4.png', categorie: 'Partenariat', titre: 'La Fée Rima renforce ses partenariats académiques' },
];

/* Délais en cascade, comme les data-wow-delay du template */
const DELAYS = ['0.1s', '0.3s', '0.5s', '0.7s'];

/* Révélation au scroll — équivalent WOW.js (fadeInUp) */
function useReveal() {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return undefined;
        if (typeof IntersectionObserver === 'undefined') { setShown(true); return undefined; }
        const io = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) { setShown(true); io.disconnect(); }
        }, { threshold: 0.12 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return [ref, shown];
}

export default function ActuServices() {
    const [headerRef, headerShown] = useReveal();
    const [gridRef, gridShown] = useReveal();

    return (
        <section className="actu-services" aria-label="Nos actualités">
            <div className="actu-services-container">
                {/* En-tête — section-title + grand titre, comme le template */}
                <div
                    className={`actu-services-header wowk${headerShown ? ' wowk--in' : ''}`}
                    ref={headerRef}
                    style={{ animationDelay: '0.1s' }}
                >
                    <h4 className="actu-services-label">Nos Actualités</h4>
                    <h1 className="actu-services-title">La vie du centre, nos avancées et nos partenariats</h1>
                </div>

                <div className="actu-services-grid" ref={gridRef}>
                    {actus.map((actu, i) => (
                        <div
                            key={i}
                            className={`actu-service-item wowk${gridShown ? ' wowk--in' : ''}`}
                            style={{ animationDelay: DELAYS[i % DELAYS.length] }}
                        >
                            {/* Photo de fond révélée au survol (bg-img du template) */}
                            <img className="actu-service-bg" src={actu.img} alt="" aria-hidden="true" draggable={false} />
                            <div className="actu-service-text">
                                <span
                                    className="actu-service-icon"
                                    style={{ '--icon-url': `url(${actu.icon})` }}
                                    aria-hidden="true"
                                />
                                <span className="actu-service-cat">{actu.categorie}</span>
                                <h3>{actu.titre}</h3>
                                <a className="actu-service-btn" href="/actualites" aria-label={`Lire la suite : ${actu.titre}`}>
                                    <span className="actu-service-btn-plus" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </span>
                                    <span className="actu-service-btn-label">Lire la suite</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
