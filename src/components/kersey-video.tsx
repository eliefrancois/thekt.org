"use client"

export function KerseyVideo() {
  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-600">
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/kersey-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
        #KTStrong
      </div>
    </div>
  )
}

