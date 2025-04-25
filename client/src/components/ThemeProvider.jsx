"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Force light mode
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Always use light mode
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }, [])

  // Dummy toggle function that does nothing
  const toggleTheme = () => {
    // Do nothing - we're keeping it in light mode only
    console.log("Theme toggle disabled - using light mode only")
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
