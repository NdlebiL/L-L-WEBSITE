'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LogoIcon } from '@/components/Logo'

const links = [
  { href: '#services',     label: 'Services' },
  { href: '#why-us',       label: 'About' },
  { href: '#fleet',        label: 'Fleet' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="nav-wrap">
            <a href="#" className="logo">
              <LogoIcon size={38} />
              <span className="logo-sub">Shuttle Services</span>
            </a>

            <nav className="nav-links" aria-label="Main navigation">
              {links.map(l => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <a href="#booking" className="btn btn-gold btn-sm nav-book">Book Now</a>

            <button
              className="burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="mob-close" onClick={() => setOpen(false)} aria-label="Close menu">
              ✕
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              onClick={() => setOpen(false)}
              className="btn btn-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07, duration: 0.35 }}
            >
              Book Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
