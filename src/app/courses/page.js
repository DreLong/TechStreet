// app/Courses.js
import LoginLinks from '../LoginLinks'
import Footer from '@/components/Footer'

const Courses = () => {
    return (
        <>
            <LoginLinks />

            <div className="bg-gray-100">
                {/* Hero Section */}
                <section className="relative bg-blue-600 text-white py-24">
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
                        <p className="text-lg mb-6">
                            Explore our diverse range of courses designed to help you master the latest technologies and design principles. Whether you’re just starting out or looking to advance your skills, we have something for everyone.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Featured Courses Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Featured Courses</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
                                <p className="text-gray-700 mb-4">
                                    Learn both front-end and back-end development with modern technologies including React, Node.js, and PHP.
                                </p>
                                <a
                                    href="/courses/web-development"
                                    className="inline-block px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-md hover:bg-blue-50 transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
                                <p className="text-gray-700 mb-4">
                                    Master popular languages like JavaScript, Python, TypeScript, and more with our expert-led courses.
                                </p>
                                <a
                                    href="/courses/programming-languages"
                                    className="inline-block px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-md hover:bg-blue-50 transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Courses</h3>
                                <p className="text-gray-700 mb-4">
                                    Enhance your design skills with comprehensive courses in Product Design and Graphic Design.
                                </p>
                                <a
                                    href="/courses/design"
                                    className="inline-block px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-md hover:bg-blue-50 transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Technologies</h3>
                                <p className="text-gray-700 mb-4">
                                    Dive into advanced topics like Next.js, Laravel, and Flutter (Dart) to stay ahead in the tech industry.
                                </p>
                                <a
                                    href="/courses/advanced-technologies"
                                    className="inline-block px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-md hover:bg-blue-50 transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="text-center py-12 bg-blue-600 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Ready to Enhance Your Skills?</h2>
                        <p className="text-lg mb-6">
                            Explore our full range of courses and take the next step in your learning journey with TECH STREET.
                        </p>
                        <a
                            href="/courses"
                            className="inline-block px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Explore All Courses
                        </a>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Courses
