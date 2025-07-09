const OfferHelp = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text mb-6">
            Offer Help
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Browse community requests and lend a helping hand. Your kindness can make a real difference in someone's day.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-green-200/50">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Help?</h2>
              <p className="text-gray-600 mb-4">
                Browse through help requests from your community and choose how you'd like to contribute. Every act of kindness counts!
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                View All Requests
              </button>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                Emergency Requests
              </button>
            </div>
          </div>
        </div>

        {/* Help Request Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Home & Garden</h3>
            <p className="text-gray-600">Help with household tasks, gardening, repairs, and home maintenance.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">12 active requests</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Transportation</h3>
            <p className="text-gray-600">Rides, moving assistance, car troubles, and transportation needs.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">8 active requests</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Errands & Shopping</h3>
            <p className="text-gray-600">Grocery shopping, package pickup, and various errands.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">15 active requests</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">👴</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Senior Support</h3>
            <p className="text-gray-600">Assistance for elderly community members with daily tasks.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">6 active requests</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🆘</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Help</h3>
            <p className="text-gray-600">Urgent assistance needed immediately.</p>
            <div className="mt-4 text-sm text-red-600 font-medium">3 active requests</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Services</h3>
            <p className="text-gray-600">Skills-based help like tutoring, tech support, or consulting.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">9 active requests</div>
          </div>
        </div>

        {/* Recent Help Requests */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-green-200/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Help Requests</h2>
          <div className="space-y-4">
            {/* Sample Help Request 1 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Help moving furniture</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Home & Garden</span>
              </div>
              <p className="text-gray-600 mb-4">Need help moving a couch and dining table to my new apartment. Should take about 2 hours.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>📍 Downtown Area</span> • <span>⏰ Tomorrow 2:00 PM</span>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300">
                  Offer Help
                </button>
              </div>
            </div>

            {/* Sample Help Request 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">Grocery shopping for elderly neighbor</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Errands & Shopping</span>
              </div>
              <p className="text-gray-600 mb-4">My elderly neighbor needs groceries but can't get out. I have a shopping list ready.</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>📍 Oak Street</span> • <span>⏰ This Weekend</span>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300">
                  Offer Help
                </button>
              </div>
            </div>

            {/* Sample Help Request 3 - Emergency */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200/50 hover:border-red-400/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">🚨 Car broke down, need ride to work</h3>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Emergency</span>
              </div>
              <p className="text-gray-600 mb-4">My car won't start and I need to get to work for an important meeting. Will pay for gas!</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span>📍 Main Street</span> • <span>⏰ In 1 hour</span>
                </div>
                <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300">
                  Offer Help
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              View All Help Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferHelp;
