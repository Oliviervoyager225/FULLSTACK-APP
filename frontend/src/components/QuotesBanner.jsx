import React, { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';
import '../styles/QuotesBanner.css';

/*
 * Pour afficher la vraie photo d'un auteur : ajoutez `photo: '/assets/...'`
 * à la citation correspondante. Sans photo, un avatar (initiales ou
 * silhouette pour « Inconnu ») est généré automatiquement.
 */
const quotes = [
    { text: "Promets-moi que tu te souviendras toujours : tu es plus courageux que tu ne le penses, et plus fort que tu n'en as l'air, et plus intelligent que tu ne le penses.", author: "Christopher Robin, Winnie the Pooh" },
    { text: "Vous n'êtes pas seul. La maladie mentale est une réalité et la guérison est possible.", author: "Inconnu" },
    { text: "Votre santé mentale est plus importante que l'opinion des autres.", author: "Inconnu" },
    { text: "N'ayez pas peur de demander de l'aide. Vous n'êtes jamais seul dans vos luttes.", author: "Inconnu" },
    { text: "La douleur émotionnelle n'est pas quelque chose qui devrait être caché et dont on ne devrait jamais parler. Il y a de la vérité dans votre douleur, il y a de la croissance dans votre douleur, mais seulement si elle est d'abord révélée au grand jour.", author: "Steven Aitchison" },
    { text: "Prendre soin de soi, c'est la façon dont vous reprenez votre pouvoir.", author: "Lalah Delia" },
    { text: "Votre santé mentale est un investissement, pas une dépense.", author: "Inconnu" },
    { text: "Vous êtes digne d'amour et d'attention, surtout de la part de vous-même.", author: "Inconnu" },
    { text: "La guérison prend du temps et demander de l'aide est une démarche courageuse.", author: "Mariska Hargitay" },
    { text: "Votre santé mentale est un trésor. Protégez-la.", author: "Inconnu" },
    { text: "N'ayez pas honte de votre histoire, elle inspirera d'autres personnes.", author: "Inconnu" },
    { text: "Vous n'êtes pas défini par votre passé ou vos luttes. Vous êtes défini par la force dont vous avez fait preuve pour les surmonter.", author: "Inconnu" },
    { text: "Votre santé mentale est une priorité. Votre bonheur est essentiel. Prendre soin de soi est une nécessité.", author: "Inconnu" },
    { text: "Vous n'êtes pas votre maladie. Vous avez une histoire personnelle à raconter. Rester vous-même fait partie du combat.", author: "Julian Seifter" },
    { text: "Vous n'avez pas besoin d'être positif tout le temps. Avoir des sentiments ne fait pas de vous une personne négative. Cela vous rend humain.", author: "Lori Deschene" },
    { text: "Votre santé mentale est primordiale – accordez-lui la priorité. Faites en sorte que votre vie en dépende, car c'est le cas.", author: "Mel Robbins" },
    { text: "Votre santé est importante. Vos sentiments sont valides. Votre voix compte. Vous comptez.", author: "Inconnu" },
    { text: "Nous ne dirions jamais à quelqu'un qui a une jambe cassée qu'il devrait arrêter de se vautrer et se ressaisir. Nous ne considérons pas la prise de médicaments pour une infection de l'oreille comme quelque chose dont il faut avoir honte. Nous ne devrions pas traiter les problèmes de santé mentale différemment", author: "Michelle Obama" },
    { text: "Le conseil que je donnerais à quelqu'un qui lutte en silence est qu'il n'est pas obligé de vivre de cette façon. Il n'est pas obligé de lutter en silence. Vous pouvez ne pas rester silencieux.", author: "Demi Lovato" },
    { text: "Ce dont la santé mentale a besoin, c'est de plus de soleil, de plus de franchise et de conversations sans honte.", author: "Glenn Close" },
    { text: "Le soin de soi n'est pas de l'égoïsme, c'est de l'auto-préservation.", author: "Inconnu" },
    { text: "La guérison ne signifie pas que les dommages n'ont jamais existé. Elle signifie que les dommages ne contrôlent plus nos vies.", author: "Inconnu" },
    { text: "Je ne supporte pas les mots 'Passe à autre chose'. Nous sommes tous sous une telle pression que nous mettons nos problèmes au passé. Plus lentement. Ne laissez pas les autres précipiter votre guérison. C'est un processus qui peut prendre des années, parfois toute une vie, et ce n'est pas grave.", author: "Beau Taplin" },
    { text: "C'est normal de ne pas aller bien. Ce qui est important, c'est que vous demandez de l'aide quand vous en avez besoin.", author: "Inconnu" },
    { text: "Votre parcours de santé mentale est un marathon, pas un sprint. Soyez patient avec vous-même.", author: "Inconnu" },
    { text: "Vous n'êtes pas seul. La maladie est une réalité, et la guérison est possible.", author: "Inconnu" },
    { text: "J'ai appris que ma tristesse n'a jamais détruit ce qu'il y avait de formidable en moi. Il faut juste revenir à cette grandeur, trouver cette petite lumière qui reste. J'ai de la chance d'avoir trouvé une petite lueur cachée.", author: "Lady Gaga" },
    { text: "C'est dans nos moments les plus sombres que nous devons nous concentrer pour voir la lumière.", author: "Aristote" },
    { text: "Au cœur de l'hiver, j'ai découvert qu'il y avait en moi un été invincible. Et cela me rend heureux. Car il dit que peu importe à quel point le monde pousse contre moi, en moi, il y a quelque chose de plus fort quelque chose de mieux, qui repousse tout de suite.", author: "Albert Camus" },
    { text: "Les personnes les plus fortes ne sont pas celles qui montrent leur force devant nous, mais celles qui gagnent des batailles dont nous ne savons rien.", author: "Inconnu" },
    { text: "Il y a de l'espoir, même lorsque votre cerveau vous dit qu'il n'y en a pas.", author: "John Green" },
    { text: "Ce ne sont pas les ecchymures sur le corps qui font mal. Ce sont les blessures du cœur et les cicatrices de l'esprit.", author: "Aisha Mirza" },
    { text: "N'importe qui peut être touché, quel que soit son niveau de réussite ou sa place dans toutes les couches sociales. En fait, il y a de fortes chances que vous connaissiez quelqu'un qui en souffre, car au moins 1 adolescent sur 10 est confronté à une forme de maladie mentale au cours de leur vie. Alors, pourquoi n'en parlons-nous pas ?", author: "Kristen Bell" },
    { text: "Vous-même, autant que n'importe qui dans l'univers entier, méritez votre amour et votre affection.", author: "Buddha" },
];

/* Palette d'avatars dérivée des couleurs du site */
const AVATAR_COLORS = ['#00bcd4', '#0097a7', '#7cb518', '#0fa0b6', '#2196c4', '#48b39a'];

function getInitials(author) {
    const clean = author.split(',')[0].trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function colorFor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function Avatar({ quote }) {
    if (quote.photo) {
        return <img className="testimonial-photo" src={quote.photo} alt={quote.author} loading="lazy" draggable={false} />;
    }
    const isUnknown = /inconnu/i.test(quote.author);
    if (isUnknown) {
        return (
            <span className="testimonial-photo testimonial-photo--unknown" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z" />
                </svg>
            </span>
        );
    }
    return (
        <span className="testimonial-photo testimonial-photo--initials" style={{ background: colorFor(quote.author) }} aria-hidden="true">
            {getInitials(quote.author)}
        </span>
    );
}

/* ===== Réplique de la config Owl du template ===== */
const GAP = 25;          // owl margin: 25
const SPEED = 1000;      // owl smartSpeed: 1000
const AUTOPLAY = 3000;   // owl autoplayTimeout — cadence un peu plus rapide
const CLONES = 8;        // tampon de clones large -> jamais de vide, boucle sans saut visible

function visibleFor(width) {
    if (width < 768) return 1;
    if (width < 992) return 2;
    return 3;            // owl responsive: 0->1, 768->2, 992->3
}

/* Révélation au scroll — équivalent WOW.js + animate.css (fadeInUp) */
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

/* Photos du template (comme Foody) : attribuées en rotation aux auteurs
 * nommés. Les « Inconnu » gardent l'avatar silhouette. */
const PHOTOS = [
    '/assets/feerima/images/testimonial-1.jpg',
    '/assets/feerima/images/testimonial-2.jpg',
    '/assets/feerima/images/testimonial-3.jpg',
    '/assets/feerima/images/testimonial-4.jpg',
];

let _photoCursor = 0;
const quotesWithAvatars = quotes.map((q) => {
    if (q.photo || /inconnu/i.test(q.author)) return q;
    const photo = PHOTOS[_photoCursor % PHOTOS.length];
    _photoCursor += 1;
    return { ...q, photo };
});

export default function QuotesBanner() {
    const n = quotesWithAvatars.length;
    const viewportRef = useRef(null);

    const [vw, setVw] = useState(0);
    const [visible, setVisible] = useState(3);
    const [animate, setAnimate] = useState(true);
    const [hovering, setHovering] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [dragDelta, setDragDelta] = useState(0);

    // Autoplay en pause au survol (autoplayHoverPause) ou pendant le drag
    const paused = hovering || dragging;

    const middleOffset = Math.floor(visible / 2);

    // Apparition au scroll (fadeInUp), comme le `wow fadeInUp` du template
    const [headerRef, headerShown] = useReveal();
    const [carouselRef, carouselShown] = useReveal();

    // Tableau étendu : clones de fin + réels + clones de début (boucle infinie)
    const extended = useMemo(() => [
        ...quotesWithAvatars.slice(n - CLONES),
        ...quotesWithAvatars,
        ...quotesWithAvatars.slice(0, CLONES),
    ], [n]);

    // pos = index (dans `extended`) de la carte la plus à gauche
    const [pos, setPos] = useState(CLONES - 1); // item 0 centré au départ

    const cardW = vw > 0 ? (vw - (visible - 1) * GAP) / visible : 0;
    const step = cardW + GAP;

    // Saut instantané (sans transition) puis réactivation de l'anim à la frame suivante
    const jumpTo = useCallback((updater) => {
        setAnimate(false);
        setPos(updater);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }, []);

    // Mesure de la largeur + calcul du nombre d'items visibles
    useLayoutEffect(() => {
        const el = viewportRef.current;
        if (!el) return undefined;
        const update = () => {
            setVw(el.clientWidth);
            setVisible(visibleFor(window.innerWidth));
        };
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        window.addEventListener('resize', update);
        return () => { ro.disconnect(); window.removeEventListener('resize', update); };
    }, []);

    // Recentre sur l'item 0 quand le nombre de colonnes change
    useEffect(() => {
        jumpTo(CLONES - Math.floor(visible / 2));
    }, [visible, jumpTo]);

    const go = useCallback((dir) => {
        setAnimate(true);
        setPos((p) => p + dir);
    }, []);

    // Défilement automatique (pause au survol / focus / drag) — owl autoplay
    useEffect(() => {
        if (paused) return undefined;
        const id = setInterval(() => { setAnimate(true); setPos((p) => p + 1); }, AUTOPLAY);
        return () => clearInterval(id);
    }, [paused]);

    // Boucle infinie : saut invisible quand le centre entre dans les clones
    const handleTransitionEnd = useCallback((e) => {
        if (e.propertyName !== 'transform' || e.target !== e.currentTarget) return;
        const center = pos + middleOffset;
        if (center > CLONES + n - 1) jumpTo((p) => p - n);
        else if (center < CLONES) jumpTo((p) => p + n);
    }, [pos, middleOffset, n, jumpTo]);

    // ---- Glisser-déposer au curseur / tactile (owl mouseDrag) ----
    const drag = useRef({ active: false, startX: 0, delta: 0 });

    const onPointerDown = useCallback((e) => {
        if (step <= 0) return;
        drag.current = { active: true, startX: e.clientX, delta: 0 };
        setDragging(true);
        setAnimate(false);
        if (e.currentTarget.setPointerCapture) {
            try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* noop */ }
        }
    }, [step]);

    const onPointerMove = useCallback((e) => {
        if (!drag.current.active) return;
        // Borne le glissement à l'intérieur du tampon de clones -> jamais de vide
        const max = (CLONES - 1) * step;
        let d = e.clientX - drag.current.startX;
        if (d > max) d = max;
        else if (d < -max) d = -max;
        drag.current.delta = d;
        setDragDelta(d);
    }, [step]);

    const endDrag = useCallback(() => {
        if (!drag.current.active) return;
        const { delta } = drag.current;
        drag.current = { active: false, startX: 0, delta: 0 };
        setDragDelta(0);
        let moved = step > 0 ? Math.round(-delta / step) : 0;
        const maxMove = CLONES - 1;
        if (moved > maxMove) moved = maxMove;
        else if (moved < -maxMove) moved = -maxMove;
        setAnimate(true);
        setPos((p) => p + moved);
        setDragging(false);
    }, [step]);

    const centerIndex = pos + middleOffset;
    const translateX = -pos * step + dragDelta;

    return (
        <section
            className="testimonial-section"
            aria-roledescription="carrousel"
            aria-label="Citations inspirantes"
        >
            <div className="testimonial-container">
                {/* En-tête de section — double trait centré, comme le template */}
                <div
                    className={`section-header wow${headerShown ? ' wow--in' : ''}`}
                    ref={headerRef}
                    style={{ animationDelay: '0.1s' }}
                >
                    <h1 className="section-title">Citations inspirantes</h1>
                    <p className="section-text">
                        Des mots qui rappellent que vous n'êtes jamais seul et que la guérison est possible.
                    </p>
                </div>

                <div
                    className={`testimonial-carousel-wrap wow${carouselShown ? ' wow--in' : ''}`}
                    ref={carouselRef}
                    style={{ animationDelay: '0.1s' }}
                >
                <div
                    className="testimonial-viewport"
                    ref={viewportRef}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerLeave={endDrag}
                    onPointerCancel={endDrag}
                >
                    <div
                        className="testimonial-track"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            gap: `${GAP}px`,
                            transition: animate ? `transform ${SPEED}ms ease` : 'none',
                            transform: `translateX(${translateX}px)`,
                        }}
                    >
                        {extended.map((q, i) => (
                            <div
                                key={i}
                                className={`testimonial-item${i === centerIndex ? ' center' : ''}`}
                                style={{ flex: `0 0 ${cardW}px`, width: `${cardW}px` }}
                                aria-hidden={i === centerIndex ? undefined : 'true'}
                            >
                                <span className="testimonial-quote-icon" aria-hidden="true">
                                    <svg viewBox="0 0 512 512" width="46" height="46" fill="currentColor">
                                        <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C79.6 32 8 103.6 8 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                                    </svg>
                                </span>
                                <p className="testimonial-text">{q.text}</p>
                                <div className="testimonial-person">
                                    <Avatar quote={q} />
                                    <div className="testimonial-meta">
                                        <h5 className="testimonial-name">{q.author.split(',')[0]}</h5>
                                        <span className="testimonial-role">
                                            {/inconnu/i.test(q.author) ? 'Anonyme' : 'Source inspirante'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation — boutons ronds, comme owl-nav */}
                <div className="testimonial-nav">
                    <button type="button" className="testimonial-nav-btn" aria-label="Citation précédente" onClick={() => go(-1)}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button type="button" className="testimonial-nav-btn" aria-label="Citation suivante" onClick={() => go(1)}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
}
