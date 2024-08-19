// Simulated API calls

// Function to fetch available courses
export const fetchCourses = async () => {
    return [
        { id: 1, title: 'Object oriented programming', description: 'Learn object-oriented concepts and methodologies.' },
        { id: 2, title: 'Fundamentals of database systems', description: 'Master database management and design.' },
    ]
}

// Function to fetch user courses
export const fetchUserCourses = async () => {
    return [
        { id: 1, title: 'Object oriented programming', progress: 50 },
        { id: 2, title: 'Fundamentals of database systems', progress: 20 },
    ]
}

// Function to register for a course
export const registerForCourse = async (courseId) => {
    // Simulate registration by returning a success message
    return `Successfully registered for course with ID ${courseId}`
}
