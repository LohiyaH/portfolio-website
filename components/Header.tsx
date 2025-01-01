'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.querySelector(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ease-in-out backdrop-blur-sm ${
      isScrolled ? 'bg-gray-100/90 dark:bg-gray-700/90 shadow-md' : 'bg-gray-200/50 dark:bg-gray-800/50'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-8">
          {['about', 'education', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <Link 
                href={section === 'projects' ? `#projects` : `#${section}`} 
                onClick={(e) => section !== 'projects' ? scrollToSection(e, `#${section}`) : scrollToSection(e, `#projects`)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="https://drive.google.com/file/d/1xDhnn0NKlkSto1od-GSnzpfudw2jQvKs/view?usp=sharing" 
              target="_blank"
              download 
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
