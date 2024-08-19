// app/About.js
import LoginLinks from '../LoginLinks'
import Footer from '@/components/Footer'

const About = () => {
    return (
        <>
            <LoginLinks />
            
            <div className="bg-gray-100">
                {/* Hero Section */}
                <section className="relative bg-blue-600 text-white py-24">
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-bold mb-4">About TECH STREET</h1>
                        <p className="text-lg mb-6">
                            Discover our commitment to providing top-notch education in technology and design. Our goal is to empower you with the skills needed to excel in a rapidly evolving digital world.
                        </p>
                        <a
                            href="/courses"
                            className="inline-block px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Explore Our Courses
                        </a>
                    </div>
                </section>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Our Mission Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Mission</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Our mission is to deliver high-quality, practical education that bridges the gap between learning and real-world application. We strive to create an inclusive and supportive environment that fosters growth and innovation.
                        </p>
                        <p className="text-lg text-gray-700">
                            We offer a diverse range of courses designed to help you master the latest technologies and design principles. Whether you’re a beginner or looking to advance your skills, TECH STREET is here to guide you every step of the way.
                        </p>
                    </section>

                    {/* Our Story Section */}
                    <section className="bg-white py-12 mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Story</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-center justify-center">
                                <img src="/images/about/me/6.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-lg text-gray-700 mb-4">
                                    TECH STREET was founded with a vision to make high-quality tech education accessible to everyone. Our founders, experienced professionals in the tech industry, recognized the need for practical, hands-on learning experiences that could be adapted to the evolving demands of the industry.
                                </p>
                                <p className="text-lg text-gray-700">
                                    Since our inception, we’ve helped thousands of students achieve their goals and transform their careers. We are committed to continuous improvement and innovation, ensuring that our courses remain relevant and valuable.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Meet the Team Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Meet the Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src="/images/about/me/6.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alice Johnson</h3>
                                <p className="text-gray-700">Co-Founder & CEO</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src="/images/about/me/6.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bob Smith</h3>
                                <p className="text-gray-700">Co-Founder & CTO</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <img src="/images/about/me/6.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carol Williams</h3>
                                <p className="text-gray-700">Head of Design</p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="text-center py-12 bg-blue-600 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Join Us on Our Mission</h2>
                        <p className="text-lg mb-6">
                            Ready to take the next step in your tech journey? Explore our courses and become part of a community dedicated to excellence and innovation.
                        </p>
                        <a
                            href="/courses"
                            className="inline-block px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Explore Courses
                        </a>
                    </section>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default About
