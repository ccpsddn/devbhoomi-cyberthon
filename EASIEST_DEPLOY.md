# 🚀 EASIEST DEPLOYMENT - Devbhoomi Cyberthon

## ✅ Method 1: Railway Dashboard (RECOMMENDED)

### Backend on Railway (5 Minutes)

1. **Go to**: https://railway.app
2. **Click**: Your project "devbhoomi-backend"
3. **Click**: "New" → "HTTP Service" 
4. **Upload**: server.js and package.json
5. **Go to**: "Variables" tab → Add these:

```
MONGODB_URI = mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority

JWT_SECRET = devbhoomi_cyberthon_secret_key_2024

NODE_ENV = production
```

6. **Click**: "Deploy"
7. **Copy**: Your public URL (Settings → Networking)

---

## ✅ Method 2: Render.com (ALTERNATIVE)

### Backend on Render

1. **Go to**: https://render.com
2. **Click**: "New" → "Web Service"
3. **Connect**: Your Git repository
4. **Settings**:
   - Name: `devbhoomi-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. **Add Environment Variables** (same as above)
6. **Click**: "Create Web Service"
7. **Copy**: Your URL

---

## ✅ Frontend on Vercel

1. **Go to**: https://vercel.com
2. **Click**: "New Project"
3. **Import**: Your GitHub repo
4. **Settings**:
   - Framework: Vite
   - Build Command: `npm run build`
5. **Add Environment Variable**:
   ```
   VITE_API_URL = YOUR_BACKEND_URL_HERE
   ```
6. **Click**: "Deploy"

---

## ✅ Final Step: Update CORS

After both are deployed:

1. **Go to** Railway/Render dashboard
2. **Add one more variable**:
   ```
   FRONTEND_URL = YOUR_VERCEL_URL_HERE
   ```

---

## 🎉 DONE!

Your app is live:
- Frontend: https://your-app.vercel.app
- Backend: https://your-app.railway.app

Admin Login: `/admin/login`

---

## 📝 Notes

- Railway/Render backend: **FREE 500 hours/month**
- Vercel frontend: **FREE unlimited**
- MongoDB: **Already configured!**
- Total cost: **₹0/month**

**Deployment time: 10 minutes total!**

