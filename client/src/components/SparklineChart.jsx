"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./ThemeProvider"

const SparklineChart = ({ data, change }) => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  const isPositive = change >= 0
  const color = isPositive ? "#22c55e" : "#ef4444"

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Find min and max values for scaling
    const minValue = Math.min(...data)
    const maxValue = Math.max(...data)
    const range = maxValue - minValue

    // Draw the sparkline
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2

    data.forEach((value, index) => {
      const x = (index / (data.length - 1)) * width
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
    ctx.fillStyle = `${color}20` // 20% opacity
    ctx.fill()
  }, [data, color, theme]) // Re-render when theme changes

  return <canvas ref={canvasRef} className="sparkline" width={160} height={50} />
}

export default SparklineChart
