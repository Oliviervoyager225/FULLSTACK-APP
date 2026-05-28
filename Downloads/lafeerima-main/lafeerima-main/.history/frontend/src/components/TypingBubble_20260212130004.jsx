import React, { useEffect, useState } from "react";
import "./TypingBubble.css";

const text = `
C’est avec une immense joie que je vous souhaite la bienvenue au centre de spécialité La Fée Rima.
Notre mission est de promouvoir le bien-être psychologique des adolescents et des jeunes, en rendant l’accompagnement accessible à tous.

À la Fée Rima l’écoute et le respect sont au cœur de notre action et notre équipe met son expertise au service d’un accompagnement personnalisé et de qualité.
`;

export default function TypingBubble() {
  const [displayedText, setDisplayedText] = useState("");
  const speed = 20; // vitesse écriture (ms)

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="typing-bubble-container custom-height-bubble-container">
      {/* image */}
      <img
        src="/assets/feerima/news-3.png"
        alt="profil"
        className="typing-profile-img"
      />

      {/* bulles décoratives */}
      <div className="typing-bubble small custom-height-bubble-small"></div>
      <div className="typing-bubble medium custom-height-bubble-medium"></div>
      <div className="typing-bubble large custom-height-bubble-large"></div>

      {/* carte texte */}
      <div className="typing-message-card custom-height-message-card">
        <h2>Chers visiteurs</h2>
        <p className="typing">{displayedText}</p>
        <div className="typing-signature">Noura Saramanta</div>
      </div>
    </div>
  );
}
