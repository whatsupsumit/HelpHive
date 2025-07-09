import { useState } from 'react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [userRole, setUserRole] = useState('Both');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Dummy user data
  const userData = {
    name: "Alex Thompson",
    email: "alex.thompson@email.com",
    avatar: "AT",
    joinDate: "March 2024",
    location: "San Francisco, CA",
    bio: "Community helper passionate about making a difference in people's lives.",
    stats: {
      requestsMade: 6,
      pendingRequests: 2,
      issuesReported: 3,
      totalPoints: 245
    }
  };

  const statsCards = [
    {
      title: "Requests Made",
      value: userData.stats.requestsMade,
      icon: "🙋‍♂️",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      section: "requests"
    },
    {
      title: "Pending Requests",
      value: userData.stats.pendingRequests,
      icon: "⏳",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      section: "pending"
    },
    {
      title: "Issues Reported",
      value: userData.stats.issuesReported,
      icon: "🚨",
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      section: "issues"
    }
  ];

  // Notifications data
  const notifications = [
    {
      id: 1,
      type: 'reply',
      icon: '💬',
      title: 'New Reply',
      message: 'You have 3 new replies to your help request',
      time: '2h ago',
      unread: true
    },
    {
      id: 2,
      type: 'status',
      icon: '✅',
      title: 'Request Accepted',
      message: 'Your request was accepted by John Doe',
      time: '4h ago',
      unread: true
    },
    {
      id: 3,
      type: 'contact',
      icon: '📞',
      title: 'Contact Request',
      message: 'Sarah Miller is trying to contact you',
      time: '1d ago',
      unread: false
    },
    {
      id: 4,
      type: 'update',
      icon: '🔄',
      title: 'Status Update',
      message: 'Your request status changed to In Progress',
      time: '2d ago',
      unread: false
    }
  ];

  // Activity timeline data
  const activityFeed = [
    {
      id: 1,
      icon: '🟢',
      type: 'help_given',
      message: 'You helped Ramesh with grocery pickup',
      time: '2h ago',
      status: 'completed'
    },
    {
      id: 2,
      icon: '✅',
      type: 'request_approved',
      message: "Your request 'Dog Rescue' got approved",
      time: '5h ago',
      status: 'approved'
    },
    {
      id: 3,
      icon: '📢',
      type: 'issue_reported',
      message: 'You reported a pothole on MG Road street',
      time: '1d ago',
      status: 'reported'
    },
    {
      id: 4,
      icon: '🤝',
      type: 'help_received',
      message: 'You received help from Alex Thompson for moving furniture',
      time: '2d ago',
      status: 'completed'
    },
    {
      id: 5,
      icon: '🔔',
      type: 'notification',
      message: 'You joined HelpHive community',
      time: '1w ago',
      status: 'milestone'
    }
  ];

  // Account settings options
  const accountSettings = [
    {
      id: 1,
      title: 'Change Password',
      icon: '🔐',
      description: 'Update your account password'
    },
    {
      id: 2,
      title: 'Notification Preferences',
      icon: '🔔',
      description: 'Manage your notification settings'
    },
    {
      id: 3,
      title: 'HelpHive Guidelines',
      icon: '📋',
      description: 'Read community guidelines and rules'
    },
    {
      id: 4,
      title: 'Terms & Privacy',
      icon: '📄',
      description: 'View terms of service and privacy policy'
    }
  ];

  // Achievements data
  const achievements = [
    { title: "First Helper", description: "Helped your first community member", icon: "🌟", earned: true },
    { title: "Problem Solver", description: "Resolved 10+ help requests", icon: "🧩", earned: true },
    { title: "Community Guardian", description: "Reported 5+ community issues", icon: "🛡️", earned: true },
    { title: "Super Helper", description: "Help 25+ people", icon: "🦸‍♂️", earned: false },
    { title: "Community Leader", description: "Maintain 5.0 rating for 6 months", icon: "👑", earned: false },
  ];

  // Help history data
  const helpHistory = [
    {
      id: 1,
      type: "help_given",
      title: "Grocery Shopping Assistance",
      person: "Mrs. Johnson",
      date: "Dec 15, 2024",
      feedback: "Alex was incredibly helpful and patient. Highly recommend!"
    },
    {
      id: 2,
      type: "help_given",
      title: "Tech Support",
      person: "David Chen",
      date: "Dec 12, 2024",
      feedback: "Fixed my computer issues quickly and explained everything clearly."
    },
    {
      id: 3,
      type: "help_received",
      title: "Moving Furniture",
      person: "Sarah Miller",
      date: "Dec 10, 2024",
      feedback: "Great help with moving. Very reliable!"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "help_given",
      title: "Helped with grocery shopping",
      description: "Assisted elderly neighbor with weekly groceries",
      time: "2 hours ago",
      status: "completed",
      icon: "🛒"
    },
    {
      id: 2,
      type: "request_made",
      title: "Need help moving furniture",
      description: "Looking for someone to help move a couch",
      time: "1 day ago",
      status: "pending",
      icon: "📦"
    },
    {
      id: 3,
      type: "issue_reported",
      title: "Reported broken streetlight",
      description: "Street lamp on Oak Avenue needs repair",
      time: "3 days ago",
      status: "in_progress",
      icon: "💡"
    }
  ];

  const myRequests = [
    {
      id: 1,
      title: "Need help moving furniture",
      description: "Looking for someone to help move a couch to second floor",
      time: "1 day ago",
      status: "pending",
      icon: "📦",
      responses: 3
    },
    {
      id: 2,
      title: "Computer repair assistance",
      description: "My laptop won't start, need tech support",
      time: "3 days ago",
      status: "completed",
      icon: "💻",
      responses: 1
    },
    {
      id: 3,
      title: "Dog walking while on vacation",
      description: "Need someone to walk my dog for a week",
      time: "1 week ago",
      status: "completed",
      icon: "🐕",
      responses: 2
    }
  ];

  const pendingRequests = [
    {
      id: 1,
      title: "Need help moving furniture",
      description: "Looking for someone to help move a couch to second floor",
      time: "1 day ago",
      icon: "📦",
      responses: 3,
      urgency: "medium"
    },
    {
      id: 2,
      title: "Grocery shopping assistance",
      description: "Need help with weekly grocery shopping",
      time: "2 days ago",
      icon: "🛒",
      responses: 1,
      urgency: "low"
    }
  ];

  const reportedIssues = [
    {
      id: 1,
      title: "Broken streetlight on Oak Avenue",
      description: "Street lamp is not working, creating safety concerns",
      time: "3 days ago",
      status: "in_progress",
      icon: "💡",
      priority: "high"
    },
    {
      id: 2,
      title: "Pothole on Main Street",
      description: "Large pothole causing damage to vehicles",
      time: "1 week ago",
      status: "reported",
      icon: "🕳️",
      priority: "medium"
    },
    {
      id: 3,
      title: "Graffiti in community park",
      description: "Vandalism on playground equipment",
      time: "2 weeks ago",
      status: "resolved",
      icon: "🎨",
      priority: "low"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
      {/* Dashboard Navbar */}
      <nav className="bg-gradient-to-r from-gray-900/95 via-red-900/90 to-gray-900/95 backdrop-blur-xl border-b border-red-400/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Profile title */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-white">
                  Dashboard
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-6 ml-8">
                <button
                  onClick={() => setActiveSection('overview')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === 'overview'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveSection('notifications')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                    activeSection === 'notifications'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  🔔 Notifications
                  {notifications.filter(n => n.unread).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications.filter(n => n.unread).length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setActiveSection('activity')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === 'activity'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  📅 Activity
                </button>
                <button
                  onClick={() => setActiveSection('profile')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === 'profile'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  👤 Profile
                </button>
                <button
                  onClick={() => setActiveSection('achievements')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === 'achievements'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  🏆 Achievements
                </button>
                <button
                  onClick={() => setActiveSection('history')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === 'history'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  📝 History
                </button>
                <button
                  onClick={() => setActiveSection('settings')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === 'settings'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-red-600/20'
                  }`}
                >
                  ⚙️ Settings
                </button>
              </div>
            </div>

            {/* Right side - Profile avatar with dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-600/20 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 overflow-hidden">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      userData.avatar
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('dashboardProfileImageInput').click();
                    }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 text-xs"
                    title="Change profile picture"
                  >
                    📷
                  </button>
                  <input
                    id="dashboardProfileImageInput"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-white font-medium">{userData.name}</p>
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    userRole === 'Helper' ? 'bg-green-600/20 text-green-400' :
                    userRole === 'Requester' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-purple-600/20 text-purple-400'
                  }`}>
                    {userRole}
                  </span>
                </div>
                <svg className="w-4 h-4 text-gray-300 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-red-400/30 py-2 z-50">
                  <button
                    onClick={() => {
                      setActiveSection('profile');
                      setShowProfileDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-red-600/20 transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>View Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      // Handle logout logic here
                      console.log('Logout clicked');
                      setShowProfileDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-red-400 hover:bg-red-600/20 transition-all duration-300 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section with Enhanced Design */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-3xl"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                  <span className="mr-3">👋</span>
                  Welcome back, {userData.name.split(' ')[0]}!
                </h2>
                <p className="text-gray-300 text-lg">
                  Here's what's happening in your HelpHive community today.
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">Online</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Last active: {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-6xl opacity-20">🏠</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              onClick={() => setActiveSection(stat.section)}
              className="group relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 cursor-pointer overflow-hidden"
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-red-500 to-orange-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">{stat.value}</p>
                    <p className="text-gray-300 text-sm">{stat.title}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${stat.color} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                    style={{ width: `${Math.min((stat.value / 10) * 100, 100)}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-xs mt-2 group-hover:text-gray-300 transition-colors">Click to view details</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content based on active section */}
        {activeSection === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
                    >
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{activity.title}</h4>
                        <p className="text-gray-400 text-sm">{activity.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-500 text-xs">{activity.time}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                            activity.status === 'pending' ? 'bg-orange-600/20 text-orange-400' :
                            'bg-blue-600/20 text-blue-400'
                          }`}>
                            {activity.status.replace('_', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium">
                    Offer Help
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-medium">
                    Request Help
                  </button>
                  <button className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-3 rounded-lg hover:from-red-700 hover:to-rose-700 transition-all duration-300 font-medium">
                    Report Issue
                  </button>
                </div>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
                <h3 className="text-xl font-bold text-white mb-4">Community Impact</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">{userData.stats.totalPoints}</div>
                    <div className="text-gray-400 text-sm">Community Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Requests Section */}
        {activeSection === 'requests' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              My Requests ({myRequests.length})
            </h3>
            <div className="space-y-4">
              {myRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-2xl">{request.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{request.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{request.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{request.time}</span>
                          <span>{request.responses} responses</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      request.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                      'bg-orange-600/20 text-orange-400'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pending Requests Section */}
        {activeSection === 'pending' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pending Requests ({pendingRequests.length})
            </h3>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-2xl">{request.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{request.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{request.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{request.time}</span>
                          <span>{request.responses} responses</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        request.urgency === 'high' ? 'bg-red-600/20 text-red-400' :
                        request.urgency === 'medium' ? 'bg-orange-600/20 text-orange-400' :
                        'bg-green-600/20 text-green-400'
                      }`}>
                        {request.urgency} priority
                      </span>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reported Issues Section */}
        {activeSection === 'issues' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Reported Issues ({reportedIssues.length})
            </h3>
            <div className="space-y-4">
              {reportedIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-2xl">{issue.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium mb-1">{issue.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{issue.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>{issue.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        issue.priority === 'high' ? 'bg-red-600/20 text-red-400' :
                        issue.priority === 'medium' ? 'bg-orange-600/20 text-orange-400' :
                        'bg-green-600/20 text-green-400'
                      }`}>
                        {issue.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        issue.status === 'resolved' ? 'bg-green-600/20 text-green-400' :
                        issue.status === 'in_progress' ? 'bg-blue-600/20 text-blue-400' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {issue.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity Timeline Section */}
        {activeSection === 'activity' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Activity Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-orange-400"></div>
              
              <div className="space-y-6">
                {activityFeed.map((activity) => (
                  <div key={activity.id} className="relative flex items-start space-x-4">
                    {/* Timeline Node */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg ${
                      activity.status === 'completed' ? 'bg-green-600' :
                      activity.status === 'approved' ? 'bg-blue-600' :
                      activity.status === 'reported' ? 'bg-red-600' :
                      activity.status === 'milestone' ? 'bg-purple-600' :
                      'bg-gray-600'
                    }`}>
                      {activity.icon}
                    </div>
                    
                    {/* Activity Content */}
                    <div className="flex-1 bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          activity.status === 'completed' ? 'bg-green-600/20 text-green-400' :
                          activity.status === 'approved' ? 'bg-blue-600/20 text-blue-400' :
                          activity.status === 'reported' ? 'bg-red-600/20 text-red-400' :
                          activity.status === 'milestone' ? 'bg-purple-600/20 text-purple-400' :
                          'bg-gray-600/20 text-gray-400'
                        }`}>
                          {activity.status}
                        </span>
                        <span className="text-gray-400 text-xs">{activity.time}</span>
                      </div>
                      <p className="text-white">{activity.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notifications Section */}
        {activeSection === 'notifications' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 14H7a4 4 0 01-4-4V6a4 4 0 014-4h10a4 4 0 014 4v4a4 4 0 01-4 4h-3.5l-3.5 3.5v-3.5z" />
              </svg>
              Notifications ({notifications.filter(n => n.unread).length} unread)
            </h3>
            
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border transition-all duration-300 hover:bg-gray-800/70 ${
                    notification.unread 
                      ? 'bg-gray-800/50 border-blue-400/30 shadow-lg' 
                      : 'bg-gray-800/30 border-gray-600/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      notification.type === 'reply' ? 'bg-blue-600/20 text-blue-400' :
                      notification.type === 'status' ? 'bg-green-600/20 text-green-400' :
                      notification.type === 'contact' ? 'bg-orange-600/20 text-orange-400' :
                      'bg-purple-600/20 text-purple-400'
                    }`}>
                      {notification.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-medium">{notification.title}</h4>
                        {notification.unread && (
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{notification.time}</span>
                        <div className="flex space-x-2">
                          {notification.unread && (
                            <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors">
                              Mark Read
                            </button>
                          )}
                          <button className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded hover:bg-gray-700 transition-colors">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Mark All as Read
              </button>
            </div>
          </div>
        )}

        {/* Enhanced User Profile Section */}
        {activeSection === 'profile' && (
          <div className="space-y-6">
            {/* Profile Header Card with Enhanced Design */}
            <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, #ef4444 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f97316 0%, transparent 50%)'}}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    Profile Information
                  </h3>
                  <button
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="group px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/25"
                  >
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span>{isEditingProfile ? 'Save Changes' : 'Edit Profile'}</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Enhanced Profile Picture Section */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-lg overflow-hidden">
                        {profileImage ? (
                          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                          userData.avatar
                        )}
                      </div>
                      <button
                        onClick={() => document.getElementById('profileMainImageInput').click()}
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:scale-110"
                        title="Change profile picture"
                      >
                        📷
                      </button>
                      <input
                        id="profileMainImageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                    
                    {/* Enhanced Role Selection */}
                    <div className="text-center">
                      <label className="block text-gray-400 text-sm mb-2">Role</label>
                      {isEditingProfile ? (
                        <select
                          value={userRole}
                          onChange={(e) => setUserRole(e.target.value)}
                          className="bg-gray-800/80 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        >
                          <option value="Helper">🤝 Helper</option>
                          <option value="Requester">🙋‍♂️ Requester</option>
                          <option value="Both">⭐ Both</option>
                        </select>
                      ) : (
                        <div className="group">
                          <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            userRole === 'Helper' ? 'bg-green-600/20 text-green-400 border border-green-400/30' :
                            userRole === 'Requester' ? 'bg-blue-600/20 text-blue-400 border border-blue-400/30' :
                            'bg-purple-600/20 text-purple-400 border border-purple-400/30'
                          }`}>
                            {userRole === 'Helper' ? '🤝 Helper' :
                             userRole === 'Requester' ? '🙋‍♂️ Requester' :
                             '⭐ Both'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Enhanced Basic Information */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">Full Name</label>
                        {isEditingProfile ? (
                          <input
                            type="text"
                            defaultValue={userData.name}
                            className="w-full bg-gray-800/80 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          />
                        ) : (
                          <p className="text-white font-medium">{userData.name}</p>
                        )}
                      </div>
                      
                      <div className="group">
                        <label className="block text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">Email</label>
                        {isEditingProfile ? (
                          <input
                            type="email"
                            defaultValue={userData.email}
                            className="w-full bg-gray-800/80 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          />
                        ) : (
                          <p className="text-white">{userData.email}</p>
                        )}
                      </div>
                      
                      <div className="group">
                        <label className="block text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">Location</label>
                        {isEditingProfile ? (
                          <input
                            type="text"
                            defaultValue={userData.location}
                            className="w-full bg-gray-800/80 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                          />
                        ) : (
                          <p className="text-white">{userData.location}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Member Since</label>
                        <p className="text-white">{userData.joinDate}</p>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label className="block text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors">Bio</label>
                      {isEditingProfile ? (
                        <textarea
                          defaultValue={userData.bio}
                          rows={3}
                          className="w-full bg-gray-800/80 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 resize-none transition-all duration-300"
                        />
                      ) : (
                        <p className="text-white">{userData.bio}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Profile Stats Card */}
            <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20 overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(45deg, #ef4444 25%, transparent 25%), linear-gradient(-45deg, #f97316 25%, transparent 25%)', backgroundSize: '20px 20px'}}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  Profile Statistics
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="group text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">{userData.stats.requestsMade}</div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Requests Made</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-blue-400 h-1 rounded-full" style={{width: `${(userData.stats.requestsMade / 10) * 100}%`}}></div>
                    </div>
                  </div>
                  <div className="group text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-orange-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors">{userData.stats.pendingRequests}</div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Pending</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-orange-400 h-1 rounded-full" style={{width: `${(userData.stats.pendingRequests / 10) * 100}%`}}></div>
                    </div>
                  </div>
                  <div className="group text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-red-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-red-400 group-hover:text-red-300 transition-colors">{userData.stats.issuesReported}</div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Issues Reported</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-red-400 h-1 rounded-full" style={{width: `${(userData.stats.issuesReported / 10) * 100}%`}}></div>
                    </div>
                  </div>
                  <div className="group text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/30 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">{userData.stats.totalPoints}</div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Community Points</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-green-400 h-1 rounded-full" style={{width: `${Math.min((userData.stats.totalPoints / 300) * 100, 100)}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {activeSection === 'achievements' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              Achievements & Badges
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`group p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    achievement.earned
                      ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-400/30 hover:border-green-400/50'
                      : 'bg-gray-800/30 border-gray-600/30 hover:border-gray-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl transition-all duration-300 ${
                      achievement.earned ? 'group-hover:scale-110' : 'grayscale opacity-50'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold mb-1 ${
                        achievement.earned ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                      {achievement.earned ? (
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 text-xs font-medium">✓ Earned</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      ) : (
                        <span className="text-gray-500 text-xs">Not earned yet</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help History Section */}
        {activeSection === 'history' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Help History & Feedback
            </h3>
            
            <div className="space-y-4">
              {helpHistory.map((item) => (
                <div
                  key={item.id}
                  className="group p-4 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:bg-gray-800/70 hover:border-gray-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === 'help_given' 
                            ? 'bg-green-600/20 text-green-400 border border-green-400/30' 
                            : 'bg-blue-600/20 text-blue-400 border border-blue-400/30'
                        }`}>
                          {item.type === 'help_given' ? '🤝 Help Given' : '💝 Help Received'}
                        </span>
                        <span className="text-gray-400 text-sm">{item.date}</span>
                      </div>
                      
                      <h4 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.type === 'help_given' ? 'Helped: ' : 'Helped by: '}
                        <span className="text-white font-medium">{item.person}</span>
                      </p>
                      
                      {item.feedback && (
                        <div className="bg-gray-700/30 p-3 rounded-lg border-l-4 border-blue-400/50">
                          <p className="text-gray-300 text-sm italic">"{item.feedback}"</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right ml-4">
                      <button className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded text-xs hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group-hover:scale-105">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Account & Settings Section */}
        {activeSection === 'settings' && (
          <div className="bg-gray-900/60 backdrop-blur-xl rounded-2xl p-6 border border-red-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Account & Settings
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accountSettings.map((setting) => (
                <div
                  key={setting.id}
                  className="p-4 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:bg-gray-800/70 hover:border-gray-500/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    // Handle setting click - for now just console log
                    console.log(`Clicked on ${setting.title}`);
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center text-xl group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                      {setting.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors duration-300">
                        {setting.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{setting.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Settings Options */}
            <div className="mt-8 pt-6 border-t border-gray-600/30">
              <h4 className="text-lg font-semibold text-white mb-4">Preferences</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <h5 className="text-white font-medium">Email Notifications</h5>
                    <p className="text-gray-400 text-sm">Receive email updates about your requests</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <h5 className="text-white font-medium">Push Notifications</h5>
                    <p className="text-gray-400 text-sm">Get push notifications on your device</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <h5 className="text-white font-medium">Location Services</h5>
                    <p className="text-gray-400 text-sm">Allow location access for better matching</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Danger Zone */}
            <div className="mt-8 pt-6 border-t border-red-400/30">
              <h4 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h4>
              <div className="space-y-3">
                <button className="w-full p-3 bg-red-600/10 border border-red-600/30 text-red-400 rounded-lg hover:bg-red-600/20 transition-colors duration-300 text-left">
                  Deactivate Account
                </button>
                <button className="w-full p-3 bg-red-600/10 border border-red-600/30 text-red-400 rounded-lg hover:bg-red-600/20 transition-colors duration-300 text-left">
                  Delete Account Permanently
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
