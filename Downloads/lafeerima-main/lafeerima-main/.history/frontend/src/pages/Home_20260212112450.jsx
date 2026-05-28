import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { newsService } from '../services/api';
import '../styles/Home.css';
import TypingBubble from '../components/TypingBubble';

const fallbackNews = [
  {
    id: 'placeholder-1',
    title: 'Alimentation saine',
    excerpt: 'Des conseils simples pour soutenir le bien-etre et l energie au quotidien.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-2',
    title: 'Gestion du stress',
    excerpt: 'Exercices de respiration et routines courtes pour apaiser les tensions.',
    imageUrl: '',
    linkUrl: '#',
  },
  {
    id: 'placeholder-3',
    title: 'Sommeil reparateur',
    excerpt: 'Des rituels du soir pour retrouver un sommeil profond et reparateur.',
    imageUrl: '',
    linkUrl: '#',
  },
];

export default function Home() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);

  // Images pour le carousel hero (peut être étendu à 5 images)
  const heroImages = ['/assets/feerima/center.png'];

  const goToPreviousHero = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToNextHero = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await newsService.getLatestNews();
        setNewsItems(response.data || []);
        setLoadError(null);
      } catch (err) {
        setLoadError('Impossible de charger les actualites pour le moment.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const displayedNews = newsItems.length > 0 ? newsItems : fallbackNews;

  return (
    <div className="home-page">
      <Navbar />

      <main>
        <TypingBubble />
        <section className="hero" style={{ background: `linear-gradient(135deg, rgba(15, 160, 182, 0.5), rgba(173, 220, 233, 0.5)), url('${heroImages[heroIndex]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <button 
            type="button" 
            className="hero-nav hero-nav-prev"
            onClick={goToPreviousHero}
            aria-label="Image précédente"
          >
            ‹
          </button>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">FeeRima Care</p>
              <h1>
                Votre partenaire de confiance pour la sante mentale des jeunes et
                adolescents de 10 a 25 ans.
              </h1>
              <div className="hero-actions">
                <Link to="/preadmission" className="btn primary">
                  Prendre rendez-vous
                </Link>
                <button type="button" className="btn ghost">
                  <span className="play" aria-hidden="true">&gt;</span>
                  Nos actions en video
                </button>
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card-title">A la Fee Rima</p>
              <p>Un accueil personnalise et bienveillant</p>
            </div>
          </div>
          <button 
            type="button" 
            className="hero-nav hero-nav-next"
            onClick={goToNextHero}
            aria-label="Image suivante"
          >
            ›
          </button>
        </section>

        <section className="welcome custom-welcome">
          <div className="container custom-welcome-grid">
            <div className="custom-portrait">
              <img src="/assets/feerima/news-3.png" alt="Photo de Naomi" className="custom-portrait-image" />
              <div className="bubble-circles-absolute">
                <span className="bubble-circle small"></span>
                <span className="bubble-circle medium"></span>
                <span className="bubble-circle large"></span>
              </div>
            </div>
            <div className="custom-speech-bubble">
              <h2>Chers visiteurs</h2>
              <p>
                C’est avec une immense joie que je vous souhaite la bienvenue au centre de spécialité La Fée Rima. Notre mission est de promouvoir le bien-être psychologique des adolescents et des jeunes, en rendant l’accompagnement accessible à tous.
              </p>
              <p>
                À la Fée Rima, l’écoute, le respect et le bien-être sont au cœur de notre action et notre équipe met son expertise au service d’un accompagnement personnalisé et de qualité. Nous nous engageons pour l’excellence et l’amélioration continue, afin que chaque voix compte et soit entendue.
              </p>
              <span className="custom-signature">Noura Saramanta</span>
            </div>
          </div>
        </section>

        <section className="quote-bar">
          <div className="container quote-content">
            <p>
              "La guerison prend du temps et demander de l aide est une demarche courageuse"
            </p>
            <span>Mariska Hargitay</span>
          </div>
        </section>

        <section className="info-grid container">
          <div className="contact-card">
            <h3>Nous contacter</h3>
            <p>Telephone : 0700000000</p>
            <p>Email : lafeerima@lafeerima.com</p>
            <p>Angre - Commissariat du 12eme arr. ABIDJAN</p>
            <div className="map-icon" />
            <div className="specificites">
              <h4>Nos specificites</h4>
              <ul>
                <li>Equipe pluridisciplinaire : psychologues, educateurs specialises, therapeute.</li>
                <li>Approche personnalisee : un plan de soins adapte a chacun.</li>
                <li>Cadre bienveillant et securise pour la guerison et la reinsertion.</li>
                <li>Methodes innovantes : utilisation de therapies modernes.</li>
                <li>Implication des familles et accompagnement des proches.</li>
                <li>Accessibilite : prise en compte des realites sociales locales.</li>
              </ul>
            </div>
          </div>

          <div className="news-panel">
            <div className="news-header">
              <h3>Nos dernieres actualites</h3>
              {loading && <span className="news-status">Chargement...</span>}
              {loadError && <span className="news-status error">{loadError}</span>}
            </div>
            <div className="news-list">
              {displayedNews.map((item) => (
                <article key={item.id} className="news-card">
                  <div className="news-thumb">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.title} />
                    ) : (
                      <div className="news-thumb-placeholder">NEWS</div>
                    )}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.excerpt}</p>
                    <a href={item.linkUrl} className="news-link">
                      Voir plus
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="center-image">
          <div className="container center-grid">
            <div className="center-card">
              <h3>Le centre en image</h3>
              <div className="center-photo" />
            </div>
            <div className="center-description">
              <p>
                La Fee Rima est un centre specialise a Abidjan, dedie a l accompagnement
                en sante mentale des jeunes de 10 a 25 ans.
              </p>
            </div>
            <div className="center-links">
              <h4>Le centre specialise Fee Rima</h4>
              <ul>
                <li>Accueil</li>
                <li>Le centre specialise</li>
                <li>L offre de soins</li>
                <li>Vos droits</li>
                <li>FAQ</li>
                <li>Ressources</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
