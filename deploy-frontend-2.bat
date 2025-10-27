@echo off
echo ========================================
echo Final Deployment Step
echo ========================================
echo.

echo Enter your Vercel Frontend URL:
echo (Example: https://devbhoomi-cyberthon.vercel.app)
set /p VERCEL_URL="Frontend URL: "

echo.
echo Updating CORS settings on Railway...
railway variables set FRONTEND_URL=%VERCEL_URL%

echo.
echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Your app is live at: %VERCEL_URL%
echo.
echo Admin Login: %VERCEL_URL%/admin/login
echo Email: ccpsddn@gmail.com
echo Password: CCPS@321
echo.
pause

