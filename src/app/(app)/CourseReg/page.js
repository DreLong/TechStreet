"use client"

import { useState } from 'react'
import SearchBar from './SearchBar'
import CourseCard from './CourseCard'

const CourseRegistrationPage = () => {
    const [searchQuery, setSearchQuery] = useState('')

    // Dummy data for registered and available courses
    const registeredCourses = [
        { id: 1, title: 'Introduction to JavaScript', instructor: 'John Doe' },
        { id: 2, title: 'Advanced React', instructor: 'Jane Smith' },
        { id: 3, title: 'Advanced React', instructor: 'Michael Brown' },
    ]
    
    const availableCourses = [
        { id: 5, title: 'Full Stack Development', instructor: 'Emily Davis' },
        { id: 6, title: 'Data Science with Python', instructor: 'Sarah Johnson' },
        { id: 7, title: 'Full Stack Development', instructor: 'Emily Davis' },
        { id: 8, title: 'Data Science with Python', instructor: 'Sarah Johnson' },
        { id: 9, title: 'Full Stack Development', instructor: 'Emily Davis' },
        { id: 10, title: 'Data Science with Python', instructor: 'Michael Brown' },
    ]

    // Filter available courses based on search query
    const filteredCourses = availableCourses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="p-10 bg-purple-50 h-screen">
            {/* Search Bar */}
            <div className="sticky top-0 bg-purple-50 z-10 p-4">
                <SearchBar onSearch={setSearchQuery} />
            </div>

            {/* Main Content */}
            <div className="mt-6">
                {/* Registered Courses */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Registered Courses</h2>
                    <div className="flex flex-wrap justify-start gap-6">
                        {registeredCourses.map(course => (
                            <CourseCard key={course.id} course={course} buttonText="Open" />
                        ))}
                    </div>
                </section>

                {/* Available Courses */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Available Courses</h2>
                    <div className="flex flex-wrap justify-start gap-6">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map(course => (
                                <CourseCard key={course.id} course={course} buttonText="Register" />
                            ))
                        ) : (
                            <p className="text-gray-500">No courses found.</p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CourseRegistrationPage
