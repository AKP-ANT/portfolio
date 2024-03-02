import React from 'react'
import catcageimg from '../assests/catcage.jpeg'
import printerimg from '../assests/printer.jpeg'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen  text-blue-light bg-base'>
        <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-blue-dark border-blue-dark'>Portfolio</p>
                <p className='py-6 text-gray'>// Check out some of my recent projects</p>
            </div>
            
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* card */}
                <div style={{backgroundImage: `url(${catcageimg})`}}
                className='shadow-lg shadow-blue-dark group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-blue-dark tracking-wider'>
                            Praxis Cat Cage
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-base font-bold text-lg bg-blue-dark'>Blog</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-base font-bold text-lg bg-blue-dark'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div style={{backgroundImage: `url(${printerimg})`}}
                className='shadow-lg shadow-blue-dark group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-blue-dark tracking-wider'>
                            3D Printer
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-dark font-bold text-lg'>Blog</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-dark font-bold text-lg'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Portfolio