import { useSelector } from "react-redux"
import { selectMarketStats } from "../store/cryptoSlice"

const MarketOverview = () => {
  const marketStats = useSelector(selectMarketStats)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">Market cap</div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">${marketStats.totalMarketCap}</div>
        <div className={`text-sm ${marketStats.marketCapChangePercentage >= 0 ? "text-green-500" : "text-red-500"}`}>
          {marketStats.marketCapChangePercentage >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(marketStats.marketCapChangePercentage).toFixed(2)}%
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">CMC100</div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">${marketStats.cmc100}</div>
        <div className={`text-sm ${marketStats.cmc100ChangePercentage >= 0 ? "text-green-500" : "text-red-500"}`}>
          {marketStats.cmc100ChangePercentage >= 0 ? "▲" : "▼"}{" "}
          {Math.abs(marketStats.cmc100ChangePercentage).toFixed(2)}%
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">Altcoin Index</div>
        <div className="flex items-center">
          <div className="text-xl font-bold text-gray-900 dark:text-white mr-2">{marketStats.altcoinIndex}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">/100</div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
          <div
            className="bg-gradient-to-r from-orange-500 to-orange-300 h-2.5 rounded-full"
            style={{ width: `${marketStats.altcoinIndex}%` }}
          ></div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">Fear & Greed</div>
        <div className="text-xl font-bold text-gray-900 dark:text-white">{marketStats.fearGreedIndex}</div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
            <div
              style={{ width: `${marketStats.fearGreedIndex}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-red-500 via-yellow-300 to-green-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MarketOverview
