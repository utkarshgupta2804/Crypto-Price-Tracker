# CryptoTracker

## ✨ Overview
CryptoTracker is a sleek and intuitive cryptocurrency monitoring platform built for enthusiasts, traders, and data nerds alike. With real-time updates, dynamic visualizations, and deep market insights, it offers a CoinMarketCap-like experience tailored with modern design and performance.

## 🚀 Features

- **Live Price Updates**: Simulated WebSocket for near real-time market tracking
- **Robust Market Analytics**: View market cap, 24h volume, circulating supply, and performance changes (1h, 24h, 7d)
- **Interactive Visualizations**: Synchronized sparkline and detailed charts per asset
- **In-Depth Crypto Details**: Access granular statistics and metadata for each cryptocurrency
- **Responsive & Fast**: Built to perform smoothly across devices and screen sizes

## 🖼️ Screenshots

### Dashboard View
![Dashboard]("C:\Users\utkarsh\OneDrive\Pictures\Screenshots 1\2025-04-25 (3).png")

### Individual Crypto Analytics
![Detailed View]("C:\Users\utkarsh\OneDrive\Pictures\Screenshots 1\2025-04-25 (2).png")

## 🪄 Tech Stack

- **React.js**: Frontend framework
- **Redux Toolkit**: State management done right
- **Tailwind CSS**: Utility-first CSS for lightning-fast styling
- **React Router**: Client-side routing and navigation
- **Canvas API**: Dynamic chart rendering for sparkline and historical charts
- **Custom WebSocket Simulation**: For generating realistic live data streams

## ⚙️ Installation & Setup

```bash
git clone https://github.com/utkarshgupta2804/Crypto-Price-Tracker.git
cd Crypto-Price-Tracker
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:5173) in your browser.

## 📅 Usage Guide

### Explore the Dashboard
- Monitor live prices and key metrics for over 120 cryptocurrencies
- Click on any asset for detailed analytics

### Visual Insights
- View sparkline price trends right in the dashboard
- Dive into expanded charts on the asset detail pages for deeper analysis

## 📚 Project Structure

```
src/
├── api/              # Axios/fetch services to get simulated or live data
├── components/       # Reusable React components
├── data/             # Static mock data and generators
├── services/         # WebSocket simulation, helpers
├── store/            # Redux slices and configuration
├── utils/            # Utility functions and helpers
├── App.js            # Main app container
└── index.js          # Entry point
```

## ⚖️ Data Simulation

This app simulates market dynamics using pseudo-random updates:
- Prices fluctuate with realistic volatility
- Market caps recalculate based on circulating supply and price
- Historical data is pre-generated and updated on-the-fly for a rich charting experience

## 🚧 Future Roadmap

- [ ] **Portfolio Manager**: Let users track their holdings
- [ ] **Price Alerts**: Notifications for key thresholds
- [ ] **Real Historical Data**: Expand depth and timeframe options
- [ ] **Exchange APIs**: Integration with Binance, Coinbase, etc.
- [ ] **News Feed**: Real-time crypto news integration
- [ ] **Authentication**: User accounts and saved preferences
- [ ] **Mobile App**: Native support via React Native or Flutter

## 👏 Acknowledgments

- Inspired by [CoinMarketCap](https://coinmarketcap.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Simulated market behavior modeled after real data patterns



