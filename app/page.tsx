'use client'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      <Header />
      <main className="pt-16">
        <ScrollReveal delay={0.1}>
          <Hero />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Education />
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.5}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal delay={0.7}>
        <Footer />
      </ScrollReveal>
    </div>
  )
}
