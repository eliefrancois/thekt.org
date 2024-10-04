import "./globals.css"

import localFont from "next/font/local"
import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { OrganicButton } from "@/components/cult/organic-button"
import TextAnimate from "@/components/cult/text-animate"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const satoshi = localFont({
  variable: "--font-satoshi",
  src: "../fonts/Satoshi-Variable.ttf",
})

const brand = localFont({
  variable: "--font-brand",
  src: "../fonts/Array-Bold.woff2",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen  font-sans antialiased",
            satoshi.variable,
            brand.variable
          )}
        >
          <div className="relative flex   mx-auto flex-col">
            <div className="top-12 absolute left-12 md:left-24 z-[9999]">
              <TextAnimate
                className="text-4xl font-base text-black font-brand"
                type="shiftInUp"
                text="rune"
              />
            </div>
            <div className="top-12 absolute right-12 md:right-24 ">
              <OrganicButton label="start" />
            </div>

            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
          {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
          <div className="absolute inset-0 -z-10 h-full  w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FF5A00_100%)]"></div>
          <Toaster />

          <Analytics />
        </body>
      </html>
    </>
  )
}
