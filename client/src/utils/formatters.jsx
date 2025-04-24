export const formatCurrency = (value) => {
  // Format large numbers as currency
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`
  } else if (value >= 1) {
    return `$${value.toFixed(2)}`
  } else {
    return `$${value.toFixed(6)}`
  }
}

export const formatNumber = (value) => {
  // Format large numbers
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(2)}T`
  } else if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`
  } else if (value >= 1e3) {
    return `${(value / 1e3).toFixed(2)}K`
  } else {
    return value.toFixed(2)
  }
}

export const formatPercentage = (value) => {
  // Format percentage with sign
  const sign = value >= 0 ? "▲" : "▼"
  return `${sign} ${Math.abs(value).toFixed(2)}%`
}
