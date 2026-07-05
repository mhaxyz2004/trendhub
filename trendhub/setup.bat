@echo off
setlocal enabledelayedexpansion
title TrendHub Setup
color 0B

echo ============================================
echo   TrendHub Automated Setup (Windows)
echo ============================================
echo.

REM ---- 1. Check Node.js ----
where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found on this system.
    echo Please install Node.js LTS from https://nodejs.org then run this script again.
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v') do set NODE_VERSION=%%v
echo [OK] Node.js detected: %NODE_VERSION%

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm was not found. It should ship with Node.js - try reinstalling Node.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('npm -v') do set NPM_VERSION=%%v
echo [OK] npm detected: %NPM_VERSION%
echo.

REM ---- 2. Move to script directory (project root) ----
cd /d "%~dp0"
echo Working directory: %cd%
echo.

REM ---- 3. Install dependencies (with auto-retry for flaky SSL/network issues) ----
echo Installing project dependencies (this may take a few minutes)...

REM Make npm more resilient to flaky/corrupted TLS streams before the first attempt
call npm config set fetch-retries 5 >nul 2>nul
call npm config set fetch-retry-mintimeout 20000 >nul 2>nul
call npm config set fetch-retry-maxtimeout 120000 >nul 2>nul

call npm install
if not errorlevel 1 goto install_ok

echo.
echo [WARN] First attempt failed. This is often a corrupted npm cache or a
echo        flaky TLS connection (common with ERR_SSL_CIPHER_OPERATION_FAILED).
echo        Cleaning cache and retrying once automatically...
echo.
call npm cache clean --force
call npm install
if not errorlevel 1 goto install_ok

echo.
echo [ERROR] npm install failed again. Check the messages above.
echo.
echo If you saw ERR_SSL_CIPHER_OPERATION_FAILED, this is almost always caused
echo by one of the following on Windows - please try these, then re-run setup.bat:
echo.
echo   1. Update Node.js to the latest LTS from https://nodejs.org
echo      (this exact error is a known bug in some Node/OpenSSL builds on Windows)
echo   2. Temporarily disable your antivirus's "HTTPS/SSL scanning" feature
echo      (Kaspersky, Avast, ESET, Bitdefender, etc. all have this option and
echo      it is a very common cause of this exact error)
echo   3. If you're on a VPN or corporate network, try disconnecting it
echo   4. As a last resort, try a mobile hotspot to rule out ISP/router interference
echo.
pause
exit /b 1

:install_ok
echo.
echo [OK] Dependencies installed successfully.
echo.

REM ---- 4. Ask what to do next ----
:menu
echo ============================================
echo  What would you like to do now?
echo ============================================
echo   1) Start local dev server        (npm run dev)
echo   2) Build for production          (npm run build)
echo   3) Prepare build for Cloudflare Pages (next-on-pages)
echo   4) Just exit (I'll run npm scripts myself)
echo.
set /p CHOICE="Enter your choice [1-4]: "

if "%CHOICE%"=="1" goto dev
if "%CHOICE%"=="2" goto build
if "%CHOICE%"=="3" goto cloudflare
if "%CHOICE%"=="4" goto end
echo Invalid choice, please try again.
echo.
goto menu

:dev
echo.
echo Starting dev server at http://localhost:3000 ...
echo Press CTRL+C to stop the server.
echo.
call npm run dev
goto end

:build
echo.
echo Building production bundle...
call npm run build
if errorlevel 1 (
    echo [ERROR] Build failed. Check the messages above.
    pause
    exit /b 1
)
echo.
echo [OK] Build complete. Run "npm run start" to serve it locally,
echo      or push this repo to Railway for a zero-config deploy.
goto end

:cloudflare
echo.
echo Installing Cloudflare Pages adapter (@cloudflare/next-on-pages)...
call npm install -D @cloudflare/next-on-pages
if errorlevel 1 (
    echo [ERROR] Failed to install @cloudflare/next-on-pages.
    pause
    exit /b 1
)
echo.
echo Building for Cloudflare Pages...
call npx @cloudflare/next-on-pages
if errorlevel 1 (
    echo [ERROR] Cloudflare build failed. Check the messages above.
    pause
    exit /b 1
)
echo.
echo [OK] Output ready in .vercel\output\static
echo Push this repo to GitHub, then in Cloudflare Pages set:
echo   Build command:        npx @cloudflare/next-on-pages
echo   Build output folder:  .vercel/output/static
goto end

:end
echo.
echo ============================================
echo  Done. Have a great day!
echo ============================================
pause
endlocal
