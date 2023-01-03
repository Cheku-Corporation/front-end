export const Landing = () => {
    return (
        <>
            <div className={"container mx-auto"}>
                <header className='bg-base-100 py-2 sticky top-0 z-50'>
                    <div className='container'>
                        <div className="navbar px-0">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <ul tabIndex={0}
                                        className="dropdown-content mt-1 w-52 menu menu-compact p-2 bg-base-200 shadow rounded-box">
                                        <li><a href="/login">Login</a></li>
                                    </ul>
                                </div>
                                <a className="btn btn-ghost normal-case text-2xl">Cheku</a>
                            </div>
                            <div className="navbar-end hidden lg:flex">
                                <ul className="menu menu-horizontal p-0 font-medium text-2xl">
                                    <li><a href="/login">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className='container'>
                        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden"
                             style={{backgroundImage: `url("https://www.techexplorist.com/wp-content/uploads/2019/09/car-driving-696x422.jpg")`}}>
                            <div className="hero-overlay bg-opacity-60 bg-secondary"></div>
                            <div className="hero-content text-center text-secondary-content">
                                <div className="max-w-lg">
                                    <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                                        Let's make your car go to next stop
                                    </h1>
                                    <p className="mb-5 sm:mb-7 sm:text-lg">
                                        With Cheku you can easily manage your car's maintenance and repairs.
                                    </p>
                                    <a href={"/login"}  className="btn btn-warning sm:btn-wide">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-10 md:py-16'>
                    <div className='container'>
                        <div className='text-center'>
                            <h2 className='text-3xl sm:text-5xl font-bold mb-4'>What We Do</h2>
                            <p className='text-lg sm:text-2xl mb-6 md:mb-14'>
                                Save time managing your car's data.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                            <div
                                className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <div className="card-body items-center text-center gap-4">
                                    <i className='bi bi-search text-4xl'></i>
                                    <h2 className="card-title">Live Stream</h2>
                                    <p>
                                        Watch live all the <br className='hidden xl:inline'/>details including <br className='hidden xl:inline'/><b>location</b> of you car!
                                    </p>
                                </div>
                            </div>

                            <div
                                className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <div className="card-body items-center text-center gap-4">
                                    <i className='bi bi-chat-left-dots text-4xl'></i>
                                    <h2 className="card-title">Info Management</h2>
                                    <p>
                                        All the information <br className='hidden xl:inline'/> about your car <br className='hidden xl:inline'/> in one place.
                                    </p>
                                </div>
                            </div>

                            <div
                                className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                                <div className="card-body items-center text-center gap-4">
                                    <i className='bi bi-badge-ad text-4xl'></i>
                                    <h2 className="card-title">Multiple Car</h2>
                                    <p>
                                        You can manage the <br className='hidden xl:inline'/>number of cars you want!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='py-12 md:py-24'>
                    <div className='container'>
                        <div
                            className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
                            <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold text-primary'>Let's hit <br
                                className='hidden sm:inline'/>the road together.</span>
                            <a href={"/signin"} className='btn btn-secondary rounded-full sm:btn-lg'>Let's Drive!</a>
                        </div>
                    </div>
                </section>


            </div>
            <footer className='bg-base-200 text-base-content '>
                <div className='container mx-auto'>
                    <div className='flex flex-col sm:flex-row items-center border-t border-base-300 py-4 gap-2'>
                        <div className="flex-grow text-center sm:text-start">
                            <p>© 2022 Company, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}