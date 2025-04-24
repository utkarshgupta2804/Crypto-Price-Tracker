import { FlameIcon as Fire } from "lucide-react"

const CategoryTabs = () => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 mb-4 overflow-x-auto">
      <nav className="-mb-px flex space-x-8">
        <a
          href="#"
          className="border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 whitespace-nowrap py-4 px-1 font-medium text-sm"
        >
          All Crypto
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm"
        >
          NFTs
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm"
        >
          Categories
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm"
        >
          Token unlocks
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm flex items-center"
        >
          <span className="mr-1 text-green-500">♻️</span> Rehypo
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm flex items-center"
        >
          <Fire className="w-4 h-4 mr-1 text-orange-500" /> Binance Alpha
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm flex items-center"
        >
          <Fire className="w-4 h-4 mr-1 text-orange-500" /> Memes
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm flex items-center"
        >
          <Fire className="w-4 h-4 mr-1 text-orange-500" /> SOL
        </a>
        <a
          href="#"
          className="border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm flex items-center"
        >
          <Fire className="w-4 h-4 mr-1 text-orange-500" /> BNB
        </a>
      </nav>
    </div>
  )
}

export default CategoryTabs
