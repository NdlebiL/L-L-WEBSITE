'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/data'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="tag">What We Offer</span>
          <h2 className="section-title">
            Our <span className="gold">Services</span>
          </h2>
          <div className="divider" />
          <p className="section-sub">
            From daily commutes to long-distance journeys — reliable, professional transport
            solutions tailored to every need in Mthatha and beyond.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((svc) => (
            <motion.div
              key={svc.title}
              className="svc-card"
              variants={cardVariants}
              whileHover={{ y: -7, transition: { duration: 0.22 } }}
            >
              <div className="svc-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <a href="#booking" className="svc-link">
                Book Now →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
