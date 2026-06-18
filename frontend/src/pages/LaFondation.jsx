import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import histStyles from '../styles/Historique.module.css';
import '../styles/PageHero.css';
import '../styles/NosActions.css';
import '../styles/RSE.css';
import '../styles/Actualites.css';
import '../styles/NosPartenaires.css';

/* ── Données : Nos actions ──────────────────────────────── */
const visionPoints = [
    "Promotion de la santé mentale et du bien-être psychosocial des adolescents et jeunes",
    "Renforcement des connaissances en santé mentale pour faciliter l'accès aux soins",
    "Amélioration de l'insertion socio-professionnelle des jeunes de 10 à 25 ans",
    "Accompagnement sans discrimination socio-économique",
];

const sensibilisationActions = [
    "Informer sur les questions de santé mentale",
    "Favoriser le dialogue et l'expression",
    "Lever le tabou sur le sujet de la santé mentale",
    "Identifier les cas à risque",
];

/* ── Données : Nos actualités ───────────────────────────── */
const articles = [
    {
        id: 1,
        category: 'Santé mentale',
        title: "Comprendre l'anxiété chez les adolescents",
        excerpt: "Découvrez comment identifier les signes d'anxiété chez les jeunes et les meilleures approches pour les accompagner au quotidien.",
        image: '/assets/feerima/portrait.png',
        date: '12 Février 2026',
        author: 'Dr. Glao Louis',
    },
    {
        id: 2,
        category: 'Thérapie',
        title: "L'art-thérapie au service du bien-être",
        excerpt: "L'expression créative comme outil thérapeutique permet aux jeunes de libérer leurs émotions et de renforcer leur confiance en soi.",
        image: '/assets/feerima/artistique.png',
        date: '5 Février 2026',
        author: 'Dr. Emma Wilson',
    },
    {
        id: 3,
        category: 'Prévention',
        title: 'Sport et santé mentale : un duo gagnant',
        excerpt: "La pratique régulière d'une activité physique a un impact direct et positif sur l'équilibre émotionnel et mental des adolescents.",
        image: '/assets/feerima/sport.png',
        date: '28 Janvier 2026',
        author: 'Dr. Ravi Bec',
    },
    {
        id: 4,
        category: 'Famille',
        title: 'Renforcer les liens familiaux',
        excerpt: 'Des stratégies concrètes pour améliorer la communication entre parents et adolescents dans les moments de tension.',
        image: '/assets/feerima/soutien familial.png',
        date: '20 Janvier 2026',
        author: 'Dr. Molamine Hive',
    },
    {
        id: 5,
        category: 'Éducation',
        title: 'Soutien scolaire et santé psychologique',
        excerpt: 'Comment les établissements scolaires peuvent devenir des espaces bienveillants favorisant la réussite et le bien-être des élèves.',
        image: '/assets/feerima/educatif.png',
        date: '14 Janvier 2026',
        author: 'Dr. Glao Louis',
    },
    {
        id: 6,
        category: 'Innovation',
        title: 'Nouvelles thérapies pour les jeunes',
        excerpt: "La Fée Rima explore des méthodes innovantes en santé mentale pour répondre aux besoins spécifiques des jeunes d'aujourd'hui.",
        image: '/assets/feerima/Thérapies innovantes.png',
        date: '7 Janvier 2026',
        author: 'Dr. Emma Wilson',
    },
];

const strategies = [
    'Accompagnement individualisé',
    'Thérapies basées sur les preuves',
    'Approche multidisciplinaire',
    'Soutien familial intégré',
    'Activités socio-éducatives',
    'Suivi et évaluation régulière',
];

const mentors = [
    {
        id: 1,
        name: 'Dr. Glao Louis',
        role: 'Psychiatre Pédiatrique',
        image: '/assets/feerima/Image medecin 1.png',
        bio: "Spécialiste en psychiatrie de l'enfant et de l'adolescent avec plus de 15 ans d'expérience dans l'accompagnement des jeunes en difficulté.",
    },
    {
        id: 2,
        name: 'Dr. Emma Wilson',
        role: 'Psychologue Clinicienne',
        image: '/assets/feerima/Image medecin 2.png',
        bio: 'Experte en thérapies cognitivo-comportementales, elle accompagne les adolescents vers une meilleure gestion de leurs émotions.',
    },
];

