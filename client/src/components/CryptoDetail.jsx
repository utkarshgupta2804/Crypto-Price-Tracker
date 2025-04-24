"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectAssetById, fetchCryptoData } from "../store/cryptoSlice"
import { formatCurrency, formatNumber, formatPercentage } from "../utils/formatters"
import { ArrowLeft, Share2, Star } from "lucide-react"
import PriceChart from "./PriceChart"

const CryptoDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const asset = useSelector((state) => selectAssetById(state, Number.parseInt(id)))
    const [activeTab, setActiveTab] = useState("chart")
    const [timeframe, setTimeframe] = useState("1D")

    useEffect(() => {
        if (!asset) {
            dispatch(fetchCryptoData())
        }
    }, [dispatch, asset, id])

    if (!asset) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="pt-6">
            <div className="flex items-center mb-6">
                <Link to="/" className="mr-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div className="flex items-center">
                    <img src={asset.logo || "/placeholder.svg"} alt={asset.name} className="w-10 h-10 mr-3" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {asset.name} <span className="text-gray-500 dark:text-gray-400">{asset.symbol}</span>
                        </h1>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Rank #{asset.rank}</div>
                    </div>
                </div>
                <div className="ml-auto flex space-x-2">
                    <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Star className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Share2 className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">{formatCurrency(asset.price)}</div>
                                <div
                                    className={`text-sm font-medium ${asset.change24h >= 0 ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"
                                        }`}
                                >
                                    {formatPercentage(asset.change24h)} (24h)
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className={`px-3 py-1 text-sm rounded-md ${timeframe === "1D"
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setTimeframe("1D")}
                                >
                                    1D
                                </button>
                                <button
                                    className={`px-3 py-1 text-sm rounded-md ${timeframe === "7D"
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setTimeframe("7D")}
                                >
                                    7D
                                </button>
                                <button
                                    className={`px-3 py-1 text-sm rounded-md ${timeframe === "1M"
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setTimeframe("1M")}
                                >
                                    1M
                                </button>
                                <button
                                    className={`px-3 py-1 text-sm rounded-md ${timeframe === "1Y"
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setTimeframe("1Y")}
                                >
                                    1Y
                                </button>
                                <button
                                    className={`px-3 py-1 text-sm rounded-md ${timeframe === "ALL"
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setTimeframe("ALL")}
                                >
                                    ALL
                                </button>
                            </div>
                        </div>
                        <PriceChart data={asset.detailedChartData} timeframe={timeframe} />
                    </div>
                </div>

                <div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{asset.name} Statistics</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Market Cap</span>
                                <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(asset.marketCap)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Volume (24h)</span>
                                <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(asset.volume24h)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 dark:text-gray-400">Circulating Supply</span>
                                <span className="text-gray-900 dark:text-white font-medium">
                                    {formatNumber(asset.circulatingSupply)}M {asset.symbol}
                                </span>
                            </div>
                            {asset.maxSupply && (
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Max Supply</span>
                                    <span className="text-gray-900 dark:text-white font-medium">
                                        {formatNumber(asset.maxSupply)}M {asset.symbol}
                                    </span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-gray-500 dark:text-gray-400">All-Time High</span>
                                <span className="text-gray-900 dark:text-white font-medium">{formatCurrency(asset.ath || 0)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="-mb-px flex">
                        <button
                            className={`py-4 px-6 text-sm font-medium ${activeTab === "chart"
                                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                            onClick={() => setActiveTab("chart")}
                        >
                            Chart
                        </button>
                        <button
                            className={`py-4 px-6 text-sm font-medium ${activeTab === "markets"
                                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                            onClick={() => setActiveTab("markets")}
                        >
                            Markets
                        </button>
                        <button
                            className={`py-4 px-6 text-sm font-medium ${activeTab === "news"
                                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                            onClick={() => setActiveTab("news")}
                        >
                            News
                        </button>
                        <button
                            className={`py-4 px-6 text-sm font-medium ${activeTab === "community"
                                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                            onClick={() => setActiveTab("community")}
                        >
                            Community
                        </button>
                        <button
                            className={`py-4 px-6 text-sm font-medium ${activeTab === "about"
                                    ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                            onClick={() => setActiveTab("about")}
                        >
                            About
                        </button>
                    </nav>
                </div>
                <div className="p-6">
                    {activeTab === "chart" && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Price Chart</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {asset.name} price chart provides real-time price updates and market movements.
                            </p>
                        </div>
                    )}
                    {activeTab === "markets" && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Markets</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {asset.name} is traded on various exchanges with different trading pairs.
                            </p>
                        </div>
                    )}
                    {activeTab === "news" && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Latest News</h3>
                            <p className="text-gray-500 dark:text-gray-400">Stay updated with the latest {asset.name} news.</p>
                        </div>
                    )}
                    {activeTab === "community" && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Community</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Join the {asset.name} community and participate in discussions.
                            </p>
                        </div>
                    )}
                    {activeTab === "about" && (
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About {asset.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                {asset.name} ({asset.symbol}) is a cryptocurrency launched in 2009. It aims to revolutionize the
                                financial system through decentralized technology.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CryptoDetail
