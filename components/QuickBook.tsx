'use client'

import { useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function QuickBook() {
  const pickupRef      = useRef<HTMLInputElement>(null)
  const destinationRef = useRef<HTMLInputElement>(null)
  const dateRef        = useRef<HTMLInputElement>(null)
  const passengersRef  = useRef<HTMLSelectElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Fire a custom event that Booking.tsx listens for
    window.dispatchEvent(
      new CustomEvent('prefill-booking', {
        detail: {
          pickup:     pickupRef.current?.value      ?? '',
          destination: destinationRef.current?.value ?? '',
          date:       dateRef.current?.value        ?? '',
          passengers: passengersRef.current?.value  ?? '1',
        },
      })
    )

    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  const today = new Date().toISOString().split('T')[0]

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
            <input
              ref={pickupRef}
              className="qb-input"
              type="text"
              placeholder="Pickup location"
            />
          </div>
          <div className="qb-group">
            <label className="qb-label">Destination</label>
            <input
              ref={destinationRef}
              className="qb-input"
              type="text"
              placeholder="Drop-off location"
            />
          </div>
          <div className="qb-group">
            <label className="qb-label">Date</label>
            <input
              ref={dateRef}
              className="qb-input"
              type="date"
              min={today}
            />
          </div>
          <div className="qb-group">
            <label className="qb-label">Passengers</label>
            <select ref={passengersRef} className="qb-input">
              {['1', '2', '3', '4', '5', '6+'].map(n => (
                <option key={n} value={n}>{n}</option>
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
