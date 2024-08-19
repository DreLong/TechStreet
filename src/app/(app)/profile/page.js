"use client"


import { useAuth } from '@/hooks/auth'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'

const Profile = () => {
    const { user } = useAuth()
    const [editing, setEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        bio: user?.bio || ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Implement update logic here
        setEditing(false)
    }

    return (
        <>

            <main className="bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <section className="bg-white shadow-sm sm:rounded-lg mb-12 p-6">
                        <div className="flex items-center mb-8">
                            <Image 
                                src="/images/profile-placeholder.jpg" 
                                alt="Profile Picture" 
                                className="w-32 h-32 rounded-full border-4 border-blue-500" 
                                width={128} 
                                height={128} 
                            />
                            <div className="ml-6">
                                <h1 className="text-4xl font-bold text-gray-900">{user?.name}</h1>
                                <p className="text-lg text-gray-700">{user?.email}</p>
                                <p className="mt-2 text-gray-600">{user?.bio || 'This is your bio. Add something interesting about yourself.'}</p>
                            </div>
                        </div>
                        {editing ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        rows="4"
                                    />
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        type="submit"
                                        className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setEditing(false)}
                                        className="inline-block px-6 py-3 border border-gray-300 text-gray-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <button
                                onClick={() => setEditing(true)}
                                className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Edit Profile
                            </button>
                        )}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Profile
