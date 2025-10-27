# Deployment Guide - Devbhoomi Cyberthon 3.0

## 🚀 Free Deployment Options

### Option 1: Railway.app (Backend) + Vercel (Frontend) ⭐ Recommended

#### Step 1: Deploy Backend on Railway

1. Go to [Railway.app](https://railway.app) and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your repository
4. Add Environment Variables:
   - `MONGODB_URI` = mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority
   - `JWT_SECRET` = devbhoomi_cyberthon_secret_key_2024
   - `PORT` = ${{PORT}} (Railway provides this)
5. Click "Deploy"
6. Copy your backend URL (e.g., `https://your-app.railway.app`)

#### Step 2: Deploy Frontend on Vercel

1. Go to [Vercel.com](https://vercel.com) and sign up with GitHub
2. Click "New Project" → Import your repository
3. Build Settings:
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add Environment Variable:
   - `VITE_API_URL` = Your Railway backend URL
5. Click "Deploy"
6. Done! Your site is live!

---

### Option 2: Render.com (Backend + Frontend)

#### Step 1: Deploy Backend

1. Go to [Render.com](https://render.com) and sign up
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Settings:
   - Name: `devbhoomi-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add Environment Variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT` = 5000
6. Click "Create Web Service"
7. Copy your backend URL

#### Step 2: Update Frontend API URLs

Update these files to use your Render backend URL:
- `src/pages/Register.tsx` - Line 57
- `src/pages/Dashboard.tsx` - Line 43
- `src/pages/AdminLogin.tsx` - Line 57

Then deploy frontend on Vercel (same as Option 1)

---

### Option 3: All on Vercel (Serverless)

For this option, you need to convert your backend to serverless functions:

1. Create `api/` folder in your project root
2. Convert Express routes to Vercel serverless functions
3. Deploy everything to Vercel

---

## 📝 Quick Deploy Script

After deployment, update these files with your backend URL:

1. **src/pages/Register.tsx** - Update line 57
   ```javascript
   const response = await fetch('YOUR_BACKEND_URL/api/register', {
   ```

2. **src/pages/AdminLogin.tsx** - Update line 57
   ```javascript
   const response = await fetch('YOUR_BACKEND_URL/api/admin/login', {
   ```

3. **src/pages/Dashboard.tsx** - Update line 43
   ```javascript
   const response = await fetch('YOUR_BACKEND_URL/api/registrations', {
   ```

---

## ✅ What You Get For Free

### Railway.app
- 500 hours compute time/month
- 512MB RAM
- 1GB storage
- Sleep after inactivity (wakes on request)

### Vercel
- Unlimited builds
- 100GB bandwidth
- Auto SSL certificate
- Global CDN
- Custom domains

### MongoDB Atlas
- 512MB free storage
- Already configured!

---

## 🔐 Admin Credentials

- **Email**: ccpsddn@gmail.com
- **Password**: CCPS@321

These are automatically created on first deployment.

---

## 🎯 Recommended: Railway + Vercel

This is the best free combo:
- Railway for backend (more generous limits)
- Vercel for frontend (faster, better CDN)
- Both auto-deploy from GitHub

**Total Cost: $0/month forever!**

---

## 📞 Need Help?

Common Issues:
1. CORS errors - Make sure backend URL is in CORS config
2. MongoDB connection - Check Atlas IP whitelist
3. Environment variables - Double-check all values

Happy Deploying! 🚀

