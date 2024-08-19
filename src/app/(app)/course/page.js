"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Courses = () => {
    const [availableCourses, setAvailableCourses] = useState([])
    const [registeredCourses, setRegisteredCourses] = useState([
        { id: 1, title: 'Web Development', progress: '60%' },
        { id: 2, title: 'Programming Languages', progress: '30%' }
    ])

    useEffect(() => {
        // Simulate fetching data
        const fetchCourses = async () => {
            // Replace this with actual API call
            const fetchedCourses = [
                { id: 1, title: 'Web Development', description: 'Learn front-end and back-end development.', image: '/images/courses/web-development.jpg' },
                { id: 2, title: 'Programming Languages', description: 'Master languages like JavaScript, Python, etc.', image: '/images/courses/programming-languages.jpg' },
                { id: 3, title: 'Design Courses', description: 'Courses in Product Design and Graphic Design.', image: '/images/courses/design.jpg' },
            ]
            setAvailableCourses(fetchedCourses)
        }

        fetchCourses()
    }, [])


    useEffect(() => {
        // Simulate fetching data
        const fetchRegisteredCourses = async () => {
            // Replace this with actual API call
            const fetchedCourses = [
                { id: 1, title: 'Web Development', progress: '60%' },
                { id: 2, title: 'Programming Languages', progress: '30%' }
            ]
            setRegisteredCourses(fetchedCourses)
        }

        fetchRegisteredCourses()
    }, [])

    return (
        <>
            <main className="bg-gray-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <section className="bg-white shadow-sm sm:rounded-lg mb-12">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Available Courses</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {availableCourses.map(course => (
                                    <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <Image src={course.image} alt={course.title} className="w-full h-40 object-cover" width={500} height={300} />
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
                                            <p className="text-gray-700 mb-4">{course.description}</p>
                                            <Link href={`/courses/${course.id}`}>
                                                <div className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                                                    View Details
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-white shadow-sm sm:rounded-lg mb-12">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Registered Courses</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {registeredCourses.map(course => (
                                    <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
                                        <p className="text-gray-700 mb-4">Progress: {course.progress}</p>
                                        <Link href={`/courses/${course.id}`}>
                                            <div className="inline-block px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-md hover:bg-blue-50 transition duration-300">
                                                View Details
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">Resources</h1>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><a href="#" className="text-blue-600 hover:underline">Official Documentation</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Course FAQs</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Community Forums</a></li>
                                <li><a href="#" className="text-blue-600 hover:underline">Support Contact</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Courses
