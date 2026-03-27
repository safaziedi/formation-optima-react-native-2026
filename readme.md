# 📱 Optima React Native Project 2026

This is a mobile application built with **React Native** and **Expo**. It connects to a backend API (Express) and is designed for rapid development and testing on physical devices.

## 🚀 Getting Started

Follow these steps to get the project running on your local machine and your phone.

### 1. Clone the Project
Open your terminal and run:
```bash
git clone https://github.com/safaziedi/formation-optima-react-native-2026.git
cd formation-optima-react-native-2026
```

### 2. Install Dependencies
We use `--legacy-peer-deps` to ensure compatibility between specific library versions:
```bash
npm install --legacy-peer-deps
```

### 3. Environment Configuration
Create a file named `.env` in the root directory:
```bash
touch .env
```
Inside `.env`, add your backend URL ou changer le directement dans BASE_URL dans callapi.js

> **CRITICAL:** If you are testing on a physical phone, you **cannot** use `localhost`. You must use your computer's **Local IPv4 Address**.

```env
EXPO_PUBLIC_API_URL=http://192.168.X.X:9999
```

---

## 🔍 How to find your Local IP (IPv4)

Your phone and your computer must be on the **same Wi-Fi network**.

### On Windows:
1. Open **CMD** or **PowerShell**.
2. Type `ipconfig`.
3. Look for **IPv4 Address** under your Wi-Fi adapter (usually starts with `192.168...`).

### On macOS / Linux:
1. Open **Terminal**.
2. Type `ifconfig` (or `ip a` on newer Linux versions).
3. Look for the `inet` address under `en0` or `wlan0`.

---

## 🏃 Running the App

1.  **Start the development server:**
    ```bash
    npm run dev
    ```
2.  **Open on your phone:**
    * Install the **Expo Go** app (App Store or Play Store).
    * Scan the **QR Code** displayed in your terminal.
    * The app will bundle and open automatically.

## 📁 Project Overview

* **Expo Go**: Allows instant preview without installing Android Studio/Xcode.
* **Environment Variables**: Managed via `EXPO_PUBLIC_` prefix for native security.
* **Legacy Peer Deps**: Used to bypass strict version conflicts during installation.

---

### 💡 Pro-Tips for Troubleshooting
* **Firewall**: If the app hangs on "Opening...", ensure your computer's firewall is not blocking port `8081` (Expo) or your backend port (`9999`).
* **Network**: Double-check that your phone isn't on mobile data (4G/5G) while your laptop is on Wi-Fi.

**Would you like me to show you how to create a simple "Fetch" component in React Native to test if your API connection is working?**