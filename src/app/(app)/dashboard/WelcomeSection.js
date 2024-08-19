import Image from 'next/image'

const WelcomeSection = ({ user }) => (
    <div className="flex justify-between items-center mb-8 p-16 bg-white rounded-lg shadow-md">
        <div>
            <p className="text-gray-500 text-sm mb-2">September 4, 2023</p>
            <h1 className="text-3xl font-bold text-purple-800">Welcome back, {user?.name}!</h1>
            <p className="text-gray-500 mt-2">Always stay updated in your student portal</p>
        </div>
        <div className="relative w-48 h-48">
            <Image
                src="/images/illustrations/1.jpg"
                alt="Welcome Illustration"
                layout="fill"
                objectFit="contain"
            />
        </div>
    </div>
)

export default WelcomeSection
