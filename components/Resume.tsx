import React from 'react'
const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="mb-6">
            <h4 className="text-xl font-medium">Bachelor of Engineering in Computer Science, Data Science</h4>
            <p className="text-gray-600">Shri Ramdeobaba College of Engineering and Management, Nagpur, Maharashtra</p>
            <p className="text-gray-600">Expected May 2025 | GPA: 8.42/10.0</p>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <div className="mb-6">
            <h4 className="text-xl font-medium">Web Development Intern</h4>
            <p className="text-gray-600">COGNIFYZ TECHNOLOGIES, Nagpur, Maharashtra</p>
            <p className="text-gray-600">Sep 2023 – Oct 2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Designed responsive web interfaces for 5 projects using React, HTML/CSS/JS.</li>
              <li>Integrated APIs and optimized database queries, improving page load time by 20%.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-xl font-medium">Data Science Intern</h4>
            <p className="text-gray-600">TechnoHacks EduTech, Nagpur, Maharashtra</p>
            <p className="text-gray-600">Dec 2024 – Jan 2025</p>
            <ul className="list-disc list-inside mt-2">
              <li>Analyzed large datasets with Python to derive actionable insights.</li>
              <li>Assisted in building predictive models, increasing accuracy by 15%.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

