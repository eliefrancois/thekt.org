"use client"

import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"

export function Pricing() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex py-9 justify-center items-center flex-col">
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
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-5xl font-black">Make a Donation</h3>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Your generous support helps families fighting childhood leukemia, 
                funds critical research, and raises awareness about ALL.
              </p>
              
              <div className="pt-6">
                <button className="px-12 py-5 bg-white text-orange-600 font-bold text-xl rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
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
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 font-semibold">
            Other ways to support the KT Foundation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
