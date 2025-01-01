'use client'
import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const personalTraits = [
    { 
      name: "Problem Solver", 
      color: "blue", 
      description: "Adept at breaking down complex challenges and developing innovative solutions through analytical thinking and creative problem-solving techniques."
    },
    { 
      name: "Tech Enthusiast", 
      color: "green", 
      description: "Passionate about emerging technologies, constantly exploring new frameworks, programming languages, and cutting-edge technological advancements."
    },
    { 
      name: "Lifelong Learner", 
      color: "purple", 
      description: "Committed to continuous personal and professional growth, always seeking opportunities to expand knowledge and skills in the ever-evolving tech landscape."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
            About Me
          </h2>
        </ScrollReveal>
        <div 
          className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="space-y-4">
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Computer Science and Data Science student at Shri Ramdeobaba College of Engineering and Management in Nagpur, Maharashtra. With a strong foundation in software development, data analytics, and machine learning, I'm driven to leverage technology to solve complex problems.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My experience spans web development, data science, and AI, and I'm always eager to learn and apply new technologies. I believe in the power of innovation and continuous learning to make a positive impact in the world of technology.
              </p>
            </ScrollReveal>

            {/* Personal Traits Section */}
            <div className={`
              transition-all 
              duration-300 
              overflow-hidden 
              ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <h4 className="text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300">
                Personal Traits:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {personalTraits.map((trait, index) => (
                  <div 
                    key={index} 
                    className={`
                      bg-${trait.color}-100 
                      dark:bg-${trait.color}-900 
                      text-${trait.color}-800 
                      dark:text-${trait.color}-200 
                      rounded-lg 
                      p-4 
                      shadow-md 
                      hover:shadow-lg 
                      transition-all 
                      duration-300
                    `}
                  >
                    <h5 className="font-semibold text-lg mb-2">{trait.name}</h5>
                    <p className="text-sm">{trait.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details on Hover */}
            {isExpanded && (
              <div className="mt-4 animate-fadeIn text-gray-600 dark:text-gray-300">
                <div className="flex items-center text-sm">
                  <svg 
                    className="h-4 w-4 mr-2 text-green-500" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Committed to using technology as a tool for positive social impact and innovation
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
