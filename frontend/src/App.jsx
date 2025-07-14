import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecentActivity from "./components/RecentActivity";
import HeroSection from "./components/HeroSection";
import HelpSection from "./components/HelpSection";
import AboutUs from "./components/AboutUs";
import Help from "./components/Help";
import OfferHelp from "./components/OfferHelp";
import Report from "./components/Report";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import "./App.css";

// Home Page Component
const HomePage = ({ onLearnMore }) => {
  return (
    <>
      <HeroSection onLearnMore={onLearnMore} />
      <HelpSection />
      <RecentActivity />
    </>
  );
};

// Main App Component with Routing
const AppContent = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<HomePage onLearnMore={handleLearnMore} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offer-help" element={<OfferHelp />} />
          <Route path="/report" element={<Report />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Catch all route - redirect to home */}
          <Route
            path="*"
            element={<HomePage onLearnMore={handleLearnMore} />}
          />
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
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#374151",
            border: "1px solid #f59e0b",
            borderRadius: "12px",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
          success: {
            style: {
              border: "1px solid #10b981",
            },
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              border: "1px solid #ef4444",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </Router>
  );
}

export default App;
