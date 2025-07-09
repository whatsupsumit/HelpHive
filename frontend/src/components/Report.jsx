const Report = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text mb-6">
            Report Issue
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Help us maintain a safe and supportive community by reporting any issues, inappropriate behavior, or safety concerns.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-red-200/50">
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
                <div className="text-yellow-600 text-xl">⚠️</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Important Note</h4>
                  <p className="text-sm text-gray-700">
                    If this is an emergency or immediate safety concern, please contact local authorities (911) first. 
                    This form is for community-related issues and is not monitored 24/7.
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
                <div className="text-2xl font-bold">911</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">Crisis Hotline</div>
                <div className="text-lg font-semibold">988</div>
              </div>
              <div>
                <div className="font-semibold text-green-600">Community Support</div>
                <div className="text-lg font-semibold">311</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
