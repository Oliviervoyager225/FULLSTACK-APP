import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';
import '../styles/FAQ.css';

const faqData = [
  {
    question: "Qu'est-ce que la santé mentale ?",
    answer: (
      <div>
        <p>La santé mentale est une composante de notre santé au même titre que la santé physique. L'Organisation mondiale de la santé (OMS) explique qu'« il n'y a pas de santé sans santé mentale ». Elle définit la santé mentale comme « un état de bien-être dans lequel une personne peut se réaliser, surmonter les tensions normales de la vie, accomplir un travail productif et contribuer à la vie de sa communauté ».</p>
        <p style={{ marginTop: '0.75rem' }}>Selon Psycom, la santé mentale est une affaire d'équilibre entre les ressources qu'une personne peut mobiliser pour se sentir bien, et les obstacles qu'elle rencontre au cours de sa vie. Cet équilibre n'est pas figé : il évolue en permanence. Il peut être brisé puis rétabli. Ainsi, tout le monde connaît des périodes de bien-être et de mal-être.</p>
      </div>
    ),
  },
  {
    question: "Quelle est la différence entre santé mentale et maladie mentale ?",
    answer: (
      <div>
        <p>La maladie mentale est la détérioration de la santé mentale. Sur le plan de la santé physique, on fait référence à des maladies tels que le paludisme, la fièvre typhoïde… Au niveau de la santé mentale, cette dégradation peut se manifester par la dépression, l'anxiété généralisée, l'addiction…</p>
        <p style={{ marginTop: '0.75rem' }}>Il faut savoir que tout le monde peut un jour être atteint par une maladie mentale. Toutefois, grâce à une prise en charge adaptée, la maladie mentale peut se guérir.</p>
      </div>
    ),
  },
  {
    question: "Comment prendre soin de sa santé mentale ?",
    answer: (
      <div>
        <p>L'Organisation mondiale de la santé (OMS) donne 10 conseils pour préserver sa santé mentale :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.4rem', lineHeight: 2 }}>
          <li>Parler de ses émotions</li>
          <li>Rester actif en faisant de l'exercice régulièrement</li>
          <li>Manger équilibré</li>
          <li>Éviter les excès d'alcool</li>
          <li>Faire attention à son sommeil</li>
          <li>Rester en contact avec ses proches, famille ou amis</li>
          <li>Demander de l'aide quand les choses deviennent trop difficiles</li>
          <li>Faire des choses que l'on aime</li>
          <li>S'accepter, avec ses imperfections</li>
          <li>S'investir pour les autres, par l'entraide, la solidarité</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Comment soutenir la santé mentale des adolescents ?",
    answer: (
      <ul style={{ paddingLeft: '1.4rem', lineHeight: 2 }}>
        <li>Créez un environnement sécurisant et bienveillant</li>
        <li>Encouragez l'expression des émotions</li>
        <li>Limitez le temps d'écran et favorisez les activités créatives</li>
        <li>Soyez attentif aux changements de comportement</li>
        <li>Consultez en cas de difficultés scolaires ou émotionnelles</li>
      </ul>
    ),
  },
  {
    question: "À partir de quand s'inquiéter ?",
    answer: (
      <div>
        <p>Il ne faut pas attendre d'être malade pour s'inquiéter et demander de l'aide. Certains signes peuvent indiquer un problème de santé mentale surtout lorsqu'ils persistent ou qu'ils sont très intenses.</p>
        <p style={{ marginTop: '0.75rem', fontWeight: 600 }}>Quelques signes :</p>
        <ul style={{ paddingLeft: '1.4rem', lineHeight: 2 }}>
          <li>Perte d'appétit, excès ou privation de nourriture</li>
          <li>Problèmes de sommeil</li>
          <li>Tristesse, irritabilité ou colère constante</li>
          <li>Mauvaise estime de soi</li>
          <li>Difficultés à se concentrer</li>
          <li>Perte de motivation, d'enthousiasme</li>
          <li>Idées noires, pensées suicidaires</li>
          <li>Consommation excessive d'alcool, de substances (drogues), de médicaments</li>
          <li>Difficultés dans les tâches quotidiennes</li>
          <li>Sentiment d'être visé par ce que disent les autres, de ne plus pouvoir faire confiance à ses proches</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>De manière générale, un changement inhabituel dans le comportement d'une personne doit inquiéter.</p>
      </div>
    ),
  },
  {
    question: "Que faire en cas de souffrance psychologique ?",
    answer: (
      <div>
        <p>Il est essentiel d'exprimer ce que l'on ressent et de ne pas rester seul dans ses difficultés. Garder tout pour soi peut rendre les choses plus difficiles. Parfois, le simple fait d'être écouté permet déjà de se sentir mieux.</p>
        <p style={{ marginTop: '0.75rem' }}>Il est donc très important de parler : à un ami proche, une personne de confiance, à un professeur…</p>
        <p style={{ marginTop: '0.75rem' }}>Lorsque les signes deviennent préoccupants et s'installent dans la durée, il est essentiel de consulter un professionnel : médecin, psychiatre, psychologue… Vous pouvez prendre rendez-vous pour une consultation dans un de nos centres.</p>
        <p style={{ marginTop: '0.75rem' }}>Une ligne d'écoute gratuite du Ministère en charge de la Santé, le <strong>143</strong>, est disponible du lundi au vendredi de 8h à 17h.</p>
        <p style={{ marginTop: '0.75rem' }}>En cas d'urgence, il faut contacter le <strong>180</strong> (Sapeurs-Pompiers) ou se rendre aux urgences les plus proches.</p>
        <p style={{ marginTop: '0.75rem', fontStyle: 'italic', color: '#0fa0b6' }}>Demander de l'aide n'est pas un signe de faiblesse. C'est un acte de courage.</p>
      </div>
    ),
  },
  {
    question: "Que faire si un proche a besoin d'aide ?",
    answer: (
      <div>
        <p>Si vous remarquez qu'un proche ne va pas bien, vous pouvez jouer un rôle important : être attentif, écouter sans juger et l'encourager à parler à un professionnel.</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.4rem', lineHeight: 2 }}>
          <li>Écoutez sans jugement et évitez les phrases minimisantes comme « C'est dans ta tête »</li>
          <li>Encouragez-le à consulter un professionnel (psychologue, psychiatre ou pédopsychiatre)</li>
          <li>Proposez votre soutien au quotidien</li>
          <li>Informez-vous sur les ressources disponibles (lignes d'écoute, centres de prise en charge)</li>
          <li>Prenez soin de vous pour éviter l'épuisement</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Quelle est la différence entre psychiatre, pédopsychiatre et psychologue ?",
    answer: (
      <div>
        <p><strong>Le psychiatre</strong> est un médecin spécialisé dans le domaine de la psychiatrie. Il pose les diagnostics des maladies et propose des thérapies. Il intervient notamment pour les troubles nécessitant un traitement médicamenteux.</p>
        <p style={{ marginTop: '0.75rem' }}><strong>Le pédopsychiatre</strong> est un psychiatre qui s'est spécialisé dans la prise en charge des personnes de 0 à 18 ans : bébé, enfant, adolescent, jeune adulte.</p>
        <p style={{ marginTop: '0.75rem' }}><strong>Le psychologue</strong> propose des thérapies par la parole, il accompagne les personnes en souffrance psychologique ou émotionnelle sans prescription de médicaments. Parce qu'ils ont une formation spécifique, les personnes peuvent aborder avec lui des questions très personnelles.</p>
      </div>
    ),
  },
];

const ressourcesData = {
  lire: [
    { titre: 'Liens du Dr Zerbo', description: 'Ressources sélectionnées par notre médecin référent sur la santé mentale des jeunes.', image: '/assets/feerima/sante-mentale.jpg', tag: 'À lire' },
    { titre: 'Technique de relaxation', description: 'Apprenez des techniques simples pour gérer le stress au quotidien.', image: '/assets/feerima/ecoute.jpg', tag: 'À lire' },
    { titre: '5 conseils pour améliorer son sommeil', description: 'Un sommeil de qualité est essentiel pour votre santé mentale.', image: '/assets/feerima/prog_soins.jpg', tag: 'À lire' },
    { titre: 'Dépression', description: "Comprendre la dépression pour mieux l'identifier et agir.", image: '/assets/feerima/ecoute1.png', tag: 'À lire' },
    { titre: "Qu'est-ce que l'anxiété ?", description: 'Tout savoir sur les troubles anxieux et les solutions disponibles.', image: '/assets/feerima/parler.jpg', tag: 'À lire' },
    { titre: "Qu'est-ce que la schizophrénie ?", description: 'Une explication claire et bienveillante sur cette maladie souvent mal comprise.', image: '/assets/feerima/psycha.png', tag: 'À lire' },
  ],
  regarder: [
    { titre: 'Film sur le harcèlement', description: 'Un film poignant sur les impacts du harcèlement scolaire sur la santé mentale des adolescents.', image: '/assets/feerima/jeune.jpg', tag: 'À regarder' },
  ],
};

const ecouterCategories = {
  films: [
    { titre: 'Film sur le harcèlement', description: 'Un film poignant sur les impacts du harcèlement scolaire sur la santé mentale des adolescents.', image: '/assets/feerima/jeune.jpg', tag: 'Film' },
    { titre: 'La dépression au quotidien', description: 'Un documentaire émouvant sur la vie avec la dépression et les chemins vers la guérison.', image: '/assets/feerima/ecoute.jpg', tag: 'Film' },
    { titre: 'Anxiété : briser le silence', description: 'Un film sur les troubles anxieux chez les jeunes en Afrique.', image: '/assets/feerima/ecoute1.png', tag: 'Film' },
  ],
  series: [
    { titre: 'Grandir ensemble', description: "Une série sur les défis émotionnels et relationnels de l'adolescence.", image: '/assets/feerima/parler.jpg', tag: 'Série' },
    { titre: 'Ma tête, mon monde', description: "Série documentaire sur la santé mentale des 10-25 ans en Afrique de l'Ouest.", image: '/assets/feerima/psycha.png', tag: 'Série' },
    { titre: 'Jeunes et résilients', description: 'Portraits de jeunes qui ont surmonté des épreuves psychologiques difficiles.', image: '/assets/feerima/prog_soins.jpg', tag: 'Série' },
  ],
  musique: [
    { titre: 'Playlist bien-être', description: 'Une sélection musicale apaisante pour prendre soin de son esprit au quotidien.', image: '/assets/feerima/soutien.png', tag: 'Musique' },
    { titre: 'Sons de relaxation', description: 'Des sons naturels et mélodies douces pour la méditation et la détente.', image: '/assets/feerima/sante-mentale.jpg', tag: 'Musique' },
    { titre: 'Rythmes africains thérapeutiques', description: 'La musique traditionnelle africaine comme outil de bien-être mental.', image: '/assets/feerima/jeune.jpg', tag: 'Musique' },
  ],
};

function BlogGrid({ items }) {
  const [main, ...rest] = items;
  return (
    <div className="faq-blog-grid">
      <div className="faq-blog-featured">
        <img src={main.image} alt={main.titre} className="faq-blog-img" onError={e => { e.target.src = '/assets/feerima/sante.png'; }} />
        <div className="faq-blog-featured-body">
          <span className="faq-blog-tag">{main.tag}</span>
          <h4 className="faq-blog-title">{main.titre}</h4>
          <p className="faq-blog-desc">{main.description}</p>
        </div>
      </div>
      {rest.length > 0 && (
        <div className="faq-blog-list">
          {rest.map((item, i) => (
            <div key={i} className="faq-blog-item">
              <img src={item.image} alt={item.titre} className="faq-blog-thumb" onError={e => { e.target.src = '/assets/feerima/sante.png'; }} />
              <div className="faq-blog-item-content">
                <span className="faq-blog-tag small">{item.tag}</span>
                <h4 className="faq-blog-item-title">{item.titre}</h4>
                <p className="faq-blog-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RessourceSection({ titre, items }) {
  return (
    <div className="faq-ressource-section">
      <div className="faq-section-heading">
        <h3>{titre}</h3>
        <div className="faq-heading-bar"><span /><span /></div>
      </div>
      <BlogGrid items={items} />
    </div>
  );
}

function EcouterSection() {
  const [activeTab, setActiveTab] = useState('films');
  const tabs = [
    { key: 'films', label: '🎬 Films' },
    { key: 'series', label: '📺 Séries' },
    { key: 'musique', label: '🎵 Musique' },
  ];
  return (
    <div className="faq-ressource-section">
      <div className="faq-section-heading">
        <h3>🎧 À écouter</h3>
        <div className="faq-heading-bar"><span /><span /></div>
      </div>
      <div className="faq-ecouter-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`faq-ecouter-tab${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <BlogGrid items={ecouterCategories[activeTab]} />
    </div>
  );
}

function TemoignagesSection() {
  return (
    <div className="faq-ressource-section">
      <div className="faq-section-heading">
        <h3>💬 Témoignages</h3>
        <div className="faq-heading-bar"><span /><span /></div>
      </div>
      <div className="faq-blog-grid">
        <div className="faq-blog-featured">
          <img src="/assets/feerima/soutien.png" alt="Témoignages" className="faq-blog-img" onError={e => { e.target.src = '/assets/feerima/sante.png'; }} />
          <div className="faq-blog-featured-body">
            <span className="faq-blog-tag">À ÉCOUTER</span>
            <h4 className="faq-blog-title">Témoignages de jeunes</h4>
            <p className="faq-blog-desc">Des jeunes partagent leur parcours de soin et leur expérience à La Fée Rima. Des récits courageux pour inspirer et briser la stigmatisation autour de la santé mentale.</p>
          </div>
        </div>
        <div className="faq-blog-list">
          <div className="faq-blog-item">
            <img src="/assets/feerima/parler.jpg" alt="Témoignage 1" className="faq-blog-thumb" onError={e => { e.target.src = '/assets/feerima/sante.png'; }} />
            <div className="faq-blog-item-content">
              <span className="faq-blog-tag small">Témoignage</span>
              <h4 className="faq-blog-item-title">"J'ai appris à demander de l'aide"</h4>
              <p className="faq-blog-item-desc">Aminata, 17 ans, raconte son parcours à La Fée Rima.</p>
            </div>
          </div>
          <div className="faq-blog-item">
            <img src="/assets/feerima/ecoute.jpg" alt="Témoignage 2" className="faq-blog-thumb" onError={e => { e.target.src = '/assets/feerima/sante.png'; }} />
            <div className="faq-blog-item-content">
              <span className="faq-blog-tag small">Témoignage</span>
              <h4 className="faq-blog-item-title">"Je ne me sentais plus seul"</h4>
              <p className="faq-blog-item-desc">Kofi, 22 ans, témoigne de son expérience avec la dépression.</p>
            </div>
          </div>
          <div className="faq-blog-item">
            <img src="/assets/feerima/jeune.jpg" alt="Témoignage 3" className="faq-blog-thumb" onError={e => { e.target.src = '/assets/feerima/sante.png'; }} />
            <div className="faq-blog-item-content">
              <span className="faq-blog-tag small">Témoignage</span>
              <h4 className="faq-blog-item-title">"La thérapie a changé ma vie"</h4>
              <p className="faq-blog-item-desc">Fatoumata, 19 ans, partage son chemin vers la guérison.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState('');

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="historique-page">
      <Navbar />

      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #0fa0b6 0%, #0d7a8a 100%)' }}>
        <div className="page-hero-content">
          <h1>S'informer</h1>
          <p>Questions fréquentes et ressources utiles sur la santé mentale</p>
        </div>
      </section>

      <main className="historique-main">

        {/* ── Questions fréquentes ── */}
        <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <div className="hist-content" style={{ maxWidth: '900px', width: '100%' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>QUESTIONS FRÉQUENTES</h2>
            {faqData.map((item, i) => (
              <div key={i} style={{ marginBottom: '1rem', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', background: '#fff' }}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.1rem 1.25rem',
                    background: openIndex === i ? '#0fa0b6' : '#f9f9f9',
                    color: openIndex === i ? '#fff' : '#1a3a5c',
                    border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '1rem',
                    textAlign: 'left', transition: 'background 0.25s, color 0.25s',
                  }}
                >
                  {item.question}
                  <span style={{ marginLeft: '1rem', fontSize: '1.25rem', lineHeight: 1, flexShrink: 0 }}>
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                {openIndex === i && (
                  <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid #e5e7eb', color: '#444', lineHeight: 1.8 }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Ressources utiles ── */}
        <section className="faq-ressources-outer">
          <div className="faq-ressources-inner">

            <div className="faq-ressources-header">
              <h2>RESSOURCES UTILES</h2>
              <div className="faq-search-wrapper">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0fa0b6" strokeWidth="2" className="faq-search-icon">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="faq-search-input"
                />
              </div>
            </div>

            <RessourceSection titre="📖 À lire" items={ressourcesData.lire} />
            <RessourceSection titre="🎬 À regarder" items={ressourcesData.regarder} />
            <EcouterSection />
            <TemoignagesSection />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
