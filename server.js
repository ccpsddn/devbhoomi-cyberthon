import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

// CORS configuration
const allowedOrigins = process.env.FRONTEND_URL 
  ? [process.env.FRONTEND_URL]
  : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Handle preflight requests
app.options('*', cors({
  origin: allowedOrigins
}));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Error:', err));

// Schemas
const registrationSchema = new mongoose.Schema({
  teamName: String,
  problemStatement: String,
  leaderName: String,
  leaderEmail: String,
  leaderPhone: String,
  institution: String,
  member1: String,
  member2: String,
  member3: String,
  experience: String,
  motivation: String,
  registrationDate: { type: Date, default: Date.now },
  membersCount: Number
});

const adminSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Registration = mongoose.model('Registration', registrationSchema);
const Admin = mongoose.model('Admin', adminSchema);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'devbhoomi_cyberthon_secret_key_2024';

// Initialize Admin (run once)
Admin.findOne({ email: 'ccpsddn@gmail.com' }).then(async (admin) => {
  if (!admin) {
    const hashedPassword = await bcrypt.hash('CCPS@321', 10);
    await Admin.create({
      email: 'ccpsddn@gmail.com',
      password: hashedPassword
    });
    console.log('Admin account created');
  }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Routes

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: admin._id }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Register Team
app.post('/api/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.json({ message: 'Registration successful', id: registration._id });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Get All Registrations (Admin only)
app.get('/api/registrations', verifyToken, async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ registrationDate: -1 });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

// Get Registration Stats (Admin only)
app.get('/api/stats', verifyToken, async (req, res) => {
  try {
    const totalTeams = await Registration.countDocuments();
    const registrations = await Registration.find();
    const totalParticipants = registrations.reduce((sum, reg) => sum + (reg.membersCount || 1), 0);
    const totalProblems = new Set(registrations.map(reg => reg.problemStatement)).size;
    const totalInstitutions = new Set(registrations.map(reg => reg.institution)).size;
    
    res.json({
      totalTeams,
      totalParticipants,
      totalProblems,
      totalInstitutions
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
