"use client"

import * as React from "react"
import Image from "next/image"

import { GradientHeading } from "./gradient-heading"

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Mother of ALL Survivor",
    quote: "The KT Foundation was there for us when we felt most alone. Their support gave us hope during our darkest days.",
    image: "https://i.pravatar.cc/300?img=45"
  },
  {
    name: "Dr. Emily Chen",
    role: "Pediatric Oncologist",
    quote: "The research funding from KT Foundation is making a real difference in how we treat childhood leukemia.",
    image: "https://i.pravatar.cc/300?img=32"
  },
  {
    name: "Michael Thompson",
    role: "Community Volunteer",
    quote: "Kersey's story inspired me to get involved. Every event, every dollar raised, brings us closer to a cure.",
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    name: "Lisa Rodriguez",
    role: "Monthly Donor",
    quote: "Being part of the KT Foundation family means knowing my contribution directly helps children fighting ALL.",
    image: "https://i.pravatar.cc/300?img=47"
  },
  {
    name: "James Wilson",
    role: "Corporate Partner",
    quote: "Our company is proud to support the KT Foundation's mission. Their transparency and impact are unmatched.",
    image: "https://i.pravatar.cc/300?img=33"
  },
  {
    name: "Amanda Foster",
    role: "Event Organizer",
    quote: "Hosting a fundraiser for KT Foundation was incredibly rewarding. The community support was overwhelming!",
    image: "https://i.pravatar.cc/300?img=26"
  },
]

export function TweetGrid() {
  return (
    <div className="pb-12 px-4">
      <div className="flex w-full justify-center pb-12">
        <div className="text-center">
          <GradientHeading size="xl" weight="black" className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Our Community
          </GradientHeading>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            Hear from the families, supporters, and partners who make our mission possible
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-orange-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
