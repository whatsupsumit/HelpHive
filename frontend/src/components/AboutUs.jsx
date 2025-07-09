import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="relative">
      {/* Hero Section - Above the fold */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/abouhome.png')`,
              filter: 'brightness(0.7) contrast(1.2) saturate(1.4)'
            }}
          />
          
          {/* Vibrant Overlays - Matching Home Page */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-orange-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-yellow-500/15 to-red-500/15" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {/* Logo-style heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white drop-shadow-2xl filter brightness-125">About </span>
              <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-extrabold drop-shadow-2xl filter brightness-110">
                HelpHive
              </span>
            </h1>
            
            {/* Main message with creative styling */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-center leading-relaxed tracking-wide drop-shadow-2xl">
                <span className="text-orange-200 font-medium">At HelpHive, we believe that </span>
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-extrabold">
                  helping is healing
                </span>
                <span className="text-orange-200 font-medium">.</span>
              </p>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-50 font-light tracking-wide drop-shadow-xl leading-relaxed">
                We're building a trusted community platform that connects neighbors and fosters{' '}
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                  genuine human connections
                </span>
              </p>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-100 font-light tracking-wide drop-shadow-lg leading-relaxed">
                Whether you need assistance or want to help others, HelpHive makes community support{' '}
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-semibold">
                  accessible, dignified, and meaningful
                </span>
              </p>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-bounce"></div>
            <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-400 rounded-full opacity-40 animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Scrollable Content Sections */}
      <div className="relative">
        
        {/* Mission & Vision Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-red-500/20" />
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl animate-bounce"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                Our <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text">Foundation</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Built on principles of trust, community, and{' '}
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                  meaningful connection
                </span>
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="group relative bg-gradient-to-br from-black/40 via-gray-900/60 to-black/40 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-10 md:p-12 hover:border-yellow-400/60 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/20">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">M</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Our Mission</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    To create a trusted, inclusive, and hyperlocal support network where every individual can offer or receive help with{' '}
                    <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                      dignity, respect, and ease
                    </span>.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group relative bg-gradient-to-br from-black/40 via-gray-900/60 to-black/40 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-10 md:p-12 hover:border-orange-400/60 transition-all duration-500 shadow-2xl hover:shadow-orange-400/20">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-3xl"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">V</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Our Vision</h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    A world where communities are strengthened through acts of kindness, where helping each other is{' '}
                    <span className="text-transparent bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text font-semibold">
                      natural, accessible, and celebrated
                    </span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Vibrant Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/15 via-orange-500/15 to-red-500/15" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                What We <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text">Do</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                HelpHive connects kind-hearted individuals through{' '}
                <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                  modern technology and community-first design
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Peer-to-Peer Support",
                  description: "Direct connections between community members for mutual aid and assistance.",
                  gradient: "from-blue-400 to-cyan-400",
                  iconBg: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Local Discovery",
                  description: "Find help and helpers in your immediate neighborhood with location-based matching.",
                  gradient: "from-green-400 to-emerald-400",
                  iconBg: "from-green-500 to-emerald-500"
                },
                {
                  title: "Community Building",
                  description: "Foster relationships through discussions, resource sharing, and local initiatives.",
                  gradient: "from-purple-400 to-violet-400",
                  iconBg: "from-purple-500 to-violet-500"
                },
                {
                  title: "Safe & Secure",
                  description: "Privacy-first design with optional verification for peace of mind.",
                  gradient: "from-yellow-400 to-orange-400",
                  iconBg: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 shadow-2xl hover:scale-105"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.iconBg} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 drop-shadow-lg">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed font-light text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indian Values Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Warm Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="relative bg-black/30 backdrop-blur-xl border border-orange-400/30 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-3xl"></div>
              <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Rooted in <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text">Indian Values</span>
                </h2>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                  Our platform draws inspiration from the rich tradition of Indian neighborhoods, where{' '}
                  <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                    community support has always been fundamental
                  </span>. 
                  From sharing meals during festivals to helping during difficult times, we're digitizing this beautiful aspect of Indian culture for the modern world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Story Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 drop-shadow-2xl">
                  Our <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text">Story</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    HelpHive began as a simple observation: in our increasingly digital world, we were losing the{' '}
                    <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                      natural connections that make communities strong
                    </span>.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    What started as a vision to make community support more accessible has grown into a platform where{' '}
                    <span className="text-transparent bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text font-semibold">
                      empathy meets action, where technology serves humanity
                    </span>.
                  </p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                    Today, we're building bridges between neighbors, fostering a culture of mutual aid, and proving that{' '}
                    <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text font-semibold">
                      small acts of kindness can create profound change
                    </span>.
                  </p>
                </div>
              </div>
              
              <div className="relative bg-black/40 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">
                    Innovation Meets <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text">Compassion</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base font-light">
                    We combine cutting-edge technology with timeless human values to create meaningful connections and lasting positive impact in communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA Section */}
        <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
          {/* Grand Finale Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/25 via-orange-500/25 to-red-500/25" />
          
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-400/15 rounded-full blur-3xl animate-ping"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center relative bg-black/30 backdrop-blur-2xl border border-yellow-400/30 rounded-3xl p-12 md:p-16 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-red-400/10 rounded-3xl"></div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                  Join Our <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text">Community</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                  Be part of a movement that values{' '}
                  <span className="text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text font-semibold">
                    humanity over hierarchy
                  </span>. Whether you want to give, receive, or simply belong—HelpHive is your space.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <Link 
                    to="/help"
                    className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-yellow-400/25 hover:scale-105 text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                    <div className="relative flex items-center space-x-2">
                      <span className="text-lg">🚀</span>
                      <span>Get Started Today</span>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/offer-help"
                    className="group relative bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl border-2 border-white/30 hover:border-white/50 backdrop-blur-md hover:scale-105 text-base"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full"></div>
                    <div className="relative flex items-center space-x-2">
                      <span className="text-lg">💡</span>
                      <span>Learn More</span>
                    </div>
                  </Link>
                </div>
                
                <p className="text-lg md:text-xl font-semibold drop-shadow-lg">
                  <span className="text-transparent bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text">
                    Let's build a kinder world, one connection at a time.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default AboutUs;
