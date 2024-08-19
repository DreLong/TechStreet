import Image from 'next/image'

const instructors = [
    { name: 'Jane Smith', img: '/images/dashboard/profiles/1.png' },
    { name: 'John Doe', img: '/images/dashboard/profiles/1.png' },
    { name: 'Sam Lee', img: '/images/dashboard/profiles/1.png' },
]

const CourseInstructors = () => (
    <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-purple-800">Course Instructors</h2>
        <div className="flex space-x-4 mt-4">
            {instructors.map(instructor => (
                <div key={instructor.name} className="text-center">
                    <Image
                        src={instructor.img}
                        alt={instructor.name}
                        width={90}
                        height={90}
                        className="rounded-full border-purple-800"
                    />
                    <p className="text-sm mt-2">{instructor.name}</p>
                </div>
            ))}
        </div>
    </div>
)

export default CourseInstructors
