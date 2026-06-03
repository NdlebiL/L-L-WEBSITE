'use client'

import { motion } from 'framer-motion'
import { COMPANY } from '@/lib/data'

export default function CTABanner() {
  return (
    <section className="section cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="tag">Ready to Travel?</span>
          <h2 className="section-title">
            Book Your Shuttle <span className="gold">Today</span>
          </h2>
          <p>
            Reliable, professional transport at your fingertips. Book instantly
            or reach us directly — we&rsquo;re available 24 / 7.
          </p>
          <div className="cta-btns">
            <motion.a
              href="#booking"
              className="btn btn-gold"
              whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(201,168,76,0.32)' }}
              whileTap={{ scale: 0.97 }}
            >
              Book Now →
            </motion.a>
            <motion.a
              href={`tel:+27${COMPANY.phone1.replace(/\s/g, '')}`}
              className="btn btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📞 {COMPANY.phone1}
            </motion.a>
            <motion.a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              💬 WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
