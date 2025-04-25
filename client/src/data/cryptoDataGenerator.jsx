// This file generates realistic crypto data for 100+ cryptocurrencies

// Top 120 cryptocurrencies with their symbols and logos
const cryptoList = [
    { name: "Bitcoin", symbol: "BTC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" },
    { name: "Ethereum", symbol: "ETH", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" },
    { name: "Tether", symbol: "USDT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png" },
    { name: "BNB", symbol: "BNB", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png" },
    { name: "Solana", symbol: "SOL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" },
    { name: "XRP", symbol: "XRP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png" },
    { name: "USDC", symbol: "USDC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" },
    { name: "Cardano", symbol: "ADA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png" },
    { name: "Avalanche", symbol: "AVAX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png" },
    { name: "Dogecoin", symbol: "DOGE", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png" },
    { name: "Polkadot", symbol: "DOT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" },
    { name: "Polygon", symbol: "MATIC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png" },
    { name: "Shiba Inu", symbol: "SHIB", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png" },
    { name: "Litecoin", symbol: "LTC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png" },
    { name: "Dai", symbol: "DAI", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png" },
    { name: "Bitcoin Cash", symbol: "BCH", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png" },
    { name: "Chainlink", symbol: "LINK", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png" },
    { name: "Uniswap", symbol: "UNI", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" },
    { name: "Cosmos", symbol: "ATOM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png" },
    { name: "Stellar", symbol: "XLM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png" },
    { name: "Monero", symbol: "XMR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png" },
    { name: "Ethereum Classic", symbol: "ETC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png" },
    { name: "Filecoin", symbol: "FIL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png" },
    { name: "Hedera", symbol: "HBAR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3688.png" },
    { name: "Tron", symbol: "TRX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png" },
    { name: "Aptos", symbol: "APT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png" },
    { name: "Aave", symbol: "AAVE", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png" },
    { name: "Algorand", symbol: "ALGO", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png" },
    { name: "VeChain", symbol: "VET", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png" },
    { name: "Internet Computer", symbol: "ICP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png" },
    // Add more cryptocurrencies to reach 120+
    { name: "EOS", symbol: "EOS", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png" },
    { name: "Theta Network", symbol: "THETA", logo: "https://s2.coinmarketcap."  },
    { name: "Theta Network", symbol: "THETA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png" },
    { name: "Tezos", symbol: "XTZ", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" },
    { name: "The Graph", symbol: "GRT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png" },
    { name: "Fantom", symbol: "FTM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png" },
    { name: "Decentraland", symbol: "MANA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png" },
    { name: "Axie Infinity", symbol: "AXS", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png" },
    { name: "The Sandbox", symbol: "SAND", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png" },
    { name: "Chiliz", symbol: "CHZ", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4066.png" },
    { name: "Enjin Coin", symbol: "ENJ", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2130.png" },
    { name: "Gala", symbol: "GALA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7080.png" },
    { name: "Basic Attention Token", symbol: "BAT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png" },
    { name: "Loopring", symbol: "LRC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1934.png" },
    { name: "Zcash", symbol: "ZEC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1437.png" },
    { name: "Dash", symbol: "DASH", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/131.png" },
    { name: "Maker", symbol: "MKR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png" },
    { name: "Compound", symbol: "COMP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png" },
    { name: "Curve DAO Token", symbol: "CRV", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png" },
    { name: "Synthetix", symbol: "SNX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2586.png" },
    { name: "Yearn.finance", symbol: "YFI", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png" },
    { name: "Arweave", symbol: "AR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5632.png" },
    { name: "Helium", symbol: "HNT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5665.png" },
    { name: "Harmony", symbol: "ONE", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3945.png" },
    { name: "Zilliqa", symbol: "ZIL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2469.png" },
    { name: "Kusama", symbol: "KSM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5034.png" },
    { name: "Stacks", symbol: "STX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png" },
    { name: "Waves", symbol: "WAVES", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1274.png" },
    { name: "Celo", symbol: "CELO", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png" },
    { name: "Ren", symbol: "REN", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2539.png" },
    { name: "Sushi", symbol: "SUSHI", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png" },
    { name: "1inch", symbol: "1INCH", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png" },
    { name: "Ankr", symbol: "ANKR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3783.png" },
    { name: "Storj", symbol: "STORJ", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1772.png" },
    { name: "NEM", symbol: "XEM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/873.png" },
    { name: "Qtum", symbol: "QTUM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1684.png" },
    { name: "IOTA", symbol: "MIOTA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1720.png" },
    { name: "Ontology", symbol: "ONT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2566.png" },
    { name: "OMG Network", symbol: "OMG", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1808.png" },
    { name: "Holo", symbol: "HOT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2682.png" },
    { name: "Ravencoin", symbol: "RVN", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2577.png" },
    { name: "Decred", symbol: "DCR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1168.png" },
    { name: "ICON", symbol: "ICX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2099.png" },
    { name: "Nano", symbol: "NANO", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1567.png" },
    { name: "Horizen", symbol: "ZEN", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1698.png" },
    { name: "Augur", symbol: "REP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1104.png" },
    { name: "Golem", symbol: "GLM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1455.png" },
    { name: "Status", symbol: "SNT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1759.png" },
    { name: "Bancor", symbol: "BNT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1727.png" },
    { name: "Kyber Network", symbol: "KNC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1982.png" },
    { name: "Numeraire", symbol: "NMR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1732.png" },
    { name: "Balancer", symbol: "BAL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png" },
    { name: "Gnosis", symbol: "GNO", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1659.png" },
    { name: "Civic", symbol: "CVC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1816.png" },
    { name: "Lisk", symbol: "LSK", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1214.png" },
    { name: "Aragon", symbol: "ANT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1680.png" },
    { name: "Audius", symbol: "AUDIO", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7455.png" },
    { name: "Cartesi", symbol: "CTSI", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5444.png" },
    { name: "Fetch.ai", symbol: "FET", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3773.png" },
    { name: "Injective", symbol: "INJ", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png" },
    { name: "Livepeer", symbol: "LPT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3640.png" },
    { name: "Mask Network", symbol: "MASK", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8536.png" },
    { name: "Ocean Protocol", symbol: "OCEAN", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3911.png" },
    { name: "Orchid", symbol: "OXT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5026.png" },
    { name: "Radicle", symbol: "RAD", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8841.png" },
    { name: "Render Token", symbol: "RNDR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png" },
    { name: "Skale", symbol: "SKL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5691.png" },
    { name: "Solana", symbol: "SOL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" },
    { name: "Swipe", symbol: "SXP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4279.png" },
    { name: "Voyager Token", symbol: "VGX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1817.png" },
    { name: "Wax", symbol: "WAXP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2300.png" },
    { name: "Wrapped Bitcoin", symbol: "WBTC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png" },
    { name: "Wrapped Ethereum", symbol: "WETH", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png" },
    { name: "Wrapped Solana", symbol: "WSOL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5926.png" },
    { name: "Wrapped Tron", symbol: "WTRX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5964.png" },
    { name: "Wrapped Cardano", symbol: "WADA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png" },
    { name: "Wrapped Polkadot", symbol: "WDOT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png" },
    { name: "Wrapped Avalanche", symbol: "WAVAX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png" },
    { name: "Wrapped Polygon", symbol: "WMATIC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png" },
    { name: "Wrapped Cosmos", symbol: "WATOM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png" },
    { name: "Wrapped Chainlink", symbol: "WLINK", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png" },
    { name: "Wrapped Uniswap", symbol: "WUNI", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png" },
    { name: "Wrapped Stellar", symbol: "WXLM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png" },
    { name: "Wrapped Monero", symbol: "WXMR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png" },
    { name: "Wrapped Ethereum Classic", symbol: "WETC", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png" },
    { name: "Wrapped Filecoin", symbol: "WFIL", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png" },
    { name: "Wrapped Hedera", symbol: "WHBAR", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3688.png" },
    { name: "Wrapped Tron", symbol: "WTRX", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png" },
    { name: "Wrapped Aptos", symbol: "WAPT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png" },
    { name: "Wrapped Aave", symbol: "WAAVE", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png" },
    { name: "Wrapped Algorand", symbol: "WALGO", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png" },
    { name: "Wrapped VeChain", symbol: "WVET", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png" },
    { name: "Wrapped Internet Computer", symbol: "WICP", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png" },
    { name: "Wrapped EOS", symbol: "WEOS", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png" },
    { name: "Wrapped Theta Network", symbol: "WTHETA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png" },
    { name: "Wrapped Tezos", symbol: "WXTZ", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" },
    { name: "Wrapped The Graph", symbol: "WGRT", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png" },
    { name: "Wrapped Fantom", symbol: "WFTM", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png" },
    { name: "Wrapped Decentraland", symbol: "WMANA", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png" },
    { name: "Wrapped Axie Infinity", symbol: "WAXS", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png" },
    { name: "Wrapped The Sandbox", symbol: "WSAND", logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png" },
  ]
  
  // Generate realistic crypto data
  export const generateCryptoData = (count = 100) => {
    const cryptoData = []
  
    // Use the first 'count' cryptos from the list
    const cryptosToUse = cryptoList.slice(0, count)
  
    cryptosToUse.forEach((crypto, index) => {
      // Generate realistic price based on market position
      let basePrice
      if (index === 0) {
        // Bitcoin
        basePrice = 93759.48
      } else if (index === 1) {
        // Ethereum
        basePrice = 1802.46
      } else if (index === 2) {
        // Tether
        basePrice = 1.0
      } else if (index < 5) {
        // Top 5
        basePrice = 100 + Math.random() * 500
      } else if (index < 10) {
        // Top 10
        basePrice = 10 + Math.random() * 90
      } else if (index < 20) {
        // Top 20
        basePrice = 1 + Math.random() * 9
      } else if (index < 50) {
        // Top 50
        basePrice = 0.1 + Math.random() * 0.9
      } else {
        // The rest
        basePrice = 0.01 + Math.random() * 0.09
      }
  
      // Generate market cap based on price and position
      const circulatingSupply = 10 + Math.random() * 990 // Between 10M and 1B
      const marketCap = basePrice * circulatingSupply * 1000000 // Convert to full units
  
      // Generate percentage changes
      const change1h = (Math.random() * 2 - 1) * (index < 10 ? 0.5 : 2) // Less volatile for top 10
      const change24h = (Math.random() * 4 - 2) * (index < 10 ? 1 : 3) // Less volatile for top 10
      const change7d = (Math.random() * 10 - 5) * (index < 10 ? 1.5 : 4) // Less volatile for top 10
  
      // Generate 24h volume
      const volume24h = marketCap * (0.05 + Math.random() * 0.15) // 5-20% of market cap
  
      // Generate sparkline data (last 20 price points)
      const sparklineData = []
      for (let i = 0; i < 20; i++) {
        const volatility = index < 10 ? 0.005 : 0.02 // Less volatile for top 10
        const pricePoint = basePrice * (1 + (Math.random() * 2 - 1) * volatility)
        sparklineData.push(pricePoint)
      }
  
      // Generate detailed chart data (1000 price points)
      const detailedChartData = []
      let currentPrice = basePrice
      for (let i = 0; i < 1000; i++) {
        const volatility = index < 10 ? 0.001 : 0.004 // Less volatile for top 10
        // Random walk with slight trend based on 7d change
        const trend = change7d / 1000
        currentPrice = currentPrice * (1 + trend + (Math.random() * 2 - 1) * volatility)
        detailedChartData.push(currentPrice)
      }
  
      // Generate max supply (null for some coins like ETH)
      const maxSupply = index % 3 === 0 ? null : circulatingSupply * (1.2 + Math.random() * 0.8)
  
      // Generate all-time high
      const ath = basePrice * (1.5 + Math.random())
  
      // Flag some coins as new
      const isNew = index > 80 && Math.random() > 0.7
  
      cryptoData.push({
        id: index + 1,
        rank: index + 1,
        name: crypto.name,
        symbol: crypto.symbol,
        logo: crypto.logo,
        price: basePrice,
        change1h,
        change24h,
        change7d,
        marketCap,
        volume24h,
        circulatingSupply,
        maxSupply,
        sparklineData,
        detailedChartData,
        ath,
        isNew,
      })
    })
  
    return cryptoData
  }
  