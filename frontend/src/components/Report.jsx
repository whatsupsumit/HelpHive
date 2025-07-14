import { useEffect, useState } from "react";
import useIssueStore from "../store/issueStore";

const Report = () => {
  const { addIssue, isAddingIssue, allIssues, getAllIssues } = useIssueStore();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    image: null,
  });
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        await getAllIssues();
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };
    fetchIssues();
  }, [getAllIssues]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addIssue(formData);
    if (success) {
      // Reset form data after successful submission
      setFormData({
        title: "",
        description: "",
        location: "",
        image: null,
      });
      // Refresh the issues list to show the new issue
      await getAllIssues();
    }
  };

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedIssue(null);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-4xl">📋</div>
            <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text">
              Report{" "}
              <span className="text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 bg-clip-text">
                Issue
              </span>
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Help us maintain a safe and supportive community by reporting any
            issues, inappropriate behavior, or safety concerns.
          </p>
        </div>

        {/* Community Issue Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-red-200/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Inappropriate Behavior
            </h3>
            <p className="text-gray-600">
              Harassment, abuse, or violations of community guidelines.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Safety Concerns
            </h3>
            <p className="text-gray-600">
              Unsafe conditions, suspicious activities, or security issues.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Spam & Fraud
            </h3>
            <p className="text-gray-600">
              Fake requests, scams, or misuse of the platform.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Communication Issues
            </h3>
            <p className="text-gray-600">
              Misunderstandings, conflicts, or communication breakdowns.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Technical Problems
            </h3>
            <p className="text-gray-600">
              App bugs, website issues, or technical difficulties.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-200/50 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Community Violations
            </h3>
            <p className="text-gray-600">
              Breaking community rules, policy violations, or misuse.
            </p>
          </div>
        </div>

        {/* All Issues Section */}
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-red-200/50">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">All Issues</h2>
          <div className="space-y-4">
            {allIssues && allIssues.length > 0 ? (
              allIssues.map((issue) => (
                <div
                  key={issue._id}
                  className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200/50 cursor-pointer hover:border-pink-400 hover:shadow-lg transition-all duration-300"
                  onClick={() => handleIssueClick(issue)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {issue.title}
                    </h3>
                    <div className="text-sm text-pink-600 font-medium">
                      Click to view details
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {issue.description.length > 100
                      ? `${issue.description.substring(0, 100)}...`
                      : issue.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <span>📍{issue.location}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📋</div>
                <p className="text-gray-500">No issues reported yet.</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50/95 via-pink-100/90 to-rose-100/95 backdrop-blur-xl rounded-3xl border border-red-300/50 shadow-2xl w-full relative overflow-hidden">
          {/* Animated background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-200/20 via-pink-200/15 to-rose-200/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/10 via-pink-100/10 to-red-100/10"></div>

          <div className="relative p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text mb-4">
                Submit Your Report
              </h2>
              <p className="text-gray-600">
                Please provide detailed information about the issue you want to
                report.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-4xl mx-auto"
            >
              <div>
                <label className="block text-transparent bg-gradient-to-r from-red-700 via-pink-700 to-rose-700 bg-clip-text font-semibold mb-2">
                  Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Brief description of the issue"
                  className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-red-50/80 to-pink-50/80 border border-red-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300 shadow-lg backdrop-blur-sm"
                  required
                  disabled={isAddingIssue}
                />
              </div>

              <div>
                <label className="block text-transparent bg-gradient-to-r from-red-700 via-pink-700 to-rose-700 bg-clip-text font-semibold mb-2">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Please provide as much detail as possible about the issue..."
                  className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-red-50/80 to-pink-50/80 border border-red-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300 resize-none shadow-lg backdrop-blur-sm"
                  required
                  disabled={isAddingIssue}
                />
              </div>

              <div>
                <label className="block text-transparent bg-gradient-to-r from-red-700 via-pink-700 to-rose-700 bg-clip-text font-semibold mb-2">
                  Location <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Where did this issue occur?"
                  className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-red-50/80 to-pink-50/80 border border-red-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300 shadow-lg backdrop-blur-sm"
                  required
                  disabled={isAddingIssue}
                />
              </div>

              <div>
                <label className="block text-transparent bg-gradient-to-r from-red-700 via-pink-700 to-rose-700 bg-clip-text font-semibold mb-2">
                  Image (optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    accept="image/*"
                    className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-red-50/80 to-pink-50/80 border border-red-300/60 rounded-xl text-gray-800 focus:border-red-500 focus:ring-2 focus:ring-red-400/30 focus:outline-none transition-all duration-300 shadow-lg backdrop-blur-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 file:cursor-pointer"
                    disabled={isAddingIssue}
                  />
                  {formData.image && (
                    <div className="mt-2 text-sm text-gray-600">
                      Selected: {formData.image.name}
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: JPG, PNG, GIF (max 5MB)
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 border border-yellow-300/50">
                <div className="flex items-start space-x-3">
                  <div className="text-yellow-600 text-xl">⚠</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Important Note
                    </h4>
                    <p className="text-sm text-gray-700">
                      If this is an emergency or immediate safety concern,
                      please contact local authorities first: Police (100), Fire
                      (101), or Medical Emergency (102). This form is for
                      community-related issues and is not monitored 24/7.
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
                  disabled={isAddingIssue}
                  className={`flex-1 px-6 py-3 font-semibold rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
                    isAddingIssue
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 hover:scale-105 cursor-pointer"
                  } text-white`}
                >
                  {isAddingIssue ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Report</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📞 Need Immediate Help?
            </h3>
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
                <div className="font-semibold text-orange-600">
                  Fire & Rescue
                </div>
                <div className="text-lg font-semibold">101</div>
                <div className="text-xs text-gray-500">Fire Brigade</div>
              </div>
              <div>
                <div className="font-semibold text-blue-600">
                  Medical Emergency
                </div>
                <div className="text-lg font-semibold">102</div>
                <div className="text-xs text-gray-500">Ambulance</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-semibold text-purple-600">
                    Women Helpline
                  </div>
                  <div className="text-lg font-semibold">181</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">
                    Child Helpline
                  </div>
                  <div className="text-lg font-semibold">1098</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Issue Details Dialog */}
      {isDialogOpen && selectedIssue && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={closeDialog}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-white/95 via-pink-50/90 to-rose-100/95 backdrop-blur-xl rounded-3xl border border-pink-300/50 shadow-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] flex flex-col relative overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
              {/* Animated background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-rose-200/15 to-red-200/20"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/10 via-pink-100/10 to-red-100/10"></div>

              {/* Header */}
              <div className="relative p-4 sm:p-6 border-b border-pink-300/40 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl sm:text-3xl">📋</div>
                    <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text">
                      Issue Details
                    </h2>
                  </div>
                  <button
                    onClick={closeDialog}
                    className="text-gray-600 hover:text-red-700 text-xl sm:text-2xl hover:rotate-90 transition-all duration-300 p-1"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-pink-100/50 scrollbar-thumb-pink-400/70 hover:scrollbar-thumb-pink-500/80">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                      {selectedIssue.title}
                    </h3>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                      Description:
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {selectedIssue.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                      Location:
                    </h4>
                    <p className="text-gray-600 flex items-center text-sm sm:text-base">
                      <span className="mr-2">📍</span>
                      {selectedIssue.location}
                    </p>
                  </div>

                  {selectedIssue.image && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3 text-sm sm:text-base">
                        Attached Image:
                      </h4>
                      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                        <img
                          src={selectedIssue.image}
                          alt="Issue"
                          className="w-full h-auto max-h-64 sm:max-h-96 object-cover"
                        />
                      </div>
                    </div>
                  )}

                  {selectedIssue.createdAt && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                        Reported:
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">
                        {new Date(selectedIssue.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </p>
                    </div>
                  )}

                  {selectedIssue.userId && selectedIssue.userId.name && (
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">
                        Reported by:
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {selectedIssue.userId.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="relative p-4 sm:p-6 border-t border-pink-300/40 flex-shrink-0">
                <button
                  onClick={closeDialog}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Report;
