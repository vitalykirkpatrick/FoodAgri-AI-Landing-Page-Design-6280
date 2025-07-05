import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ServicePage from './components/ServicePage';
import AllInOneGrowthSuitePage from './components/AllInOneGrowthSuitePage';
import GrowthAcceleratorPage from './components/GrowthAcceleratorPage';
import SalesPerformancePage from './components/SalesPerformancePage';
import MarketingExcellencePage from './components/MarketingExcellencePage';
import CustomerExperiencePage from './components/CustomerExperiencePage';
import OnboardingTrainingPage from './components/OnboardingTrainingPage';
import PartnershipChannelPage from './components/PartnershipChannelPage';
import DataIntelligencePage from './components/DataIntelligencePage';
import CustomerOnboardingPage from './components/CustomerOnboardingPage';
import OurProcessPage from './components/OurProcessPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import DataHandlingPage from './components/DataHandlingPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CookiePolicyPage from './components/CookiePolicyPage';
import DataRightsRequestPage from './components/DataRightsRequestPage';
import AdminPage from './components/admin/AdminPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/all-in-one-growth-suite" element={<AllInOneGrowthSuitePage />} />
          <Route path="/growth-accelerator-bundle" element={<GrowthAcceleratorPage />} />
          <Route path="/sales-performance-bundle" element={<SalesPerformancePage />} />
          <Route path="/marketing-excellence-bundle" element={<MarketingExcellencePage />} />
          <Route path="/customer-experience-bundle" element={<CustomerExperiencePage />} />
          <Route path="/onboarding-training-bundle" element={<OnboardingTrainingPage />} />
          <Route path="/partnership-channel-bundle" element={<PartnershipChannelPage />} />
          <Route path="/data-intelligence-bundle" element={<DataIntelligencePage />} />
          <Route path="/customer-onboarding" element={<CustomerOnboardingPage />} />
          <Route path="/our-process" element={<OurProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/data-handling-deletion-schedule" element={<DataHandlingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/data-rights-request" element={<DataRightsRequestPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;