"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"
import { FAQ } from "@/components/faq"
import { Navbar } from "@/components/navbar"

let tabs = [
  { id: "hero", label: "Hero" },
  { id: "feature", label: "Feature" },
  { id: "testimonial", label: "Testimonial" },
  { id: "price", label: "Price" },
]

export default function LandingPageLayout({
  hero,
  feature,
  testimonial,
  price,
}) {
  const [activeSection, setActiveSection] = useState(tabs[0].id)

  const heroRef = useRef(null)
  const featureRef = useRef(null)
  const testimonialRef = useRef(null)
  const priceRef = useRef(null)

  const sectionRefs = {
    hero: heroRef,
    feature: featureRef,
    testimonial: testimonialRef,
    price: priceRef,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1 } // this means "start the event when 10% of the target is visible"
    )

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  const handleCtaClick = (id: string) => {
    const section = document.querySelector(`#price`)

    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection("3")
    }
  }

  return (
    <>
      <div className="relative z-[9999] w-screen ">
        <div className=" flex items-center justify-center">
          <div className=" fixed bottom-10 md:top-10 z-[9999]">
            <motion.div
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 120 }}
              transition={{ duration: 1.6, delay: 0.9, type: "spring" }}
              className="max-w-4xl "
            >
              <Navbar activeSection={activeSection} />
            </motion.div>
          </div>
        </div>
      </div>
      <main className="overflow-hidden ">
        <section id="hero" ref={heroRef}>
          <div className="h-full md:h-[900px] ">{hero}</div>
        </section>
        <section id="feature" ref={featureRef} className=" z-10">
          <div className=" py-9">
            <div className="pt-12 ">{feature}</div>
          </div>
        </section>
        <section id="testimonial" ref={testimonialRef}>
          <div className="block md:h-[1400px] py-9">
            <div className=" px-2">{testimonial}</div>
          </div>
        </section>
        <div className="relative h-full bg-black rounded-t-[4rem]">
          <section id="price" ref={priceRef}>
            <div className="w-full h-full md:h-[900px]  ">{price}</div>
          </section>
        </div>
        <section className="relative">
          <div className="w-full h-full ">
            <FAQ />
          </div>
        </section>
      </main>
    </>
  )
}
