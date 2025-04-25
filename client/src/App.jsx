import { Provider } from "react-redux"
import { store } from "./store"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CryptoTable from "./components/CryptoTable"
import Header from "./components/Header"
import MarketOverview from "./components/MarketOverview"
import CategoryTabs from "./components/CategoryTabs"
import FilterOptions from "./components/FilterOptions"
import { ThemeProvider } from "./components/ThemeProvider"
import CryptoDetail from "./components/CryptoDetail"
import "./index.css"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen w-full bg-white transition-colors duration-200">
            <Header />
            <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <h1 className="text-3xl font-bold text-gray-900 pt-6 pb-2">
                        Today's Cryptocurrency Prices by Market Cap
                      </h1>
                      
                      <MarketOverview />
                      <CategoryTabs />
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
