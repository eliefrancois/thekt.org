import { TweetGrid } from "@/components/cult/tweet-grid"

import LandingPageLayout from "./_layout"
import { Projects } from "./_sections/features"
import { Hero } from "./_sections/hero"
import { Pricing } from "./_sections/price"

export default function LandingPage({}) {
  return (
    <LandingPageLayout
      hero={<Hero />}
      price={<Pricing />}
      feature={<Projects />}
      testimonial={<TweetGrid />}
    />
  )
}
