'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      setIsMobileMenuOpen(false) // Close mobile menu after selecting a section
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const menuItems = [
    { label: 'About', section: 'about' },
    { label: 'Education', section: 'education' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
    { label: 'Resume', type: 'external', href: 'https://drive.google.com/drive/folders/1yVn2SHluyRNgX_rFP5gSRIUhUdvjnsw-?usp=sharing' },
    { label: 'Certifications', type: 'external', href: 'https://drive.google.com/drive/folders/1LwGAOvEEjuHdQcD_Rg1OpIceWAh_X2YC?usp=sharing'}
  ]

  return (
    <header className={`fixed w-full z-20 transition-all duration-300 ease-in-out backdrop-blur-sm ${
      isScrolled ? 'bg-gray-100/90 dark:bg-gray-700/90 shadow-md' : 'bg-gray-200/50 dark:bg-gray-800/50'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.filter(item => item.type !== 'external').map((item) => (
            <li key={item.section}>
              <Link 
                href={item.section === 'projects' ? `#projects` : `#${item.section}`} 
                onClick={(e) => item.section !== 'projects' ? scrollToSection(e, `#${item.section}`) : scrollToSection(e, `#projects`)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="https://drive.google.com/drive/folders/1yVn2SHluyRNgX_rFP5gSRIUhUdvjnsw-?usp=sharing" 
              target="_blank"
              download 
              className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-700 shadow-md">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {menuItems.map((item) => (
                <li key={item.section || 'resume'}>
                  {item.type === 'external' ? (
                    <a 
                      href={item.href} 
                      target="_blank"
                      download 
                      className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link 
                      href={item.section === 'projects' ? `#projects` : `#${item.section}`} 
                      onClick={(e) => item.section !== 'projects' ? scrollToSection(e, `#${item.section}`) : scrollToSection(e, `#projects`)}
                      className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Theme Toggle - visible on both mobile and desktop */}
        <div className="absolute right-20 md:right-6 top-1/2 transform -translate-y-1/2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
