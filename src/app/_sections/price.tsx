"use client"

import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"

export function Pricing() {
  return (
    <div className="py-16 md:py-32 lg:py-40 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex py-9 md:py-12 justify-center items-center flex-col">
          <TextAnimate
            text="Support Our Mission"
            type="shiftInUp"
            className="text-[2.3rem] font-bold md:text-[6rem] md:font-medium tracking-tighter text-gray-900"
          />

          <GradientHeading size="sm" variant="lightSecondary" className="mt-4">
            Every contribution helps us honor Kersey's legacy.
          </GradientHeading>
        </div>

        {/* Main Donation Section */}
        <div className="max-w-3xl mx-auto mt-12 md:mt-16">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl text-white">
            <div className="text-center space-y-6 md:space-y-8">
              <h3 className="text-3xl md:text-5xl font-black">Make a Donation</h3>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Your generous support helps families fighting childhood leukemia, 
                funds critical research, and raises awareness about ALL.
              </p>
              
              <div className="pt-6">
                <button 
                  onClick={() => window.open('https://donate.stripe.com/eVq8wH1L75CPgNk0vl8AE00', '_blank')}
                  className="px-12 py-5 bg-white text-orange-600 font-bold text-xl rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl cursor-pointer"
                >
                  Donate Now
                </button>
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="text-sm opacity-80">
                  The KT Foundation is a 501(c)(3) nonprofit organization. <br className="hidden md:block" />
                  All donations are tax-deductible to the fullest extent allowed by law.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional giving options */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8 font-semibold">
            Other ways to support the KT Foundation
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <button className="px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors shadow-md">
              Corporate Matching
            </button>
            <button className="px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors shadow-md">
              Planned Giving
            </button>
            <button className="px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors shadow-md">
              In Memory/Honor
            </button>
            <button className="px-6 py-3 bg-white border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors shadow-md">
              Host an Event
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
