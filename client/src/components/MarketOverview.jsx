import { useSelector } from "react-redux"
import { selectMarketStats } from "../store/cryptoSlice"

const MarketOverview = () => {
  const marketStats = useSelector(selectMarketStats)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="text-sm text-gray-500">Market cap</div>
        <div className="text-xl font-bold text-gray-900">$2.94T</div>
        <div className={`text-sm ${marketStats.marketCapChangePercentage >= 0 ? "text-green-500" : "text-red-500"}`}>
          {marketStats.marketCapChangePercentage >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(marketStats.marketCapChangePercentage).toFixed(2)}%
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="text-sm text-gray-500">CMC100</div>
        <div className="text-xl font-bold text-gray-900">$179.85</div>
        <div className={`text-sm ${marketStats.cmc100ChangePercentage >= 0 ? "text-green-500" : "text-red-500"}`}>
          {marketStats.cmc100ChangePercentage >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(marketStats.cmc100ChangePercentage).toFixed(2)}%
        </div>
      </div>
    </div>
  )
}

export default MarketOverview
