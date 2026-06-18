import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/LeafletMap.css';

// Fix pour les icônes Leaflet avec Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function LeafletMap() {
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);

    useEffect(() => {
        // Coordonnées du centre La Fée Rima — II Plateaux
        const centerCoordinates = [5.33684, -4.01335];

        // Initialiser la carte seulement si elle n'existe pas déjà
        if (!mapInstanceRef.current && mapRef.current) {
            // Créer la carte
            const map = L.map(mapRef.current, {
                center: centerCoordinates,
                zoom: 16,
                zoomControl: true,
                scrollWheelZoom: true,
                dragging: true,
                touchZoom: true,
            });

            // Fond de carte épuré (CartoDB Positron) — plus sobre que les tuiles OSM par défaut
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '© OpenStreetMap contributors © CARTO',
                maxZoom: 19,
                subdomains: 'abcd',
            }).addTo(map);

            // Icône personnalisée aux couleurs de la marque (navy + vert)
            const customIcon = L.divIcon({
                className: 'custom-marker',
                html: `
          <div class="marker-pin">
            <svg width="44" height="56" viewBox="0 0 44 56" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 0C9.85 0 0 9.85 0 22c0 15.4 22 34 22 34s22-18.6 22-34C44 9.85 34.15 0 22 0z"
                    fill="#1a3a5c"/>
              <circle cx="22" cy="22" r="13" fill="#7cb518" stroke="#fff" stroke-width="3"/>
              <circle cx="22" cy="22" r="5" fill="#fff"/>
            </svg>
          </div>
        `,
                iconSize: [44, 56],
                iconAnchor: [22, 56],
                popupAnchor: [0, -54],
            });

            // Ajouter le marqueur du centre La Fée Rima
            const marker = L.marker(centerCoordinates, { icon: customIcon }).addTo(map);

            // Ajouter un popup avec informations
            marker.bindPopup(`
        <div class="custom-popup">
          <div class="custom-popup-header">
            <span class="custom-popup-logo">🦋</span>
            <h3>La Fée Rima</h3>
          </div>
          <p class="custom-popup-subtitle">Centre spécialisé</p>
          <div class="custom-popup-row"><span class="custom-popup-icon">📍</span>II Plateaux, Abidjan, Côte d'Ivoire</div>
          <div class="custom-popup-row"><span class="custom-popup-icon">📞</span>+225 07 00 000 007</div>
          <a href="https://www.google.com/maps/dir/?api=1&destination=5.33684,-4.01335"
             target="_blank"
             rel="noopener noreferrer"
             class="directions-link">
            Obtenir l'itinéraire →
          </a>
        </div>
      `);

            // Ouvrir le popup automatiquement
            marker.openPopup();

            // Ajouter un cercle de zone autour du centre
            L.circle(centerCoordinates, {
                color: '#1a3a5c',
                fillColor: '#1a3a5c',
                fillOpacity: 0.06,
                weight: 1.5,
                radius: 200, // 200 mètres
            }).addTo(map);

            mapInstanceRef.current = map;
        }

        // Cleanup
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div className="leaflet-map-wrapper">
            <div ref={mapRef} className="leaflet-map-container" />
        </div>
    );
}
