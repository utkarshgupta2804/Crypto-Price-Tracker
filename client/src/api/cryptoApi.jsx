import { generateCryptoData } from "../data/cryptoDataGenerator"

// Simulates an API call to fetch crypto data
export const fetchCryptoDataApi = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Generate 100+ cryptocurrencies
  return generateCryptoData(120)
}
