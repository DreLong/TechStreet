'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Navigation user={user} />
            <main className="flex-1 ml-64 p-6">{children}</main> {/* Adjusted margin-left */}
        </div>
    )
}

export default AppLayout
