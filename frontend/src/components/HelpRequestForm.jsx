import { useState } from "react";
import useHelpStore from "../store/helpStore";

const HelpRequestForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    isEmergency: false,
  });

  const { addhelps, isAddingHelp } = useHelpStore();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addhelps(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-gradient-to-br from-amber-50/95 via-yellow-100/90 to-orange-100/95 backdrop-blur-xl rounded-3xl border border-yellow-300/50 shadow-2xl max-w-2xl w-full h-[85vh] flex flex-col relative overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
          {/* Animated background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-amber-200/15 to-orange-200/20"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/10 via-yellow-100/10 to-orange-100/10"></div>

          {/* Header */}
          <div className="relative p-6 border-b border-amber-300/40 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🤝</div>
                <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text">
                  Request{" "}
                  <span className="text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 bg-clip-text">
                    Help
                  </span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-orange-700 transition-colors duration-300 text-2xl hover:rotate-90 cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Form - Scrollable Content */}
          <div
            className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-amber-100/50 scrollbar-thumb-gradient-to-r scrollbar-thumb-from-yellow-400/70 scrollbar-thumb-to-orange-400/70 hover:scrollbar-thumb-from-yellow-500/80 hover:scrollbar-thumb-to-orange-500/80 scrollbar-corner-transparent"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor:
                "rgba(251, 146, 60, 0.7) rgba(254, 243, 199, 0.4)",
            }}
          >
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-transparent bg-gradient-to-r from-yellow-700 via-amber-700 to-orange-700 bg-clip-text font-semibold mb-2">
                  What help do you need? <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Help moving furniture, Need ride to airport..."
                  className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-yellow-50/80 to-amber-50/80 border border-yellow-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300 shadow-lg backdrop-blur-sm"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-transparent bg-gradient-to-r from-yellow-700 via-amber-700 to-orange-700 bg-clip-text font-semibold mb-2">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please describe what help you need in detail..."
                  rows="4"
                  className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-yellow-50/80 to-amber-50/80 border border-yellow-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300 resize-none shadow-lg backdrop-blur-sm"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-transparent bg-gradient-to-r from-yellow-700 via-amber-700 to-orange-700 bg-clip-text font-semibold mb-2">
                  Location <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Address or area where help is needed"
                  className="w-full px-4 py-3 bg-gradient-to-r from-white/90 via-yellow-50/80 to-amber-50/80 border border-yellow-300/60 rounded-xl text-gray-800 placeholder-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300 shadow-lg backdrop-blur-sm"
                  required
                />
              </div>

              {/* Emergency Toggle */}
              <div className="bg-gradient-to-r from-red-200/80 via-orange-200/70 to-yellow-200/80 rounded-xl p-4 border border-red-400/60 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="isEmergency"
                    checked={formData.isEmergency}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-600 bg-white border-2 border-red-400 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <div>
                    <label className="text-transparent bg-gradient-to-r from-red-700 via-orange-700 to-red-700 bg-clip-text font-semibold cursor-pointer">
                      🚨 Emergency Request
                    </label>
                    <p className="text-red-700/80 text-sm">
                      Check this if you need immediate assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 pb-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-200/80 via-gray-100/70 to-gray-200/80 hover:from-gray-300/80 hover:via-gray-200/70 hover:to-gray-300/80 text-gray-700 font-semibold rounded-xl transition-all duration-300 border border-gray-400/50 shadow-lg backdrop-blur-sm hover:scale-[1.02] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isAddingHelp}
                  className={`flex-1 px-6 py-3 text-white font-bold rounded-xl transition-all duration-300 shadow-xl border backdrop-blur-sm ${
                    isAddingHelp
                      ? "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 border-gray-400/60 cursor-not-allowed"
                      : "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-700 border-orange-300/60 hover:scale-[1.02] hover:shadow-orange-400/40"
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isAddingHelp ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span>Requesting...</span>
                      </>
                    ) : (
                      <>
                        <span>🤝</span>
                        <span className="cursor-pointer">Request Help</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpRequestForm;