/* ── Données : Nos partenaires ──────────────────────────── */
const partnersSections = [
    {
        id: 'institutionnel',
        title: 'Partenariat institutionnel',
        partners: [
            { id: 1, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/pnsm.jpg', url: null },
            { id: 2, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/sante.png', url: null },
            { id: 3, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/health.png', url: null },
            { id: 4, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/ministere.png', url: 'https://www.sante.gouv.ci/accueil' },
            { id: 5, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/sant.png', url: null },
            { id: 6, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/pnsm.jpg', url: null },
            { id: 7, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/unicef.png', url: 'https://help.unicef.org/wcaro/fr/wcar' },
            { id: 8, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/sante.png', url: null },
            { id: 9, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/pnsm.jpg', url: null },
            { id: 10, name: 'Programme National de Santé Mentale (PNSM)', logo: '/assets/feerima/OIP.png', url: null },
        ],
    },
    {
        id: 'academique',
        title: 'Partenariat académique et technique',
        partners: [
            { id: 11, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: 'https://cresp-formations.fr/' },
            { id: 12, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 13, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 14, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 15, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 16, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 17, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 18, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 19, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
            { id: 20, name: "Centre de Ressources et d'Enseignement Supérieur en Psychologie (Cresp)", logo: '/assets/feerima/cresp.png', url: null },
        ],
    },
    {
        id: 'solidaire',
        title: 'Partenariat solidaire',
        partners: [
            { id: 21, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 22, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 23, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 24, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 25, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 26, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 27, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 28, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 29, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
            { id: 30, name: 'Fondation Eman', logo: '/assets/feerima/emane.png', url: null },
        ],
    },
];

const SCROLL_MARGIN = { scrollMarginTop: '80px' };

export default function LaFondation() {
    const location = useLocation();

    // ── Scroll vers l'ancre présente dans l'URL au chargement ou changement de hash ──
    // ex: /la-fondation#nos-actions
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    }, [location.hash]);

    return (
        <div>
            <Navbar />

            {/* ── Bannière unique de la page ───────────────────── */}
            <section className={histStyles.hero}>
                <div className={histStyles.heroOverlay}></div>
                <div className={histStyles.heroContent}>
                    {/* <h1>La Fondation La Fée Rima</h1>
                    <p>Notre histoire, nos actions, notre engagement RSE, nos actualités et nos partenaires</p> */}
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION : Notre histoire
            ════════════════════════════════════════════════════ */}
            <section id="historique" style={SCROLL_MARGIN}>
                <div className={histStyles.page}>
                    <main className={histStyles.main}>
                        <section className={histStyles.section}>
                            <div className={histStyles.content}>
                                <span className={histStyles.tag}>Nos origines</span>
                                <h2>Une histoire<br />personnelle</h2>
                                <p>
                                    La Fée Rima est d'abord inspirée d'une histoire personnelle. Très tôt, j'ai été confrontée à la réalité de la souffrance psychologique, et cette expérience m'a profondément sensibilisée aux enjeux du bien-être mental. J'ai compris à quel point un accompagnement humain, adapté et accessible peut faire la différence.
                                </p>
                                <p>
                                    En observant la situation en Côte d'Ivoire, j'ai réalisé que de nombreux jeunes vivent eux aussi des difficultés émotionnelles ou psychologiques, souvent dans le silence, faute de sensibilisation et de structures de prise en charge.
                                </p>
                            </div>
                            <div
                                className={histStyles.imageBox}
                                style={{ backgroundImage: "url('/assets/feerima/histoire.png')" }}
                            ></div>
                        </section>

                        <section className={`${histStyles.section} ${histStyles.realitySection}`}>
                            <div className={histStyles.content}>
                                <span className={histStyles.tag}>Le constat</span>
                                <h2>La réalité des jeunes en Afrique Subsaharienne</h2>
                                <p className={histStyles.introText}>
                                    De cette double expérience — personnelle et collective — est née une conviction forte : chaque adolescent mérite la chance de mener une vie épanouie.
                                </p>

                                <div className={histStyles.statsGrid}>
                                    <div className={histStyles.statCard}>
                                        <span className={histStyles.statNumber}>1/4</span>
                                        <span className={histStyles.statLabel}>des adolescents souffre d'un trouble mental.</span>
                                    </div>
                                    <div className={histStyles.statCard}>
                                        <span className={histStyles.statNumber}>40%</span>
                                        <span className={histStyles.statLabel}>présentent des troubles émotionnels ou comportementaux.</span>
                                    </div>
                                    <div className={histStyles.statCard}>
                                        <span className={histStyles.statNumber}>50%</span>
                                        <span className={histStyles.statLabel}>des troubles psychologiques apparaissent avant 18 ans.</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={histStyles.section}>
                            <div className={histStyles.stackedImages}>
                                <img
                                    src="/assets/feerima/ma_mission.png"
                                    alt="Illustration de notre mission"
                                />
                            </div>
                            <div className={histStyles.content}>
                                <span className={histStyles.tag}>Notre engagement</span>
                                <h3>Ma vision & Ma mission</h3>
                                <p>
                                    Animée par cette conviction, j'ai fondé en 2024, à seulement 19 ans, <strong>La Fée Rima</strong>, une fondation à but non lucratif. Ma mission : sensibiliser le grand public, briser les tabous autour de la santé mentale et développer des solutions concrètes d'accompagnement adaptées à la réalité des jeunes en Côte d'Ivoire.
                                </p>
                                <p>
                                    À travers le centre spécialisé La Fée Rima, je souhaite bâtir un environnement bienveillant, inclusif et innovant, où chaque jeune peut trouver écoute, soutien et accompagnement adapté à sa situation.
                                </p>
                                <div className={histStyles.emphasisBox}>
                                    <p>
                                        Le centre s'inscrit dans la mission globale de la fondation : promouvoir le bien-être psychique des adolescents et jeunes adultes, renforcer la prévention et faciliter l'accès à des soins de qualité.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION : Nos actions
            ════════════════════════════════════════════════════ */}
            <section id="nos-actions" style={SCROLL_MARGIN}>
                <div className="nos-actions-page">
                    <section className="section vision-section">
                        <div className="container">
                            <p className="rse-eyebrow" style={{ textAlign: 'center' }}>Nos actions</p>
                            <div className="section-header">
                                <h2>Notre Vision</h2>
                                <div className="divider"></div>
                            </div>
                            <p className="vision-intro">
                                La Fondation <strong>La Fée Rima</strong> s'engage dans la promotion de la santé mentale et du
                                bien-être psychosocial des adolescents et jeunes en Côte d'Ivoire.
                            </p>
                            <p className="vision-text">
                                En ce qui concerne ses activités de promotion, un accent particulier est porté sur
                                le renforcement des connaissances en santé mentale afin de faciliter l'accès aux
                                soins des adolescents et jeunes. L'objectif est d'améliorer leur bien-être
                                psychosocial, contribuant ainsi à une meilleure insertion socio-professionnelle.
                            </p>
                            <p className="vision-text">
                                À travers ses actions de sensibilisation, de formation et d'accompagnement, la
                                fondation œuvre pour une meilleure prise en charge des problématiques
                                psychologiques, en particulier chez les adolescents et jeunes âgés de
                                <strong> 10 à 25 ans</strong> quel que soit leur niveau socio-économique.
                            </p>

                            <ul className="vision-list">
                                {visionPoints.map((point, index) => (
                                    <li key={index} className="vision-item">
                                        <span className="check-icon">✓</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="section sensibilisation-section">
                        <div className="container">
                            <div className="section-grid">
                                <div className="section-content">
                                    <div className="section-header">
                                        <h2>Sensibilisation</h2>
                                        <div className="divider"></div>
                                    </div>
                                    <p className="section-description">
                                        Informer, échanger et agir pour briser les tabous autour de la santé mentale.
                                    </p>

                                    <ul className="action-list">
                                        {sensibilisationActions.map((action, index) => (
                                            <li key={index} className="action-item">
                                                <span className="action-icon">🗣️</span>
                                                {action}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="stats-card">
                                        <h3>Impact 2025</h3>
                                        <p className="stats-description">
                                            Activités de sensibilisation et enquêtes menées dans certains
                                            lycées techniques et professionnels d'Abidjan.
                                        </p>
                                        <div className="stats-number">
                                            <span className="number">81</span>
                                            <span className="label">élèves sensibilisés</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-image">
                                    <div className="image-placeholder">
                                        <span className="placeholder-text">Image : Sensibilisation en milieu scolaire</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section formation-section">
                        <div className="container">
                            <div className="section-grid reverse">
                                <div className="section-image">
                                    <div className="image-placeholder">
                                        <span className="placeholder-text">Image : Formation des professionnels</span>
                                    </div>
                                </div>
                                <div className="section-content">
                                    <div className="section-header">
                                        <h2>Renforcement des Capacités</h2>
                                        <div className="divider"></div>
                                    </div>
                                    <p className="section-description">
                                        Former les acteurs clés pour une prise en charge qualité de la santé mentale.
                                    </p>
                                    <p className="section-text">
                                        En collaboration avec le <strong>Ministère en charge de la Santé</strong>, la Fondation la FEE RIMA a initié une formation continue à destination des professionnels de santé et travailleurs sociaux dont la première cohorte a concerné 50 personnes. Cette formation est assurée par le Centre de Formation, Ressources et d'Enseignement Supérieur en Psychologie (CRESP). Le thème de la formation est la psychologie de l'enfant et de l'adolescent, permettant d'aborder des sujets variés tels que : le cerveau, les troubles psychologiques, l'attachement, les addictions, la prise en charge, etc.
                                    </p>
                                    <br />
                                    <p className="section-text">
                                        La Fondation mène des activités de renforcement de capacités sur le dépistage
                                        et la prise en charge en santé mentale des adolescents et jeunes. Elles
                                        s'adressent à des <strong>professionnels de santé</strong>, des
                                        <strong> travailleurs sociaux</strong> et des <strong>professionnels pédagogiques</strong>.
                                        L'objectif étant de faciliter l'accès et la qualité des soins pour tous.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION : Notre responsabilité sociétale (RSE)
            ════════════════════════════════════════════════════ */}
            <section id="rse" style={SCROLL_MARGIN}>
                <div className="rse-page">
                    <main className="rse-main">
                        <section className="rse-intro-section">
                            <div className="rse-text-block">
                                <span className="rse-eyebrow">Notre engagement</span>
                                <h2>Notre Politique RSE</h2>
                                <p>
                                    La Fondation la Fée Rima, dédiée au bien-être psychologique des jeunes, place
                                    la responsabilité sociétale au cœur de ses actions. Notre engagement RSE reflète
                                    notre volonté d'avoir un impact positif sur nos bénéficiaires, nos collaborateurs,
                                    la communauté et l'environnement.
                                </p>
                                <p>
                                    <strong>Bien-être et accompagnement des jeunes</strong><br />
                                    Nous offrons un accueil respectueux, bienveillant et accessible à tous les jeunes
                                    de 10 à 25 ans. Chaque projet de soins est personnalisé, dans le respect de la
                                    dignité et de la confidentialité.
                                </p>
                            </div>
                            <div
                                className="rse-image-block"
                                style={{
                                    backgroundImage: "url('/assets/feerima/politique.png')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                        </section>

                        <blockquote className="rse-quote">
                            <p>
                                Renforcer chaque année nos actions RSE afin de favoriser une société plus inclusive,
                                respectueuse de l'environnement et solidaire, tout en restant fidèles à notre mission
                                de sensibilisation, prévention, soins et recherche.
                            </p>
                            <cite>Notre ambition</cite>
                        </blockquote>

                        <section className="rse-pillars">
                            <div className="rse-pillar-card rse-pillar--green">
                                <span className="rse-pillar-number">01</span>
                                <h3>Éthique &amp; gouvernance</h3>
                                <p>
                                    Nos actions reposent sur la transparence, l'intégrité et l'écoute. Nous associons
                                    bénéficiaires, familles, partenaires et intervenants extérieurs pour des prestations
                                    de qualité.
                                </p>
                                <div
                                    className="rse-pillar-image"
                                    style={{
                                        backgroundImage: "url('/assets/feerima/ethique.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            </div>

                            <div className="rse-pillar-card rse-pillar--teal">
                                <span className="rse-pillar-number">02</span>
                                <h3>Conditions de travail</h3>
                                <p>
                                    Parce que prendre soin des adolescents et des jeunes, c'est aussi s'occuper de ceux
                                    qui les accompagnent. Nous favorisons la formation continue, l'esprit d'équipe et
                                    le bien-être au travail.
                                </p>
                                <div
                                    className="rse-pillar-image"
                                    style={{
                                        backgroundImage: "url('/assets/feerima/eth_gouv.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            </div>

                            <div className="rse-pillar-card rse-pillar--olive">
                                <span className="rse-pillar-number">03</span>
                                <h3>Accessibilité &amp; inclusion</h3>
                                <p>
                                    Un accueil respectueux et bienveillant, accessible à tous les jeunes de 10 à 25 ans,
                                    avec un projet de soins personnalisé dans le respect de la dignité de chacun.
                                </p>
                            </div>

                            <div className="rse-pillar-card rse-pillar--sage">
                                <span className="rse-pillar-number">04</span>
                                <h3>Impact communautaire</h3>
                                <p>
                                    Nous œuvrons pour sensibiliser et prévenir, en tissant des liens durables avec les
                                    acteurs de la communauté autour du bien-être des jeunes.
                                </p>
                            </div>
                        </section>

                        <section className="rse-env-section">
                            <div
                                className="rse-env-image"
                                style={{
                                    backgroundImage: "url('/assets/feerima/environnement.png')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            <div className="rse-text-block">
                                <span className="rse-eyebrow">Durabilité</span>
                                <h2>Environnement &amp;<br />Durabilité</h2>
                                <p>
                                    Nous nous engageons à réduire notre empreinte écologique grâce à une gestion
                                    responsable des ressources, à la diminution de l'usage du papier et à la
                                    sensibilisation aux éco-gestes.
                                </p>
                                <p>
                                    Nous privilégions des équipements durables respectueux de l'environnement et
                                    assurons une prise en charge adéquate des déchets médicaux.
                                </p>
                                <div className="rse-eco-badges">
                                    <span>Réduction papier</span>
                                    <span>Équipements durables</span>
                                    <span>Déchets médicaux</span>
                                    <span>Éco-gestes</span>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION : Nos actualités
            ════════════════════════════════════════════════════ */}
            <section id="actualites" style={SCROLL_MARGIN}>
                <div className="actualites-page">
                    <main className="actualites-content">
                        <section className="actu-articles-section">
                            <div className="actu-container">
                                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                    <span className="rse-eyebrow">Fondation La Fée Rima</span>
                                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 800, color: '#111', margin: '8px 0 0' }}>Nos actualités</h2>
                                </div>
                                <div className="actu-articles-grid">
                                    {articles.map((article) => (
                                        <article key={article.id} className="actu-card">
                                            <div className="actu-card-image">
                                                <img src={article.image} alt={article.title} />
                                                <span className="actu-category">{article.category}</span>
                                            </div>
                                            <div className="actu-card-body">
                                                <p className="actu-meta">{article.date} · {article.author}</p>
                                                <h3>{article.title}</h3>
                                                <p className="actu-excerpt">{article.excerpt}</p>
                                                <a href="#" className="actu-read-more">Lire la suite →</a>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="actu-strategy-section">
                            <div className="actu-container actu-strategy-grid">
                                <div className="actu-strategy-left">
                                    <h2>Notre approche &amp; Planification</h2>
                                    <ul className="actu-strategy-list">
                                        {strategies.map((item, i) => (
                                            <li key={i}>
                                                <span className={i === 2 ? 'actu-strategy-bold' : ''}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="actu-strategy-right">
                                    <div className="actu-strategy-image-wrapper">
                                        <img src="/assets/feerima/approche.png" alt="Notre approche" />
                                        <div className="actu-play-btn">
                                            <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="actu-mentors-section">
                            <div className="actu-container">
                                <h2>Rencontrez nos experts</h2>
                                <p className="actu-mentors-subtitle">
                                    Des professionnels passionnés, entièrement dédiés à la santé mentale des jeunes.
                                </p>
                                <div className="actu-mentors-grid">
                                    {mentors.map((mentor) => (
                                        <div key={mentor.id} className="actu-mentor-card">
                                            <img src={mentor.image} alt={mentor.name} className="actu-mentor-img" />
                                            <div className="actu-mentor-info">
                                                <h3>{mentor.name}</h3>
                                                <span className="actu-mentor-role">{mentor.role}</span>
                                                <p>{mentor.bio}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="actu-contact-section">
                            <div className="actu-container actu-contact-grid">
                                <div className="actu-contact-form-col">
                                    <h2>Prenez contact avec nous</h2>
                                    <p>N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais.</p>
                                    <form className="actu-contact-form">
                                        <div className="actu-form-row">
                                            <div className="actu-form-group">
                                                <label>Prénom</label>
                                                <input type="text" placeholder="Votre prénom" />
                                            </div>
                                            <div className="actu-form-group">
                                                <label>Nom</label>
                                                <input type="text" placeholder="Votre nom" />
                                            </div>
                                        </div>
                                        <div className="actu-form-group">
                                            <label>Email</label>
                                            <input type="email" placeholder="votre@email.com" />
                                        </div>
                                        <button type="submit" className="actu-submit-btn">Envoyer</button>
                                    </form>
                                </div>

                                <div className="actu-contact-info-col">
                                    <div className="actu-info-block">
                                        <h4>Navigation</h4>
                                        <ul>
                                            <li><Link to="/">Accueil</Link></li>
                                            <li><Link to="/la-fondation#historique">Notre histoire</Link></li>
                                            <li><Link to="/equipes">Nos professionnels</Link></li>
                                            <li><Link to="/preadmission">Pré-admission</Link></li>
                                            <li><Link to="/la-fondation#actualites">Actualités</Link></li>
                                        </ul>
                                    </div>
                                    <div className="actu-info-block">
                                        <h4>Service patient</h4>
                                        <ul>
                                            <li>Politique de confidentialité</li>
                                            <li>Conditions d'utilisation</li>
                                            <li>Modalités de prise en charge</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION : Nos partenaires
            ════════════════════════════════════════════════════ */}
            <section id="partenaires" style={SCROLL_MARGIN}>
                <div className="nos-partners-page">
                    <main className="partners-main">
                        <div className="partners-page-header">
                            <div className="container">
                                <h1>Nos partenaires</h1>
                                <p className="partners-intro">
                                    La force de FEERIMA réside dans le travail que nous faisons avec nos nombreux partenaires.
                                    Nous remercions sincèrement les organismes et entreprises participants qui rendent notre travail possible.
                                </p>
                                <hr className="partners-divider" />
                            </div>
                        </div>

                        {partnersSections.map((section) => (
                            <section key={section.id} className="partners-section">
                                <div className="container">
                                    <h2 className="section-title">{section.title}</h2>
                                    <div className="partners-logos-grid">
                                        {section.partners.map((partner) => (
                                            <div key={partner.id} className="partner-logo-wrapper">
                                                {partner.url ? (
                                                    <a
                                                        href={partner.url}
                                                        className="partner-logo-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title={partner.name}
                                                    >
                                                        <img src={partner.logo} alt={partner.name} className="partner-logo-img" loading="lazy" />
                                                    </a>
                                                ) : (
                                                    <img src={partner.logo} alt={partner.name} className="partner-logo-img" loading="lazy" title={partner.name} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </section>

            <Footer />
        </div>
    );
}
