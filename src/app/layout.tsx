import "./globals.css"

import type { Metadata } from "next"
import localFont from "next/font/local"
import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { DonateButton } from "@/components/donate-button"
import TextAnimate from "@/components/cult/text-animate"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: "The KT Foundation | Honoring Kersey Thermidor",
  description: "The KT Foundation honors Kersey Thermidor's legacy by supporting families affected by childhood leukemia, funding research, and raising awareness about acute lymphoblastic leukemia (ALL).",
  keywords: ["KT Foundation", "Kersey Thermidor", "childhood leukemia", "ALL", "acute lymphoblastic leukemia", "cancer awareness", "nonprofit"],
}

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
                text="KT"
              />
            </div>
            <div className="top-12 absolute right-12 md:right-24">
              <DonateButton />
            </div>

            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
          {/* CREDIT BG PATTERN -  https://bg.ibelick.com/ */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white">
            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#ff8533_100%)] opacity-40"></div>
            <div className="absolute h-full w-full bg-[radial-gradient(#ff8533_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          </div>
          <Toaster />

          <Analytics />
        </body>
      </html>
    </>
  )
}
