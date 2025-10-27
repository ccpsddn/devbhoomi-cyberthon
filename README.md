# Devbhoomi Cyberthon 3.0

A complete React TypeScript web application for the Devbhoomi Cyberthon 3.0 event.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **UI**: shadcn/ui, Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Router**: React Router DOM

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Backend Server

```bash
npm run server
```

The server will run on `http://localhost:5000`

### 3. Start the Frontend Development Server

In a new terminal:

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### 4. Admin Credentials

- **Email**: ccpsddn@gmail.com
- **Password**: CCPS@321

⚠️ **Note**: Admin credentials are created automatically on first server start. These credentials are for admin access only to the dashboard.

## Features

### For Participants
- 🏠 **Homepage**: Hero section with event information
- 📖 **About**: Timeline, themes, and competition details
- 🎯 **Problems**: 11 problem statements from Uttarakhand Police & STF
- 📝 **Register**: Complete registration form with MongoDB storage
- ✅ **Confirmation**: Real-time registration validation

### For Admin
- 🔐 **Admin Login**: Secure authentication page
- 📊 **Dashboard**: View all registrations
- 📈 **Stats**: Real-time statistics (teams, participants, problems, institutions)
- 🔍 **Search**: Filter registrations by team, leader, email, or problem
- 📥 **Export**: Download registrations as JSON
- 👁️ **Details**: View full registration details in modal

## Pages

- `/` - Homepage
- `/about` - Event information
- `/problems` - Problem statements
- `/register` - Team registration
- `/admin/login` - Admin login
- `/dashboard` - Admin dashboard (protected)

## Database

MongoDB connection is configured to store:
- Team registrations
- Admin credentials
- Registration statistics

## Project Structure

```
hackathon-app/
├── src/
│   ├── components/
│   │   ├── ui/         # shadcn components
│   │   ├── Navigation.tsx
│   │   ├── AnimatedBackground.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   ├── About.tsx
│   │   ├── Register.tsx
│   │   ├── Problems.tsx
│   │   ├── Dashboard.tsx
│   │   ├── AdminLogin.tsx
│   │   └── NotFound.tsx
│   ├── utils/
│   │   └── auth.ts
│   └── App.tsx
├── server.js           # Express backend server
└── package.json
```

## Build for Production

```bash
npm run build
npm run preview
```

## License

MIT
