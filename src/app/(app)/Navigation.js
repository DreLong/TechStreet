import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaTachometerAlt, FaBook, FaCertificate, FaMoneyBill, FaRegCalendarCheck, FaCalendarAlt, FaRegStickyNote } from 'react-icons/fa'

const Navigation = () => {
    const { logout } = useAuth()
    const pathname = usePathname()

    return (
        <nav className="fixed top-10 left-5 bottom-10 h-[90%] bg-purple-700 text-white border border-purple-800 rounded-xl shadow-lg w-64 p-6">
            {/* Logo */}
            <div className="flex items-center mb-6">
                <Link href="/dashboard">
                    <Image src="/images/logo/2.svg" alt="Logo" width={150} height={150} />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 mb-6">
                <NavLink href="/dashboard" active={pathname === '/dashboard'}>
                    <FaTachometerAlt className="inline-block mr-3" />
                    Dashboard
                </NavLink>
                <NavLink href="/course" active={pathname === '/course'}>
                    <FaBook className="inline-block mr-3" />
                    Courses
                </NavLink>
                <NavLink href="/certificate" active={pathname === '/certificate'}>
                    <FaCertificate className="inline-block mr-3" />
                    Certificates
                </NavLink>
                <NavLink href="/Payment" active={pathname === '/payment'}>
                    <FaMoneyBill className="inline-block mr-3" />
                    Payment Info
                </NavLink>
                <NavLink href="/CourseReg" active={pathname === '/CourseReg'}>
                    <FaRegCalendarCheck className="inline-block mr-3" />
                    Course Registration
                </NavLink>
                <NavLink href="/Result" active={pathname === '/result'}>
                    <FaCalendarAlt className="inline-block mr-3" />
                    Result
                </NavLink>
                <NavLink href="/Notice" active={pathname === '/notice'}>
                    <FaRegStickyNote className="inline-block mr-3" />
                    Notice
                </NavLink>
                <NavLink href="/Schedule" active={pathname === '/schedule'}>
                    <FaRegCalendarCheck className="inline-block mr-3" />
                    Schedule
                </NavLink>
            </div>

            {/* Logout Button */}
            <div className="absolute bottom-6 left-6">
                <button
                    className="flex items-center text-sm font-medium text-white hover:text-gray-200 focus:outline-none transition duration-150 ease-in-out"
                    onClick={logout}
                >
                    <span className="ml-2">Logout</span>
                </button>
            </div>
        </nav>
    )
}

export default Navigation
