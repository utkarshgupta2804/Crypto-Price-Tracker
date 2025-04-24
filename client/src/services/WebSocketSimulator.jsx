export class WebSocketSimulator {
  constructor() {
    this.subscribers = []
    this.interval = null
  }

  connect() {
    // Simulate WebSocket connection with setInterval
    this.interval = setInterval(() => {
      const updates = this.generateRandomUpdates()
      this.notifySubscribers(updates)
    }, 1500) // Update every 1.5 seconds
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  subscribe(callback) {
    this.subscribers.push(callback)
    return () => {
      this.subscribers = this.subscribers.filter((sub) => sub !== callback)
    }
  }

  notifySubscribers(updates) {
    this.subscribers.forEach((callback) => callback(updates))
  }

  generateRandomUpdates() {
    // Generate random updates for all assets (1-120)
    return Array.from({ length: 120 }, (_, i) => {
      const id = i + 1

      // Generate random price fluctuation (±0.5%)
      const priceChange = Math.random() * 0.01 - 0.005

      // Generate random percentage changes
      const change1h = this.randomPercentageChange(0.2)
      const change24h = this.randomPercentageChange(0.5)
      const change7d = this.randomPercentageChange(1.0)

      // Generate random volume change (±2%)
      const volumeChange = Math.random() * 0.04 - 0.02

      return {
        id,
        price: this.getBasePrice(id) * (1 + priceChange),
        change1h,
        change24h,
        change7d,
        volume24h: this.getBaseVolume(id) * (1 + volumeChange),
      }
    })
  }

  getBasePrice(id) {
    // Base prices will be fetched from the store
    // This is just a fallback
    if (id === 1) return 93759.48 // BTC
    if (id === 2) return 1802.46 // ETH
    if (id === 3) return 1.0 // USDT
    if (id <= 5) return 100 + Math.random() * 500
    if (id <= 10) return 10 + Math.random() * 90
    if (id <= 20) return 1 + Math.random() * 9
    if (id <= 50) return 0.1 + Math.random() * 0.9
    return 0.01 + Math.random() * 0.09
  }

  getBaseVolume(id) {
    // Base volumes will be fetched from the store
    // This is just a fallback
    if (id === 1) return 43874950947 // BTC
    if (id === 2) return 23547469307 // ETH
    if (id === 3) return 92288882007 // USDT
    if (id <= 5) return 5000000000 + Math.random() * 5000000000
    if (id <= 10) return 1000000000 + Math.random() * 4000000000
    if (id <= 20) return 500000000 + Math.random() * 500000000
    if (id <= 50) return 100000000 + Math.random() * 400000000
    return 10000000 + Math.random() * 90000000
  }

  randomPercentageChange(magnitude) {
    // Generate random percentage change with given magnitude
    return (Math.random() * 2 - 1) * magnitude
  }
}
