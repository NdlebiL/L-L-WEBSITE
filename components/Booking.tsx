'use client'

import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COMPANY, SERVICES } from '@/lib/data'

type FormData = {
  firstName: string
  lastName:  string
  phone:     string
  email:     string
  service:   string
  pickup:    string
  destination: string
  date:      string
  time:      string
  passengers: string
  luggage:   string
  notes:     string
}

const INITIAL: FormData = {
  firstName: '', lastName: '', phone: '', email: '',
  service: '', pickup: '', destination: '',
  date: '', time: '', passengers: '1', luggage: 'None', notes: '',
}

export default function Booking() {
  const [form, setForm]           = useState<FormData>(INITIAL)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      const { pickup, destination, date, passengers } = (e as CustomEvent).detail
      setForm(prev => ({ ...prev, pickup, destination, date, passengers }))
    }
    window.addEventListener('prefill-booking', handler)
    return () => window.removeEventListener('prefill-booking', handler)
  }, [])

  const today = new Date().toISOString().split('T')[0]

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const text = encodeURIComponent(
      `🚐 *New Booking – L & L Shuttle Services*\n\n` +
      `*Name:* ${form.firstName} ${form.lastName}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Service:* ${form.service}\n` +
      `*Pickup:* ${form.pickup}\n` +
      `*Destination:* ${form.destination}\n` +
      `*Date:* ${form.date}\n` +
      `*Time:* ${form.time}\n` +
      `*Passengers:* ${form.passengers}\n` +
      `*Luggage:* ${form.luggage}\n` +
      `*Notes:* ${form.notes || 'None'}`
    )
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank')
    setShowModal(true)
    setForm(INITIAL)
  }

  return (
    <>
      <section id="booking" className="section booking-section">
        <div className="container">
          <div className="book-layout">
            {/* Info side */}
            <motion.div
              className="book-info"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="tag">Reserve Your Seat</span>
              <h2 className="section-title">
                Book Your <span className="gold">Shuttle</span>
              </h2>
              <div className="divider" />
              <p>
                Fill in the form and we&rsquo;ll open WhatsApp with your booking details
                pre-filled. For urgent requests, call or message us directly.
              </p>

              <div className="contact-stack">
                <a href={`tel:+27${COMPANY.phone1.replace(/\s/g, '')}`} className="cmethod">
                  <div className="cmethod-icon">📞</div>
                  <div>
                    <div className="cmethod-label">Phone</div>
                    <div className="cmethod-val">{COMPANY.phone1}</div>
                  </div>
                </a>
                <a href={`tel:+27${COMPANY.phone2.replace(/\s/g, '')}`} className="cmethod">
                  <div className="cmethod-icon">📱</div>
                  <div>
                    <div className="cmethod-label">Alternate Phone</div>
                    <div className="cmethod-val">{COMPANY.phone2}</div>
                  </div>
                </a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer" className="cmethod">
                  <div className="cmethod-icon">💬</div>
                  <div>
                    <div className="cmethod-label">WhatsApp</div>
                    <div className="cmethod-val">{COMPANY.whatsappDisplay}</div>
                  </div>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="cmethod">
                  <div className="cmethod-icon">✉</div>
                  <div>
                    <div className="cmethod-label">Email</div>
                    <div className="cmethod-val">{COMPANY.email}</div>
                  </div>
                </a>
                <div className="cmethod">
                  <div className="cmethod-icon">🕐</div>
                  <div>
                    <div className="cmethod-label">Operating Hours</div>
                    <div className="cmethod-val">24 / 7 Including public holidays</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form card */}
            <motion.div
              className="form-card"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>Book a Shuttle</h3>
              <p className="form-note">Complete your booking details below</p>
              <div className="form-divider" />

              <form onSubmit={handleSubmit}>
                <div className="fg">
                  <div className="f-group">
                    <label className="f-label">First Name</label>
                    <input name="firstName" className="f-input" type="text"
                      placeholder="John" value={form.firstName} onChange={update} required />
                  </div>
                  <div className="f-group">
                    <label className="f-label">Last Name</label>
                    <input name="lastName" className="f-input" type="text"
                      placeholder="Smith" value={form.lastName} onChange={update} required />
                  </div>
                  <div className="f-group">
                    <label className="f-label">Phone</label>
                    <input name="phone" className="f-input" type="tel"
                      placeholder="060 000 0000" value={form.phone} onChange={update} required />
                  </div>
                  <div className="f-group">
                    <label className="f-label">Email</label>
                    <input name="email" className="f-input" type="email"
                      placeholder="your@email.com" value={form.email} onChange={update} />
                  </div>

                  <div className="f-group span2">
                    <label className="f-label">Service Type</label>
                    <select name="service" className="f-select" value={form.service} onChange={update} required>
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="f-group span2">
                    <label className="f-label">Pickup Address</label>
                    <input name="pickup" className="f-input" type="text"
                      placeholder="Full pickup address" value={form.pickup} onChange={update} required />
                  </div>
                  <div className="f-group span2">
                    <label className="f-label">Destination</label>
                    <input name="destination" className="f-input" type="text"
                      placeholder="Full destination address" value={form.destination} onChange={update} required />
                  </div>

                  <div className="f-group">
                    <label className="f-label">Date</label>
                    <input name="date" className="f-input" type="date"
                      min={today} value={form.date} onChange={update} required />
                  </div>
                  <div className="f-group">
                    <label className="f-label">Time</label>
                    <input name="time" className="f-input" type="time"
                      value={form.time} onChange={update} required />
                  </div>

                  <div className="f-group">
                    <label className="f-label">Passengers</label>
                    <select name="passengers" className="f-select" value={form.passengers} onChange={update}>
                      {['1','2','3','4','5','6+'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="f-group">
                    <label className="f-label">Luggage</label>
                    <select name="luggage" className="f-select" value={form.luggage} onChange={update}>
                      {['None','1 Bag','2 Bags','3+ Bags'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>

                  <div className="f-group span2">
                    <label className="f-label">Special Requests</label>
                    <textarea name="notes" className="f-textarea"
                      placeholder="Any special requirements..."
                      value={form.notes} onChange={update} />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-gold f-submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(201,168,76,0.28)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  💬 Send Booking via WhatsApp →
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="modal-box"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1,   y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-ico">✓</div>
              <h3>Booking Request Sent</h3>
              <p>
                WhatsApp has opened with your booking details. We&rsquo;ll confirm your
                booking as soon as possible.
              </p>
              <motion.button
                className="btn btn-gold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowModal(false)}
              >
                Done
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
