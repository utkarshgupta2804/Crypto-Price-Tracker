"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./ThemeProvider"
import { formatCurrency } from "../utils/formatters"

const PriceChart = ({ data, timeframe }) => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  // Filter data based on timeframe
  const getFilteredData = () => {
    if (!data) return []

    switch (timeframe) {
      case "1D":
        return data.slice(-24) // Last 24 hours
      case "7D":
        return data.slice(-168) // Last 7 days (24*7)
      case "1M":
        return data.slice(-720) // Last 30 days (24*30)
      case "1Y":
        return data.slice(-8760) // Last 365 days (24*365)
      case "ALL":
      default:
        return data
    }
  }

  useEffect(() => {
    if (!canvasRef.current || !data) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height
    const filteredData = getFilteredData()

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Find min and max values for scaling
    const minValue = Math.min(...filteredData)
    const maxValue = Math.max(...filteredData)
    const range = maxValue - minValue

    // Set chart styles based on theme
    const gridColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
    const textColor = theme === "dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"

    // Draw grid lines
    ctx.beginPath()
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = (height * i) / 5
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)

      // Add price labels
      ctx.fillStyle = textColor
      ctx.font = "10px Arial"
      ctx.textAlign = "left"
      const price = maxValue - (range * i) / 5
      ctx.fillText(formatCurrency(price), 5, y - 5)
    }

    // Vertical grid lines
    const timeLabels = []
    if (timeframe === "1D") {
      timeLabels.push("00:00", "06:00", "12:00", "18:00", "23:59")
    } else if (timeframe === "7D") {
      timeLabels.push("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")
    } else {
      timeLabels.push("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
    }

    for (let i = 0; i < timeLabels.length; i++) {
      const x = (width * i) / (timeLabels.length - 1)
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)

      // Add time labels
      ctx.fillStyle = textColor
      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      ctx.fillText(timeLabels[i], x, height - 5)
    }

    ctx.stroke()

    // Determine if price trend is positive or negative
    const isPositive = filteredData[0] <= filteredData[filteredData.length - 1]
    const lineColor = isPositive ? "#22c55e" : "#ef4444"
    const fillColor = isPositive ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"

    // Draw the price line
    ctx.beginPath()
    ctx.strokeStyle = lineColor
    ctx.lineWidth = 2

    filteredData.forEach((value, index) => {
      const x = (index / (filteredData.length - 1)) * width
      const y = height - ((value - minValue) / range) * (height * 0.8) - height * 0.1

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Fill area under the line
    ctx.lineTo(width, height)
    ctx.lineTo(0, height)
    ctx.closePath()
    ctx.fillStyle = fillColor
    ctx.fill()
  }, [data, timeframe, theme])

  return (
    <div className="w-full h-[400px] relative">
      <canvas ref={canvasRef} width={800} height={400} className="w-full h-full" />
    </div>
  )
}

export default PriceChart
