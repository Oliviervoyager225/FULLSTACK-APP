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

/* ─── Données ─────────────────────────────────────────────────── */
const ressources = [
    {
        section: 'À lire',
        icon: '📖',
        color: '#185FA5',
        colorLight: '#E6F1FB',
        items: [
            {
                titre: 'Liens du Dr Zerbo',
                description: 'Sélection de ressources recommandées par le Dr Zerbo pour mieux comprendre la santé mentale.',
                lien: '#',
                tag: 'Recommandé',
            },
            {
                titre: 'Techniques de relaxation',
                description: 'Des exercices simples et efficaces pour gérer le stress, lanxiété et retrouver un état de calme au quotidien.',
                lien: '#',
            },
            {
                titre: '5 conseils pour améliorer son sommeil',
                description: 'Découvrez des habitudes concrètes pour améliorer la qualité de votre sommeil et prendre soin de votre santé mentale.',
                lien: '#',
            },
            {
                titre: 'Dépression : comprendre et agir',
                description: 'Un guide complet pour reconnaître les signes de la dépression, comprendre ses causes et trouver les bons recours.',
                lien: '#',
            },
            {
                titre: "Qu'est-ce que l'anxiété ?",
                description: "Tout savoir sur les troubles anxieux : symptômes, types d'anxiété et pistes pour mieux y faire face.",
                lien: '#',
            },
            {
                titre: "Qu'est-ce que la schizophrénie ?",
                description: 'Une explication claire et bienveillante de ce trouble mental complexe, pour aider à démystifier et à mieux soutenir.',
                lien: '#',
            },
        ],
    },
    {
        section: 'À regarder',
        icon: '🎬',
        color: '#993556',
        colorLight: '#FBEAF0',
        items: [
            {
                titre: 'Film sur le harcèlement',
                description: 'Un film poignant qui aborde le harcèlement scolaire et ses répercussions sur la santé mentale des adolescents.',
                lien: '#',
                tag: 'Film',
            },
        ],
    },
    {
        section: 'À écouter',
        icon: '🎧',
        color: '#534AB7',
        colorLight: '#EEEDFE',
        items: [
            {
                titre: 'Films, séries & musique',
                description: 'Une sélection de contenus audio et visuels autour de la santé mentale : podcasts, playlists apaisantes et séries inspirantes.',
                lien: '#',
            },
            {
                titre: 'Témoignages',
                description: 'Des témoignages authentiques de personnes qui ont traversé des difficultés psychologiques et partagent leur parcours de guérison.',
                lien: '#',
                tag: 'Nouveauté',
            },
        ],
    },
];

