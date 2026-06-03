'use client'

import { FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function QuickBook() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="quick-book"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <form className="qb-form" onSubmit={handleSubmit}>
          <div className="qb-group">
            <label className="qb-label">Pickup</label>
            <input className="qb-input" type="text" placeholder="Pickup location" />
          </div>
          <div className="qb-group">
            <label className="qb-label">Destination</label>
            <input className="qb-input" type="text" placeholder="Drop-off location" />
          </div>
          <div className="qb-group">
            <label className="qb-label">Date</label>
            <input className="qb-input" type="date" />
          </div>
          <div className="qb-group">
            <label className="qb-label">Passengers</label>
            <select className="qb-input">
              <option value="">Select</option>
              {['1', '2', '3', '4', '5', '6+'].map(n => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <motion.button
            type="submit"
            className="btn btn-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Search →
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}
