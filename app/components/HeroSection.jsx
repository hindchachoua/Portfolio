"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, i'm  {""}</div>
            <br></br>
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Hind',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'UX/UI Designer',
              1000,
              'Mobile Developer',
              1000
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
          </h1>
          <p className="text-[#ADB7BE] text-base  sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum nihil nemo et similique.
            Eos recusandae nobis exercitationem minima. Ab, modi. Ex at explicabo nihil ab reiciendis, possimus aperiam eveniet.
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white'>Hire Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 hover:bg-slate-800 text-white  mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          src="/images/me2.jpeg"
          alt="hero Image"
          width={300}
          height={300}
          />
          </div>
          
        </div>
      </div>
      
     
    </section>

  )
}

export default HeroSection