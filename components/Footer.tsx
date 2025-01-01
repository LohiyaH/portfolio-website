import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/hlohiya/', 
    icon: FaLinkedin 
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/LohiyaH', 
    icon: FaGithub 
  }
] as const;

function Footer() {
  const currentYear = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {currentYear} Harsh Lohiya. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 text-2xl transition-colors duration-200"
            >
              <link.icon />
            </a>
          ))}
          <a 
            href="mailto:harshrlohiya@gmail.com" 
            className="hover:text-blue-400 text-2xl transition-colors duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
