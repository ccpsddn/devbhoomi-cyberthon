# CLI Deployment Guide - Devbhoomi Cyberthon 3.0

## 🚀 Deploy via CLI (Without GitHub)

### Prerequisites
```bash
npm install -g railway-cli
npm install -g vercel
```

Or download installers:
- Railway CLI: https://docs.railway.app/develop/cli
- Vercel CLI: https://vercel.com/docs/cli

---

## 📦 PART 1: Deploy Backend on Railway

### Step 1: Install Railway CLI
```bash
npm i -g @railway/cli
```

### Step 2: Login to Railway
```bash
railway login
```

### Step 3: Initialize and Deploy
```bash
# Navigate to your project
cd C:\Users\Rocky\Desktop\hackathin

# Initialize Railway project
railway init

# This will create a .railway folder

# Add environment variables
railway variables set MONGODB_URI="mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority"

railway variables set JWT_SECRET="devbhoomi_cyberthon_secret_key_2024"

railway variables set NODE_ENV="production"

# Deploy backend
railway up
```

### Step 4: Get Your Backend URL
```bash
railway status
```

Copy the URL (something like: https://your-app.up.railway.app)

### Step 5: Update CORS (After Frontend Deploy)
```bash
railway variables set FRONTEND_URL="YOUR_VERCEL_URL_HERE"
```

---

## 📦 PART 2: Deploy Frontend on Vercel

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy Frontend
```bash
# Make sure you're in project root
cd C:\Users\Rocky\Desktop\hackathin

# Deploy to Vercel
vercel --prod

# When prompted:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? devbhoomi-cyberthon
# - Directory? (press enter)
# - Want to modify settings? Y
```

### Step 4: Add Environment Variables
```bash
# Replace YOUR_RAILWAY_URL with actual URL from Step 4
vercel env add VITE_API_URL production
# When prompted, enter: YOUR_RAILWAY_URL (e.g., https://your-app.up.railway.app)

# Redeploy after adding env var
vercel --prod
```

### Step 5: Get Your Frontend URL
```bash
vercel ls
```

Copy the production URL

---

## ✅ Quick All-in-One Commands

### For Backend:
```bash
# Terminal 1 - Backend
railway login
railway init
railway variables set MONGODB_URI="mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority"
railway variables set JWT_SECRET="devbhoomi_cyberthon_secret_key_2024"
railway up
railway status  # Copy the URL
```

### For Frontend:
```bash
# Terminal 2 - Frontend
vercel login
vercel --prod
# After getting URL, add environment variable:
vercel env add VITE_API_URL production  # Enter Railway URL when prompted
vercel --prod  # Redeploy
```

---

## 🔄 Update CORS on Backend
```bash
railway variables set FRONTEND_URL="YOUR_VERCEL_URL"
# This automatically restarts the service
```

---

## 🎯 Alternative: One-Command Deploy Script

Create a file `deploy.bat` (Windows):

```bash
@echo off
echo Deploying Devbhoomi Cyberthon...
echo.

echo Step 1: Deploying Backend to Railway...
railway up

echo.
echo Step 2: Getting Railway URL...
railway status

echo.
echo Step 3: Deploying Frontend to Vercel...
vercel --prod

echo.
echo Deployment Complete!
```

---

## 📝 Important Notes

1. **First Time**: You need to sign up on railway.app and vercel.com websites
2. **Login**: `railway login` and `vercel login` will open browser for authentication
3. **Environment Variables**: Add them before first deploy
4. **CORS Update**: After frontend is deployed, update FRONTEND_URL in Railway

---

## 🐛 Troubleshooting

### Railway Issues:
```bash
# Check status
railway status

# View logs
railway logs

# Restart service
railway restart
```

### Vercel Issues:
```bash
# View deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm
```

---

## 🔐 Admin Access

Once deployed:
- Frontend URL: Check with `vercel ls`
- Admin Login: `YOUR_URL/admin/login`
- Email: ccpsddn@gmail.com
- Password: CCPS@321

---

**Ready to deploy? Run the commands above! 🚀**

