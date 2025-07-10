import { useNavigate } from 'react-router-dom';

const HeroSection = ({ onLearnMore }) => {
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    navigate('/help');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay - starts below navbar */}
      <div className="absolute inset-0 top-20 z-0">
        <div 
          className="w-full h-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url('/helphelp.png')`,
            filter: 'brightness(0.85) contrast(1.15) saturate(1.3)'
          }}
        />
        {/* Dynamic colorful overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-orange-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
        {/* Vibrant accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Main Website Quote - Simplified */}
          <div className="max-w-3xl mx-auto">
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-center leading-relaxed tracking-wide drop-shadow-2xl">
                <span className="text-orange-200 drop-shadow-2xl font-medium">Real change begins with</span>
                <br />
                <span className="text-white font-bold drop-shadow-2xl filter brightness-125">simple acts of </span>
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-extrabold drop-shadow-2xl filter brightness-110">
                  help
                </span>
                <span className="text-orange-200 drop-shadow-2xl font-medium">.</span>
                <br />
                <span className="text-orange-200 drop-shadow-2xl font-medium">Join the </span>
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-extrabold drop-shadow-2xl filter brightness-110">
                  hive
                </span>
                <span className="text-orange-200 drop-shadow-2xl font-medium">.</span>
              </p>
            </div>
          </div>

          {/* Enhanced Subheadline */}
          <div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-50 font-light tracking-wide drop-shadow-xl">
              Where every act of kindness creates a ripple of{' '}
              <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">positive change</span>
            </p>
          </div>

          {/* Simple Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12 max-w-md mx-auto">
            {/* Join Community Button */}
            <button 
              onClick={handleJoinCommunity}
              className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg border border-white/20 backdrop-blur-sm hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              <div className="relative flex items-center space-x-2">
                <span className="text-lg">🏠</span>
                <span className="text-sm font-bold tracking-wide">Join Community</span>
              </div>
            </button>

            {/* Learn More Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                onLearnMore();
              }}
              className="group relative bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg border border-white/30 backdrop-blur-md hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
              <div className="relative flex items-center space-x-2">
                <span className="text-lg">💡</span>
                <span className="text-sm font-bold tracking-wide">Learn More</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
