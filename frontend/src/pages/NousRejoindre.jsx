import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

/* ── Données ─────────────────────────────────────────── */
const raisons = [
    "Participer à un projet innovant en santé mentale pour les adolescents et les jeunes.",
    "Contribuer au développement d'approches modernes, adaptées aux réalités locales et centrées sur les besoins spécifiques de chaque bénéficiaire.",
    "Intégrer une structure humaine, engagée et collaborer avec une équipe pluridisciplinaire et dynamique.",
    "Accompagner des adolescents et des jeunes et participer à transformer des vies.",
];

const offres = [
    { poste: 'Pédopsychiatre', type: 'CDI', lieu: 'Abidjan' },
    { poste: 'Psychologue clinicien(ne)', type: 'CDI', lieu: 'Abidjan' },
    { poste: 'Éducateur spécialisé', type: 'CDD', lieu: 'Abidjan' },
    { poste: 'Assistant(e) social(e)', type: 'CDI', lieu: 'Abidjan' },
];

const partenariats = [
    { type: 'Technique', icon: '⚙️', desc: 'Apportez votre expertise métier et vos outils au service du soin.' },
    { type: 'Financier', icon: '💼', desc: 'Soutenez nos programmes par un appui financier dédié.' },
    { type: 'Éducatif', icon: '🎓', desc: 'Collaborez sur des actions de formation et de sensibilisation.' },
    { type: 'Institutionnel', icon: '🏛️', desc: 'Renforcez notre crédibilité et notre rayonnement local et national.' },
];

const benevoleActions = [
    "Accompagner nos bénéficiaires dans leurs activités",
    "Participer à l'organisation d'événements",
    "Apporter un soutien médical, éducatif ou administratif",
];

const temoignages = [
    { nom: 'Aminata K.', texte: "Bénévole depuis 2 ans, cette expérience a changé ma vision du monde. Voir ces jeunes reprendre confiance en eux est une récompense inestimable.", role: 'Bénévole accompagnatrice' },
    { nom: 'Kofi M.', texte: "J'ai rejoint La Fée Rima pour donner du sens à mes compétences médicales. L'équipe est formidable et l'impact sur les familles est réel.", role: 'Bénévole médical' },
];

const ACCENT = '#7cb518';
const ACCENT_DARK = '#3B6D11';
const NAVY = '#1a3a5c';

