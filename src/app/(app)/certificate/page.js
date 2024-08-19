"use client"

import Footer from '@/components/Footer'
import Image from 'next/image'

const Certificates = () => {
    const certificates = [
        { id: 1, title: 'Web Development Mastery', issuedDate: '2024-06-15', image: '/images/certificates/web-development.jpg' },
        { id: 2, title: 'Advanced Python Programming', issuedDate: '2024-07-22', image: '/images/certificates/python-programming.jpg' },
    ]

    return (
        <>
            <main className="bg-gray-100 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <section className="bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Certificates</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certificates.map(certificate => (
                                    <div key={certificate.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <Image src={certificate.image} alt={certificate.title} className="w-full h-40 object-cover" width={500} height={300} />
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{certificate.title}</h2>
                                            <p className="text-gray-700 mb-4">Issued Date: {new Date(certificate.issuedDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Certificates
