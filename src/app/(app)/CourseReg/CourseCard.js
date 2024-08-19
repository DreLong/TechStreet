"use client"

import Link from 'next/link'
import Image from 'next/image'

const CourseCard = ({ course, buttonText }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col items-center max-w-xs min-w-[450px] flex-shrink-0">
            {/* Course Image */}
            <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden mb-4 relative">
                <Image 
                    src={`/images/courses/${course.id}.jpg`} 
                    alt={course.title} 
                    width={400} 
                    height={160} 
                    layout="responsive" 
                    objectFit="cover" 
                    className="rounded-lg"
                />
            </div>

            <h3 className="text-lg font-semibold mb-2 text-center">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">Instructor: {course.instructor}</p>
            <Link href={`/register/${course.id}`}>
                <div className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 text-center cursor-pointer">
                    {buttonText}
                </div>
            </Link>
        </div>
    )
}

export default CourseCard
