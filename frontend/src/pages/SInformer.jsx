import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

/* ── Données : Questions fréquentes ─────────────────────── */
const categoryConfig = {
    'Fondamentaux': { color: '#185FA5', bg: '#E6F1FB', icon: '💡' },
    'Conseils': { color: '#3B6D11', bg: '#EAF3DE', icon: '🌱' },
    "Signes d'alerte": { color: '#854F0B', bg: '#FAEEDA', icon: '⚠️' },
    'Agir': { color: '#993556', bg: '#FBEAF0', icon: '🤝' },
    'Professionnels': { color: '#534AB7', bg: '#EEEDFE', icon: '🏥' },
};

const faqData = [
    {
        category: 'Fondamentaux',
        question: "Qu'est-ce que la santé mentale ?",
        answer: [
            {
                type: 'text',
                content:
                    "La santé mentale est une composante de notre santé au même titre que la santé physique. L'Organisation mondiale de la santé (OMS) explique qu'« il n'y pas de santé sans santé mentale ». Elle définit la santé mentale comme « un état de bien-être dans lequel une personne peut se réaliser, surmonter les tensions normales de la vie, accomplir un travail productif et contribuer à la vie de sa communauté ».",
            },
            {
                type: 'text',
                content:
                    "Selon Psycom, la santé mentale est une affaire d'équilibre entre les ressources qu'une personne peut mobiliser pour se sentir bien, et les obstacles qu'elle rencontre au cours de sa vie.  Cet équilibre n'est pas figé : il évolue en permanence. Il peut être brisé puis rétabli. Ainsi, tout le monde connaît des périodes de bien-être et de mal-être.",
            },
        ],
    },
    {
        category: 'Fondamentaux',
        question: 'Quelle est la différence entre santé mentale et maladie mentale ?',
        answer: [
            {
                type: 'text',
                content:
                    "La maladie mentale est la détérioration de la santé mentale. Sur le plan de la santé physique, on fait référence à des maladies tels que le paludisme, la fièvre typhoïde… Au niveau de la santé mentale, cette dégradation peut se manifester par la dépression, l'anxiété généralisée, l'addiction……",
            },
            {
                type: 'text',
                content:
                    'Tout le monde peut un jour être atteint par une maladie mentale. Grâce à une prise en charge adaptée, elle peut se guérir.',
            },
        ],
    },
    {
        category: 'Conseils',
        question: 'Comment prendre soin de sa santé mentale ?',
        answer: [
            { type: 'text', content: "L'Organisation mondiale de la santé (OMS) donne 10 conseils pour préserver sa santé mentale : " },
            { type: 'heading', content: "10 conseils de l'OMS :" },
            { type: 'bullet', content: "Parler de ses émotions" },
            { type: 'bullet', content: "Rester actif en faisant de l'exercice régulièrement " },
            { type: 'bullet', content: "Manger équilibré et faire attention à son sommeil" },
            { type: 'bullet', content: "Éviter les excès d'alcool" },
            { type: 'bullet', content: "Rester en contact avec ses proches, famille ou amis" },
            { type: 'bullet', content: "Demander de l'aide quand les choses deviennent difficiles" },
            { type: 'bullet', content: "Faire des activités que l'on aime" },
            { type: 'bullet', content: "S'accepter avec ses imperfections" },
            { type: 'bullet', content: "S'investir pour les autres, par l'entraide, la solidarité" },
        ],
    },
    {
        category: 'Conseils',
        question: 'Comment soutenir la santé mentale des adolescents ?',
        answer: [
            { type: 'bullet', content: "Créer un environnement sécurisant et bienveillant" },
            { type: 'bullet', content: "Encourager l'expression des émotions" },
            { type: 'bullet', content: "Limiter le temps d'écran, favoriser les activités créatives" },
            { type: 'bullet', content: "Être attentif aux changements de comportement" },
            { type: 'bullet', content: "Consulter en cas de difficultés scolaires ou émotionnelles" },
        ],
    },
    {
        category: "Signes d'alerte",
        question: "À partir de quand s'inquiéter ?",
        answer: [
            {
                type: 'text',
                content:
                    "Il ne faut pas attendre d'être malade pour demander de l'aide. Certains signes doivent alerter, surtout lorsqu'ils persistent ou sont très intenses.",
            },
            { type: 'heading', content: "Quelques signaux à surveiller :" },
            { type: 'bullet', content: "perte d'appétit, excès ou privation de nourriture " },
            { type: 'bullet', content: "Troubles du sommeil" },
            { type: 'bullet', content: "Tristesse, irritabilité ou colère constante" },
            { type: 'bullet', content: "Mauvaise estime de soi, difficultés à se concentrer" },
            { type: 'bullet', content: "perte de motivation, d'enthousiasme " },
            { type: 'bullet', content: "Idées noires ou pensées suicidaires" },
            { type: 'bullet', content: "Consommation excessive d'alcool ou de substances (drogues), de médicaments" },
            { type: 'bullet', content: "difficultés dans les tâches quotidiennes" },
            { type: 'bullet', content: "isolement social, repli sur soi" },
            { type: 'bullet', content: "sentiment d'être visé par ce que disent les autres, de ne plus pouvoir faire confiance à ses proches " },
            { type: 'bullet', content: "comportements à risque (conduite dangereuse, automutilation...)" },
        ],
    },
    {
        category: 'Agir',
        question: 'Que faire en cas de souffrance psychologique ?',
        answer: [
            {
                type: 'text',
                content:
                    "Il est essentiel d'exprimer ce que l'on ressent et de ne pas rester seul dans ses difficultés. Garder tout pour soi peut rendre les choses plus difficiles. Parfois, le simple fait d'être écouté permet déjà de se sentir mieux.",
            },
            {
                type: 'text',
                content:
                    "Lorsque les signes deviennent préoccupants et s'installent dans la durée il est essentiel de consulter un professionnel : médecin, psychiatre, psychologue… Vous pouvez prendre rendez-vous pour une consultation dans un de nos centres.",
            },
            { type: 'heading', content: "Ressources disponibles" },
            { type: 'callout', content: "Ligne d'écoute gratuite : 143 (lun–ven, 8h–17h)" },
            { type: 'callout', content: "Urgences : 180 (Sapeurs-Pompiers)" },
            {
                type: 'highlight',
                content: "Demander de l'aide n'est pas un signe de faiblesse. C'est un acte de courage.",
            },
        ],
    },
    {
        category: 'Agir',
        question: "Que faire si un proche a besoin d'aide ?",
        answer: [
            {
                type: 'text',
                content:
                    "Si vous remarquez qu'un proche ne va pas bien, vous pouvez jouer un rôle important : être attentif, écouter sans juger et l'encourager à parler à un professionnel.",
            },
            { type: 'bullet', content: "Écouter sans jugement et éviter les phrases minimisantes comme « C'est dans ta tête »." },
            { type: 'bullet', content: "Encouragez-le à consulter un professionnel (psychologue, psychiatre ou pédopsychiatre). " },
            { type: 'bullet', content: "Proposer votre soutien au quotidien." },
            { type: 'bullet', content: "Informez-vous sur les ressources disponibles (lignes d'écoute, centres de prise en charge)." },
            { type: 'bullet', content: "Prendre soin de vous pour éviter l'épuisement" },
        ],
    },
    {
        category: 'Professionnels',
        question: "Quelle est la différence entre psychiatre, pédopsychiatre et psychologue ?",
        answer: [
            { type: 'text', content: "Dans le domaine de la prise en charge en santé mentale, les spécialistes sont le psychiatre, le pédopsychiatre et le psychologue." },
            { type: 'heading', content: "Psychiatre" },
            {
                type: 'text',
                content:
                    "Le psychiatre est un médecin spécialisé dans le domaine de la psychiatrie. Autrement dit il est un médecin spécialiste des maladies mentales. Il pose les diagnostics des maladies et propose des thérapies. Il intervient notamment pour les troubles nécessitant un traitement médicamenteux.",
            },
            { type: 'heading', content: "Pédopsychiatre" },
            {
                type: 'text',
                content:
                    "Le pédopsychiatre est un psychiatre qui s'est spécialisé dans la prise en charge des personnes de 0 à 18 ans : bébé, enfant, adolescent, jeune adulte.",
            },
            { type: 'heading', content: "Psychologue" },
            {
                type: 'text',
                content:
                    "Le psychologue propose des thérapies par la parole, il accompagne les personnes en souffrance psychologique ou émotionnelle sans prescription de médicaments. Parce qu'ils ont une formation spécifique, et parce qu'ils ne font pas partie de l'entourage, les personnes peuvent aborder avec lui des questions très personnelles.",
            },
        ],
    },
];

