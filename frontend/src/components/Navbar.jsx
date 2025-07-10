import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

              {/* Profile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border-2 border-red-400/30 hover:border-red-400/60 hover:scale-110 shadow-lg hover:shadow-red-500/25"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-gradient-to-br from-gray-800/95 via-gray-900/98 to-black/95 rounded-xl shadow-2xl border border-red-400/40 backdrop-blur-xl z-50 transform origin-top-right transition-all duration-300 ease-out animate-in slide-in-from-top-2 fade-in">
                    {/* Decorative arrow */}
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-gradient-to-br from-gray-800 to-gray-900 transform rotate-45 border-l border-t border-red-400/40"></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 via-orange-500/10 to-yellow-500/20 blur-sm -z-10"></div>
                    
                    <div className="py-3 relative">
                      {/* Profile header */}
                      <div className="px-4 py-2 border-b border-red-400/20 mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">Welcome</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/dashboard"
                        onClick={() => setIsProfileDropdownOpen(false)}
                        className="flex items-center px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-orange-500/10 transition-all duration-300 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/5 transition-all duration-300"></div>
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                        <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-400 transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="relative z-10 font-medium">View Profile</span>
                        <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      
                      <button
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          // Add logout logic here
                          console.log('Logout clicked');
                        }}
                        className="flex items-center w-full px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/10 transition-all duration-300 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-pink-500/0 group-hover:from-red-500/10 group-hover:to-pink-500/5 transition-all duration-300"></div>
                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                        <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-red-400 transform group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="relative z-10 font-medium">Logout</span>
                        <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-red-400 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
                
                {/* Mobile Profile Links */}
                <Link 
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-red-500/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  View Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Add logout logic here
                    console.log('Logout clicked');
                  }}
                  className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-red-500/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
