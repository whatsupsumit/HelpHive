import { useState, useEffect } from "react";
import useAuthStore from "../store/userAuth";
import { useNavigate } from "react-router-dom";
import useNotificationStore from "../store/notificationStore";
import useHelpStore from "../store/helpStore";
import useIssueStore from "../store/issueStore";

const Dashboard = () => {
  // State management
  const { authUser, updateUser } = useAuthStore();
  const { myHelps, getMyHelps, resolveHelps } = useHelpStore();
  const { myIssues, getMyIssues, moreIssue, resolveIssue } = useIssueStore();
  const navigate = useNavigate();
  const {
    isMarkingAsRead,
    isMarkingAllAsRead,
    notifications,
    getAllNotifications,
    markAsRead: storeMarkAsRead,
    markingAllAsRead: storeMarkAllAsRead,
  } = useNotificationStore();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    profileImage: null,
  });

  useEffect(() => {
    const fetchMyHelps = async () => {
      try {
        await getMyHelps();
      } catch (error) {
        console.error("Failed to fetch my helps:", error);
      }
    };
    fetchMyHelps();
  }, [getMyHelps]);

  useEffect(() => {
    const fetchMyIssues = async () => {
      try {
        await getMyIssues();
      } catch (error) {
        console.error("Failed to fetch my issues:", error);
      }
    };
    fetchMyIssues();
  }, [getMyIssues]);

  console.log("My Issues:", myIssues);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        await getAllNotifications();
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      }
    };
    fetchNotifications();
  }, [getAllNotifications]);

  const [passwordData, setPasswordData] = useState({
    newPassword: "",
  });

  const [currentView, setCurrentView] = useState("notifications"); // 'notifications' or 'details'
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Initialize profile data when authUser changes
  useEffect(() => {
    if (authUser) {
      setProfileData({
        name: authUser.name || "",
        email: authUser.email || "",
        profileImage: authUser.pic || null,
      });
    }
  }, [authUser]);

  // Handle navigation when user is not authenticated
  useEffect(() => {
    if (!authUser) {
      navigate("/auth");
    }
  }, [authUser, navigate]);

  // Mark single notification as read and remove from list
  const markAsRead = async (notificationId) => {
    try {
      await storeMarkAsRead(notificationId);
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  };

  // Mark all notifications as read and clear the list
  const markAllAsRead = async () => {
    try {
      await storeMarkAllAsRead();
    } catch (error) {
      console.error("Failed to mark all notifications as read:", error);
    }
  };

  if (!authUser) {
    return null;
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          profileImage: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      // Prepare the update data object
      const updateData = {
        name: profileData.name,
        email: profileData.email,
      };

      // Add profile image if it exists and is a base64 string
      if (
        profileData.profileImage &&
        profileData.profileImage.startsWith("data:")
      ) {
        updateData.pic = profileData.profileImage;
      }

      // Add password if provided
      if (passwordData.newPassword) {
        if (passwordData.newPassword.length < 8) {
          alert("Password must be at least 8 characters long!");
          return;
        }
        updateData.password = passwordData.newPassword;
      }

      // Send single API call with all data
      await updateUser(updateData);

      // Reset password field and exit edit mode
      setPasswordData({ newPassword: "" });
      setIsEditingProfile(false);

      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      console.error("Error response:", error.response?.data);
      alert(
        `Failed to update profile: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setCurrentView("details");
  };

  const handleBackToNotifications = () => {
    setCurrentView("notifications");
    setSelectedCard(null);
  };

  // Calculate statistics from myHelps and myIssues
  const totalRequests = myHelps.length;
  const pendingRequests = myHelps.filter(
    (help) => help.status === "open"
  ).length;
  const reportedIssues = myIssues.length;

  // Overview cards with real data from myHelps
  const statsData = [
    {
      id: "requests",
      title: "Requests Made",
      count: totalRequests,
      description: "Help requests you've submitted",
      icon: "📝",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      id: "pending",
      title: "Pending Requests",
      count: pendingRequests,
      description: "Awaiting community response",
      icon: "⏳",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
    },
    {
      id: "issues",
      title: "Reported Issues",
      count: reportedIssues,
      description: "Issues you've reported to the community",
      icon: "⚠️",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100",
    },
  ];

  // Generate detailed data from myHelps
  const detailsData = {
    requests: myHelps.map((help) => ({
      id: help._id,
      title: help.title,
      status: help.status === "open" ? "Pending" : "Completed",
      date: new Date(help.createdAt).toLocaleDateString(),
      description: help.description,
      location: help.location,
      isEmergency: help.isEmergency,
    })),
    pending: myHelps
      .filter((help) => help.status === "open")
      .map((help) => ({
        id: help._id,
        title: help.title,
        status: "Pending",
        date: new Date(help.createdAt).toLocaleDateString(),
        description: help.description,
        location: help.location,
        isEmergency: help.isEmergency,
      })),
    issues: myIssues.map((issue) => ({
      id: issue._id,
      title: issue.title,
      status: issue.isResolved ? "Resolved" : "Pending",
      date: new Date(issue.createdAt).toLocaleDateString(),
      description: issue.description,
      location: issue.location,
      severity: issue.severity,
      isResolved: issue.isResolved,
      userId: issue.userId,
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-700">
            Manage your profile and track your community activities
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section 1: Profile Editor */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200 hover:shadow-xl transition-all duration-300 ring-1 ring-orange-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-lg flex items-center justify-center mr-3 shadow-md">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                Profile Settings
              </h2>

              {/* Profile Picture Upload Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 flex items-center justify-center text-white text-2xl font-bold overflow-hidden shadow-lg ring-4 ring-orange-100">
                    {profileData.profileImage ? (
                      <img
                        src={profileData.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : profileData.name ? (
                      profileData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                    ) : (
                      "U"
                    )}
                  </div>
                  {isEditingProfile && (
                    <button
                      onClick={() =>
                        document.getElementById("profileImageInput").click()
                      }
                      className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border-2 border-orange-300 rounded-full flex items-center justify-center hover:bg-orange-50 transition-all duration-200 shadow-md hover:scale-110 group-hover:border-orange-400 cursor-pointer"
                      title="Change profile picture"
                    >
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  )}
                  <input
                    id="profileImageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {profileData.name}
                </h3>
                <p className="text-sm text-gray-600">Community Member</p>
              </div>

              {/* Name Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                {isEditingProfile ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) =>
                      handleProfileChange("name", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 text-gray-800 placeholder-gray-400"
                  />
                ) : (
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                    {profileData.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                {isEditingProfile ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      handleProfileChange("email", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 text-gray-800 placeholder-gray-400"
                  />
                ) : (
                  <p className="px-3 py-2 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                    {profileData.email}
                  </p>
                )}
              </div>

              {/* Password Fields - Only shown when editing */}
              {isEditingProfile && (
                <div className="space-y-4 mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">
                    Change Password (Optional)
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) =>
                        handlePasswordChange("newPassword", e.target.value)
                      }
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 text-gray-800 placeholder-gray-400"
                      placeholder="Enter new password (min 8 characters)"
                    />
                  </div>

                  <p className="text-xs text-gray-600">
                    Leave password field empty if you don't want to change your
                    password.
                  </p>
                </div>
              )}

              {/* Profile Action Buttons */}
              <div className="space-y-3">
                {isEditingProfile ? (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProfile}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditingProfile(false)}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-200 font-medium cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="w-full bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 text-white py-2 px-4 rounded-lg hover:from-orange-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-200 font-medium shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Section 2 & 3: Request Overview Cards and Notifications */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section 2: Request Overview Cards */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Request Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statsData.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardClick(card.id)}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-orange-200 ring-1 ring-orange-100 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl p-3 rounded-xl bg-gradient-to-r from-orange-100 via-red-100 to-yellow-100 border border-orange-200 group-hover:scale-110 group-hover:from-orange-200 group-hover:via-red-200 group-hover:to-yellow-200 transition-all duration-300 shadow-sm">
                        {card.icon}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                        {card.count}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                    <div className="mt-4 flex items-center text-sm text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <span>View details</span>
                      <svg
                        className="w-4 h-4 ml-1"
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
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Notifications Panel */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-200 overflow-hidden ring-1 ring-orange-100">
              <div className="p-6">
                {currentView === "notifications" ? (
                  <div className="transform transition-all duration-500 ease-in-out">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                        <span className="w-8 h-8 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-lg flex items-center justify-center mr-3 shadow-md">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
                            />
                          </svg>
                        </span>
                        Your Hive Activity
                        <span className="ml-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                          {notifications.filter((n) => !n.isRead).length} new
                        </span>
                      </h2>
                      {notifications.length > 0 && (
                        <button
                          onClick={markAllAsRead}
                          disabled={isMarkingAllAsRead}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                            isMarkingAllAsRead
                              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                              : "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:from-orange-500 hover:to-red-500 shadow-md hover:shadow-lg cursor-pointer"
                          }`}
                        >
                          {isMarkingAllAsRead
                            ? "Clearing..."
                            : "Mark All as Read"}
                        </button>
                      )}
                    </div>
                    <div className="space-y-4 max-h-96 overflow-y-auto light-scrollbar">
                      {notifications.length === 0 ? (
                        <div className="text-center py-8">
                          <svg
                            className="mx-auto h-16 w-16 text-gray-400 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M15 17h5l-5-5.5M9 13h5.5"
                            />
                          </svg>
                          <p className="text-gray-500 text-lg font-medium">
                            All caught up!
                          </p>
                          <p className="text-gray-400 text-sm">
                            No new notifications to show
                          </p>
                        </div>
                      ) : (
                        notifications.map((notification, index) => (
                          <div
                            key={notification._id}
                            className={`flex items-start space-x-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${
                              !notification.isRead
                                ? "bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 border-orange-200 shadow-sm"
                                : "bg-gray-50 border-gray-200"
                            } transform animate-fadeIn hover:bg-gradient-to-r hover:from-orange-100 hover:via-red-100 hover:to-yellow-100`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-gray-800 text-sm font-medium">
                                {notification.chat?.content ||
                                  notification.message ||
                                  notification.chat}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {new Date(
                                  notification.createdAt
                                ).toLocaleDateString()}{" "}
                                at{" "}
                                {new Date(
                                  notification.createdAt
                                ).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                            {!notification.isRead && (
                              <>
                                <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 shadow-sm"></div>
                                <div>
                                  <button
                                    onClick={() => markAsRead(notification._id)}
                                    disabled={isMarkingAsRead}
                                    className={`ml-2 px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                                      isMarkingAsRead
                                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                        : "bg-gradient-to-r from-orange-400 to-red-400 text-white hover:from-orange-500 hover:to-red-500 shadow-md hover:shadow-lg cursor-pointer"
                                    }`}
                                  >
                                    {isMarkingAsRead
                                      ? "Marking..."
                                      : "Mark as Read"}
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="transform transition-all duration-500 ease-in-out">
                    <div className="flex items-center mb-6">
                      <button
                        onClick={handleBackToNotifications}
                        className="mr-4 p-2 hover:bg-orange-100 rounded-lg transition-colors duration-200 flex items-center text-gray-600 hover:text-gray-800 group"
                        title="Back to notifications"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                      </button>
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {
                          statsData.find((card) => card.id === selectedCard)
                            ?.title
                        }{" "}
                        Details
                      </h2>
                    </div>
                    <div className="space-y-4">
                      {detailsData[selectedCard]?.map((item, index) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-all duration-200 animate-slideIn hover:shadow-md"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {item.description}
                            </p>
                            <div className="flex items-center text-xs text-gray-500">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {item.date}
                              {item.location && (
                                <>
                                  <span className="mx-2 text-orange-400">
                                    •
                                  </span>
                                  <span>📍 {item.location}</span>
                                </>
                              )}
                              {item.helper && (
                                <>
                                  <span className="mx-2 text-orange-400">
                                    •
                                  </span>
                                  <span>Helper: {item.helper}</span>
                                </>
                              )}
                              {item.isEmergency && (
                                <>
                                  <span className="mx-2 text-orange-400">
                                    •
                                  </span>
                                  <span className="text-red-600 font-medium">
                                    🚨 Emergency
                                  </span>
                                </>
                              )}
                              {item.severity && (
                                <>
                                  <span className="mx-2 text-orange-400">
                                    •
                                  </span>
                                  <span
                                    className={`font-medium ${
                                      item.severity === "critical"
                                        ? "text-red-600"
                                        : item.severity === "high"
                                        ? "text-orange-600"
                                        : item.severity === "medium"
                                        ? "text-yellow-600"
                                        : "text-green-600"
                                    }`}
                                  >
                                    🔧{" "}
                                    {item.severity.charAt(0).toUpperCase() +
                                      item.severity.slice(1)}{" "}
                                    Severity
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {selectedCard === "pending" &&
                            item.status === "Pending" ? (
                              <button
                                onClick={async (e) => {
                                  e.stopPropagation();
                                  try {
                                    await resolveHelps(item.id);
                                    // Refresh the data after resolving
                                    await getMyHelps();
                                  } catch (error) {
                                    console.error(
                                      "Failed to resolve help:",
                                      error
                                    );
                                  }
                                }}
                                className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 hover:bg-green-200 hover:text-green-800 transition-colors duration-200 cursor-pointer"
                              >
                                Resolve
                              </button>
                            ) : selectedCard === "issues" ? (
                              <>
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    item.isResolved
                                      ? "bg-green-100 text-green-700 border border-green-200"
                                      : "bg-orange-100 text-orange-700 border border-orange-200"
                                  }`}
                                >
                                  {item.isResolved ? "Resolved" : "Pending"}
                                </span>
                                {item.userId === authUser._id ? (
                                  !item.isResolved && (
                                    <button
                                      onClick={async (e) => {
                                        e.stopPropagation();
                                        try {
                                          await resolveIssue(item.id);
                                          // Refresh the data after resolving
                                          await getMyIssues();
                                        } catch (error) {
                                          console.error(
                                            "Failed to resolve issue:",
                                            error
                                          );
                                        }
                                      }}
                                      className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 hover:bg-green-200 hover:text-green-800 transition-colors duration-200 cursor-pointer"
                                    >
                                      Resolve Issue
                                    </button>
                                  )
                                ) : (
                                  <button
                                    onClick={async (e) => {
                                      e.stopPropagation();
                                      try {
                                        await moreIssue(item.id);
                                        // Refresh the data after removing
                                        await getMyIssues();
                                      } catch (error) {
                                        console.error(
                                          "Failed to remove issue:",
                                          error
                                        );
                                      }
                                    }}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 hover:bg-red-200 hover:text-red-800 transition-colors duration-200 cursor-pointer"
                                  >
                                    Remove
                                  </button>
                                )}
                              </>
                            ) : (
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  item.status === "Completed" ||
                                  item.status === "Fixed" ||
                                  item.status === "Resolved"
                                    ? "bg-green-100 text-green-700 border border-green-200"
                                    : item.status === "In Progress" ||
                                      item.status === "Pending" ||
                                      item.status === "Open"
                                    ? "bg-orange-100 text-orange-700 border border-orange-200"
                                    : item.priority === "High"
                                    ? "bg-red-100 text-red-700 border border-red-200"
                                    : item.priority === "Medium"
                                    ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                    : "bg-blue-100 text-blue-700 border border-blue-200"
                                }`}
                              >
                                {item.status || item.priority || "Open"}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and effects */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; scale: 0.95; }
          to { transform: translateY(0); opacity: 1; scale: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Light scrollbar styling */
        .light-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .light-scrollbar::-webkit-scrollbar-track {
          background: rgba(229, 231, 235, 0.5);
          border-radius: 3px;
        }
        
        .light-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #dc2626);
          border-radius: 3px;
        }
        
        .light-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #b91c1c);
        }
        `}
      </style>
    </div>
  );
};

export default Dashboard;
