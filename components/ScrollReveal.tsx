'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  staggerChildren?: number
}

const ScrollReveal = ({ 
  children, 
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.3,
  staggerChildren = 0
}: ScrollRevealProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay
      }
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        duration: duration,
        ease: 'easeOut'
      }
    }
  }

  // If staggerChildren is set and children is an array, use container and child variants
  if (staggerChildren > 0 && Array.isArray(children)) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
        className={className}
      >
        {children.map((child, index) => (
          <motion.div key={index} variants={childVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  // Default behavior for non-array children or when staggerChildren is 0
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

ScrollReveal.displayName = 'ScrollReveal'

export default ScrollReveal
