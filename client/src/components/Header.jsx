"use client"

import { useTheme } from "./ThemeProvider"
import { Moon, Search, Sun, Menu } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../store/cryptoSlice"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [searchInput, setSearchInput] = useState("")
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <header className="bg-white dark:bg-[#0d1421] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg"
                alt="Crypto Price Tracker "
              />
            </Link>
            <div className="hidden md:block ml-6 text-gray-500 dark:text-gray-400">
              Dominance: <span className="text-blue-500">BTC: 63.4%</span>{" "}
              <span className="text-blue-500">ETH: 7.3%</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={handleSearch}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search..."
              />
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Connect Wallet
            </button>
            <button className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
