"use client"

import React from "react"
import Balancer from "react-wrap-balancer"

import { RevealAnimation } from "@/components/cult/reveal"
import { KerseyVideo } from "@/components/kersey-video"

import { BentoLayout } from "./features/bento-layout"
import { OurWorkBanner } from "./features/our-work"

export function Projects() {
  return (
    <div className="pt-24 md:pt-40 lg:pt-48 pb-16 md:pb-32 lg:pb-40 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto max-w-lg md:max-w-4xl lg:max-w-5xl text-center">
            <div className="space-y-4">
              <h2 className="font-bold tracking-tight text-black text-4xl md:text-5xl lg:text-7xl">
                Remembering{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Kersey Thermidor
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-orange-600 font-semibold">
                October 27, 1995 – October 10, 2022
              </p>
            </div>

            <RevealAnimation>
              <div className="mt-8 md:mt-12 px-6 space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
                  <Balancer>
                    Kersey Thermidor was more than a son, brother, and friend. He was a 
                    beacon of hope, courage, and resilience. Kersey 
                    fought acute lymphoblastic leukemia with unwavering strength and a 
                    smile that could light up any room.
                  </Balancer>
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  <Balancer>
                    The KT Foundation was established to honor Kersey's memory by 
                    supporting families affected by childhood leukemia, funding research 
                    for better treatments, and raising awareness about this devastating disease.
                  </Balancer>
                </p>
                <div className="inline-block bg-orange-100 px-6 py-3 rounded-full">
                  <p className="text-orange-800 font-semibold">
                    Together, we can turn his legacy into hope for others.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Kersey's Video */}
        <div className="mt-16 md:mt-24 lg:mt-32">
          <KerseyVideo />
        </div>

        <div className="pt-16 md:pt-24 lg:pt-32">
          <OurWorkBanner />
        </div>

        <div className="mt-8 md:mt-12">
          <BentoLayout />
        </div>
      </div>
    </div>
  )
}
