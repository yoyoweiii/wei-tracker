
# 📊 Notion Budget Tracker App (Expo + Notion API)

A mobile budget tracking app built with React Native using Expo.  
It connects to your Notion database to store transactions by category,  
displays a summary page, and supports cute icons and auto-scheduled inputs (coming soon!).

---

## 🚀 Features

- Save your Notion API token locally (no hardcoding)
- Securely store the token using Expo Secure Store
- Submit transactions directly into your Notion database
- React Native app powered by Expo
- Android support via Expo Go
- Future plans: Summary dashboard, recurring input, and icon categories

---

## 📦 Tech Stack

- [React Native (Expo)](https://docs.expo.dev)
- [Notion API](https://developers.notion.com/)
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [@react-navigation/native](https://reactnavigation.org/)

---

## 🛠️ How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm install -g expo-cli
expo start
```


📲 First-Time Setup (User Instructions)
Install Expo Go from the Play Store on your phone.

When the app starts, it will ask you to input your Notion API Token (starts with secret_...).

Create a Notion integration and get the token from: https://www.notion.so/my-integrations

After entering your token, the app securely saves it on your device.

The app will redirect to the home page. Future features will include transaction input and summaries!

