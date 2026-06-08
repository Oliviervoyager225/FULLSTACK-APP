import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Centre spécialisé
const Home = lazy(() => import('./pages/Home'));
const Preadmission = lazy(() => import('./pages/Preadmission'));
const Contact = lazy(() => import('./pages/Contact'));
const Historique = lazy(() => import('./pages/Historique'));
const Professionals = lazy(() => import('./pages/Professionals'));
const Actualites = lazy(() => import('./pages/Actualites'));
const NosValeurs = lazy(() => import('./pages/NosValeurs'));
const NosActions = lazy(() => import('./pages/NosActions'));
const Engagement = lazy(() => import('./pages/Engagement'));
const RSE = lazy(() => import('./pages/RSE'));
const Partenaires = lazy(() => import('./pages/Partenaires'));

// Offre de soins
const NosSpecificites = lazy(() => import('./pages/NosSpecificites'));
const CentreSpecialise2Plateaux = lazy(() => import('./pages/CentreSpecialise2Plateaux'));
const ConsultationsExternes = lazy(() => import('./pages/ConsultationsExternes'));
const HopitalDeJour = lazy(() => import('./pages/HopitalDeJour'));
const ServiceAccueilUrgence = lazy(() => import('./pages/ServiceAccueilUrgence'));
const Tarifications = lazy(() => import('./pages/Tarifications'));

// Vos droits
const ChartesReglement = lazy(() => import('./pages/ChartesReglement'));
const ChartesUsager = lazy(() => import('./pages/ChartesUsager'));
const PersonneDeConfiance = lazy(() => import('./pages/PersonneDeConfiance'));
const SecuriteDonnees = lazy(() => import('./pages/SecuriteDonnees'));
const Videosurveillance = lazy(() => import('./pages/Videosurveillance'));
const DossierMedical = lazy(() => import('./pages/DossierMedical'));
const PlaintesReclamations = lazy(() => import('./pages/PlaintesReclamations'));
const Satisfaction = lazy(() => import('./pages/Satisfaction'));

// Navigation principale
const FAQ = lazy(() => import('./pages/FAQ'));
const EspaceRessources = lazy(() => import('./pages/EspaceRessources'));
const PoleRechercheInnovation = lazy(() => import('./pages/PoleRechercheInnovation'));
const NousRejoindre = lazy(() => import('./pages/NousRejoindre'));

import './App.css';

function PageLoader() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', flexDirection: 'column', gap: '16px'
    }}>
      <div style={{
        width: '40px', height: '40px', border: '3px solid #e2e8f0',
        borderTop: '3px solid #0fa0b6', borderRadius: '50%',
        animation: 'spin 0.7s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Accueil */}
            <Route path="/" element={<Home />} />
            <Route path="/preadmission" element={<Preadmission />} />
            <Route path="/contact" element={<Contact />} />

            {/* Centre spécialisé */}
            <Route path="/historique" element={<Historique />} />
            <Route path="/equipes" element={<Professionals />} />
            <Route path="/nos-actions" element={<NosActions />} />
            <Route path="/nos-valeurs" element={<NosValeurs />} />
            <Route path="/engagement-qualite" element={<Engagement />} />
            <Route path="/rse" element={<RSE />} />
            <Route path="/partenaires" element={<Partenaires />} />
            <Route path="/actualites" element={<Actualites />} />

            {/* Offre de soins */}
            <Route path="/nos-specificites" element={<NosSpecificites />} />
            <Route path="/consultations" element={<ConsultationsExternes />} />
            <Route path="/hopital-de-jour" element={<HopitalDeJour />} />
            <Route path="/service-accueil-urgence" element={<ServiceAccueilUrgence />} />
            <Route path="/tarifications" element={<Tarifications />} />
            <Route path="/centre-specialise" element={<CentreSpecialise2Plateaux />} />

            {/* Vos droits */}
            <Route path="/chartes-reglement" element={<ChartesReglement />} />
            <Route path="/chartes-usager" element={<ChartesUsager />} />
            <Route path="/personne-de-confiance" element={<PersonneDeConfiance />} />
            <Route path="/securite-donnees" element={<SecuriteDonnees />} />
            <Route path="/videosurveillance" element={<Videosurveillance />} />
            <Route path="/dossier-medical" element={<DossierMedical />} />
            <Route path="/plaintes-reclamations" element={<PlaintesReclamations />} />
            <Route path="/satisfaction" element={<Satisfaction />} />

            {/* Navigation principale */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/espace-ressources" element={<EspaceRessources />} />
            <Route path="/recherche-innovation" element={<PoleRechercheInnovation />} />
            <Route path="/nous-rejoindre" element={<NousRejoindre />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
