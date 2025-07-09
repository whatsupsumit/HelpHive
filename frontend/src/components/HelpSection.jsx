import { useNavigate } from 'react-router-dom';

const HelpSection = () => {
  const navigate = useNavigate();

  const handleAskForHelp = () => {
    navigate('/help');
  };

  const handleViewCommunityRequests = () => {
    navigate('/offer-help');
  };

  return (
    <section className="relative py-20 px-6 sm:px-8 lg:px-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Path to 
            <span className="text-transparent bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text"> Community</span>
          </h2>
          <div className="text-5xl mb-6">🤝</div>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join our community where neighbours help neighbours. Whether you need support or want to lend a helping hand, we're here to connect you.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Need Support Card */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:scale-[1.02] hover:-translate-y-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🙋‍♀️</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Need Support?
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Connect with neighbors ready to lend a helping hand. Post your request and get support from your community within minutes. From moving help to grocery runs, we've got you covered!
              </p>
              <button
                onClick={handleAskForHelp}
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 hover:from-yellow-500 hover:via-orange-500 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg text-lg relative overflow-hidden group hover:scale-105 hover:shadow-yellow-400/30 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>🙋‍♀️</span>
                  <span>Ask for Help</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Want to Help Card */}
          <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:scale-[1.02] hover:-translate-y-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Want to Help?
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Make a real difference in your community! Browse help requests from neighbors and offer your unique skills and support. Every act of kindness creates a ripple effect of positivity.
              </p>
              <button
                onClick={handleViewCommunityRequests}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg text-lg relative overflow-hidden group hover:scale-105 hover:shadow-green-400/30 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>🤝</span>
                  <span>View Community Requests</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-green-200/30 rounded-full blur-lg animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default HelpSection;