/* ─── Composant carte ─────────────────────────────────────────── */
function ResourceCard({ item, color, colorLight }) {
    return (
        <div style={{
            background: '#fff',
            border: '1.5px solid #e8edf2',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            transition: 'box-shadow 0.2s, border-color 0.2s',
            cursor: item.lien ? 'pointer' : 'default',
            position: 'relative',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}
            onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`;
                e.currentTarget.style.borderColor = `${color}50`;
            }}
            onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e8edf2';
            }}
        >
            {item.tag && (
                <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    background: colorLight,
                    color: color,
                }}>
                    {item.tag}
                </span>
            )}
            <p style={{
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: '#1a3a5c',
                margin: 0,
                lineHeight: 1.4,
                paddingRight: item.tag ? '5rem' : 0,
            }}>
                {item.titre}
            </p>
            <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
            }}>
                {item.description}
            </p>
            {item.lien && (
                <a href={item.lien} style={{
                    marginTop: '0.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: color,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                }}>
                    Accéder <span style={{ fontSize: '1rem' }}>→</span>
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
        return ressources
            .filter(r => activeSection === 'Tout' || r.section === activeSection)
            .map(r => ({
                ...r,
                items: r.items.filter(item =>
                    !q ||
                    item.titre.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q)
                ),
            }))
            .filter(r => r.items.length > 0);
    }, [search, activeSection]);

    const totalResults = filtered.reduce((acc, r) => acc + r.items.length, 0);

    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/ressources.png')" }}
            />

            <main style={{ background: '#f7f8fa', minHeight: '100vh', padding: '3rem 1rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                    {/* ── En-tête ── */}
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p style={{
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#7cb518',
                            marginBottom: '0.5rem',
                        }}>
                            Espace documentation
                        </p>
                        <h1 style={{
                            fontSize: 'clamp(1.6rem, 4vw, 2.25rem)',
                            fontWeight: 800,
                            color: '#1a3a5c',
                            margin: '0 0 0.75rem',
                            lineHeight: 1.2,
                        }}>
                            Ressources utiles
                        </h1>
                        <p style={{
                            fontSize: '1rem',
                            color: '#718096',
                            maxWidth: '520px',
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}>
                            Articles, vidéos, podcasts et témoignages pour mieux comprendre et prendre soin de votre santé mentale.
                        </p>
                    </div>

                    {/* ── Barre de recherche ── */}
                    <div style={{
                        position: 'relative',
                        maxWidth: '520px',
                        margin: '0 auto 1.5rem',
                    }}>
                        <span style={{
                            position: 'absolute',
                            left: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: '1.1rem',
                            pointerEvents: 'none',
                        }}>🔍</span>
                        <input
                            type="text"
                            placeholder="Rechercher une ressource…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem 1rem 0.8rem 2.75rem',
                                fontSize: '0.9375rem',
                                border: '1.5px solid #e2e8f0',
                                borderRadius: '50px',
                                background: '#fff',
                                color: '#1a3a5c',
                                outline: 'none',
                                boxSizing: 'border-box',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                transition: 'border-color 0.2s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#7cb518'}
                            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    color: '#94a3b8',
                                    padding: 0,
                                }}
                            >✕</button>
                        )}
                    </div>

                    {/* ── Filtres par section ── */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        flexWrap: 'wrap',
                        marginBottom: '2rem',
                    }}>
                        {sections.map(s => {
                            const active = activeSection === s;
                            const sData = ressources.find(r => r.section === s);
                            const icon = sData ? sData.icon : '✨';
                            return (
                                <button
                                    key={s}
                                    onClick={() => setActiveSection(s)}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        padding: '0.45rem 1rem',
                                        borderRadius: '50px',
                                        border: active ? '1.5px solid #7cb518' : '1.5px solid #e2e8f0',
                                        background: active ? '#7cb518' : '#fff',
                                        color: active ? '#fff' : '#64748b',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {s !== 'Tout' && <span>{icon}</span>}
                                    {s}
                                </button>
                            );
                        })}
                    </div>

                    {/* ── Résultats ── */}
                    {search && (
                        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                            {totalResults} résultat{totalResults !== 1 ? 's' : ''} pour « {search} »
                        </p>
                    )}

                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '3rem 0', color: '#94a3b8' }}>
                            <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔎</p>
                            <p style={{ fontSize: '1rem' }}>Aucune ressource trouvée pour « {search} »</p>
                        </div>
                    ) : (
                        filtered.map((cat, ci) => (
                            <div key={ci} style={{ marginBottom: '2.5rem' }}>
                                {/* Titre de section */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '1rem',
                                }}>
                                    <span style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: cat.colorLight,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.1rem',
                                        flexShrink: 0,
                                    }}>
                                        {cat.icon}
                                    </span>
                                    <h2 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 800,
                                        color: '#1a3a5c',
                                        margin: 0,
                                    }}>
                                        {cat.section}
                                    </h2>
                                    <span style={{
                                        marginLeft: 'auto',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        padding: '2px 10px',
                                        borderRadius: '20px',
                                        background: cat.colorLight,
                                        color: cat.color,
                                    }}>
                                        {cat.items.length} ressource{cat.items.length > 1 ? 's' : ''}
                                    </span>
                                </div>

                                {/* Grille de cartes */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                                    gap: '12px',
                                }}>
                                    {cat.items.map((item, ii) => (
                                        <ResourceCard
                                            key={ii}
                                            item={item}
                                            color={cat.color}
                                            colorLight={cat.colorLight}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                    )}

                    {/* ── CTA bas de page ── */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '2rem',
                        background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)',
                        borderRadius: '16px',
                        textAlign: 'center',
                        color: '#fff',
                    }}>
                        <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                            Vous ne trouvez pas ce que vous cherchez ?
                        </p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                            Notre équipe peut vous orienter vers les ressources adaptées à votre situation.
                        </p>
                        <a href="/contact" style={{
                            display: 'inline-block',
                            padding: '0.625rem 1.5rem',
                            background: '#fff',
                            color: '#1a3a5c',
                            borderRadius: '30px',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                        }}>
                            Nous contacter
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}