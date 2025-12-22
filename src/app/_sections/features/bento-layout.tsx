// CREDIT - ACETERNITY AWESOME COMPONENTS https://ui.aceternity.com/components/bento-grid
"use client"

import React from "react"
import Image from "next/image"
import imageCard from "@/images/projects/Clay-6.png"
import {
  IconBoxAlignRightFilled,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import {
  BentoGrid,
  BentoGridItem,
  BentoGridItemCta,
  BentoImageCard,
} from "@/components/ace/bento"
import TextAnimate from "@/components/cult/text-animate"
import {
  NextjsIcon,
  OpenAIIcon,
  StripeIcon,
  SupabaseIcon,
} from "@/components/icons"

export function BentoLayout() {
  return (
    <>
      <div className="pt-24 md:pt-32 pb-6 md:pb-12 flex flex-col items-center justify-center">
        <TextAnimate
          className="font-black pb-6 md:pb-8 text-3xl md:text-5xl lg:text-6xl text-center"
          text="Our Mission"
          type="shiftInUp"
        />
        <p className="max-w-md md:max-w-2xl lg:max-w-3xl text-center text-lg md:text-xl lg:text-2xl px-4">
          <Balancer>
            The KT Foundation is dedicated to{" "}
            <span className="bg-orange-100 font-bold px-2 rounded-sm">
              supporting families
            </span>{" "}
            affected by acute lymphoblastic leukemia,{" "}
            <span className="bg-orange-100 font-bold px-2 rounded-sm">
              funding research
            </span>
            , and raising{" "}
            <span className="bg-orange-600 text-white font-bold px-2 rounded-sm">
              awareness
            </span>{" "}
            to create a future where no child has to suffer from this disease.
          </Balancer>
        </p>
      </div>
      <div className="py-12 md:py-16 max-w-6xl mx-auto">
        <div className="py-12 md:py-16 rounded-3xl px-2 md:px-4">
          <BentoGrid className="max-w-4xl lg:max-w-5xl mx-auto md:auto-rows-[20rem]">
            <BentoImageCard
              text="About ALL"
              image={imageCard}
              description="Understanding Acute Lymphoblastic Leukemia"
              className="md:col-span-1"
            >
              <div className="h-16 w-16 rounded-full bg-orange-600 flex items-center justify-center">
                <span className="text-white text-2xl font-black">ALL</span>
              </div>
            </BentoImageCard>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn("[&>p:text-lg]", item.className)}
                icon={item.icon}
              />
            ))}
            <BentoGridItemCta
              title={ctaCard.title}
              description={ctaCard.description}
              header={ctaCard.header}
              className={cn("[&>p:text-lg]", ctaCard.className)}
              icon={ctaCard.icon}
            />
          </BentoGrid>
        </div>
      </div>
    </>
  )
}

const SkeletonTwo = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-orange-100 to-orange-50 flex-row space-x-2 p-4"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border-2 border-orange-200 flex flex-col items-center justify-center shadow-lg"
      >
        <div className="text-4xl">❤️</div>
        <p className="text-xs font-semibold mt-2 text-center">Support</p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-orange-600 p-4 border-2 border-orange-700 flex flex-col items-center justify-center shadow-lg">
        <div className="text-4xl">🎗️</div>
        <p className="text-xs font-semibold mt-2 text-center text-white">Awareness</p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 border-2 border-orange-200 flex flex-col items-center justify-center shadow-lg"
      >
        <div className="text-4xl">🔬</div>
        <p className="text-xs font-semibold mt-2 text-center">Research</p>
      </motion.div>
    </motion.div>
  )
}

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2 items-center justify-center p-6"
      style={{
        background:
          "linear-gradient(-45deg, #ffcba3, #ff6c0a, #ffcba3, #fff2eb)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="text-white text-5xl font-black">#KTStrong</div>
      <p className="text-white font-semibold text-center">Join our community</p>
    </motion.div>
  )
}

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  }
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-orange-100 to-orange-200 flex-col space-y-2 p-3"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border-2 border-orange-300 shadow-lg p-3 items-start space-x-2 bg-white"
      >
        <div className="h-10 w-10 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">KT</span>
        </div>
        <p className="text-xs text-gray-800 font-medium">
          I want to make a difference. I want to help other kids who are fighting like me. 
          Don't give up. 💪
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border-2 border-orange-400 p-3 items-center justify-end space-x-2 w-3/4 ml-auto bg-white shadow-lg"
      >
        <p className="text-xs text-gray-800 font-medium">
          Your legacy lives on through every life we touch. ❤️ #KTStrong
        </p>
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex-shrink-0 flex items-center justify-center">
          <span className="text-white text-xs">🎗️</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: "Our Three Pillars",
    description: (
      <span className="text-sm">
        Support families, fund research, and raise awareness about childhood leukemia.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-orange-600" />,
  },
  {
    title: "Join the Community",
    description: (
      <span className="text-sm">
        Be part of a movement that's turning grief into hope and saving lives.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-2",
    icon: <IconSignature className="h-4 w-4 text-orange-600" />,
  },
]

const ctaCard = {
  title: "Kersey's Words",
  description: (
    <span className="text-sm">
      In Kersey's own words: strength, courage, and hope for the future.
    </span>
  ),
  header: <SkeletonFive />,
  className: "md:col-span-1",
  icon: <IconBoxAlignRightFilled className="h-4 w-4 text-orange-600" />,
}
