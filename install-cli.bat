@echo off
echo ========================================
echo Installing CLI Tools
echo ========================================
echo.

echo Installing Railway CLI...
npm install -g @railway/cli

echo.
echo Installing Vercel CLI...
npm install -g vercel

echo.
echo ========================================
echo CLI tools installed successfully!
echo.
echo Next steps:
echo 1. Run deploy-backend.bat
echo 2. Run deploy-frontend.bat
echo ========================================
pause

