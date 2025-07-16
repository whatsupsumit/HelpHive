import { useState } from "react";

const SliderAuthForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Login submitted:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log("Signup submitted:", formData);
    }
    // Add your authentication logic here
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Clear form when switching modes
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text hover:from-yellow-300 hover:via-orange-300 hover:to-yellow-400 transition-all duration-300 text-lg font-medium px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500/20 hover:to-orange-500/20 backdrop-blur-sm border border-transparent hover:border-orange-400/30 hover:scale-105 hover:-translate-y-1"
        aria-label="Open login and signup form"
      >
        Login / Signup
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          {/* Modal Content */}
          <div
            className={`relative w-full max-w-md mx-4 bg-gradient-to-br from-gray-900/95 via-red-900/90 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-red-400/30 transform transition-all duration-500 ease-out ${
              isOpen
                ? "scale-100 opacity-100 translate-y-0"
                : "scale-95 opacity-0 translate-y-4"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 z-10"
              aria-label="Close form"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center pt-8 pb-6 px-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {isLogin ? "Welcome Back" : "Join HelpHive"}
              </h2>
              <p className="text-gray-300">
                {isLogin
                  ? "Sign in to your account"
                  : "Create your account to get started"}
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex mx-8 mb-6 bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  isLogin
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                  !isLogin
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Signup
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8">
              <div className="space-y-4">
                {/* Name Field - Only for Signup */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isLogin
                      ? "max-h-0 opacity-0 overflow-hidden"
                      : "max-h-20 opacity-100"
                  }`}
                >
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-200"
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-200"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Confirm Password Field - Only for Signup */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isLogin
                      ? "max-h-0 opacity-0 overflow-hidden"
                      : "max-h-20 opacity-100"
                  }`}
                >
                  {!isLogin && (
                    <div>
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-200"
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-lg hover:shadow-xl"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>

              {/* Alternative Action */}
              <div className="text-center mt-4">
                <span className="text-gray-400 text-sm">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={toggleMode}
                  className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors duration-200"
                >
                  {isLogin ? "Sign up here" : "Sign in here"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderAuthForm;
