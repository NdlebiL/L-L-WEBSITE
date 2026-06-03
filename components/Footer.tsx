import { COMPANY, SERVICES } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-cols">
          {/* Brand */}
          <div className="f-brand">
            <div className="f-brand-name">L & L</div>
            <span className="f-brand-sub">Shuttle Services</span>
            <p>
              Professional shuttle and transport services across Mthatha and
              surrounding areas. Safe, reliable, and always on time.
            </p>
          </div>

          {/* Services */}
          <div className="f-col">
            <h5>Services</h5>
            <ul>
              {SERVICES.map(s => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="f-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#why-us">About Us</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#booking">Book Now</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="f-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`tel:+27${COMPANY.phone1.replace(/\s/g, '')}`}>
                  📞 {COMPANY.phone1}
                </a>
              </li>
              <li>
                <a href={`tel:+27${COMPANY.phone2.replace(/\s/g, '')}`}>
                  📱 {COMPANY.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </li>
              <li style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
                📍 {COMPANY.area}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} L & L Shuttle Services. All rights reserved.
          </div>
          <div className="socials">
            <a className="soc" href="#" title="Facebook" aria-label="Facebook">f</a>
            <a
              className="soc"
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              w
            </a>
            <a className="soc" href="#" title="Instagram" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
