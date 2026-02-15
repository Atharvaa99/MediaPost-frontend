# 📸 MediaPost - Frontend

A modern, responsive social media web application built with React and Vite. Upload images, create posts, and view your feed in a beautiful interface.

## 🚀 Features

- **Create Posts**: Upload images with captions
- **View Feed**: Browse all posts in a beautiful card layout
- **Delete Posts**: Remove posts you no longer want
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Fast & Modern**: Built with Vite for lightning-fast performance
- **Cloud Storage**: Images stored securely using ImageKit

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS3 with modern layouts
- **Font**: Courier New (monospace)

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see [backend repository](https://github.com/yourusername/backend-repo))

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-frontend-repo.git
   cd your-frontend-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
   
   For production, update with your deployed backend URL:
   ```env
   VITE_API_URL=https://your-backend.onrender.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:5173`

## 📁 Project Structure

```
frontend/
├── src/
│   ├── pages/
│   │   ├── CreatePostPage/
│   │   │   ├── CreatePostPage.jsx
│   │   │   └── CreatePostPage.css
│   │   └── PostsPage/
│   │       ├── PostsPage.jsx
│   │       └── PostsPage.css
│   ├── config.js              # API configuration
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # Global app styles
│   ├── index.css              # Global CSS reset
│   └── main.jsx               # App entry point
├── public/                    # Static assets
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── .gitignore                 # Git ignore rules
```

## 🎨 Features Overview

### **Create Post Page** (`/`)
- Upload images from your device
- Add captions to your posts
- Form validation for required fields
- Automatic navigation to feed after posting

### **Posts Feed** (`/posts`)
- View all posts in chronological order
- Responsive card layout
- Delete functionality for each post
- Hover effects for better UX
- Back navigation to create page

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌐 API Integration

This frontend connects to the backend API with the following endpoints:

- **POST** `/api/create-post` - Create a new post with image
- **GET** `/api/posts` - Fetch all posts
- **DELETE** `/api/posts/:id` - Delete a post by ID

API URL is configured via the `VITE_API_URL` environment variable.

## 🎨 Styling

- Modern card-based design
- Smooth hover transitions
- Clean and minimalist interface
- Courier New monospace font for a unique look
- Soft shadows and rounded corners
- Responsive grid layouts

## 🚀 Deployment

This application is deployed on **Vercel**.

**Live Demo:** `https://your-app.vercel.app`

### Deployment Steps:

1. **Push code to GitHub**
2. **Connect repository to Vercel**
3. **Configure build settings:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Add environment variables:**
   - `VITE_API_URL`: Your backend API URL
5. **Deploy!**

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API base URL | Yes |

**Note:** All Vite environment variables must be prefixed with `VITE_`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **If you found this project helpful, please consider giving it a star!**

## 🔗 Related Projects

- **Backend Repository**: [Link to backend repo](https://github.com/yourusername/backend-repo)

---

