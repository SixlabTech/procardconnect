"use client"
import styles from "@/styles/style";
import {Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, } from "@/components"
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

