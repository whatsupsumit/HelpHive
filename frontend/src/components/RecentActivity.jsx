const RecentActivity = () => {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recent Community Activity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest requests and community reports
          </p>
        </div>

        {/* Two Boards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recently Added Requests Board */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">📝</span>
                Recently Added Requests
              </h3>
              <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                Live
              </span>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {/* Request Items */}
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      Help with grocery shopping
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Need someone to help pick up groceries for elderly
                      neighbor. Light items only.
                    </p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 p-1 rounded-lg hover:bg-blue-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      Moving assistance needed
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Looking for 2-3 people to help move furniture this
                      weekend. Pizza provided!
                    </p>
                    <span className="text-xs text-gray-500">4 hours ago</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 p-1 rounded-lg hover:bg-blue-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      Dog walking service
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Need someone to walk my golden retriever while I'm
                      recovering from surgery.
                    </p>
                    <span className="text-xs text-gray-500">6 hours ago</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 p-1 rounded-lg hover:bg-blue-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      Tutoring for math
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      High school student needs help with calculus homework.
                      Online sessions preferred.
                    </p>
                    <span className="text-xs text-gray-500">8 hours ago</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 p-1 rounded-lg hover:bg-blue-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      Garden maintenance
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Looking for someone to help with weeding and basic garden
                      upkeep.
                    </p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                  <button className="text-blue-500 hover:text-blue-700 p-1 rounded-lg hover:bg-blue-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Reported Issues Board */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-100/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">🚨</span>
                Recently Reported Issues
              </h3>
              <span className="text-sm text-gray-500 bg-red-100 px-3 py-1 rounded-full">
                Monitored
              </span>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {/* Issue Items */}
              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                      Suspicious activity reported
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Community member reported unusual activity in the park
                      area after hours.
                    </p>
                    <span className="text-xs text-gray-500">1 hour ago</span>
                  </div>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                      Inappropriate content flag
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      User reported inappropriate language in community chat.
                      Under review.
                    </p>
                    <span className="text-xs text-gray-500">3 hours ago</span>
                  </div>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                      Safety concern raised
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Report about broken streetlight creating unsafe walking
                      conditions.
                    </p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                      Spam account detected
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Multiple reports of spam messages from new user account.
                      Being investigated.
                    </p>
                    <span className="text-xs text-gray-500">7 hours ago</span>
                  </div>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                      Platform misuse report
                    </h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      User reported platform being used for commercial purposes
                      against ToS.
                    </p>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                  <button className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
