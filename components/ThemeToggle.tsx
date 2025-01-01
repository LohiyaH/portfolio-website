'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="flex items-center cursor-pointer group"
      onClick={handleChange}
    >
      <div className="relative w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner transition-colors duration-300">
        <div 
          className={`absolute top-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ease-in-out 
            ${theme === 'dark' ? 'translate-x-9' : 'translate-x-1'}
          `}
        >
          {theme === 'light' ? (
            <FaSun className="w-full h-full p-1 text-yellow-500" />
          ) : (
            <FaMoon className="w-full h-full p-1 text-blue-600" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle
