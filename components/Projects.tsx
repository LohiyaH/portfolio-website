'use client'
import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface ProjectSkills {
  languages: string[];
  frameworks: string[];
  concepts: string[];
  tools: string[];
  cloudPlatforms?: string[];
}

const projects = [
  {
    title: "AI-BASED FRAUD DETECTION SYSTEM",
    shortDescription: "Developed an AI-powered fraud detection pipeline with 95% accuracy using machine learning techniques.",
    description: "Developed a fraud detection pipeline using Isolation Forest and Random Forest models, achieving 95% accuracy. Employed preprocessing techniques such as feature scaling and class balancing to enhance anomaly detection. Created a real-time fraud detection dashboard for actionable insights and trend analysis.",
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Random Forest"],
    link: "https://github.com/LohiyaH/AI-Based-Fraud-Detection"
  },
  {
    title: "FINANCIAL NEWS SENTIMENT ANALYZER",
    shortDescription: "Created an NLP-driven tool to analyze sentiment in financial news using machine learning.",
    description: "Engineered a Financial-News-Sentiment-Analyzer using Python, NLP, and Machine Learning to analyze financial news. Built sentiment analysis models with OpenAI APIs, enhancing classification accuracy and insights.",
    skills: ["Python", "NLP", "Machine Learning", "OpenAI API"],
    link: "https://github.com/LohiyaH/Financial-News-Sentiment-Analyzer"
  },
  {
    title: "DATASET SUMMARIZER",
    shortDescription: "Developed a data analysis tool that improves exploration efficiency by 40% using advanced statistical methods.",
    description: "Created a data analysis tool using advanced statistical methods, enhancing data exploration efficiency by 40%. Extracted critical patterns with 95% accuracy through machine learning and visualization techniques. Enhanced the summarization process with advanced feature engineering, enabling faster extraction of key patterns.",
    skills: ["Python", "Data Analysis", "Statistical Methods", "Machine Learning"],
    link: "https://github.com/LohiyaH/Dataset_Summariser"
  },
  {
    title: "MOVIE MIND",
    shortDescription: "Built a responsive web app for real-time movie data and reviews using modern web technologies.",
    description: "Designed and developed MovieMind using React, Next.js, and TypeScript, providing real-time movie data and reviews. Integrated the TMDB API to fetch dynamic data and optimized API handling for enhanced performance.",
    skills: ["React", "Next.js", "TypeScript", "TMDB API"],
    link: "https://github.com/LohiyaH/MovieMind"
  },
  {
    title: "STOCK MANAGEMENT SYSTEM",
    shortDescription: "Developed a Next.js-based system for real-time inventory tracking and automated reporting.",
    description: "Built a stock management system with Next.js for real-time inventory tracking and automated reporting. Engineered a responsive UI for seamless management of stock levels, orders, and supplier information.",
    skills: ["Next.js", "React", "Inventory Management", "Reporting"],
    link: "https://github.com/LohiyaH/stock-management-system"
  },
  {
    title: "AIM GAME",
    shortDescription: "Created a high-performance aim trainer web app with 100+ daily active users.",
    description: "Formulated an aim trainer web app which had 100+ daily active users, leveraging viral marketing campaigns. Implemented accurate tracking of mouse movements and millisecond clicks, ensuring a seamless experience. Optimized rendering speeds by 20% and reduced backend calls by 50% for a seamless user experience.",
    skills: ["Web Development", "Performance Optimization", "User Experience"],
    link: "https://github.com/LohiyaH/aim_game"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="right">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Projects</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <div 
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.shortDescription}</p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {activeProject === index && (
                  <p className="text-gray-600 dark:text-gray-400 mb-4 animate-fadeIn">{project.description}</p>
                )}
                
                <a 
                  href={project.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 flex items-center"
                >
                  View Project
                  <svg 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
