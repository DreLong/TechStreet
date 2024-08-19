"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import Modal from './Modal'
import SearchBar from './SearchBar'
import WelcomeSection from './WelcomeSection'
import FinanceSection from './FinanceSection'
import EnrolledCourses from './EnrolledCourses'
import AvailableCourses from './AvailableCourses'
import CourseInstructors from './CourseInstructors'
import DailyNotice from './DailyNotice'
import { fetchCourses, fetchUserCourses, registerForCourse } from '@/lib/courses'

const Dashboard = () => {
    const { user } = useAuth()
    const [courses, setCourses] = useState([])
    const [userCourses, setUserCourses] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(null)
    const [modalType, setModalType] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const availableCourses = await fetchCourses()
            const enrolledCourses = await fetchUserCourses()
            setCourses(availableCourses)
            setUserCourses(enrolledCourses)
            setFilteredCourses(enrolledCourses)
        }
        getData()
    }, [])

    const handleRegister = async (course) => {
        setSelectedCourse(course)
        setModalType('register')
        setIsModalOpen(true)
    }

    const handleViewProgress = (course) => {
        setSelectedCourse(course)
        setModalType('progress')
        setIsModalOpen(true)
    }

    const handleSearch = (query) => {
        const filtered = userCourses.filter(course =>
            course.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredCourses(filtered)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedCourse(null)
        setModalType(null)
    }

    const registerCourse = async () => {
        if (selectedCourse) {
            const result = await registerForCourse(selectedCourse.id)
            alert(result)
            closeModal()
        }
    }

    return (
        <>
            <div className="p-10 bg-purple-50 h-full">
                {/* Search Bar */}
                <div className="sticky top-0 bg-purple-50 z-10 p-4">
                    <SearchBar onSearch={handleSearch} />
                </div>

                {/* Welcome Section */}
                <WelcomeSection user={user} />

                {/* Finance Section and Enrolled Courses Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    <div className="col-span-2 flex flex-col">
                        <FinanceSection />
                        <EnrolledCourses courses={filteredCourses} onViewProgress={handleViewProgress} />
                        <AvailableCourses courses={courses} onRegister={handleRegister} />
                    </div>
                    <div className="col-span-1 flex flex-col space-y-6">
                        <CourseInstructors />
                        <DailyNotice />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {modalType === 'register' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Register for {selectedCourse?.title}</h2>
                        <p className="mb-4">Are you sure you want to register for this course?</p>
                        <div className="flex space-x-4">
                            <button
                                onClick={registerCourse}
                                className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                Register
                            </button>
                            <button
                                onClick={closeModal}
                                className="inline-block px-6 py-3 border border-gray-300 text-gray-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
                {modalType === 'progress' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">{selectedCourse?.title} Progress</h2>
                        <p className="mb-4">Current progress: {selectedCourse?.progress}%</p>
                        <div className="flex space-x-4">
                            <button
                                onClick={closeModal}
                                className="inline-block px-6 py-3 border border-gray-300 text-gray-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}

export default Dashboard
