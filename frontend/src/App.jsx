import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Centre spécialisé
import Home from './pages/Home';
import Preadmission from './pages/Preadmission';
import Contact from './pages/Contact';
import Professionals from './pages/Professionals';
import NosValeurs from './pages/NosValeurs';
import Engagement from './pages/Engagement';
import LaFondation from './pages/LaFondation';

// Offre de soins
import NosSpecificites from './pages/NosSpecificites';
import CentreSpecialise2Plateaux from './pages/CentreSpecialise2Plateaux';
import ConsultationsExternes from './pages/ConsultationsExternes';
import HopitalDeJour from './pages/HopitalDeJour';
import ServiceAccueilUrgence from './pages/ServiceAccueilUrgence';
import Tarifications from './pages/Tarifications';

// Vos droits
import ChartesReglement from './pages/ChartesReglement';
import ChartesUsager from './pages/ChartesUsager';
import PersonneDeConfiance from './pages/PersonneDeConfiance';
import SecuriteDonnees from './pages/SecuriteDonnees';
import Videosurveillance from './pages/Videosurveillance';
import DossierMedical from './pages/DossierMedical';
import PlaintesReclamations from './pages/PlaintesReclamations';
import Satisfaction from './pages/Satisfaction';

// Navigation principale
import SInformer from './pages/SInformer';
import PoleRechercheInnovation from './pages/PoleRechercheInnovation';
import NousRejoindre from './pages/NousRejoindre';

import './App.css';
import NosCollaborateurs from './pages/NosCollaborateurs';

import FaireDon from './pages/FaireDon';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />
          <Route path="/preadmission" element={<Preadmission />} />
          <Route path="/contact" element={<Contact />} />

          {/* Centre spécialisé */}
          <Route path="/la-fondation" element={<LaFondation />} />
          <Route path="/equipes" element={<Professionals />} />
          <Route path="/nos-valeurs" element={<NosValeurs />} />
          <Route path="/engagement-qualite" element={<Engagement />} />

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
          <Route path="/nos-collaborateurs" element={<NosCollaborateurs />} />


          {/* Navigation principale */}
          <Route path="/s-informer" element={<SInformer />} />
          <Route path="/recherche-innovation" element={<PoleRechercheInnovation />} />

          <Route path="/nous-rejoindre" element={<NousRejoindre />} />
          <Route path="/faire-un-don" element={<FaireDon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
