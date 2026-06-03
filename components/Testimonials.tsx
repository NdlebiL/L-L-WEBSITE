'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/data'

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testi-section">
      <div className="container">
        <motion.div
          className="testi-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">Client Reviews</span>
          <h2 className="section-title">
            What Our <span className="gold">Clients Say</span>
          </h2>
          <div className="divider center" />
        </motion.div>

        <motion.div
          className="testi-grid"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              className="tcard"
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p className="tcard-text">{t.text}</p>
              <div className="tcard-author">
                <div className="author-av">{t.initial}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
