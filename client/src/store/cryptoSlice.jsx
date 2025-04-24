import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCryptoDataApi } from "../api/cryptoApi"

export const fetchCryptoData = createAsyncThunk("crypto/fetchCryptoData", async () => {
  const data = await fetchCryptoDataApi()
  return data
})

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: [],
    marketStats: {
      totalMarketCap: "2.89T",
      marketCapChangePercentage: -1.31,
      cmc100: "176.54",
      cmc100ChangePercentage: -1.41,
      altcoinIndex: 12,
      fearGreedIndex: 53,
    },
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    searchTerm: "",
    activeFilter: "coins",
  },
  reducers: {
    updatePrices: (state, action) => {
      const { updates } = action.payload
      updates.forEach((update) => {
        const asset = state.assets.find((a) => a.id === update.id)
        if (asset) {
          const oldPrice = asset.price
          asset.price = update.price

          // Update percentage changes
          asset.change1h = update.change1h
          asset.change24h = update.change24h
          asset.change7d = update.change7d

          // Update volume
          asset.volume24h = update.volume24h

          // Update market cap based on new price
          asset.marketCap = asset.circulatingSupply * update.price

          // Update detailed chart data with new price point
          if (asset.detailedChartData) {
            asset.detailedChartData.push(update.price)
            // Keep only the last 1000 data points
            if (asset.detailedChartData.length > 1000) {
              asset.detailedChartData.shift()
            }
          }
        }
      })

      // Update market stats
      const totalMarketCap = state.assets.reduce((sum, asset) => sum + asset.marketCap, 0)
      state.marketStats.totalMarketCap = (totalMarketCap / 1e12).toFixed(2) + "T"

      // Update CMC100 (top 100 cryptos)
      const top100MarketCap = state.assets.slice(0, 100).reduce((sum, asset) => sum + asset.marketCap, 0)
      state.marketStats.cmc100 = ((top100MarketCap / 1e12) * 100).toFixed(2)

      // Randomly fluctuate other market stats for simulation
      state.marketStats.marketCapChangePercentage = -1.31 + (Math.random() * 0.2 - 0.1)
      state.marketStats.cmc100ChangePercentage = -1.41 + (Math.random() * 0.2 - 0.1)
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.assets = action.payload
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

// Selectors
export const selectAllAssets = (state) => state.crypto.assets
export const selectMarketStats = (state) => state.crypto.marketStats
export const selectActiveFilter = (state) => state.crypto.activeFilter
export const selectSearchTerm = (state) => state.crypto.searchTerm

export const selectFilteredAssets = createSelector(
  [selectAllAssets, selectSearchTerm, selectActiveFilter],
  (assets, searchTerm, activeFilter) => {
    // First filter by search term
    let filteredAssets = assets
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filteredAssets = assets.filter(
        (asset) => asset.name.toLowerCase().includes(term) || asset.symbol.toLowerCase().includes(term),
      )
    }

    // Then apply active filter
    switch (activeFilter) {
      case "top":
        return filteredAssets.sort((a, b) => b.marketCap - a.marketCap)
      case "trending":
        return filteredAssets.sort((a, b) => b.change24h - a.change24h)
      case "new":
        return filteredAssets.filter((asset) => asset.isNew)
      default:
        return filteredAssets
    }
  },
)

export const selectAssetById = createSelector([selectAllAssets, (_, id) => id], (assets, id) =>
  assets.find((asset) => asset.id === id),
)

export const { updatePrices, setSearchTerm, setActiveFilter } = cryptoSlice.actions

export default cryptoSlice.reducer
