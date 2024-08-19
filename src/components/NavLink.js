import Link from 'next/link'

const NavLink = ({ active = false, children, ...props }) => (
    <Link
        {...props}
        className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ${
            active
                ? 'bg-white text-purple-700'
                : 'text-white hover:bg-gray-700 focus:bg-gray-700'
        }`}
    >
        {children}
    </Link>
)

export default NavLink
