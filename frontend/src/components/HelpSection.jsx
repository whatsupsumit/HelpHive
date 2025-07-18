import { useNavigate } from "react-router-dom";

const HelpSection = () => {
  const navigate = useNavigate();

  const handleAskForHelp = () => {
    navigate("/help");
    window.scrollTo(0, 0);
  };

  const handleViewCommunityRequests = () => {
    navigate("/offer-help");
    window.scrollTo(0, 0);
  };

  const handleReportIssue = () => {
    navigate("/report");
    window.scrollTo(0, 0);
  };

  return (
    <section
      className="relative py-20 px-6 sm:px-8 lg:px-12"
      style={{ background: "#FFF9ED" }}
    >
      {/* Foundation theme orange/yellow overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-300 to-yellow-200" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/70 via-orange-200/70 to-orange-300/70" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl shadow-xl mb-8">
            <span className="text-3xl">🤝</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Choose your path to</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text font-extrabold">
              community
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Whether you need support or want to make a difference
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Need Support Card */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50/80 backdrop-blur-lg rounded-3xl p-8 border border-blue-100/40 hover:bg-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-blue-100/40">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🙋‍♀️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Need Support?
                </h3>
                <p className="text-blue-600">Get help from your community</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700">
                    Post your request quickly
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700">
                    Connect with helpful neighbors
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700">
                    From errands to moving help
                  </span>
                </div>
              </div>

              <button
                onClick={handleAskForHelp}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-500/40 group-hover:scale-105 cursor-pointer"
              >
                Ask for Help
              </button>
            </div>
          </div>

          {/* Want to Help Card */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-orange-50 via-white to-red-50/80 backdrop-blur-lg rounded-3xl p-8 border border-orange-100/40 hover:bg-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-orange-100/40">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Want to Help?
                </h3>
                <p className="text-orange-600">
                  Make a difference in your community
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">
                    Browse community requests
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">
                    Offer your unique skills
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700">Create positive impact</span>
                </div>
              </div>

              <button
                onClick={handleViewCommunityRequests}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-orange-500/40 group-hover:scale-105 cursor-pointer"
              >
                View Community Requests
              </button>
            </div>
          </div>

          {/* Report Issue Card */}
          <div className="group relative">
            <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-100/40 hover:bg-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-purple-100/40">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Report Issue?
                </h3>
                <p className="text-purple-600">Keep our community safe</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Report safety concerns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">
                    Flag inappropriate content
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Help maintain trust</span>
                </div>
              </div>

              <button
                onClick={handleReportIssue}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/40 group-hover:scale-105 cursor-pointer"
              >
                Report an Issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
