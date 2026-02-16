function App() {
    return (
        <div className='min-h-screen bg-gray-100'>
            <header className='bg-white shadow'>
                <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                    <h1 className='text-2xl font-bold text-gray-900'>User Portal</h1>
                </nav>
            </header>
            <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                <div className='bg-white shadow rounded-lg p-6'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                        Welcome to User Portal
                    </h2>
                    <p className='text-gray-600'>
                        This is the user-facing application for Primera Denta.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
