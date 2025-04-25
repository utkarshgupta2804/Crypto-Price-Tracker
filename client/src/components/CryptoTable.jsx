"use client"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectFilteredAssets, updatePrices, fetchCryptoData } from "../store/cryptoSlice"
import { formatCurrency, formatNumber, formatPercentage } from "../utils/formatters"
import SparklineChart from "./SparklineChart"
import { WebSocketSimulator } from "../services/WebSocketSimulator"
import { Star } from "lucide-react"
import { Link } from "react-router-dom"

const CryptoTable = () => {
  const assets = useSelector(selectFilteredAssets)
  const dispatch = useDispatch()

  useEffect(() => {
    // Fetch initial crypto data
    dispatch(fetchCryptoData())

    const webSocketSimulator = new WebSocketSimulator()

    // Subscribe to price updates
    const unsubscribe = webSocketSimulator.subscribe((updates) => {
      dispatch(updatePrices({ updates }))
    })

    // Start the simulation
    webSocketSimulator.connect()

    return () => {
      unsubscribe()
      webSocketSimulator.disconnect()
    }
  }, [dispatch])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              1h %
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h %
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              7d %
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Volume(24h)
            </th>
            <th scope="col" className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Circulating Supply
            </th>
            <th
              scope="col"
              className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {assets.length > 0 ? (
            assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50">
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <button className="text-gray-300 hover:text-yellow-400 mr-2">
                      <Star className="h-4 w-4" />
                    </button>
                    <span className="text-sm text-gray-500">{asset.rank}</span>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <Link to={`/crypto/${asset.id}`} className="flex items-center hover:bg-gray-50">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img className="h-8 w-8 rounded-full" src={asset.logo || "/placeholder.svg"} alt={asset.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                      <div className="text-sm text-gray-500">{asset.symbol}</div>
                    </div>
                  </Link>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                  {formatCurrency(asset.price)}
                </td>
                <td
                  className={`px-3 py-4 whitespace-nowrap text-sm text-right ${
                    asset.change1h >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatPercentage(asset.change1h)}
                </td>
                <td
                  className={`px-3 py-4 whitespace-nowrap text-sm text-right ${
                    asset.change24h >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatPercentage(asset.change24h)}
                </td>
                <td
                  className={`px-3 py-4 whitespace-nowrap text-sm text-right ${
                    asset.change7d >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatPercentage(asset.change7d)}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                  {formatCurrency(asset.marketCap)}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                  {formatCurrency(asset.volume24h)}
                  <div className="text-xs text-gray-400">
                    {formatNumber(asset.volume24h / asset.price)} {asset.symbol}
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                  {formatNumber(asset.circulatingSupply)}M {asset.symbol}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <SparklineChart data={asset.sparklineData} change={asset.change7d} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="px-3 py-4 text-center text-gray-500">
                No cryptocurrencies found. Try adjusting your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
