import { useEffect } from "react";
import useHelpStore from "../store/helpStore";
import useIssueStore from "../store/issueStore";
import { Link } from "react-router-dom";

const RecentActivity = () => {
  const { limitedHelps, getLimitedHelps } = useHelpStore();
  const { limitedIssues, getLimitedIssues } = useIssueStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getLimitedHelps();
        await getLimitedIssues();
      } catch (error) {
        console.error("Error fetching recent activity:", error);
      }
    };
    fetchData();
  }, [getLimitedHelps, getLimitedIssues]);

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 relative" style={{ background: "#FFF9ED" }}>
      {/* Foundation theme orange/yellow overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-300 to-yellow-200" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/70 via-orange-200/70 to-orange-300/70" />
      <div className="relative z-10 max-w-6xl mx-auto">
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
          <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100/40">
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
              {limitedHelps && limitedHelps.length > 0 ? (
                limitedHelps.map((help) => (
                  <div
                    key={help._id}
                    className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                          {help.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {help.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>
                            {new Date(help.createdAt).toLocaleDateString()}
                          </span>
                          {help.location && (
                            <>
                              <span>•</span>
                              <span>📍 {help.location}</span>
                            </>
                          )}
                          {help.isEmergency && (
                            <>
                              <span>•</span>
                              <span className="text-red-600 font-medium">
                                🚨 Emergency
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <Link
                        to={"/offer-help"}
                        className="text-blue-500 hover:text-blue-700 p-1 rounded-lg hover:bg-blue-50 transition-all"
                      >
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
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent requests available</p>
                </div>
              )}
            </div>
          </div>

          {/* Recently Reported Issues Board */}
          <div className="bg-gradient-to-br from-pink-50 via-white to-red-50/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-red-100/40">
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
              {limitedIssues && limitedIssues.length > 0 ? (
                limitedIssues.map((issue) => (
                  <div
                    key={issue._id}
                    className="bg-white/80 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                          {issue.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {issue.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>
                            {new Date(issue.createdAt).toLocaleDateString()}
                          </span>
                          {issue.location && (
                            <>
                              <span>•</span>
                              <span>📍 {issue.location}</span>
                            </>
                          )}
                          {issue.severity && (
                            <>
                              <span>•</span>
                              <span
                                className={`font-medium ${
                                  issue.severity === "critical"
                                    ? "text-red-600"
                                    : issue.severity === "high"
                                    ? "text-orange-600"
                                    : issue.severity === "medium"
                                    ? "text-yellow-600"
                                    : "text-green-600"
                                }`}
                              >
                                🔧{" "}
                                {issue.severity.charAt(0).toUpperCase() +
                                  issue.severity.slice(1)}
                              </span>
                            </>
                          )}
                          {issue.isResolved && (
                            <>
                              <span>•</span>
                              <span className="text-green-600 font-medium">
                                ✅ Resolved
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      <Link
                        to="/report"
                        className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all"
                      >
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
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent issues reported</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
