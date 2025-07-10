import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecentActivity from './components/RecentActivity';
import HeroSection from './components/HeroSection'
import HelpSection from './components/HelpSection'
import AboutUs from './components/AboutUs'
import Help from './components/Help'
import OfferHelp from './components/OfferHelp'
import Report from './components/Report'
import AuthPage from './components/AuthPage'
import Dashboard from './components/Dashboard'
import './App.css'

// Home Page Component
const HomePage = ({ onLearnMore }) => {
  return (
    <>
      <HeroSection 
        onLearnMore={onLearnMore}
      />
      <HelpSection />
<RecentActivity />
    </>
  );
};

// Main App Component with Routing
const AppContent = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onLearnMore={handleLearnMore}
              />
            } 
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offer-help" element={<OfferHelp />} />
          <Route path="/report" element={<Report />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<HomePage onLearnMore={handleLearnMore} />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
