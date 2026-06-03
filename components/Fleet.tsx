'use client'

import { motion } from 'framer-motion'
import { FLEET } from '@/lib/data'

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Fleet() {
  return (
    <section id="fleet" className="section fleet-section">
      <div className="container">
        <motion.div
          className="fleet-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag">Our Fleet</span>
          <h2 className="section-title">
            Travel in <span className="gold">Comfort</span>
          </h2>
          <div className="divider center" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Modern, well-maintained vehicles for every group size and occasion.
          </p>
        </motion.div>

        <motion.div
          className="fleet-grid"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {FLEET.map((v) => (
            <motion.div
              key={v.name}
              className="fleet-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              <div className="fleet-img">
                <div className="fleet-placeholder">
                  <span>{v.icon}</span>
                  <span>Add Vehicle Photo</span>
                </div>
              </div>
              <div className="fleet-body">
                <h4>{v.name}</h4>
                <p>{v.desc}</p>
                <span className="fleet-cap">{v.capacity}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
