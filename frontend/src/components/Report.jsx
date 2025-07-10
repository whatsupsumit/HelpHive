const Report = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text mb-6">
            Report Issue
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Help us maintain a safe and supportive community by reporting any issues, inappropriate behavior, or safety concerns.
          </p>
        </div>

        {/* Community Issue Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-red-200/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Inappropriate Behavior</h3>
            <p className="text-gray-600">Harassment, abuse, or violations of community guidelines.</p>
            <div className="mt-4 text-sm text-red-600 font-medium">7 reported this week</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety Concerns</h3>
            <p className="text-gray-600">Unsafe conditions, suspicious activities, or security issues.</p>
            <div className="mt-4 text-sm text-orange-600 font-medium">5 reported this week</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Spam & Fraud</h3>
            <p className="text-gray-600">Fake requests, scams, or misuse of the platform.</p>
            <div className="mt-4 text-sm text-purple-600 font-medium">3 reported this week</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Communication Issues</h3>
            <p className="text-gray-600">Misunderstandings, conflicts, or communication breakdowns.</p>
            <div className="mt-4 text-sm text-blue-600 font-medium">4 reported this week</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Problems</h3>
            <p className="text-gray-600">App bugs, website issues, or technical difficulties.</p>
            <div className="mt-4 text-sm text-green-600 font-medium">2 reported this week</div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-200/50 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Violations</h3>
            <p className="text-gray-600">Breaking community rules, policy violations, or misuse.</p>
            <div className="mt-4 text-sm text-yellow-600 font-medium">6 reported this week</div>
          </div>
        </div>

        {/* Recent Issues Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-red-200/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Recently Resolved Issues</h2>
          <div className="space-y-4">
            {/* Sample Resolved Issue 1 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">✅ Suspicious activity in downtown area</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Resolved</span>
              </div>
              <p className="text-gray-600 mb-4">Community member reported suspicious individuals. Local authorities investigated and increased patrols.</p>
              <div className="text-sm text-gray-500">
                <span>📍 Downtown Area</span> • <span>🕒 Resolved 2 days ago</span>
              </div>
            </div>

            {/* Sample Resolved Issue 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">✅ Technical issue with help requests</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Fixed</span>
              </div>
              <p className="text-gray-600 mb-4">Users were unable to submit help requests. Our technical team identified and fixed the bug.</p>
              <div className="text-sm text-gray-500">
                <span>🔧 Platform Issue</span> • <span>🕒 Resolved 1 week ago</span>
              </div>
            </div>

            {/* Sample Resolved Issue 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/50">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-800">✅ Inappropriate user behavior</h3>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Action Taken</span>
              </div>
              <p className="text-gray-600 mb-4">User reported harassment in messages. Account was reviewed and appropriate action was taken.</p>
              <div className="text-sm text-gray-500">
                <span>👤 User Issue</span> • <span>🕒 Resolved 3 days ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-red-200/50 max-w-4xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Issue Type <span className="text-red-600">*</span>
              </label>
              <select className="w-full px-4 py-3 bg-white/80 border border-red-300/60 rounded-xl text-gray-800 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300">
                <option value="">Select an issue type</option>
                <option value="inappropriate-behavior">Inappropriate Behavior</option>
                <option value="safety-concern">Safety Concern</option>
                <option value="spam">Spam or Fraud</option>
                <option value="harassment">Harassment</option>
                <option value="technical-issue">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Brief description of the issue"
                className="w-full px-4 py-3 bg-white/80 border border-red-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Detailed Description <span className="text-red-600">*</span>
              </label>
              <textarea
                rows="6"
                placeholder="Please provide as much detail as possible about the issue, including when and where it occurred..."
                className="w-full px-4 py-3 bg-white/80 border border-red-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300 resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Location (if applicable)
              </label>
              <input
                type="text"
                placeholder="Where did this issue occur?"
                className="w-full px-4 py-3 bg-white/80 border border-red-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Urgency Level
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'low', label: 'Low', color: 'from-green-400 to-emerald-400', desc: 'Non-urgent matter' },
                  { value: 'medium', label: 'Medium', color: 'from-yellow-400 to-orange-400', desc: 'Needs attention' },
                  { value: 'high', label: 'High', color: 'from-red-400 to-pink-400', desc: 'Urgent/Safety concern' }
                ].map((urgency) => (
                  <label key={urgency.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="urgency"
                      value={urgency.value}
                      className="sr-only"
                    />
                    <div className="border-2 border-gray-300 rounded-xl p-4 text-center transition-all duration-300 hover:border-red-400 hover:bg-red-50/50">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${urgency.color} mx-auto mb-2`}></div>
                      <div className="font-semibold text-gray-800">{urgency.label}</div>
                      <div className="text-sm text-gray-600">{urgency.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 border border-yellow-300/50">
              <div className="flex items-start space-x-3">
                <div className="text-yellow-600 text-xl">⚠</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Important Note</h4>
                  <p className="text-sm text-gray-700">
                    If this is an emergency or immediate safety concern, please contact local authorities first: 
                    Police (100), Fire (101), or Medical Emergency (102). This form is for community-related issues and is not monitored 24/7.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="button"
                className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">📞 Need Immediate Help?</h3>
            <p className="text-sm text-gray-600 mb-4">
              For emergencies, contact your local authorities immediately.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold text-red-600">Emergency</div>
                <div className="text-2xl font-bold">100</div>
                <div className="text-xs text-gray-500">Police</div>
              </div>
              <div>
                <div className="font-semibold text-orange-600">Fire & Rescue</div>
                <div className="text-lg font-semibold">101</div>
                <div className="text-xs text-gray-500">Fire Brigade</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Medical Emergency</div>
                <div className="text-lg font-semibold">102</div>
                <div className="text-xs text-gray-500">Ambulance</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-semibold text-purple-600">Women Helpline</div>
                  <div className="text-lg font-semibold">181</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">Child Helpline</div>
                  <div className="text-lg font-semibold">1098</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;