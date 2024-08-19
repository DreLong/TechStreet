const FinanceSection = () => (
    <>
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Finance</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-gray-500 text-lg">Total Payable</h2>
                <p className="text-2xl font-bold">$10,000</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-gray-500 text-lg">Total Paid</h2>
                <p className="text-2xl font-bold">$5,000</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-gray-500 text-lg">Others</h2>
                <p className="text-2xl font-bold">$300</p>
            </div>
        </div>
    </>
)

export default FinanceSection
