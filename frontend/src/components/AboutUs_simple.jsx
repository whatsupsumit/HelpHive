const AboutUs = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 sm:px-8 lg:px-12">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 via-amber-50 to-orange-100" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 bg-clip-text text-transparent mb-8">
            About HelpHive
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            At HelpHive, we believe that <span className="font-semibold text-orange-600">helping is healing</span>. 
            Rooted in the spirit of unity and compassion, HelpHive is a community-driven platform where people come together to support each other in times of need.
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-6">
            Whether it's offering food, clothes, books, a ride, or just a listening ear—HelpHive is the digital home for real-world kindness.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-orange-200/50">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🌼</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            To create a trusted, inclusive, and hyperlocal support network where every individual can offer or receive help with dignity, respect, and ease.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="bg-gradient-to-r from-white/60 to-orange-50/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-yellow-200/50">
          <div className="flex items-center mb-8">
            <div className="text-4xl mr-4">🛠️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What We Do</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            HelpHive connects kind-hearted individuals through:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Peer-to-peer help</h3>
                  <p className="text-gray-600">Offer or seek help in categories like food, clothing, study materials, companionship, and more.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Localized discovery</h3>
                  <p className="text-gray-600">Find people offering help near you with a map-first experience.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Community chats</h3>
                  <p className="text-gray-600">Engage in discussions, share resources, and organize local initiatives.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔐</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Safe & simple access</h3>
                  <p className="text-gray-600">A user-friendly experience with privacy-first design and optional verification.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Indian Neighborhoods Section */}
        <div className="bg-gradient-to-l from-white/60 to-yellow-50/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-orange-200/50">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">🇮🇳</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Indian Neighborhoods?</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Our roots lie in the vibrant spirit of Indian communities, where neighbors have always stood by each other—through festivals, hardships, or everyday life. HelpHive is a digital extension of this traditional support system, designed for the modern age.
          </p>
        </div>

        {/* How It Started Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-12 shadow-xl border border-yellow-200/50">
          <div className="flex items-center mb-6">
            <div className="text-4xl mr-4">💡</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Started</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            HelpHive began as a vision to make community support more accessible and visible. What started as a simple idea is now a growing hive of hope, where empathy meets action.
          </p>
        </div>

        {/* Join the Hive Section */}
        <div className="text-center bg-gradient-to-r from-orange-100/80 to-yellow-100/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200/50">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join the Hive</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Be part of a platform that values humanity over hierarchy. Whether you want to give, receive, or just belong—HelpHive is your space.
          </p>
          
          <div className="text-2xl text-orange-600 font-semibold">
            🧡 Let's build a kinder world, one good deed at a time.
          </div>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
