import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
import TermsOfUsePage from './components/TermsOfUsePage';
import DataHandlingPage from './components/DataHandlingPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import DataRightsRequestPage from './components/DataRightsRequestPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/data-handling-deletion-schedule" element={<DataHandlingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/data-rights-request" element={<DataRightsRequestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;