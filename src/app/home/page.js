'use client'

import LoginLinks from '../LoginLinks'
import Footer from '@/components/Footer'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
}

const Home = () => {
    return (
        <>
            <LoginLinks />

            {/* Hero Carousel Section */}
            <div className="relative bg-gray-100">
                <Slider {...carouselSettings} className="relative">
                    <div className="w-full h-128 bg-gray-300 flex items-center justify-center"> {/* Changed h-96 to h-128 */}
                        <Image src="/images/home/hero/1.jpg" alt="Hero Image 1" className="w-full h-full object-cover" width={1920} height={1080} />
                    </div>
                    <div className="w-full h-128 bg-gray-300 flex items-center justify-center"> {/* Changed h-96 to h-128 */}
                        <Image src="/images/home/hero/2.jpg" alt="Hero Image 2" className="w-full h-full object-cover" width={1920} height={1080} />
                    </div>
                    <div className="w-full h-128 bg-gray-300 flex items-center justify-center"> {/* Changed h-96 to h-128 */}
                        <Image src="/images/home/hero/3.jpg" alt="Hero Image 3" className="w-full h-full object-cover" width={1920} height={1080} />
                    </div>
                    <div className="w-full h-128 bg-gray-300 flex items-center justify-center"> {/* Changed h-96 to h-128 */}
                        <Image src="/images/home/hero/4.jpg" alt="Hero Image 4" className="w-full h-full object-cover" width={1920} height={1080} />
                    </div>
                    <div className="w-full h-128 bg-gray-300 flex items-center justify-center"> {/* Changed h-96 to h-128 */}
                        <Image src="/images/home/hero/5.jpg" alt="Hero Image 5" className="w-full h-full object-cover" width={1920} height={1080} />
                    </div>
                </Slider>

                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Unlock Your Potential with TECH STREET</h1>
                </div>
            </div>

            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <section className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to TECH STREET</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Empower your career with our diverse range of courses in programming languages, frameworks, and design.
                        </p>
                        <a
                            href="/courses"
                            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Explore Our Courses
                        </a>
                    </section>

                    {/* Featured Courses Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Featured Courses</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
                                <p className="text-gray-700 mb-4">
                                    Dive into front-end and back-end development with cutting-edge technologies like React, Node.js, and PHP.
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
                                    Master in-demand languages like JavaScript, Python, TypeScript, and more through our comprehensive courses.
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
                                    Develop your design expertise with our in-depth courses in Product Design and Graphic Design.
                                </p>
                                <a
                                    href="/courses/design"
                                    className="inline-block px-4 py-2 border border-blue-600 text-blue-600 text-sm font-semibold rounded-md hover:bg-blue-50 transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Technologies Section */}
                    <section className="bg-white py-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Technologies</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/javascript.svg" alt="JavaScript" className="w-24 h-24" />
                                {/* <Image src="/images/home/course/1.jpg" alt="JavaScript" className="w-24 h-24" /> */}
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/react.svg" alt="React" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/python.svg" alt="Python" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/nextjs.svg" alt="Next.js" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/typescript.svg" alt="TypeScript" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/php.svg" alt="PHP" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/laravel.svg" alt="Laravel" className="w-24 h-24" />
                            </div>
                            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md">
                                <img src="/images/flutter.svg" alt="Flutter" className="w-24 h-24" />
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section className="bg-gray-100 py-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">What Our Students Say</h2>
                        <Slider {...carouselSettings} className="mx-auto max-w-3xl">
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">
                                    "TECH STREET has been a game-changer for my career. The courses are well-structured, and the instructors are top-notch. Highly recommend!"
                                </p>
                                <p className="font-semibold text-gray-900">Jane Doe</p>
                                <p className="text-gray-600">Software Engineer</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">
                                    "I learned so much from the web development course. The practical projects were incredibly helpful in building my portfolio."
                                </p>
                                <p className="font-semibold text-gray-900">John Smith</p>
                                <p className="text-gray-600">Frontend Developer</p>
                            </div>
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">
                                    "The design courses provided me with the skills I needed to transition into a new career. The content is relevant and up-to-date."
                                </p>
                                <p className="font-semibold text-gray-900">Emily Johnson</p>
                                <p className="text-gray-600">Graphic Designer</p>
                            </div>
                        </Slider>
                    </section>

                    {/* Call to Action Section */}
                    <section className="text-center py-12 bg-blue-600 text-white">
                        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-lg mb-6">
                            Join TECH STREET today and become an expert in your field with our comprehensive courses.
                        </p>
                        <a
                            href="/register"
                            className="inline-block px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Get Started
                        </a>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
