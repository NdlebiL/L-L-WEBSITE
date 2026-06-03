import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import QuickBook    from '@/components/QuickBook'
import Services     from '@/components/Services'
import WhyUs        from '@/components/WhyUs'
import Booking      from '@/components/Booking'
import Fleet        from '@/components/Fleet'
import Testimonials from '@/components/Testimonials'
import CTABanner    from '@/components/CTABanner'
import Footer       from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <QuickBook />
        <Services />
        <WhyUs />
        <Booking />
        <Fleet />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
