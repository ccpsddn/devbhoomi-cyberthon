@echo off
echo ========================================
echo Devbhoomi Cyberthon Frontend Deployment
echo ========================================
echo.

echo Checking if Vercel CLI is installed...
vercel --version
if %errorlevel% neq 0 (
    echo Vercel CLI not installed!
    echo Installing Vercel CLI...
    npm install -g vercel
)

echo.
echo STEP 1: Enter your Railway Backend URL:
echo (Example: https://your-app.up.railway.app)
set /p RAILWAY_URL="Backend URL: "

echo.
echo Deploying to Vercel...
vercel --prod --yes

echo.
echo ========================================
echo Frontend deployed! Getting URL...
vercel ls

echo.
echo STEP 2: Now run deploy-frontend-2.bat
echo to update CORS settings
echo ========================================
pause

