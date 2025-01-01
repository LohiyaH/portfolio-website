import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Contact Me</h2>
        <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
          <p className="text-center mb-8 text-gray-700 dark:text-gray-300">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
          <div className="flex flex-col space-y-4">
            <a href="mailto:harshrlohiya@gmail.com" className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email
            </a>
            <a href="https://www.linkedin.com/in/hlohiya" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zM8.5 14h-2V8h2v6zm-1-6.9C7 6.5 6.5 6 5.9 6s-1.1.5-1.1 1.1c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1zM15 14h-2v-3.3c0-.9-.3-1.5-1.1-1.5-.6 0-.9.4-1.1.8-.1.1-.1.3-.1.5V14h-2V8h2v.9c.3-.4.8-1 1.8-1 1.6 0 2.5 1 2.5 3.1V14z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/LohiyaH" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-900 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.7.115 2.5.337 1.912-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

