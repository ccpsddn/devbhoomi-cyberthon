# 🚂 Railway Dashboard - Step by Step

## You're looking at Railway Dashboard

### 📍 Current Screen:
You can see "Add a Service" prompt in the middle.

---

## ✅ STEPS TO DEPLOY YOUR BACKEND:

### STEP 1: Click "Add a Service" (middle of screen)
Or click the **"+" button on top-right**

### STEP 2: Select Service Type
Choose one:
- **"GitHub Repo"** - Connect to your GitHub
- **"Empty Project"** - Upload files manually

### STEP 3: If GitHub:
1. Select your repository
2. Railway auto-detects server.js
3. Click "Deploy"

### STEP 4: If Empty Project:
1. Upload `server.js` and `package.json`
2. Or use Git to push your code
3. Click "Deploy"

### STEP 5: Add Environment Variables
Click on your service → Go to "Variables" tab

Add these 3:
```
MONGODB_URI = mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority

JWT_SECRET = devbhoomi_cyberthon_secret_key_2024

NODE_ENV = production
```

### STEP 6: Configure Service Settings
Click "Settings" tab → Update:
- **Start Command**: `node server.js`
- **Build Command**: `npm install`

### STEP 7: Get Your URL
Click "Settings" → "Networking"
- Enable "Public Domain"
- Copy the URL (example: https://devbhoomi-backend.railway.app)

---

## ⚡ QUICKEST METHOD:

**Since you already have the code ready:**

1. Click **"Add a Service"** (top-right button)
2. Select **"GitHub Repo"** or **"HTTP Service"**
3. Follow prompts to connect your repo
4. Railway will auto-deploy
5. Add environment variables
6. Done!

**OR**

1. Click **"Add Service"** → **"Empty Project"**
2. Copy your server.js, package.json
3. Upload to Railway
4. Add environment variables
5. Deploy!

---

## 🎯 YOUR NEXT CLICK:

**Click the big "+" button or "New Service" button on top-right**

That's it! Railway will guide you through the rest.

---

## 📝 After Deployment:

1. Copy your public URL from Settings
2. Go to Vercel.com
3. Deploy frontend
4. Add VITE_API_URL = your Railway URL
5. Update CORS: Add FRONTEND_URL in Railway

**Total time: 5 minutes!**

---

Currently you just need to click **"Add a Service"** or the **"+" button** on your screen!

