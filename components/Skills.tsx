import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const skills = [
    "Language Skills", 
    "Programming Languages", 
    "Frameworks", 
    "Databases", 
    "Concepts", 
    "Cloud Platforms", 
    "Tools"
  ];

  const skillsList = {
    "Language Skills": [
      "English (Proficient)", 
      "Hindi (Proficient)", 
      "German (Basic Communication)"
    ],
    "Programming Languages": ["Python", "Java", "C", "C++", "R", "Swift", "Go", "SQL", "MATLAB", "HTML/CSS/JS", "TypeScript"],
    "Frameworks": ["React", "Next.js", "Tailwind CSS", "Django", "Flask"],
    "Databases": ["MongoDB", "PostgreSQL", "Supabase"],
    "Concepts": ["Software Development", "Data Analytics", "Cloud Computing", "Generative AI", "Full Stack Web Development", "Data Structures and Algorithms"],
    "Cloud Platforms": ["Google Cloud", "Azure", "AWS"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Jupyter Lab"]
  };

  const certifications = [
    {
      name: "Generative AI for Everyone",
      issuer: "Coursera",
      date: "December 2024",
      link: "https://drive.google.com/file/d/1F37CP3gpiyAE_yt9X8R4rpYk9ubaalqp/view?usp=sharing",
      description: "Comprehensive course exploring generative AI concepts, applications, and ethical considerations"
    },
    { 
      name: "Cloud Virtual Internship", 
      issuer: "AICTE", 
      description: "Comprehensive virtual internship focusing on cloud computing technologies and practical cloud infrastructure management",
      date: "May 2023 - July 2023",
      link: "https://drive.google.com/file/d/1L7W1d_wPEJavRuPW2oymyAgkgMqI7ryc/view?usp=sharing"
    },
    { 
      name: "Android Developer Virtual Internship", 
      issuer: "AICTE", 
      description: "Comprehensive virtual internship in Android app development from September 2023 to May 2024",
      date: "September 2023 - May 2024",
      link: "https://drive.google.com/file/d/1Ox85MD9LbzjR935dHL0LWd4zfBFfFbnC/view?usp=sharing"
    },
    { 
      name: "Business Analyst Virtual", 
      issuer: "AICTE", 
      description: "Comprehensive virtual internship in business analysis and strategic planning from April to June 2024",
      date: "April 2024 - June 2024",
      link: "https://drive.google.com/file/d/114PsPVG2tuXCukQdFt1LYp54CiwPnMvZP/view?usp=sharing"
    },
    { 
      name: "Developer and Technology Job Simulation", 
      issuer: "Forage", 
      description: "Virtual job simulation focusing on developer technologies",
      date: "December 24, 2024",
      link: "https://drive.google.com/file/d/1R0tyWIpUmL984KcwljKLwNfuKX1ex5LR/view?usp=sharing"
    },
    { 
      name: "AWS Academy Graduate - AWS Cloud Foundations", 
      issuer: "AWS Academy", 
      description: "Comprehensive cloud foundations certification covering core AWS cloud computing concepts",
      date: "May 2023",
      link: "https://drive.google.com/file/d/1AKb8bXFJPK7QazOjI4WFAB44IXTT0HQC/view?usp=sharing"
    },
    { 
      name: "Data Analytics and Visualization Job Simulation", 
      issuer: "Forage", 
      description: "Virtual job simulation focusing on advanced data analytics and visualization techniques",
      date: "December 2024",
      link: "https://drive.google.com/file/d/1dew8LJ4fe5iNE86fSbto5rgoYN4fbUMJ/view?usp=sharing"
    },
    { 
      name: "Data Storage in Microsoft Azure", 
      issuer: "Microsoft", 
      description: "Comprehensive certification covering Azure data storage technologies and best practices",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1dew8LJ4fe5iNE86fSbto5rgoYN4fbUMJ/view?usp=sharing"
    },
    { 
      name: "Introduction to Kubernetes", 
      issuer: "Linux Foundation", 
      description: "Foundational course covering Kubernetes container orchestration, deployment, and management principles",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1ZvtlIedN1KHSJpVdTdglkiwhb5Ij64ZE/view?usp=sharing"
    },
    { 
      name: "Blockchain: Understanding Its Uses and Implications", 
      issuer: "Coursera", 
      description: "Comprehensive course exploring blockchain technology, its applications, and transformative potential across industries",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1G8hbyWS83Si8KKLTQr5VpBPSWbS4tLf1A/view?usp=sharing"
    },
    { 
      name: "Microsoft Azure Management Tools and Security Solutions", 
      issuer: "Microsoft", 
      description: "In-depth certification covering Azure management tools, security protocols, and best practices for cloud infrastructure",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1VHQLAIHters0DzGpzazmnsJiOWRbq_Ns/view?usp=sharing"
    },
    { 
      name: "Microsoft Azure Services and Lifecycles", 
      issuer: "Microsoft", 
      description: "Comprehensive certification exploring Azure service management, deployment lifecycles, and cloud infrastructure strategies",
      date: "March 2023",
      link: "https://drive.google.com/file/d/1M5_hefl8_17ZK02kca-8pz6gHhYzYIvu/view?usp=sharing"
    },
    { 
      name: "Statistics for Data Science with Python", 
      issuer: "Coursera", 
      description: "Advanced course covering statistical techniques, probability, hypothesis testing, and data analysis using Python",
      date: "July 2023",
      link: "https://drive.google.com/file/d/1J1THNk1ByYvYgRbAjqBwfTUs2gHWLc8Br/view?usp=sharing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Skills & Certifications</h2>
        
        <div className="mb-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Technical Skills</h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillsList[category].map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300 inline-block"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Certifications</h3>
          <Slider {...sliderSettings}>
            {certifications.map((cert, index) => (
              <div key={index} className="p-4">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-6 h-full flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {cert.issuer} | {cert.date}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                        {cert.description}
                      </p>
                    </div>
                    <div className="mt-4 text-right">
                      <span className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center justify-end">
                        View Certificate
                        <svg className="h-4 w-4 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
