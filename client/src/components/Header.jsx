"use client"

import { useTheme } from "./ThemeProvider"
import { Search, Sun, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setSearchTerm } from "../store/cryptoSlice"

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const [searchInput, setSearchInput] = useState("")
  const dispatch = useDispatch()

  // Use debounce to prevent UI issues during search
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchTerm(searchInput))
    }, 300)

    return () => clearTimeout(timer)
  }, [searchInput, dispatch])

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-500 text-center font-sans tracking-tight drop-shadow-lg">
                Crypto Price Tracker
              </h1>
            <div className="hidden md:block ml-6 text-gray-500">
              Dominance: <span className="text-blue-500">BTC: 63.4%</span>{" "}
              <span className="text-blue-500">ETH: 7.3%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
