'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.5])
  const y              = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section id="home" ref={ref} className="hero-section">
      {/* Parallax video / gradient fallback */}
      <motion.div style={{ y, position: 'absolute', inset: 0, zIndex: 0 }}>
        {videoFailed ? (
          <div className="hero-vid" style={{
            background: 'linear-gradient(135deg, #0A0A0A 0%, #161616 50%, #0d0d0d 100%)',
          }} />
        ) : (
          <video
            className="hero-vid"
            autoPlay
            muted
            loop
            playsInline
            suppressHydrationWarning
            onError={() => setVideoFailed(true)}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Overlay */}
      <motion.div className="hero-overlay" style={{ opacity: overlayOpacity }} />

      {/* Content */}
      <div className="hero-content">
        <motion.div className="hero-badge" {...fadeUp(0)}>
          Premium Shuttle Transport
        </motion.div>

        <motion.h1 className="hero-title" {...fadeUp(0.15)}>
          Your Journey,<br />
          <em>Our Commitment.</em>
        </motion.h1>

        <motion.p className="hero-sub" {...fadeUp(0.3)}>
          Safe, reliable shuttle services across Mthatha and beyond, <br />
          airports, long distance, corporate, and every occasion.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.45)}>
          <motion.a
            href="#booking"
            className="btn btn-gold"
            whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(201,168,76,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            Book Your Shuttle →
          </motion.a>
          <motion.a
            href="#services"
            className="btn btn-outline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Our Services
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
