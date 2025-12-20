import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import TextAnimate from "./cult/text-animate"

export function FAQ() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-20 bg-transparent rounded-t-[48px]">
      <div className="py-12">
        <TextAnimate
          text="Frequently Asked "
          type="shiftInUp"
          className="md:text-[6rem] text-[2rem] font-bold md:leading-10 md:pb-14 tracking-tight text-orange-600 md:py-8"
        />
        <TextAnimate
          text="Questions"
          type="shiftInUp"
          className="md:text-[6rem] text-[2rem] font-bold md:leading-10 tracking-tight text-orange-600 md:py-8 font-brand"
        />
      </div>

      {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-gradient-to-b from-orange-50 to-white"></div>

      <div className="md:mx-auto">
        <Accordion
          type="multiple"
          className="w-full md:space-y-6 bg-white rounded-xl border-2 border-orange-200 shadow-lg"
        >
          <AccordionItem
            value="item-1"
            className="border-b border-orange-100 rounded-md md:px-4"
          >
            <AccordionTrigger className="text-xl md:text-2xl text-left pr-4 md:pr-0 font-semibold text-gray-900 hover:text-orange-600">
              <span className="px-6 md:px-2">
                What is the KT Foundation's mission?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 px-4 leading-relaxed">
              The KT Foundation is dedicated to honoring Kersey Thermidor's memory by 
              supporting families affected by childhood acute lymphoblastic leukemia (ALL). 
              We provide financial assistance, emotional support, and fund critical research 
              to find better treatments and ultimately a cure for ALL.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem
            value="item-2"
            className="border-b border-orange-100 rounded-md px-4"
          >
            <AccordionTrigger className="text-xl md:text-2xl text-left pl-2 font-semibold text-gray-900 hover:text-orange-600">
              How are donations used?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 pl-2 leading-relaxed">
              100% of donations go directly to our three core pillars: supporting families 
              facing childhood leukemia (40%), funding cutting-edge research (40%), and 
              raising awareness through education and outreach programs (20%). All 
              administrative costs are covered by corporate sponsors.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem
            value="item-3"
            className="border-b border-orange-100 rounded-md px-4"
          >
            <AccordionTrigger className="text-xl md:text-2xl text-left pl-2 font-semibold text-gray-900 hover:text-orange-600">
              What is acute lymphoblastic leukemia (ALL)?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 pl-2 leading-relaxed">
              Acute lymphoblastic leukemia (ALL) is the most common type of childhood cancer, 
              accounting for about 1 in 4 childhood cancers. It affects white blood cells and 
              can progress quickly. While survival rates have improved dramatically to about 90% 
              with early detection and treatment, the journey is incredibly challenging for 
              children and their families.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem
            value="item-4"
            className="border-b border-orange-100 rounded-md px-4"
          >
            <AccordionTrigger className="text-xl md:text-2xl text-left pl-2 font-semibold text-gray-900 hover:text-orange-600">
              How can I get involved beyond donating?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 pl-2 leading-relaxed">
              There are many ways to support the KT Foundation! You can volunteer at our events, 
              host a fundraiser in your community, share our mission on social media using #KTStrong, 
              or join our monthly awareness campaigns. Contact us at info@ktfoundation.org to learn 
              more about volunteer opportunities.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem
            value="item-5"
            className="border-b-0 rounded-md px-4"
          >
            <AccordionTrigger className="text-xl md:text-2xl text-left pl-2 font-semibold text-gray-900 hover:text-orange-600">
              Is the KT Foundation a registered nonprofit?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-lg text-gray-700 pl-2 leading-relaxed">
              Yes, the KT Foundation is a registered 501(c)(3) nonprofit organization. 
              All donations are tax-deductible to the fullest extent allowed by law. 
              We undergo annual audits to ensure transparency and accountability in all 
              our operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact section */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-4">Still have questions?</p>
        <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
          Contact Us
        </button>
      </div>
    </div>
  )
}
