"use client"

import Image from "next/image"
import kerseyHero from "@/images/projects/kersey2.png" 

import { BackgroundMedia } from "@/components/cult/background-media"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-orange-50/30 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 md:order-1 space-y-6 md:space-y-8">
            <FadeIn>
              <div className="space-y-4">
                <GradientHeading
                  className="flex flex-col"
                  size="xxl"
                  asChild
                >
                  <h1 className="font-black text-5xl md:text-6xl lg:text-7xl leading-tight">
                    The KT
                    <br />
                    <span className="font-brand text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      Foundation
                    </span>
                  </h1>
                </GradientHeading>
                
                <div className="pt-4 space-y-3">
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
                    Honoring Kersey Thermidor
                  </p>
                  <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                    Turning tragedy into hope, one life at a time. 
                    Fighting acute lymphoblastic leukemia through awareness, 
                    support, and research funding.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button 
                    onClick={() => {
                      const section = document.querySelector('#price');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    Donate Now
                  </button>
                  <button 
                    onClick={() => {
                      const section = document.querySelector('#feature');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="px-8 py-4 bg-white hover:bg-gray-50 text-orange-600 font-semibold rounded-full border-2 border-orange-600 transition-all cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right side - Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full" />
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl">
                  <Image
                    src={kerseyHero}
                    width={500}
                    height={500}
                    className="rounded-2xl w-full h-auto"
                    alt="Kersey Thermidor"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
                    <p className="font-bold">#KTStrong</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <FadeIn>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl md:text-5xl font-black text-orange-600">1 in 3</p>
              <p className="text-sm md:text-base text-gray-600 mt-2">People affected by cancer</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl md:text-5xl font-black text-orange-600">6,000+</p>
              <p className="text-sm md:text-base text-gray-600 mt-2">Children diagnosed with ALL yearly</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl md:text-5xl font-black text-orange-600">90%</p>
              <p className="text-sm md:text-base text-gray-600 mt-2">Survival rate with early detection</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
