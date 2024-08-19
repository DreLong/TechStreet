import { useState } from 'react'
import { FaUserCircle, FaBell } from 'react-icons/fa'
import { useAuth } from '@/hooks/auth'

const SearchBar = ({ onSearch }) => {
    const { user } = useAuth()
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
        onSearch(e.target.value)
    }

    return (
        <div className="flex items-center justify-between space-x-6 mb-6">
            {/* Search Input */}
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search courses..."
                className="w-96 px-4 py-2 border-none rounded-md shadow-md bg-gray-100 focus:outline-none"
            />

            {/* User Profile and Notification Bell */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <FaUserCircle className="text-gray-500 h-6 w-6" />
                    <span className="text-black font-bold">{user?.name}</span>
                </div>
                <FaBell className="text-gray-500 h-6 w-6" />
            </div>
        </div>
    )
}

export default SearchBar