/* ── Modale Don ──────────────────────────────────────── */
function ModalDon({ onClose }) {
    const [mode, setMode] = useState('don'); // 'don' | 'parrainage'
    const [montant, setMontant] = useState('');
    const [montantCustom, setMontantCustom] = useState('');
    const [paiement, setPaiement] = useState('');
    const montants = ['5 000', '10 000', '25 000', '50 000'];

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed', inset: 0, zIndex: 1000,
                background: 'rgba(26,58,92,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '1rem',
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: '#fff',
                    borderRadius: '20px',
                    width: '100%',
                    maxWidth: '480px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
                }}
            >
                {/* Header modale */}
                <div style={{
                    background: `linear-gradient(135deg, ${NAVY} 0%, ${ACCENT} 100%)`,
                    padding: '1.5rem',
                    color: '#fff',
                    position: 'relative',
                }}>
                    <button onClick={onClose} style={{
                        position: 'absolute', top: '1rem', right: '1rem',
                        background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%',
                        width: '28px', height: '28px', cursor: 'pointer', color: '#fff',
                        fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>✕</button>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, margin: '0 0 4px' }}>Fondation La Fée Rima</p>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Faire un don</h2>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', borderBottom: '1.5px solid #e8edf2' }}>
                    {[{ id: 'don', label: '💛 Je fais un don' }, { id: 'parrainage', label: '🤗 Je parraine' }].map(t => (
                        <button key={t.id} onClick={() => setMode(t.id)} style={{
                            flex: 1, padding: '0.875rem',
                            background: 'none', border: 'none', cursor: 'pointer',
                            fontSize: '0.875rem', fontWeight: 700,
                            color: mode === t.id ? ACCENT : '#94a3b8',
                            borderBottom: mode === t.id ? `2.5px solid ${ACCENT}` : '2.5px solid transparent',
                            marginBottom: '-1.5px',
                            transition: 'color 0.2s',
                        }}>{t.label}</button>
                    ))}
                </div>

                <div style={{ padding: '1.5rem' }}>
                    {mode === 'don' ? (
                        <>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                                Votre générosité, qu'elle soit matérielle ou financière, participe à bâtir un avenir meilleur pour les adolescents et jeunes que nous accompagnons.
                            </p>

                            {/* Montants suggérés */}
                            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: NAVY, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Montant (FCFA)</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '0.75rem' }}>
                                {montants.map(m => (
                                    <button key={m} onClick={() => { setMontant(m); setMontantCustom(''); }} style={{
                                        padding: '0.6rem 0.25rem',
                                        borderRadius: '8px',
                                        border: montant === m ? `2px solid ${ACCENT}` : '1.5px solid #e2e8f0',
                                        background: montant === m ? '#eaf3de' : '#fff',
                                        color: montant === m ? ACCENT_DARK : '#64748b',
                                        fontSize: '0.8125rem', fontWeight: 700, cursor: 'pointer',
                                        transition: 'all 0.2s',
                                    }}>{m}</button>
                                ))}
                            </div>
                            <input
                                type="number"
                                placeholder="Autre montant…"
                                value={montantCustom}
                                onChange={e => { setMontantCustom(e.target.value); setMontant(''); }}
                                style={{
                                    width: '100%', boxSizing: 'border-box',
                                    padding: '0.65rem 1rem', borderRadius: '8px',
                                    border: '1.5px solid #e2e8f0', fontSize: '0.875rem',
                                    color: NAVY, marginBottom: '1.25rem', outline: 'none',
                                }}
                            />

                            {/* Moyens de paiement */}
                            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: NAVY, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Moyen de paiement</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                                {[
                                    { id: 'carte', label: '💳 Carte bancaire', sub: 'Visa, Mastercard' },
                                    { id: 'virement', label: '🏦 Virement bancaire', sub: 'IBAN / compte local' },
                                    { id: 'mobile', label: '📱 Mobile Money', sub: 'Orange, MTN, Wave' },
                                    { id: 'cheque', label: '📄 Chèque', sub: 'À l\\ordre de La Fée Rima' },
                                ].map(p => (
                                    <button key={p.id} onClick={() => setPaiement(p.id)} style={{
                                        display: 'flex', alignItems: 'center', gap: '12px',
                                        padding: '0.75rem 1rem', borderRadius: '10px',
                                        border: paiement === p.id ? `2px solid ${ACCENT}` : '1.5px solid #e2e8f0',
                                        background: paiement === p.id ? '#eaf3de' : '#fff',
                                        cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                                    }}>
                                        <span style={{ fontSize: '1.1rem' }}>{p.label.split(' ')[0]}</span>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 700, color: paiement === p.id ? ACCENT_DARK : NAVY }}>{p.label.substring(2)}</p>
                                            <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>{p.sub}</p>
                                        </div>
                                        <span style={{
                                            marginLeft: 'auto', width: '16px', height: '16px', borderRadius: '50%',
                                            border: paiement === p.id ? `5px solid ${ACCENT}` : '2px solid #cbd5e0',
                                            flexShrink: 0, transition: 'all 0.2s',
                                        }} />
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={{
                                background: '#eaf3de', borderRadius: '12px',
                                padding: '1.25rem', marginBottom: '1.25rem',
                            }}>
                                <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: ACCENT_DARK, margin: '0 0 6px' }}>🤗 Parrainer un adolescent ou un jeune</p>
                                <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>
                                    C'est lui redonner de l'espoir et le sourire en lui offrant une prise en charge globale. Votre soutien régulier fait toute la différence.
                                </p>
                            </div>
                            <p style={{ fontSize: '0.8rem', fontWeight: 700, color: NAVY, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Moyen de paiement</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                                {[
                                    { id: 'carte', label: '💳 Carte bancaire', sub: 'Visa, Mastercard' },
                                    { id: 'virement', label: '🏦 Virement bancaire', sub: 'IBAN / compte local' },
                                    { id: 'mobile', label: '📱 Mobile Money', sub: 'Orange, MTN, Wave' },
                                    { id: 'cheque', label: '📄 Chèque', sub: 'À l\\ordre de La Fée Rima' },
                                ].map(p => (
                                    <button key={p.id} onClick={() => setPaiement(p.id)} style={{
                                        display: 'flex', alignItems: 'center', gap: '12px',
                                        padding: '0.75rem 1rem', borderRadius: '10px',
                                        border: paiement === p.id ? `2px solid ${ACCENT}` : '1.5px solid #e2e8f0',
                                        background: paiement === p.id ? '#eaf3de' : '#fff',
                                        cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                                    }}>
                                        <span style={{ fontSize: '1.1rem' }}>{p.label.split(' ')[0]}</span>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 700, color: paiement === p.id ? ACCENT_DARK : NAVY }}>{p.label.substring(2)}</p>
                                            <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>{p.sub}</p>
                                        </div>
                                        <span style={{
                                            marginLeft: 'auto', width: '16px', height: '16px', borderRadius: '50%',
                                            border: paiement === p.id ? `5px solid ${ACCENT}` : '2px solid #cbd5e0',
                                            flexShrink: 0, transition: 'all 0.2s',
                                        }} />
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

                    <button style={{
                        width: '100%', padding: '0.9rem',
                        background: `linear-gradient(135deg, ${NAVY} 0%, ${ACCENT} 100%)`,
                        color: '#fff', border: 'none', borderRadius: '50px',
                        fontSize: '0.9375rem', fontWeight: 800, cursor: 'pointer',
                        letterSpacing: '0.02em',
                    }}>
                        {mode === 'don' ? '💛 Confirmer mon don' : '🤗 Confirmer mon parrainage'}
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.75rem' }}>
                        Paiement sécurisé · Reçu fiscal disponible
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ── Page principale ─────────────────────────────────── */
export default function NousRejoindre() {
    const [donOpen, setDonOpen] = useState(false);
    const [candidatureOpen, setCandidatureOpen] = useState(false);

    return (
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>

            {/* Navbar + bouton DON intégré via CSS class sur Navbar — voir note ci-dessous */}
            <Navbar donButton={<button onClick={() => setDonOpen(true)} style={{
                padding: '0.45rem 1.1rem',
                background: ACCENT,
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 800,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
            }}>💛 Faire un don</button>} />

            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/rejoindre.png')" }}
            />

            <main style={{ background: '#f7f8fa', minHeight: '100vh' }}>

                {/* ── Intro ── */}
                <section style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 1.5rem 3rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: '0.5rem' }}>
                        Engagement & Impact
                    </p>
                    <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, color: NAVY, margin: '0 0 1.25rem', lineHeight: 1.2 }}>
                        Nous rejoindre
                    </h1>
                    <p style={{ fontSize: '1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 1rem', lineHeight: 1.8 }}>
                        Rejoindre la Fondation La Fée Rima, c'est s'engager dans une mission porteuse de sens : accompagner, soutenir et révéler le potentiel des adolescents et des jeunes en situation de vulnérabilité psychique.
                    </p>
                    <a href="mailto:secretariat@lafeerima.ci" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '0.875rem', fontWeight: 700, color: ACCENT,
                        textDecoration: 'none',
                    }}>
                        ✉️ secretariat@lafeerima.ci
                    </a>
                </section>

                {/* ── Pourquoi nous rejoindre ── */}
                <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: NAVY, marginBottom: '1.5rem' }}>
                        Pourquoi nous rejoindre ?
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {raisons.map((r, i) => (
                            <div key={i} style={{
                                display: 'flex', gap: '14px', alignItems: 'flex-start',
                                background: '#fff', borderRadius: '12px',
                                border: '1.5px solid #e8edf2', padding: '1rem 1.25rem',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                            }}>
                                <span style={{
                                    flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%',
                                    background: '#eaf3de', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, color: ACCENT_DARK,
                                }}>
                                    {i + 1}
                                </span>
                                <p style={{ fontSize: '0.9375rem', color: '#4a5568', lineHeight: 1.7, margin: 0 }}>{r}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Offres d'emploi ── */}
                <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '12px' }}>
                        <div>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: NAVY, margin: 0 }}>Offres d'emploi</h2>
                            <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '4px 0 0' }}>Mettez vos compétences au service d'une cause forte.</p>
                        </div>
                        <button onClick={() => setCandidatureOpen(!candidatureOpen)} style={{
                            padding: '0.55rem 1.1rem', borderRadius: '50px',
                            border: `1.5px solid ${ACCENT}`, background: '#fff',
                            color: ACCENT, fontSize: '0.8125rem', fontWeight: 700, cursor: 'pointer',
                        }}>
                            + Candidature spontanée
                        </button>
                    </div>

                    {candidatureOpen && (
                        <div style={{
                            background: '#eaf3de', borderRadius: '12px',
                            padding: '1.25rem', marginBottom: '1rem',
                            border: `1.5px solid ${ACCENT}40`,
                        }}>
                            <p style={{ fontSize: '0.875rem', color: ACCENT_DARK, fontWeight: 700, margin: '0 0 4px' }}>Candidature spontanée</p>
                            <p style={{ fontSize: '0.875rem', color: '#4a5568', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                                Vous ne trouvez pas de poste correspondant à votre profil ? Envoyez-nous votre candidature, nous sommes toujours à la recherche de talents engagés.
                            </p>
                            <a href="mailto:secretariat@lafeerima.ci" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                padding: '0.5rem 1.1rem', background: ACCENT, color: '#fff',
                                borderRadius: '50px', fontSize: '0.8125rem', fontWeight: 700,
                                textDecoration: 'none',
                            }}>
                                ✉️ Envoyer ma candidature
                            </a>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {offres.map((o, i) => (
                            <div key={i} style={{
                                background: '#fff', borderRadius: '12px',
                                border: '1.5px solid #e8edf2', padding: '1rem 1.25rem',
                                display: 'flex', alignItems: 'center', gap: '1rem',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                            }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '10px',
                                    background: '#eaf3de', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0,
                                }}>💼</div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9375rem', color: NAVY }}>{o.poste}</p>
                                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>{o.lieu}</p>
                                </div>
                                <span style={{
                                    padding: '3px 10px', borderRadius: '20px',
                                    background: o.type === 'CDI' ? '#eaf3de' : '#E6F1FB',
                                    color: o.type === 'CDI' ? ACCENT_DARK : '#185FA5',
                                    fontSize: '0.75rem', fontWeight: 700,
                                }}>{o.type}</span>
                                <a href="mailto:secretariat@lafeerima.ci" style={{
                                    padding: '0.45rem 0.9rem', borderRadius: '50px',
                                    background: NAVY, color: '#fff',
                                    fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none',
                                    whiteSpace: 'nowrap',
                                }}>Postuler →</a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Devenir partenaire ── */}
                <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: NAVY, marginBottom: '0.5rem' }}>Devenir partenaire</h2>
                    <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        Vous êtes une entreprise, une institution ou une organisation ? Collaborer avec La Fée Rima, c'est participer à un projet social à fort impact, soutenir des actions concrètes et construire des initiatives durables.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginBottom: '1.5rem' }}>
                        {partenariats.map((p, i) => (
                            <div key={i} style={{
                                background: '#fff', borderRadius: '14px',
                                border: '1.5px solid #e8edf2', padding: '1.25rem',
                                textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                            }}>
                                <div style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{p.icon}</div>
                                <p style={{ fontWeight: 800, color: NAVY, fontSize: '0.875rem', margin: '0 0 6px' }}>{p.type}</p>
                                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <a href="mailto:secretariat@lafeerima.ci" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '0.7rem 1.5rem', background: NAVY, color: '#fff',
                        borderRadius: '50px', fontWeight: 700, fontSize: '0.875rem',
                        textDecoration: 'none',
                    }}>
                        Nous proposer un partenariat →
                    </a>
                </section>

                {/* ── Devenir bénévole ── */}
                <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: NAVY, marginBottom: '0.5rem' }}>Devenir bénévole</h2>
                    <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        Donnez de votre temps, partagez vos compétences et faites une réelle différence.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                        {benevoleActions.map((a, i) => (
                            <div key={i} style={{
                                display: 'flex', gap: '12px', alignItems: 'center',
                                background: '#fff', borderRadius: '10px',
                                border: '1.5px solid #e8edf2', padding: '0.875rem 1.25rem',
                            }}>
                                <span style={{ fontSize: '1rem' }}>✅</span>
                                <span style={{ fontSize: '0.9375rem', color: '#4a5568' }}>{a}</span>
                            </div>
                        ))}
                    </div>

                    {/* Témoignages */}
                    <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        Témoignages de bénévoles
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px', marginBottom: '1.5rem' }}>
                        {temoignages.map((t, i) => (
                            <div key={i} style={{
                                background: '#fff', borderRadius: '14px',
                                border: '1.5px solid #e8edf2', padding: '1.25rem',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                            }}>
                                <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 1rem' }}>
                                    « {t.texte} »
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '50%',
                                        background: '#eaf3de', display: 'flex', alignItems: 'center',
                                        justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem', color: ACCENT_DARK,
                                    }}>{t.nom[0]}</div>
                                    <div>
                                        <p style={{ margin: 0, fontWeight: 700, fontSize: '0.875rem', color: NAVY }}>{t.nom}</p>
                                        <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="mailto:secretariat@lafeerima.ci" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        padding: '0.7rem 1.5rem', background: ACCENT, color: '#fff',
                        borderRadius: '50px', fontWeight: 700, fontSize: '0.875rem',
                        textDecoration: 'none',
                    }}>
                        Je veux devenir bénévole →
                    </a>
                </section>

                {/* ── Faire un don ── */}
                <section style={{ padding: '0 1.5rem 4rem' }}>
                    <div style={{
                        maxWidth: '860px', margin: '0 auto',
                        background: `linear-gradient(135deg, ${NAVY} 0%, ${ACCENT} 100%)`,
                        borderRadius: '20px', padding: '3rem 2rem',
                        textAlign: 'center', color: '#fff',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                        <span style={{ display: 'inline-block', padding: '4px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.15)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                            💛 Faire un don
                        </span>
                        <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 800, margin: '0 0 0.875rem', lineHeight: 1.3 }}>
                            Agissez aux côtés de la Fondation La Fée Rima dès maintenant
                        </h2>
                        <p style={{ fontSize: '0.9375rem', opacity: 0.85, maxWidth: '540px', margin: '0 auto 0.75rem', lineHeight: 1.7 }}>
                            Chaque don, qu'il soit matériel ou financier, participe à bâtir un avenir meilleur pour les adolescents et jeunes que nous accompagnons.
                        </p>
                        <p style={{ fontSize: '0.9375rem', opacity: 0.85, maxWidth: '540px', margin: '0 auto 1.75rem', lineHeight: 1.7 }}>
                            Parrainer un adolescent ou un jeune, c'est lui redonner de l'espoir et le sourire en lui offrant une prise en charge globale. Votre générosité peut faire toute la différence.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button onClick={() => setDonOpen(true)} style={{
                                padding: '0.75rem 1.75rem', background: '#fff',
                                color: NAVY, border: 'none', borderRadius: '50px',
                                fontWeight: 800, fontSize: '0.9375rem', cursor: 'pointer',
                                letterSpacing: '0.02em',
                            }}>
                                💛 Je souhaite faire un don
                            </button>
                            <button onClick={() => setDonOpen(true)} style={{
                                padding: '0.75rem 1.75rem', background: 'rgba(255,255,255,0.15)',
                                color: '#fff', border: '2px solid rgba(255,255,255,0.5)',
                                borderRadius: '50px', fontWeight: 800, fontSize: '0.9375rem',
                                cursor: 'pointer', letterSpacing: '0.02em',
                            }}>
                                🤗 Je souhaite parrainer
                            </button>
                        </div>
                        <p style={{ fontSize: '0.8rem', opacity: 0.65, marginTop: '1rem' }}>Merci pour votre générosité 🙏</p>
                    </div>
                </section>

            </main>

            {donOpen && <ModalDon onClose={() => setDonOpen(false)} />}

            <Footer />
        </div>
    );
}