function AnswerBlock({ item, accentColor, accentBg }) {
    switch (item.type) {
        case 'text':
            return (
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, color: '#4a5568', margin: '0 0 0.75rem' }}>
                    {item.content}
                </p>
            );
        case 'heading':
            return (
                <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: accentColor, margin: '1.25rem 0 0.5rem' }}>
                    {item.content}
                </p>
            );
        case 'bullet':
            return (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', marginBottom: '0.5rem' }}>
                    <span style={{ flexShrink: 0, marginTop: '0.45rem', width: '6px', height: '6px', borderRadius: '50%', background: accentColor, opacity: 0.7 }} />
                    <span style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: '#4a5568' }}>
                        {item.content}
                    </span>
                </div>
            );
        case 'callout':
            return (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.625rem 0.875rem', background: accentBg, borderRadius: '8px', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1rem' }}>📞</span>
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: accentColor }}>
                        {item.content}
                    </span>
                </div>
            );
        case 'highlight':
            return (
                <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', fontWeight: 500, color: accentColor, borderLeft: `3px solid ${accentColor}`, paddingLeft: '0.875rem', marginTop: '1rem', lineHeight: 1.7, opacity: 0.9 }}>
                    {item.content}
                </p>
            );
        default:
            return null;
    }
}

/* ── Données : Ressources utiles ────────────────────────── */
const videos = [
    { id: 1, titre: 'Découvrez la Fondation La Fée Rima !', duree: '2:37', tag: 'Présentation', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
    { id: 2, titre: 'Film sur le harcèlement scolaire', duree: '8:14', tag: 'Film', videoUrl: 'https://www.youtube.com/embed/ArekOD1ij-U', thumbUrl: 'https://img.youtube.com/vi/ArekOD1ij-U/hqdefault.jpg' },
    { id: 3, titre: "Témoignage : vivre avec l'anxiété", duree: '5:22', tag: 'Témoignage', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
    { id: 4, titre: 'Comprendre la dépression chez les jeunes', duree: '6:48', tag: 'Éducatif', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
    { id: 5, titre: "L'hôpital de jour : comment ça marche ?", duree: '4:05', tag: 'Centre', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg' },
];

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
        'Film': { bg: '#FBEAF0', color: '#72243E' },
        'Témoignage': { bg: '#EAF3DE', color: '#27500A' },
        'Éducatif': { bg: '#FAEEDA', color: '#633806' },
        'Centre': { bg: '#EEEDFE', color: '#3C3489' },
    };

    return (
        <div style={{ display: 'flex', gap: '0', borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e8edf2', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ flex: '1 1 60%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#0f172a', overflow: 'hidden' }}>
                    {!playing ? (
                        <>
                            <img
                                src={current.thumbUrl}
                                alt={current.titre}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                                onError={e => { e.target.style.display = 'none'; }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.45)' }} />
                            <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                                <p style={{ color: '#fff', fontWeight: 800, fontSize: '1rem', margin: 0, lineHeight: 1.3, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                                    {current.titre}
                                </p>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', margin: '4px 0 0' }}>
                                    La Fée Rima · {current.duree}
                                </p>
                            </div>
                            <button
                                onClick={() => setPlaying(true)}
                                aria-label={`Lire : ${current.titre}`}
                                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <div
                                    style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.35)', transition: 'transform 0.2s, background 0.2s' }}
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

                <div style={{ padding: '14px 18px 16px', borderTop: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FBEAF0', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>🎬</div>
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
                            style={{ padding: '5px 14px', borderRadius: '50px', border: '1.5px solid #e2e8f0', background: '#fff', fontSize: '0.8rem', fontWeight: 700, color: '#64748b', cursor: 'pointer' }}
                        >
                            ■ Arrêter
                        </button>
                    )}
                </div>
            </div>

            <div style={{ flex: '0 0 280px', borderLeft: '1.5px solid #f1f5f9', display: 'flex', flexDirection: 'column', maxHeight: '420px' }}>
                <div style={{ padding: '12px 14px', borderBottom: '1.5px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#FBEAF0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>▶</span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#1a3a5c' }}>
                        {videos.length} vidéos
                    </span>
                </div>

                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {videos.map((v, i) => {
                        const isActive = v.id === activeId;
                        const tc = tagColors[v.tag] || { bg: '#f1f5f9', color: '#64748b' };
                        return (
                            <button
                                key={v.id}
                                onClick={() => handleSelect(v)}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: isActive ? '#FBEAF0' : '#fff', border: 'none', borderBottom: '1px solid #f8fafc', cursor: 'pointer', textAlign: 'left', transition: 'background 0.15s', borderLeft: isActive ? '3px solid #993556' : '3px solid transparent' }}
                                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = '#fafafa'; }}
                                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = '#fff'; }}
                            >
                                <div style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: isActive ? '#993556' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isActive ? '0.65rem' : '0.75rem', fontWeight: 700, color: isActive ? '#fff' : '#94a3b8' }}>
                                    {isActive ? '▶' : i + 1}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: isActive ? 700 : 600, color: isActive ? '#993556' : '#1a3a5c', lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
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

                <div style={{ padding: '10px 14px', borderTop: '1.5px solid #f1f5f9' }}>
                    <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '7px', borderRadius: '8px', background: '#1a3a5c', color: '#fff', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 7l-7.59-7.59L10.59 0 3 7.59V21h6v-6h6v6h6V7l-.41-.41zM7 19H5v-7.41L12 5.17l7 6.42V19h-2v-6H7v6z" /></svg>
                        Plus de vidéos
                    </a>
                </div>
            </div>
        </div>
    );
}

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

function ResourceCard({ item, color, colorLight }) {
    return (
        <div
            style={{ background: '#fff', border: '1.5px solid #e8edf2', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'box-shadow 0.2s, border-color 0.2s', cursor: 'pointer', position: 'relative', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
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

const SCROLL_MARGIN = { scrollMarginTop: '80px' };

export default function SInformer() {
    const location = useLocation();
    const [openIndex, setOpenIndex] = useState(null);
    const [search, setSearch] = useState('');
    const [activeSection, setActiveSection] = useState('Tout');

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    const sections = ['Tout', ...ressources.map(r => r.section)];

    const filtered = useMemo(() => {
        return ressources.filter(r => activeSection === 'Tout' || r.section === activeSection);
    }, [activeSection]);

    // ── Scroll vers l'ancre présente dans l'URL au chargement ou changement de hash ──
    // ex: /s-informer#ressources
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
        <div style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
            <Navbar />

            {/* ── Bannière unique de la page ───────────────────── */}
            <section className="page-hero" style={{ backgroundImage: "url('/assets/feerima/faq1.png')" }} />

            {/* ════════════════════════════════════════════════════
                SECTION : Questions fréquentes
            ════════════════════════════════════════════════════ */}
            <section id="faq" style={SCROLL_MARGIN}>
                <main style={{ background: '#f7f8fa', padding: '3rem 1rem' }}>
                    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7cb518', marginBottom: '0.5rem' }}>
                                QUESTIONS FREQUENTES
                            </p>
                            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', fontWeight: 800, color: '#1a3a5c', margin: 0, lineHeight: 1.2 }}>
                                Vos questions, nos réponses
                            </h1>
                            <p style={{ marginTop: '0.75rem', fontSize: '1rem', color: '#718096', maxWidth: '480px', margin: '0.75rem auto 0', lineHeight: 1.7 }}>
                                Tout ce que vous devez savoir sur la santé mentale, les signes à surveiller et comment agir.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {faqData.map((item, i) => {
                                const isOpen = openIndex === i;
                                const cat = categoryConfig[item.category] || categoryConfig['Fondamentaux'];

                                return (
                                    <div
                                        key={i}
                                        style={{
                                            background: '#ffffff',
                                            borderRadius: '14px',
                                            border: isOpen ? `1.5px solid ${cat.color}30` : '1.5px solid #e8edf2',
                                            overflow: 'hidden',
                                            transition: 'border-color 0.25s, box-shadow 0.25s',
                                            boxShadow: isOpen ? `0 4px 20px ${cat.color}14` : '0 1px 4px rgba(0,0,0,0.05)',
                                        }}
                                    >
                                        <button
                                            onClick={() => toggle(i)}
                                            aria-expanded={isOpen}
                                            style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                                        >
                                            <span style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 10px', borderRadius: '20px', background: cat.bg, color: cat.color, fontSize: '0.725rem', fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                                                {item.category}
                                            </span>

                                            <span style={{ flex: 1, fontSize: '0.9375rem', fontWeight: 600, color: isOpen ? cat.color : '#1a3a5c', lineHeight: 1.5, transition: 'color 0.2s' }}>
                                                {item.question}
                                            </span>

                                            <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: isOpen ? cat.bg : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: isOpen ? cat.color : '#94a3b8', transition: 'background 0.25s, color 0.25s, transform 0.3s', transform: isOpen ? 'rotate(45deg)' : 'none', fontWeight: 700 }}>
                                                +
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div style={{ padding: '0 1.25rem 1.25rem', borderTop: `1px solid ${cat.color}20`, marginTop: '0' }}>
                                                <div style={{ paddingTop: '1rem' }}>
                                                    {item.answer.map((block, j) => (
                                                        <AnswerBlock key={j} item={block} accentColor={cat.color} accentBg={cat.bg} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: '3rem', padding: '2rem', background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)', borderRadius: '16px', textAlign: 'center', color: '#fff' }}>
                            <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                                Vous avez d'autres questions ?
                            </p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                                Notre équipe est disponible pour vous accompagner.
                            </p>
                            <a href="/contact" style={{ display: 'inline-block', padding: '0.625rem 1.5rem', background: '#fff', color: '#1a3a5c', borderRadius: '30px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', letterSpacing: '0.02em' }}>
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </main>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION : Ressources utiles
            ════════════════════════════════════════════════════ */}
            <section id="ressources" style={SCROLL_MARGIN}>
                <main style={{ background: '#f7f8fa', padding: '3rem 1rem' }}>
                    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
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

                        {filtered.map((cat, ci) => (
                            <div key={ci} style={{ marginBottom: '3rem' }}>
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

                        <div style={{ marginTop: '1rem', padding: '2rem', background: 'linear-gradient(135deg, #1a3a5c 0%, #7cb518 100%)', borderRadius: '16px', textAlign: 'center', color: '#fff' }}>
                            <p style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Vous ne trouvez pas ce que vous cherchez ?</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: '0 0 1.25rem', lineHeight: 1.6 }}>Notre équipe peut vous orienter vers les ressources adaptées à votre situation.</p>
                            <a href="/contact" style={{ display: 'inline-block', padding: '0.625rem 1.5rem', background: '#fff', color: '#1a3a5c', borderRadius: '30px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                                Nous contacter
                            </a>
                        </div>
                    </div>
                </main>
            </section>

            <Footer />
        </div>
    );
}
