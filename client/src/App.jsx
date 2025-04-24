import { Provider } from "react-redux"
import { store } from "./store"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CryptoTable from "./components/CryptoTable"
import Header from "./components/Header"
import MarketOverview from "./components/MarketOverview"
import CategoryTabs from "./components/CategoryTabs"
import FilterOptions from "./components/FilterOptions"
import { ThemeProvider } from "./components/ThemeProvider"
import CryptoDetail from "./components/cryptoDetail"
import "./index.css"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen w-full bg-white dark:bg-[#0d1421] transition-colors duration-200">
            <Header />
            <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white pt-6 pb-2">
                        Today's Cryptocurrency Prices by Market Cap
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        The global crypto market cap is $2.89T, a <span className="text-red-500">1.31%</span> decrease
                        over the last day.{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                          Read More
                        </a>
                      </p>
                      <MarketOverview />
                      <CategoryTabs />
                      <FilterOptions />
                      <CryptoTable />
                    </>
                  }
                />
                <Route path="/crypto/:id" element={<CryptoDetail />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
