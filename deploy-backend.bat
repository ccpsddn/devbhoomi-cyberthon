@echo off
echo ========================================
echo Devbhoomi Cyberthon Backend Deployment
echo ========================================
echo.

echo Step 1: Checking Railway CLI...
railway --version
if %errorlevel% neq 0 (
    echo Railway CLI not installed!
    echo Installing Railway CLI...
    npm install -g @railway/cli
)

echo.
echo Step 2: Logging in to Railway...
railway login

echo.
echo Step 3: Initializing Railway project...
railway init

echo.
echo Step 4: Setting environment variables...
railway variables set MONGODB_URI="mongodb+srv://himanshusangwan141_db_user:Lakshay123@cluster0.zxau600.mongodb.net/devbhoomi-cyberthon?retryWrites=true&w=majority"
railway variables set JWT_SECRET="devbhoomi_cyberthon_secret_key_2024"
railway variables set NODE_ENV="production"

echo.
echo Step 5: Deploying backend...
railway up

echo.
echo ========================================
echo Backend deployed successfully!
echo.
echo Your Railway URL:
railway status

echo.
echo NEXT STEP: Copy this URL and use it in Frontend deployment
echo ========================================
pause

