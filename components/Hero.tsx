import Image from 'next/image'
import TypewriterText from './TypewriterText'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-80 h-80 overflow-hidden rounded-full shadow-lg border-4 border-white dark:border-gray-800">
              <Image
                src="/images/profile/harsh_image.jpg"
                alt="Harsh Lohiya"
                width={400}
                height={400}
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <TypewriterText text="Hi, I'm " delay={100} />
              <TypewriterText 
                text="Harsh Lohiya" 
                delay={100} 
                className="text-yellow-300"
              />
            </h1>
            <p className="text-xl mb-8 opacity-0 animate-fadeIn animation-delay-2000">
              Computer Science & Data Science Student
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 dark:bg-gray-800 dark:text-blue-400 py-3 px-8 rounded-full font-bold text-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fadeIn animation-delay-3000"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
