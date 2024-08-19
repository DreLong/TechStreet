'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const pathname = usePathname()

    const isActive = (path) => pathname === path
        ? 'border-b-2 border-blue-600 text-blue-600 font-semibold'
        : 'text-black hover:border-b-2 hover:border-blue-600 hover:text-blue-600'

    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-25"> {/* Changed h-16 to h-20 */}
                <div className="flex-1 flex items-center">
                    {/* Logo */}
                    <div className="text-black font-bold text-xl">
                        <Link href="/">
                            <Image src="/images/logo/2.svg" alt="Logo" width={150} height={150} />
                        </Link>
                    </div>
                </div>

                <div className="flex-1 flex justify-center space-x-4">
                    {/* Navigation Links */}
                    {!user && (
                        <div className="flex items-center space-x-4">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link
                                        href="/"
                                        className={`pb-1 ${isActive('/')}`}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/about"
                                        className={`pb-1 ${isActive('/about')}`}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/courses"
                                        className={`pb-1 ${isActive('/courses')}`}
                                    >
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className={`pb-1 ${isActive('/contact')}`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="flex-1 flex justify-end space-x-4">
                    {/* Login and Register Links */}
                    {!user && (
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 border border-black text-black text-sm font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 border border-black text-black text-sm font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                            >
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {user && (
                    <div className="flex-1 flex justify-end">
                        <Link
                            href="/dashboard"
                            className="px-4 py-2 border border-black text-black text-sm font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Dashboard
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default LoginLinks
