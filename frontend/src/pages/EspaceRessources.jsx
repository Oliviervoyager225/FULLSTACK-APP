// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const ressources = [
//     {
//         categorie: 'Guides et brochures',
//         items: [
//             { titre: 'Guide du patient – La Fée Rima', description: 'Tout ce que vous devez savoir avant votre première visite.' },
//             { titre: 'Brochure "Comprendre la psychiatrie adolescente"', description: 'Un document accessible pour les familles.' },
//             { titre: "Livret d'accueil", description: "Présentation de l'établissement et de son fonctionnement." },
//         ],
//     },
//     {
//         categorie: 'Liens utiles',
//         items: [
//             { titre: 'Santé Mentale France', description: 'Association nationale de sensibilisation à la santé mentale.', lien: '#' },
//             { titre: 'Psycom', description: 'Ressources sur la santé mentale pour le grand public.', lien: '#' },
//             { titre: 'HAS – Haute Autorité de Santé', description: 'Recommandations et bonnes pratiques en psychiatrie.', lien: '#' },
//         ],
//     },
// ];

// export default function EspaceRessources() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/hero5.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Espace Ressources</h1>
//                     <p>Documents, guides et liens utiles pour vous accompagner</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
//                     <div className="hist-content" style={{ maxWidth: '900px', width: '100%' }}>
//                         <h2 style={{ marginBottom: '2rem' }}>NOS RESSOURCES EN LIGNE</h2>
//                         {ressources.map((cat, ci) => (
//                             <div key={ci} style={{ marginBottom: '2.5rem' }}>
//                                 <h3
//                                     style={{
//                                         color: '#7cb518',
//                                         borderBottom: '2px solid #7cb518',
//                                         paddingBottom: '0.5rem',
//                                         marginBottom: '1.25rem',
//                                         fontSize: '1.1rem',
//                                         letterSpacing: '0.05em',
//                                         textTransform: 'uppercase',
//                                     }}
//                                 >
//                                     {cat.categorie}
//                                 </h3>
//                                 <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
//                                     {cat.items.map((item, ii) => (
//                                         <div
//                                             key={ii}
//                                             style={{
//                                                 background: '#fff',
//                                                 borderRadius: '10px',
//                                                 padding: '1.25rem',
//                                                 boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
//                                                 borderLeft: '4px solid #7cb518',
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 gap: '0.5rem',
//                                             }}
//                                         >
//                                             <strong style={{ color: '#1a3a5c' }}>{item.titre}</strong>
//                                             <p style={{ fontSize: '0.9rem', color: '#555', margin: 0 }}>{item.description}</p>
//                                             {item.lien && (
//                                                 <a
//                                                     href={item.lien}
//                                                     style={{ color: '#7cb518', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
//                                                 >
//                                                     Accéder →
//                                                 </a>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

// premiere modification

