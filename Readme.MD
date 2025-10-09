# HelpHive 🐝

A community-driven platform that connects people who need help with those willing to offer assistance. Whether it's an emergency situation or general community support, HelpHive makes it easy to reach out and lend a helping hand.

live link: https://helphiveforus.vercel.app/

## ✨ Features

- **🆘 Help Requests**: Create and manage help requests with location-based matching
- **🙋‍♂️ Offer Help**: Browse and respond to help requests in your area
- **💬 Real-time Chat**: Instant messaging between help seekers and helpers using Socket.IO
- **🚨 Emergency Support**: Flag urgent requests for immediate attention
- **📱 Responsive Design**: Beautiful, mobile-friendly interface built with React and Tailwind CSS
- **🔐 Secure Authentication**: JWT-based authentication with secure user sessions
- **📊 Dashboard**: Personal dashboard to track your help requests and offers
- **🔔 Notifications**: Real-time notifications for new messages and help requests
- **📍 Location-based**: Connect with helpers and those in need in your local area

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client
- **Socket.IO Client** - Real-time communication
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image and media management
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
HelpHive/
├── backend/
│   ├── config/
│   │   ├── cloudinary-config.js     # Cloudinary configuration
│   │   └── mongoose-connection.js   # MongoDB connection setup
│   ├── controllers/
│   │   ├── chat.controller.js       # Chat functionality
│   │   ├── helper.controller.js     # Helper operations
│   │   ├── issue.controller.js      # Issue/report handling
│   │   ├── notification.controller.js # Notification management
│   │   └── user.controller.js       # User authentication & profile
│   ├── middlewares/
│   │   └── authToken.js            # JWT authentication middleware
│   ├── models/
│   │   ├── chat.model.js           # Chat schema
│   │   ├── help.model.js           # Help request schema
│   │   ├── issue.model.js          # Issue/report schema
│   │   ├── notification.model.js   # Notification schema
│   │   └── user.model.js           # User schema
│   ├── routes/
│   │   ├── chat.route.js           # Chat endpoints
│   │   ├── help.route.js           # Help request endpoints
│   │   ├── issue.route.js          # Issue/report endpoints
│   │   ├── notification.route.js   # Notification endpoints
│   │   └── user.route.js           # User endpoints
│   ├── utils/
│   │   └── genToken.js             # JWT token generation
│   ├── index.js                    # Server entry point
│   ├── socket.js                   # Socket.IO configuration
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AboutUs.jsx         # About page component
│   │   │   ├── AuthPage.jsx        # Authentication page
│   │   │   ├── Chat.jsx            # Chat interface
│   │   │   ├── Dashboard.jsx       # User dashboard
│   │   │   ├── Footer.jsx          # Footer component
│   │   │   ├── Help.jsx            # Help request component
│   │   │   ├── HelpRequestForm.jsx # Help request form
│   │   │   ├── HeroSection.jsx     # Landing page hero
│   │   │   ├── Navbar.jsx          # Navigation component
│   │   │   ├── OfferHelp.jsx       # Offer help component
│   │   │   ├── RecentActivity.jsx  # Recent activity feed
│   │   │   ├── Report.jsx          # Report/issue component
│   │   │   └── SliderAuthForm.jsx  # Authentication form
│   │   ├── store/
│   │   │   ├── chatStore.js        # Chat state management
│   │   │   ├── helpStore.js        # Help requests state
│   │   │   ├── issueStore.js       # Issues state
│   │   │   ├── notificationStore.js # Notifications state
│   │   │   └── userAuth.js         # Authentication state
│   │   ├── utils/
│   │   │   └── axiosInstance.js    # Axios configuration
│   │   ├── App.jsx                 # Main application component
│   │   └── main.jsx                # Application entry point
│   ├── public/                     # Static assets
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NishantRaj278/HelpHive.git
   cd HelpHive
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   PORT=5000
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm start
   ```

   The backend server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## 🌐 API Endpoints

### Authentication

- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### Help Requests

- `GET /api/help` - Get all help requests
- `POST /api/help` - Create a new help request
- `PUT /api/help/:id` - Update help request
- `DELETE /api/help/:id` - Delete help request

### Chat

- `GET /api/chat/:helpId` - Get chat messages for a help request
- `POST /api/chat` - Send a new message

### Notifications

- `GET /api/notifications` - Get user notifications
- `PUT /api/notifications/:id/read` - Mark notification as read

## 🎯 Usage

1. **Sign Up/Login**: Create an account or log in to access the platform
2. **Request Help**: Create a help request with details about what you need
3. **Offer Help**: Browse available help requests and offer assistance
4. **Chat**: Communicate with helpers or help seekers through real-time chat
5. **Dashboard**: Manage your help requests and track your community contributions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📧 Contact

For questions or support, please reach out to the development team.

---

**HelpHive** - Building stronger communities through mutual aid and support 🐝❤️
