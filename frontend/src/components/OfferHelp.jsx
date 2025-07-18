import { useEffect } from "react";
import useHelpStore from "../store/helpStore";
import useAuthStore from "../store/userAuth";
import { Link } from "react-router-dom";
import useChatStore from "../store/chatStore";

const OfferHelp = () => {
  const { getEmergencyHelps, getAllHelps, emergencyhelps, allHelps } =
    useHelpStore();
  const { authUser } = useAuthStore();

  useEffect(() => {
    const fetchHelps = async () => {
      try {
        await getEmergencyHelps();
        await getAllHelps();
      } catch (error) {
        console.error("Error fetching helps:", error);
      }
    };

    fetchHelps();
  }, [getEmergencyHelps, getAllHelps]);
  console.log(emergencyhelps, allHelps);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text mb-6">
            Offer Help
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Browse community requests and lend a helping hand. Your kindness can
            make a real difference in someone's day.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 mb-8 border border-green-200/50">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Help?
              </h2>
              <p className="text-gray-600 mb-4">
                Browse through help requests from your community and choose how
                you'd like to contribute. Every act of kindness counts!
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  document
                    .getElementById("help-requests-section")
                    .scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              >
                View All Requests
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Requests */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Emergency Requests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyhelps.map((help) => (
              <div
                className="bg-gradient-to-r from-red-50 to-orange-50 backdrop-blur-sm rounded-xl p-6 border border-red-200/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                key={help._id}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    🚨 {help.title}
                  </h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Emergency
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {help.description.length > 100
                    ? `${help.description.substring(0, 100)}...`
                    : help.description}
                </p>
                <p className="font-light text-sm text-gray-400 mb-4">
                  <span>Requested by:</span> {help.userId?.name || "Unknown"}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span>📍 {help.location}</span>
                  </div>
                  {((authUser &&
                    authUser._id !== (help.userId?._id || help.userId)) ||
                    !authUser) && (
                    <Link
                      to="/chat"
                      onClick={() =>
                        useChatStore.setState({
                          selectedContact: help.userId?._id || help.userId,
                        })
                      }
                      className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Offer Help
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Requests */}
        <div
          id="help-requests-section"
          className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-green-200/50"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Help Requests
          </h2>
          <div className="space-y-4">
            {allHelps.map((help) => (
              <div
                key={help._id}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {help.title}
                  </h3>
                  {help.isEmergency ? (
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Emergency
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Regular
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {help.description.length > 150
                    ? `${help.description.substring(0, 150)}...`
                    : help.description}
                </p>
                <p className="font-light text-sm text-gray-400 mb-2">
                  <span>Requested by:</span> {help.userId?.name || "Unknown"}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <span>📍 {help.location}</span>
                  </div>
                  {authUser?._id !== help.userId?._id && (
                    <Link
                      to="/chat"
                      onClick={() =>
                        useChatStore.setState({
                          selectedContact: help.userId?._id || help.userId,
                        })
                      }
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      Offer Help
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferHelp;
