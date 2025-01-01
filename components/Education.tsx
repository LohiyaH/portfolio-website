'use client'
import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const Education = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const relevantCoursework = [
    "Data Analysis",
    "Software Engineering", 
    "Operating Systems", 
    "Algorithms", 
    "Artificial Intelligence",
    "Machine Learning",
    "Database Management",
    "Computer Networks",
    "Cloud Computing"
  ]

  return (
    <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="left">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Education</h2>
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.2}>
          <div 
            className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                  Bachelor of Engineering in Computer Science, Data Science
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Shri Ramdeobaba College of Engineering and Management, Nagpur, Maharashtra
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Expected May 2025 | GPA: 8.42/10.0
                </p>
              </div>
              <div className="text-blue-600 dark:text-blue-400">
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className={`
              transition-all 
              duration-300 
              overflow-hidden 
              ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <h4 className="text-xl font-medium mt-4 mb-2 text-gray-700 dark:text-gray-300">
                Relevant Coursework:
              </h4>
              <div className="flex flex-wrap gap-2">
                {relevantCoursework.map((course, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Details on Hover */}
            {isExpanded && (
              <div className="mt-4 animate-fadeIn text-gray-600 dark:text-gray-300">
                <p className="text-sm">
                  Pursuing a comprehensive curriculum in Computer Science with a specialization in Data Science, 
                  focusing on advanced computational techniques and data-driven problem-solving.
                </p>
                <div className="mt-2 flex items-center text-sm">
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
                  Actively involved in research and practical applications of emerging technologies
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Education
