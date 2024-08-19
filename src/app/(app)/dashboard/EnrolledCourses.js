const EnrolledCourses = ({ courses, onViewProgress }) => {
    return (
        <>
            <h1 className="text-3xl font-bold text-purple-800 mb-6">Enrolled Courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {courses.slice(0, 4).map(course => (
                    <div key={course.id} className="p-6 bg-white rounded-lg shadow-md flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-semibold text-purple-800">{course.title}</h3>
                            <p className="text-gray-500">Progress: {course.progress}%</p>
                        </div>
                        <div className="mt-4">
                            <button
                                onClick={() => onViewProgress(course)}
                                className="w-full px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-md hover:bg-purple-700 transition duration-300"
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default EnrolledCourses
