import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-base text-blue-dark'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[900px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl text-grey font-bold inline border-b-4 border-blue-dark'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold text-blue-light'>
              <p>Hi. I'm Anthony, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-gray'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;