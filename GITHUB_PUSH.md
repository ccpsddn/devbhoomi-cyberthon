# GitHub Repository Setup

## Option 1: Create on GitHub.com (Easiest)

1. Go to https://github.com/new
2. Repository name: `devbhoomi-cyberthon`
3. Keep it Public
4. Click "Create repository"
5. Copy the commands it shows

Then run in terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/devbhoomi-cyberthon.git

git push -u origin main
```

---

## Option 2: Push via GitHub CLI

```bash
# Login to GitHub
gh auth login

# Create repository
gh repo create devbhoomi-cyberthon --public --source=. --remote=origin --push
```

---

## Option 3: Railway Empty Project (NO GITHUB NEEDED!)

### On Railway Dashboard:

1. Click "+" button → "Empty Project"
2. Upload these files:
   - server.js
   - package.json
   - All src folder
3. Railway will auto-detect it's a Node.js project
4. Add environment variables
5. Deploy!

**This is the FASTEST way!** ✅

