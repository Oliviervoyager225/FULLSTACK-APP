import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { newsService } from '../services/api';
import '../styles/Home.css';
import '../styles/InfoSection.css';
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

  // Images pour le carousel hero (4 images)
  const heroImages = [
    '/assets/feerima/hero.png',
    '/assets/feerima/hero2.png?v=' + Date.now(),
    '/assets/feerima/hero3.png?v=' + Date.now(),
    '/assets/feerima/hero4.png?v=' + Date.now()
  ];

  const goToPreviousHero = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToNextHero = () => {
    setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

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
        <section
          key={heroIndex}
          className="hero hero-slide"
          style={{ background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url('${heroImages[heroIndex]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
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
              <h1 className="hero-title">
                <span className="hero-title-brand">FeeRima</span>{' '}
                <span className="hero-title-suffix">Care</span>
              </h1>
              <p className="hero-subtitle">
                Votre partenaire de confiance pour la santé mentale des jeunes et
                adolescents de 10-25 ans.
              </p>
              <div className="hero-actions">
                <Link to="/preadmission" className="btn btn-primary-yellow">
                  Prendre rendez-vous
                </Link>
                <button type="button" className="btn btn-video">
                  <span className="play-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Nos actions en vidéo
                </button>
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card-title">À la Fée Rima</p>
              <p>Un accueil personnalisé et bienveillant</p>
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

          {/* Pagination dots */}
          <div className="hero-pagination">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero-dot ${index === heroIndex ? 'active' : ''}`}
                onClick={() => setHeroIndex(index)}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <TypingBubble />

        <section className="quote-bar">
          <div className="quote-content">
            "La guerison prend du temps et demander de l aide est une demarche courageuse"<span className="quote-author"> - Mariska Hargitay</span>
          </div>
        </section>


        <section className="info-section">
          <div className="container info-grid-new">
            {/* Left side - Contact and Specifications */}
            <div className="contact-section">
              <div className="contact-info">
                <h3>Nous contacter</h3>
                <p><strong>Téléphone :</strong> 0700000000</p>
                <p><strong>Email :</strong> Laférima@laferima.com</p>
                <p className="address">Angré - comissariat du 12ème arrondissement arr.ABIDJAN</p>
              </div>

              <div className="map-container">
                <img src="/assets/feerima/map-pin.png" alt="Carte" className="map-image" />
              </div>

              <div className="specificites-section">
                <h3>Nos spécificités</h3>
                <div className="spec-item">
                  <strong>Equipe pluridisciplinaire</strong> : psychologues, éducateurs spécialisés, thérapeute, coach sportif, maîtresse de maison...
                </div>
                <div className="spec-item">
                  <strong>Equipe pluridisciplinaire</strong> : psychologues, éducateurs spécialisés, thérapeute, coach sportif, maîtresse de maison...
                </div>
                <div className="spec-item">
                  <strong>Equipe pluridisciplinaire</strong> : psychologues, éducateurs spécialisés, thérapeute, coach sportif, maîtresse de maison...
                </div>
                <div className="spec-item">
                  <strong>Equipe pluridisciplinaire</strong> : psychologues, éducateurs spécialisés, thérapeute, coach sportif, maîtresse de maison...
                </div>
              </div>
            </div>

            {/* Right side - News Panel */}
            <div className="news-panel-new">
              <h3 className="news-title">Nos dernières actualités</h3>
              <div className="news-list-new">
                {displayedNews.map((item) => (
                  <article key={item.id} className="news-card-new">
                    <div className="news-image">
                      <img src={item.imageUrl || '/assets/feerima/portrait.png'} alt={item.title} />
                    </div>
                    <div className="news-content">
                      <h4>{item.title}</h4>
                      <p>{item.excerpt}</p>
                      <a href={item.linkUrl} className="news-link-new">
                        Voir plus →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
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
