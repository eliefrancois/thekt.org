import Image from "next/image"
import clay1Img from "@/images/projects/Clay-1.png"
import heroClay from "@/images/projects/Hero-Clay.png"

import { BackgroundMedia } from "@/components/cult/background-media"
import { FadeIn } from "@/components/cult/fade-in"
import { GradientHeading } from "@/components/cult/gradient-heading"
import TextAnimate from "@/components/cult/text-animate"

export function Hero() {
  return (
    <div className="">
      <div className="h-full w-full relative md:z-0">
        <div className="hidden md:block absolute md:top-24 right-0 ">
          <FadeIn>
            <Image
              src={heroClay}
              width={2000}
              height={2000}
              className=" animate-spin-slow w-full h-full "
              alt="blob image of brain"
            />
          </FadeIn>
        </div>
        <div className="absolute top-[calc(100vh-260px)]  md:top-56 z-[9999]  md:left-16 w-full md:w-auto pr-4">
          <FadeIn>
            <GradientHeading
              className="flex items-end  justify-end md:justify-start  flex-col text-right md:text-left"
              size="xxl"
              asChild
            >
              <h1 className=" md:hidden font-black  text-5xl">
                Update <br />
                your <br />
                <span className="font-brand text-6xl">brand</span>
              </h1>
              <h1 className="hidden  md:flex items-center font-semibold flex-col text-[12.5rem] pb-4">
                Update <br /> your <br />
                <span className="font-brand pt-9 sr-only">brand</span>
              </h1>
            </GradientHeading>
          </FadeIn>
        </div>
        <div className="hidden md:block absolute top-[calc(100vh-530px)]   right-7">
          <TextAnimate
            className="font-brand pt-9 md:text-[12.5rem] "
            text="brand"
            type="rollIn"
          />
        </div>
      </div>

      <div className=" md:hidden  ">
        <FadeIn>
          <BackgroundMedia src="/Clay-1.png" alt="blob image of brain" />
        </FadeIn>
      </div>
    </div>
  )
}