//ancienne code(de base)
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const ressources = [
//     {
//         categorie: 'Guides et brochures',
//         items: [
//             { titre: 'Guide du patient – La Fée Rima', description: 'Tout ce que vous devez savoir avant votre première visite.' },
//             { titre: 'Brochure "Comprendre la psychiatrie adolescente"', description: 'Un document accessible pour les familles.' },
//             { titre: "Livret d'accueil", description: "Présentation de l'établissement et de son fonctionnement." },
//         ],
//     },
//     {
//         categorie: 'Liens utiles',
//         items: [
//             { titre: 'Santé Mentale France', description: 'Association nationale de sensibilisation à la santé mentale.', lien: '#' },
//             { titre: 'Psycom', description: 'Ressources sur la santé mentale pour le grand public.', lien: '#' },
//             { titre: 'HAS – Haute Autorité de Santé', description: 'Recommandations et bonnes pratiques en psychiatrie.', lien: '#' },
//         ],
//     },
// ];

// export default function EspaceRessources() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/ressources.png')" }}
//             >
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section">
//                     <div className="hist-content">
//                         <h2>NOS RESSOURCES EN LIGNE</h2>
                        
//                         {ressources.map((cat, ci) => (
//                             <div key={ci}>
//                                 <h3>{cat.categorie}</h3>
                                
//                                 <div className="ressources-grid">
//                                     {cat.items.map((item, ii) => (
//                                         <div key={ii} className="ressource-card">
//                                             <strong>{item.titre}</strong>
//                                             <p>{item.description}</p>
//                                             {item.lien && (
//                                                 <a href={item.lien} className="ressource-link">
//                                                     Accéder <span>→</span>
//                                                 </a>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

/* ─── Vidéos "À regarder" ──────────────────────────────────────── */
const videos = [
    {
        id: 1,
        titre: 'Découvrez la Fondation La Fée Rima !',
        duree: '2:37',
        tag: 'Présentation',
        // Remplacez par vos vrais IDs YouTube
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    {
        id: 2,
        titre: 'Film sur le harcèlement scolaire',
        duree: '8:14',
        tag: 'Film',
        // https://www.youtube.com/watch?v=ArekOD1ij-U
        videoUrl: 'https://www.youtube.com/embed/ArekOD1ij-U',
        thumbUrl: 'https://img.youtube.com/vi/ArekOD1ij-U/hqdefault.jpg'
    },
    {
        id: 3,
        titre: 'Témoignage : vivre avec l\'anxiété',
        duree: '5:22',
        tag: 'Témoignage',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    {
        id: 4,
        titre: 'Comprendre la dépression chez les jeunes',
        duree: '6:48',
        tag: 'Éducatif',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
    {
        id: 5,
        titre: 'L\'hôpital de jour : comment ça marche ?',
        duree: '4:05',
        tag: 'Centre',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    },
];

/* ─── Lecteur + Playlist ───────────────────────────────────────── */
 function VideoPlayer() {
    const [activeId, setActiveId] = useState(videos[0].id);
    const [playing, setPlaying] = useState(false);

    const current = videos.find(v => v.id === activeId);

    const handleSelect = (v) => {
        setActiveId(v.id);
        setPlaying(true);
    };

    const tagColors = {
        'Présentation': { bg: '#E6F1FB', color: '#0C447C' },
        'Film':         { bg: '#FBEAF0', color: '#72243E' },
        'Témoignage':   { bg: '#EAF3DE', color: '#27500A' },
        'Éducatif':     { bg: '#FAEEDA', color: '#633806' },
        'Centre':       { bg: '#EEEDFE', color: '#3C3489' },
    };

    return (
        <div style={{ display: 'flex', gap: '0', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e8edf2', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>

            {/* ── Lecteur principal ── */}
            <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column' }}>
                {/* Zone vidéo */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#0f172a', overflow: 'hidden' }}>
                    {!playing ? (
                        <>
                            {/* Thumbnail */}
                            <img
                                src={current.thumbUrl}
                                alt={current.titre}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                                onError={e => { e.target.style.display = 'none'; }}
                            />
                            {/* Overlay foncé */}
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.45)' }} />
                            {/* Titre sur la vignette */}
                            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                                <p style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', margin: 0, lineHeight: 1.3, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                                    {current.titre}
                                </p>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', margin: '4px 0 0' }}>
                                    La Fée Rima · {current.duree}
                                </p>
                            </div>
                            {/* Bouton play */}
                            <button
                                onClick={() => setPlaying(true)}
                                aria-label={`Lire : ${current.titre}`}
                                style={{
                                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}
                            >
                                <div style={{
                                    width: '64px', height: '64px', borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.95)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                                    transition: 'transform 0.2s, background 0.2s',
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.background = '#fff'; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.95)'; }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#993556">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </button>
                        </>
                    ) : (
                        <iframe
                            src={`${current.videoUrl}?rel=0&modestbranding=1`}
                            title={current.titre}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                        />
                    )}
                </div>

                {/* Infos sous le lecteur */}
                <div style={{ padding: '14px 18px 16px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                        <div style={{
                            width: '32px', height: '32px', borderRadius: '50%',
                            background: '#FBEAF0', flexShrink: 0,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.9rem',
                        }}>🎬</div>
                        <div style={{ flex: 1 }}>
                            <p style={{ margin: 0, fontWeight: 800, fontSize: '0.9375rem', color: '#1a3a5c', lineHeight: 1.3 }}>
                                {current.titre}
                            </p>
                            <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
                                La Fée Rima · {current.duree}
                            </p>
                        </div>
                        {(() => {
                            const tc = tagColors[current.tag] || { bg: '#f1f5f9', color: '#64748b' };
                            return (
                                <span style={{ padding: '3px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700, background: tc.bg, color: tc.color, flexShrink: 0 }}>
                                    {current.tag}
                                </span>
                            );
                        })()}
                    </div>
                    {playing && (
                        <button
                            onClick={() => setPlaying(false)}
                            style={{
                                padding: '5px 14px', borderRadius: '50px',
                                border: '1.5px solid #e2e8f0', background: '#fff',
                                fontSize: '0.8rem', fontWeight: 700, color: '#64748b',
                                cursor: 'pointer',
                            }}
                        >
                            ■ Arrêter
                        </button>
                    )}
                </div>
            </div>

            {/* ── Playlist ── */}
            <div style={{
                flex: '0 0 280px',
                borderLeft: '1.5px solid #f1f5f9',
                display: 'flex', flexDirection: 'column',
                maxHeight: '420px',
            }}>
                {/* Header playlist */}
                <div style={{
                    padding: '12px 14px',
                    borderBottom: '1.5px solid #f1f5f9',
                    display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                    <span style={{
                        width: '22px', height: '22px', borderRadius: '6px',
                        background: '#FBEAF0', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '0.75rem',
                    }}>▶</span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#1a3a5c' }}>
                        {videos.length} vidéos
                    </span>
                </div>

                {/* Liste */}
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {videos.map((v, i) => {
                        const isActive = v.id === activeId;
                        const tc = tagColors[v.tag] || { bg: '#f1f5f9', color: '#64748b' };
                        return (
                            <button
                                key={v.id}
                                onClick={() => handleSelect(v)}
                                style={{
                                    width: '100%', display: 'flex', alignItems: 'center',
                                    gap: '10px', padding: '10px 14px',
                                    background: isActive ? '#FBEAF0' : '#fff',
                                    border: 'none',
                                    borderBottom: '1px solid #f8fafc',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    transition: 'background 0.15s',
                                    borderLeft: isActive ? '3px solid #993556' : '3px solid transparent',
                                }}
                                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#fafafa'; }}
                                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = '#fff'; }}
                            >
                                {/* Numéro ou icône lecture */}
                                <div style={{
                                    flexShrink: 0, width: '24px', height: '24px',
                                    borderRadius: '50%',
                                    background: isActive ? '#993556' : '#f1f5f9',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: isActive ? '0.65rem' : '0.75rem',
                                    fontWeight: 700,
                                    color: isActive ? '#fff' : '#94a3b8',
                                }}>
                                    {isActive ? '▶' : i + 1}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <p style={{
                                        margin: 0, fontSize: '0.8rem', fontWeight: isActive ? 700 : 600,
                                        color: isActive ? '#993556' : '#1a3a5c',
                                        lineHeight: 1.35,
                                        overflow: 'hidden', textOverflow: 'ellipsis',
                                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                                    }}>
                                        {v.titre}
                                    </p>
                                    <p style={{ margin: '2px 0 0', fontSize: '0.7rem', color: '#94a3b8' }}>
                                        {v.duree}
                                    </p>
                                </div>
                                <span style={{ flexShrink: 0, padding: '2px 6px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: 700, background: tc.bg, color: tc.color }}>
                                    {v.tag}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Footer playlist */}
                <div style={{ padding: '10px 14px', borderTop: '1.5px solid #f1f5f9' }}>
                    <a href="#" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        padding: '7px', borderRadius: '8px',
                        background: '#1a3a5c', color: '#fff',
                        fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none',
                    }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 7l-7.59-7.59L10.59 0 3 7.59V21h6v-6h6v6h6V7l-.41-.41zM7 19H5v-7.41L12 5.17l7 6.42V19h-2v-6H7v6z"/></svg>
                        Plus de vidéos
                    </a>
                </div>
            </div>

        </div>
    );
}

/* ─── Données ressources ────────────────────────────────────────── */
const ressources = [
    {
        section: 'À lire',
        icon: '📖',
        color: '#185FA5',
        colorLight: '#E6F1FB',
        items: [
            { titre: 'Liens du Dr Zerbo', description: 'Sélection de ressources recommandées par le Dr Zerbo pour mieux comprendre la santé mentale.', lien: '#', tag: 'Recommandé' },
            { titre: 'Techniques de relaxation', description: "Des exercices simples et efficaces pour gérer le stress, l'anxiété et retrouver un état de calme au quotidien.", lien: '#' },
            { titre: '5 conseils pour améliorer son sommeil', description: 'Découvrez des habitudes concrètes pour améliorer la qualité de votre sommeil et prendre soin de votre santé mentale.', lien: '#' },
            { titre: 'Dépression : comprendre et agir', description: 'Un guide complet pour reconnaître les signes de la dépression, comprendre ses causes et trouver les bons recours.', lien: '#' },
            { titre: "Qu'est-ce que l'anxiété ?", description: "Tout savoir sur les troubles anxieux : symptômes, types d'anxiété et pistes pour mieux y faire face.", lien: '#' },
            { titre: "Qu'est-ce que la schizophrénie ?", description: 'Une explication claire et bienveillante de ce trouble mental complexe, pour aider à démystifier et à mieux soutenir.', lien: '#' },
        ],
    },
    {
        section: 'À regarder',
        icon: '🎬',
        color: '#993556',
        colorLight: '#FBEAF0',
        // Les items sont gérés par VideoPlayer, pas par ResourceCard
        items: [],
    },
    {
        section: 'À écouter',
        icon: '🎧',
        color: '#534AB7',
        colorLight: '#EEEDFE',
        items: [
            { titre: 'Films, séries & musique', description: "Une sélection de contenus audio et visuels autour de la santé mentale : podcasts, playlists apaisantes et séries inspirantes.", lien: '#' },
            { titre: 'Témoignages', description: 'Des témoignages authentiques de personnes qui ont traversé des difficultés psychologiques et partagent leur parcours de guérison.', lien: '#', tag: 'Nouveauté' },
        ],
    },
];

/* ─── Carte ressource standard ────────────────────────────────── */
function ResourceCard({ item, color, colorLight }) {
    return (
        <div style={{
            background: '#fff', border: '1.5px solid #e8edf2', borderRadius: '14px',
            padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem',
            transition: 'box-shadow 0.2s, border-color 0.2s', cursor: 'pointer',
            position: 'relative', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`; e.currentTarget.style.borderColor = `${color}50`; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = '#e8edf2'; }}
        >
            {item.tag && (
                <span style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.05em', padding: '2px 8px', borderRadius: '20px', background: colorLight, color }}>
                    {item.tag}
                </span>
            )}
            <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1a3a5c', margin: 0, lineHeight: 1.4, paddingRight: item.tag ? '5rem' : 0 }}>
                {item.titre}
            </p>
            <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.7, margin: 0, flex: 1 }}>
                {item.description}
            </p>
            {item.lien && (
                <a href={item.lien} style={{ marginTop: '0.5rem', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 700, color, textDecoration: 'none' }}>
                    Accéder <span>→</span>
                </a>
            )}
        </div>
    );
}

/* ─── Page principale ─────────────────────────────────────────── */
export default function EspaceRessources() {
    const [search, setSearch] = useState('');
    const [activeSection, setActiveSection] = useState('Tout');

    const sections = ['Tout', ...ressources.map(r => r.section)];

    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim();
        return ressources.filter(r => activeSection === 'Tout' || r.section === activeSection);
    }, [search, activeSection]);

    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            <section className="page-hero" style={{ backgroundImage: "url('/assets/feerima/ressources.png')" }} />

            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '3rem 1rem' }}>
                <div style={{ maxWidth: '960px', margin: '0 auto' }}>

                    {/* En-tête */}
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7cb518', marginBottom: '0.5rem' }}>
                            Espace documentation
                        </p>
                        <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, color: '#1a3a5c', margin: '0 0 0.75rem', lineHeight: 1.2 }}>
                            Ressources utiles
                        </h1>
                        <p style={{ fontSize: '1rem', color: '#718096', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
                            Articles, vidéos, podcasts et témoignages pour mieux comprendre et prendre soin de votre santé mentale.
                        </p>
                    </div>

                    {/* Barre de recherche */}
                    <div style={{ position: 'relative', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
                        <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem', pointerEvents: 'none' }}>🔍</span>
                        <input
                            type="text" placeholder="Rechercher une ressource…" value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 2.75rem', fontSize: '0.9375rem', border: '1.5px solid #e2e8f0', borderRadius: '50px', background: '#fff', color: '#1a3a5c', outline: 'none', boxSizing: 'border-box', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', transition: 'border-color 0.2s' }}
                            onFocus={e => e.target.style.borderColor = '#7cb518'}
                            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                        />
                        {search && <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: '#94a3b8', padding: 0 }}>✕</button>}
                    </div>

                    {/* Filtres */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                        {sections.map(s => {
                            const active = activeSection === s;
                            const sData = ressources.find(r => r.section === s);
                            return (
                                <button key={s} onClick={() => setActiveSection(s)} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '0.45rem 1rem', borderRadius: '50px',
                                    border: active ? '1.5px solid #7cb518' : '1.5px solid #e2e8f0',
                                    background: active ? '#7cb518' : '#fff', color: active ? '#fff' : '#64748b',
                                    fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                                }}>
                                    {sData && <span>{sData.icon}</span>}
                                    {s}
                                </button>
                            );
                        })}
                    </div>

                    {/* Sections */}
                    {filtered.map((cat, ci) => (
                        <div key={ci} style={{ marginBottom: '3rem' }}>
                            {/* Titre section */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                                <span style={{ width: '36px', height: '36px', borderRadius: '10px', background: cat.colorLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>
                                    {cat.icon}
                                </span>
                                <h2 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1a3a5c', margin: 0 }}>
                                    {cat.section}
                                </h2>
                                {cat.section !== 'À regarder' && (
                                    <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 700, padding: '2px 10px', borderRadius: '20px', background: cat.colorLight, color: cat.color }}>
                                        {cat.items.length} ressource{cat.items.length > 1 ? 's' : ''}
                                    </span>
                                )}
                            </div>

                            {/* Contenu */}
                            {cat.section === 'À regarder' ? (
                                <VideoPlayer />
                            ) : (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
                                    {cat.items
                                        .filter(item => !search || item.titre.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
                                        .map((item, ii) => (
                                            <ResourceCard key={ii} item={item} color={cat.color} colorLight={cat.colorLight} />
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* CTA */}
                    <div style={{ marginTop: '1rem', padding: '2rem', background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)', borderRadius: '16px', textAlign: 'center', color: '#fff' }}>
                        <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Vous ne trouvez pas ce que vous cherchez ?</p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.25rem', lineHeight: 1.6 }}>Notre équipe peut vous orienter vers les ressources adaptées à votre situation.</p>
                        <a href="/contact" style={{ display: 'inline-block', padding: '0.625rem 1.5rem', background: '#fff', color: '#1a3a5c', borderRadius: '30px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                            Nous contacter
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

// import React, { useState, useMemo } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/PageHero.css';

/* ─── Données ─────────────────────────────────────────────────── */
// const ressources = [
//     {
//         section: 'À lire',
//         icon: '📖',
//         color: '#185FA5',
//         colorLight: '#E6F1FB',
//         items: [
//             {
//                 titre: 'Liens du Dr Zerbo',
//                 description: 'Sélection de ressources recommandées par le Dr Zerbo pour mieux comprendre la santé mentale.',
//                 lien: '#',
//                 tag: 'Recommandé',
//             },
//             {
//                 titre: 'Techniques de relaxation',
//                 description: 'Des exercices simples et efficaces pour gérer le stress, lanxiété et retrouver un état de calme au quotidien.',
//                 lien: '#',
//             },
//             {
//                 titre: '5 conseils pour améliorer son sommeil',
//                 description: 'Découvrez des habitudes concrètes pour améliorer la qualité de votre sommeil et prendre soin de votre santé mentale.',
//                 lien: '#',
//             },
//             {
//                 titre: 'Dépression : comprendre et agir',
//                 description: 'Un guide complet pour reconnaître les signes de la dépression, comprendre ses causes et trouver les bons recours.',
//                 lien: '#',
//             },
//             {
//                 titre: "Qu'est-ce que l'anxiété ?",
//                 description: "Tout savoir sur les troubles anxieux : symptômes, types d'anxiété et pistes pour mieux y faire face.",
//                 lien: '#',
//             },
//             {
//                 titre: "Qu'est-ce que la schizophrénie ?",
//                 description: 'Une explication claire et bienveillante de ce trouble mental complexe, pour aider à démystifier et à mieux soutenir.',
//                 lien: '#',
//             },
//         ],
//     },
//     {
//         section: 'À regarder',
//         icon: '🎬',
//         color: '#993556',
//         colorLight: '#FBEAF0',
//         items: [
//             {
//                 titre: 'Film sur le harcèlement',
//                 description: 'Un film poignant qui aborde le harcèlement scolaire et ses répercussions sur la santé mentale des adolescents.',
//                 lien: '#',
//                 tag: 'Film',
//             },
//         ],
//     },
//     {
//         section: 'À écouter',
//         icon: '🎧',
//         color: '#534AB7',
//         colorLight: '#EEEDFE',
//         items: [
//             {
//                 titre: 'Films, séries & musique',
//                 description: 'Une sélection de contenus audio et visuels autour de la santé mentale : podcasts, playlists apaisantes et séries inspirantes.',
//                 lien: '#',
//             },
//             {
//                 titre: 'Témoignages',
//                 description: 'Des témoignages authentiques de personnes qui ont traversé des difficultés psychologiques et partagent leur parcours de guérison.',
//                 lien: '#',
//                 tag: 'Nouveauté',
//             },
//         ],
//     },
// ];

/* ─── Composant carte ─────────────────────────────────────────── */
// function ResourceCard({ item, color, colorLight }) {
//     return (
//         <div style={{
//             background: '#fff',
//             border: '1.5px solid #e8edf2',
//             borderRadius: '14px',
//             padding: '1.25rem',
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '0.5rem',
//             transition: 'box-shadow 0.2s, border-color 0.2s',
//             cursor: item.lien ? 'pointer' : 'default',
//             position: 'relative',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
//         }}
//             onMouseEnter={e => {
//                 e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`;
//                 e.currentTarget.style.borderColor = `${color}50`;
//             }}
//             onMouseLeave={e => {
//                 e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
//                 e.currentTarget.style.borderColor = '#e8edf2';
//             }}
//         >
//             {item.tag && (
//                 <span style={{
//                     position: 'absolute',
//                     top: '1rem',
//                     right: '1rem',
//                     fontSize: '0.7rem',
//                     fontWeight: 700,
//                     letterSpacing: '0.05em',
//                     padding: '2px 8px',
//                     borderRadius: '20px',
//                     background: colorLight,
//                     color: color,
//                 }}>
//                     {item.tag}
//                 </span>
//             )}
//             <p style={{
//                 fontSize: '0.9375rem',
//                 fontWeight: 700,
//                 color: '#1a3a5c',
//                 margin: 0,
//                 lineHeight: 1.4,
//                 paddingRight: item.tag ? '5rem' : 0,
//             }}>
//                 {item.titre}
//             </p>
//             <p style={{
//                 fontSize: '0.875rem',
//                 color: '#64748b',
//                 lineHeight: 1.7,
//                 margin: 0,
//                 flex: 1,
//             }}>
//                 {item.description}
//             </p>
//             {item.lien && (
//                 <a href={item.lien} style={{
//                     marginTop: '0.5rem',
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     fontSize: '0.8125rem',
//                     fontWeight: 700,
//                     color: color,
//                     textDecoration: 'none',
//                     letterSpacing: '0.02em',
//                 }}>
//                     Accéder <span style={{ fontSize: '1rem' }}>→</span>
//                 </a>
//             )}
//         </div>
//     );
// }

/* ─── Page principale ─────────────────────────────────────────── */
// export default function EspaceRessources() {
//     const [search, setSearch] = useState('');
//     const [activeSection, setActiveSection] = useState('Tout');

//     const sections = ['Tout', ...ressources.map(r => r.section)];

//     const filtered = useMemo(() => {
//         const q = search.toLowerCase().trim();
//         return ressources
//             .filter(r => activeSection === 'Tout' || r.section === activeSection)
//             .map(r => ({
//                 ...r,
//                 items: r.items.filter(item =>
//                     !q ||
//                     item.titre.toLowerCase().includes(q) ||
//                     item.description.toLowerCase().includes(q)
//                 ),
//             }))
//             .filter(r => r.items.length > 0);
//     }, [search, activeSection]);

//     const totalResults = filtered.reduce((acc, r) => acc + r.items.length, 0);

//     return (
//         <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/ressources.png')" }}
//             />

//             <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '3rem 1rem' }}>
//                 <div style={{ maxWidth: '900px', margin: '0 auto' }}>

//                     {/* ── En-tête ── */}
//                     <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
//                         <p style={{
//                             fontSize: '0.75rem',
//                             fontWeight: 700,
//                             letterSpacing: '0.12em',
//                             textTransform: 'uppercase',
//                             color: '#7cb518',
//                             marginBottom: '0.5rem',
//                         }}>
//                             Espace documentation
//                         </p>
//                         <h1 style={{
//                             fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
//                             fontWeight: 800,
//                             color: '#1a3a5c',
//                             margin: '0 0 0.75rem',
//                             lineHeight: 1.2,
//                         }}>
//                             Ressources utiles
//                         </h1>
//                         <p style={{
//                             fontSize: '1rem',
//                             color: '#718096',
//                             maxWidth: '520px',
//                             margin: '0 auto',
//                             lineHeight: 1.7,
//                         }}>
//                             Articles, vidéos, podcasts et témoignages pour mieux comprendre et prendre soin de votre santé mentale.
//                         </p>
//                     </div>

//                     {/* ── Barre de recherche ── */}
//                     <div style={{
//                         position: 'relative',
//                         maxWidth: '520px',
//                         margin: '0 auto 1.5rem',
//                     }}>
//                         <span style={{
//                             position: 'absolute',
//                             left: '1rem',
//                             top: '50%',
//                             transform: 'translateY(-50%)',
//                             fontSize: '1.1rem',
//                             pointerEvents: 'none',
//                         }}>🔍</span>
//                         <input
//                             type="text"
//                             placeholder="Rechercher une ressource…"
//                             value={search}
//                             onChange={e => setSearch(e.target.value)}
//                             style={{
//                                 width: '100%',
//                                 padding: '0.8rem 1rem 0.8rem 2.75rem',
//                                 fontSize: '0.9375rem',
//                                 border: '1.5px solid #e2e8f0',
//                                 borderRadius: '50px',
//                                 background: '#fff',
//                                 color: '#1a3a5c',
//                                 outline: 'none',
//                                 boxSizing: 'border-box',
//                                 boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//                                 transition: 'border-color 0.2s',
//                             }}
//                             onFocus={e => e.target.style.borderColor = '#7cb518'}
//                             onBlur={e => e.target.style.borderColor = '#e2e8f0'}
//                         />
//                         {search && (
//                             <button
//                                 onClick={() => setSearch('')}
//                                 style={{
//                                     position: 'absolute',
//                                     right: '1rem',
//                                     top: '50%',
//                                     transform: 'translateY(-50%)',
//                                     background: 'none',
//                                     border: 'none',
//                                     cursor: 'pointer',
//                                     fontSize: '1rem',
//                                     color: '#94a3b8',
//                                     padding: 0,
//                                 }}
//                             >✕</button>
//                         )}
//                     </div>

//                     {/* ── Filtres par section ── */}
//                     <div style={{
//                         display: 'flex',
//                         justifyContent: 'center',
//                         gap: '8px',
//                         flexWrap: 'wrap',
//                         marginBottom: '2rem',
//                     }}>
//                         {sections.map(s => {
//                             const active = activeSection === s;
//                             const sData = ressources.find(r => r.section === s);
//                             const icon = sData ? sData.icon : '✨';
//                             return (
//                                 <button
//                                     key={s}
//                                     onClick={() => setActiveSection(s)}
//                                     style={{
//                                         display: 'inline-flex',
//                                         alignItems: 'center',
//                                         gap: '6px',
//                                         padding: '0.45rem 1rem',
//                                         borderRadius: '50px',
//                                         border: active ? '1.5px solid #7cb518' : '1.5px solid #e2e8f0',
//                                         background: active ? '#7cb518' : '#fff',
//                                         color: active ? '#fff' : '#64748b',
//                                         fontSize: '0.875rem',
//                                         fontWeight: 600,
//                                         cursor: 'pointer',
//                                         transition: 'all 0.2s',
//                                     }}
//                                 >
//                                     {s !== 'Tout' && <span>{icon}</span>}
//                                     {s}
//                                 </button>
//                             );
//                         })}
//                     </div>

//                     {/* ── Résultats ── */}
//                     {search && (
//                         <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
//                             {totalResults} résultat{totalResults !== 1 ? 's' : ''} pour « {search} »
//                         </p>
//                     )}

//                     {filtered.length === 0 ? (
//                         <div style={{ textAlign: 'center', padding: '3rem 0', color: '#94a3b8' }}>
//                             <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔎</p>
//                             <p style={{ fontSize: '1rem' }}>Aucune ressource trouvée pour « {search} »</p>
//                         </div>
//                     ) : (
//                         filtered.map((cat, ci) => (
//                             <div key={ci} style={{ marginBottom: '2.5rem' }}>
//                                 {/* Titre de section */}
//                                 <div style={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     gap: '10px',
//                                     marginBottom: '1rem',
//                                 }}>
//                                     <span style={{
//                                         width: '36px',
//                                         height: '36px',
//                                         borderRadius: '10px',
//                                         background: cat.colorLight,
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center',
//                                         fontSize: '1.1rem',
//                                         flexShrink: 0,
//                                     }}>
//                                         {cat.icon}
//                                     </span>
//                                     <h2 style={{
//                                         fontSize: '1.125rem',
//                                         fontWeight: 800,
//                                         color: '#1a3a5c',
//                                         margin: 0,
//                                     }}>
//                                         {cat.section}
//                                     </h2>
//                                     <span style={{
//                                         marginLeft: 'auto',
//                                         fontSize: '0.75rem',
//                                         fontWeight: 700,
//                                         padding: '2px 10px',
//                                         borderRadius: '20px',
//                                         background: cat.colorLight,
//                                         color: cat.color,
//                                     }}>
//                                         {cat.items.length} ressource{cat.items.length > 1 ? 's' : ''}
//                                     </span>
//                                 </div>

//                                 {/* Grille de cartes */}
//                                 <div style={{
//                                     display: 'grid',
//                                     gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
//                                     gap: '12px',
//                                 }}>
//                                     {cat.items.map((item, ii) => (
//                                         <ResourceCard
//                                             key={ii}
//                                             item={item}
//                                             color={cat.color}
//                                             colorLight={cat.colorLight}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                         ))
//                     )}

//                     {/* ── CTA bas de page ── */}
//                     <div style={{
//                         marginTop: '2rem',
//                         padding: '2rem',
//                         background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)',
//                         borderRadius: '16px',
//                         textAlign: 'center',
//                         color: '#fff',
//                     }}>
//                         <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
//                             Vous ne trouvez pas ce que vous cherchez ?
//                         </p>
//                         <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.25rem', lineHeight: 1.6 }}>
//                             Notre équipe peut vous orienter vers les ressources adaptées à votre situation.
//                         </p>
//                         <a href="/contact" style={{
//                             display: 'inline-block',
//                             padding: '0.625rem 1.5rem',
//                             background: '#fff',
//                             color: '#1a3a5c',
//                             borderRadius: '30px',
//                             fontWeight: 700,
//                             fontSize: '0.875rem',
//                             textDecoration: 'none',
//                         }}>
//                             Nous contacter
//                         </a>
//                     </div>

//                 </div>
//             </main>

//             <Footer />
//         </div>
//     );
// }