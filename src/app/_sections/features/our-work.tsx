import Banners from "@/components/cult/banner/Banners"
import { Camera } from "@/components/cult/banner/camera"
import ScrollMount from "@/components/cult/banner/ScrollMount"

export function OurWorkBanner() {
  return (
    <ScrollMount
      // @ts-ignore
      className="h-screen"
      withinTop="300px"
      withinBottom="1300px"
    >
      {/* <div className="md:h-64 h-32 object-cover object-bottom-left opacity-50" /> */}
      <div className="relative h-full">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-white via-white to-white opacity-5" />
        <Camera className="h-full">
          <div className="h-full transform scale-125 flex justify-center items-center">
            <Banners />
          </div>
        </Camera>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-white via-white to-white opacity-5" />
      </div>
    </ScrollMount>
  )
}
