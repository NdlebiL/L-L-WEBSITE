'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS, FEATURES } from '@/lib/data'

function AnimatedCounter({
  target,
  suffix,
  isFloat,
}: {
  target: number
  suffix: string
  isFloat?: boolean
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = isFloat
        ? parseFloat((eased * target).toFixed(1))
        : Math.floor(eased * target)
      setCount(value)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, isFloat])

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  )
}

const fadeLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const fadeRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="why-grid">
          {/* Left: tagline + stats */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="tag">Why Choose Us</span>
            <h2 className="section-title">
              Transport You Can <span className="gold">Trust</span>
            </h2>
            <div className="divider" />
            <p className="section-sub">
              We don&rsquo;t just move people — we move them safely, on time, and with
              the care and professionalism they deserve.
            </p>
            <div className="stats-2x2">
              {STATS.map((s) => (
                <div key={s.label} className="stat-cell">
                  <div className="stat-num">
                    <AnimatedCounter
                      target={s.value}
                      suffix={s.suffix}
                      isFloat={s.isFloat}
                    />
                  </div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            className="feat-list"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {FEATURES.map((f) => (
              <motion.div key={f.title} className="feat-item" variants={fadeRight}>
                <div className="feat-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
