import { useState } from 'react'
import { FaUserCircle, FaBell } from 'react-icons/fa'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

const SearchBar = ({ onSearch, notifications }) => {
    const { user } = useAuth()
    const [query, setQuery] = useState('')
    const [showNotifications, setShowNotifications] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
        onSearch(e.target.value)
    }

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications)
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
            <div className="flex items-center space-x-40">
                <Link href="/profile" className="flex items-center space-x-2">
                    <FaUserCircle className="text-gray-500 h-6 w-6" />
                    <span className="text-black font-bold">{user?.name}</span>
                </Link>

                <div className="relative">
                    <button
                        onClick={toggleNotifications}
                        className="relative text-gray-500 h-6 w-6 focus:outline-none cursor-pointer"
                    >
                        <FaBell />
                    </button>

                    {/* Notifications Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-20">
                            <h4 className="font-bold text-sm text-gray-700 mb-2">Notifications</h4>
                            <ul>
                                {notifications && notifications.length > 0 ? (
                                    notifications.map((notification, index) => (
                                        <li key={index} className="text-sm text-gray-600 mb-2">
                                            {notification}
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-sm text-gray-600">No new notifications</li>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchBar
