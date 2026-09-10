import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/sections/hero'
import { Ecosystem } from '@/components/sections/ecosystem'
import { Industries } from '@/components/sections/industries'
import { AggregatedBrands } from '@/components/sections/aggregated-brands'
import { Journey } from '@/components/sections/journey'
import { Company } from '@/components/sections/company'
import { Contact } from '@/components/sections/contact'
import { Vision } from '@/components/sections/vision'
import { FinalCtaFooter } from '@/components/sections/final-cta'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* VETROS X2 → what/why → equipping producers */}
        <Hero />
        <Ecosystem />
        {/* Which industries */}
        <Industries />
        {/* Aggregated brands — many producers → one global brand */}
        <AggregatedBrands />
        {/* How producers are equipped (journey) */}
        <Journey />
        {/* Who is PIE */}
        <Company />
        {/* How to cooperate */}
        <Contact />
        {/* Vision + ecosystem gateway */}
        <Vision />
        <FinalCtaFooter />
      </main>
    </>
  )
}
