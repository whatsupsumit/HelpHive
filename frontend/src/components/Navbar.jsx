import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-red-900/90 to-gray-900/95 backdrop-blur-xl border-b border-red-400/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-1 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="relative">
              <img 
                src="/hivelogo.png" 
                alt="HelpHive Logo" 
                className="w-25 h-20"
              />
            </div>
            <h1 className="text-2xl font-bold text-white drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">
              Help<span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text">
                Hive
              </span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/help"
              className={`relative transition-all duration-300 text-lg font-medium group hover:-translate-y-1 ${
                isActive('/help') 
                  ? 'text-red-300' 
                  : 'text-gray-100 hover:text-red-300'
              }`}
            >
              <span className="relative z-10">Ask for help</span>
              <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform transition-transform duration-300 ${
                isActive('/help') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></div>
            </Link>
            <Link 
              to="/offer-help"
              className={`relative transition-all duration-300 text-lg font-medium group hover:-translate-y-1 ${
                isActive('/offer-help') 
                  ? 'text-red-300' 
                  : 'text-gray-100 hover:text-red-300'
              }`}
            >
              <span className="relative z-10">Offer help</span>
              <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform transition-transform duration-300 ${
                isActive('/offer-help') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></div>
            </Link>
            <Link 
              to="/report"
              className={`relative transition-all duration-300 text-lg font-medium group hover:-translate-y-1 ${
                isActive('/report') 
                  ? 'text-red-300' 
                  : 'text-gray-100 hover:text-red-300'
              }`}
            >
              <span className="relative z-10">Report Issue</span>
              <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform transition-transform duration-300 ${
                isActive('/report') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></div>
            </Link>
            <Link 
              to="/about"
              className={`relative transition-all duration-300 text-lg font-medium group hover:-translate-y-1 ${
                isActive('/about') 
                  ? 'text-red-300' 
                  : 'text-gray-100 hover:text-red-300'
              }`}
            >
              <span className="relative z-10">About us</span>
              <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 transform transition-transform duration-300 ${
                isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></div>
            </Link>
            
            {/* Auth Links with Enhanced Styling */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-red-400/40">
              <Link 
                to="/auth"
                className="relative transition-all duration-300 text-lg font-medium group hover:-translate-y-1 text-yellow-400 hover:text-orange-400 px-3 py-1 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 backdrop-blur-sm border border-transparent hover:border-orange-400/30 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                <span className="relative z-10 font-semibold">Signin / Signup</span>
                <div className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transform transition-transform duration-300 ${
                  isActive('/auth') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-orange-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-gray-900/98 via-red-900/95 to-gray-900/98 backdrop-blur-xl border-t border-red-400/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/help"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/help') 
                    ? 'text-red-300 bg-red-900/50' 
                    : 'text-gray-100 hover:text-red-300 hover:bg-red-900/30'
                }`}
              >
                Ask for help
              </Link>
              <Link 
                to="/offer-help"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/offer-help') 
                    ? 'text-red-300 bg-red-900/50' 
                    : 'text-gray-100 hover:text-red-300 hover:bg-red-900/30'
                }`}
              >
                Offer help
              </Link>
              <Link 
                to="/report"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/report') 
                    ? 'text-red-300 bg-red-900/50' 
                    : 'text-gray-100 hover:text-red-300 hover:bg-red-900/30'
                }`}
              >
                Report Issue
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-red-300 bg-red-900/50' 
                    : 'text-gray-100 hover:text-red-300 hover:bg-red-900/30'
                }`}
              >
                About us
              </Link>
              
              {/* Mobile Auth Links */}
              <div className="border-t border-red-400/30 pt-4 mt-4 space-y-2">
                <Link 
                  to="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-yellow-400 hover:text-orange-400 hover:bg-yellow-500/20 transition-all duration-300 font-semibold"
                >
                  Login / Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
