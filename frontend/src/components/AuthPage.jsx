import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/userAuth';

const AuthPage = () => {
  const { registerUser, loginUser, authUser} = useAuthStore();
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle navigation when user is authenticated
  useEffect(() => {
    if (authUser) {
      navigate('/');
    }
  }, [authUser, navigate]);

  if (authUser) {
    return null;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await loginUser({ email: formData.email, password: formData.password });
      navigate('/');
    } else {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      navigate('/');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Clear form when switching modes
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 py-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/helphome.png" 
          alt="HelpHive Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/85 to-black/90"></div>
        {/* Colored overlay for theme consistency */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-orange-900/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-yellow-500/15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Branding & Info */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1 px-4">
            {/* Logo Section */}
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="relative">
                <img 
                  src="/hivelogo.png" 
                  alt="HelpHive Logo" 
                  className="w-16 h-16 lg:w-20 lg:h-20 drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"></div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
                Help<span className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text">
                  Hive
                </span>
              </h1>
            </div>

            {/* Welcome Message */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                {isLogin ? (
                  <>
                    <span className="block">Welcome Back to</span>
                    <span className="block text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text">
                      Community Help
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">Join Our Amazing</span>
                    <span className="block text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text">
                      Community Help
                    </span>
                  </>
                )}
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
                {isLogin 
                  ? 'Sign in to continue helping others and getting the support you need in our amazing community.'
                  : 'Connect with neighbors, share resources, and build a stronger community together. Your journey starts here.'
                }
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
                <span className="text-lg lg:text-xl">Connect with local community members</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                <span className="text-lg lg:text-xl">Offer and receive help when you need it</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full"></div>
                <span className="text-lg lg:text-xl">Build lasting relationships and trust</span>
              </div>
            </div>

            {/* Back to Home */}
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group text-lg"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Right Side - Auth Form */}
          <div className="order-1 lg:order-2 px-4">
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 p-6 lg:p-8 max-w-md mx-auto overflow-hidden">
              
              {/* Form background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500/20 via-orange-500/10 to-yellow-500/20 rounded-2xl"></div>
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Form Header */}
              <div className="relative z-10 text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </h3>
                <p className="text-gray-200 text-sm drop-shadow-md">
                  {isLogin ? 'Welcome back! Please sign in to continue.' : 'Fill in your information to get started.'}
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="relative z-10 flex bg-black/30 backdrop-blur-sm rounded-lg p-1 mb-6 border border-white/10">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    isLogin
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    !isLogin
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                
                {/* Name Field - Only for Signup */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isLogin ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
                  }`}
                >
                  {!isLogin && (
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 drop-shadow-md">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none transition-all duration-200 hover:bg-white/15 shadow-lg"
                          placeholder="Enter your full name"
                          required={!isLogin}
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 drop-shadow-md">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none transition-all duration-200 hover:bg-white/15 shadow-lg"
                      placeholder="Enter your email address"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-200 drop-shadow-md">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 focus:outline-none transition-all duration-200 hover:bg-white/15 shadow-lg"
                      placeholder="Enter your password"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 relative overflow-hidden bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400/50 shadow-2xl hover:shadow-orange-500/25 group"
                >
                  <span className="relative z-10">
                    {isLogin ? 'Sign In to HelpHive' : 'Join HelpHive Community'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute inset-0 bg-white/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                </button>

                {/* Alternative Action */}
                <div className="text-center pt-3">
                  <span className="text-gray-200 text-sm drop-shadow-md">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                  </span>
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 bg-clip-text hover:from-orange-300 hover:via-yellow-300 hover:to-pink-300 font-medium transition-all duration-200 hover:scale-105 drop-shadow-lg text-sm"
                  >
                    {isLogin ? 'Create an account' : 'Sign in instead'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
