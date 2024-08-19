// app/Footer.js
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl mb-4 sm:mb-0">
                        <Link href="/">
                            <Image src="/images/logo/2.svg" alt="Logo" width={150} height={150} />
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="flex space-x-6">
                        <a href="/about" className="hover:underline">About Us</a>
                        <a href="/courses" className="hover:underline">Courses</a>
                        <a href="/contact" className="hover:underline">Contact</a>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/terms" className="hover:underline">Terms of Service</a>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} TECH STREET. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
