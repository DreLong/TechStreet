// app/Contact.js
import LoginLinks from '../LoginLinks'
import Footer from '@/components/Footer'

const Contact = () => {
    return (
        <>
            <LoginLinks />

            <div className="bg-gray-100">
                {/* Hero Section */}
                <section className="relative bg-blue-600 text-white py-24">
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg mb-6">
                            We’re here to help! If you have any questions or need further information, please don’t hesitate to reach out to us.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Contact Form Section */}
                    <section className="bg-white py-12 mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Get in Touch</h2>
                        <div className="max-w-2xl mx-auto">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        required
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>

                    {/* Contact Details Section */}
                    <section className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Contact Details</h2>
                        <div className="text-lg text-gray-700">
                            <p className="mb-4">
                                <strong>Email:</strong> <a href="mailto:support@techstreet.com" className="text-blue-600 hover:underline">support@techstreet.com</a>
                            </p>
                            <p className="mb-4">
                                <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a>
                            </p>
                            <p>
                                <strong>Address:</strong> 123 Tech Street, Innovation City, TX 12345
                            </p>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="text-center py-12 bg-blue-600 text-white">
                        <h2 className="text-3xl font-semibold mb-4">We Look Forward to Hearing from You</h2>
                        <p className="text-lg mb-6">
                            If you have any questions or need further assistance, don’t hesitate to reach out. Our team is here to help!
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact
