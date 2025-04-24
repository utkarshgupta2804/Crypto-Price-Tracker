"use client"

import { BarChart2, Filter, Grid, LineChart, Star, TrendingUp } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { setActiveFilter, selectActiveFilter } from "../store/cryptoSlice"

const FilterOptions = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector(selectActiveFilter)

  const handleFilterClick = (filter) => {
    dispatch(setActiveFilter(filter))
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <div className="flex flex-wrap gap-2">
        <button
          className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium ${
            activeFilter === "coins"
              ? "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleFilterClick("coins")}
        >
          <Grid className="h-4 w-4 mr-2" />
          Coins
        </button>
        <button
          className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium ${
            activeFilter === "dexscan"
              ? "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleFilterClick("dexscan")}
        >
          <BarChart2 className="h-4 w-4 mr-2" />
          DexScan
        </button>
        <button
          className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium ${
            activeFilter === "top"
              ? "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleFilterClick("top")}
        >
          <LineChart className="h-4 w-4 mr-2" />
          Top
        </button>
        <button
          className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium ${
            activeFilter === "trending"
              ? "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleFilterClick("trending")}
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Trending
        </button>
        <button
          className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-medium ${
            activeFilter === "new"
              ? "bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
          onClick={() => handleFilterClick("new")}
        >
          <Star className="h-4 w-4 mr-2" />
          New
        </button>
      </div>
      <div className="flex gap-2">
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </button>
        <select className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
          <option>Show 100</option>
          <option>Show 50</option>
          <option>Show 20</option>
        </select>
      </div>
    </div>
  )
}

export default FilterOptions
