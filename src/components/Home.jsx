import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-base'>
        {/* container */}
        <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-gray'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-blue-dark'>Anthony Pinson</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-blue-light'>Aspiring Robotics Software Engineer</h2>
            <p className='text-gray py-4 max-w-[700px]'>This page is dedicated to the projets I have been passionate to create.</p>
            <div>
                <Link to='portfolio' smooth={true} duration={500}>
                    <button className='text-gray group border-2 px-6 py-3 my-2 flex item-center hover:bg-blue-dark hover:border-blue-dark hover:text-base'>
                        <p>View Projects</p>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home