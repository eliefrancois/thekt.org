"use client"

import { useCallback, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandsPraying } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

export function Navbar({ activeSection }) {
  const [activeTab, setActiveTab] = useState("hero")

  const handleTabClick = useCallback((id) => {
    const section = document.querySelector(`#${id}`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveTab(id)
    }
  }, [])

  // Dynamically generate tabs with icons and conditional styling
  const tabs = [
    {
      id: "hero",
      label: "Home",
      icon: (
        <CultIcon
          className={`h-6 w-6 ${
            activeSection === "hero" ? "text-white" : "text-gray-400"
          }`}
        />
      ),
    },
    {
      id: "feature",
      label: "Mission",
      icon: (
        <HeartIcon
          className={`h-6 w-6 ${
            activeSection === "feature"
              ? "text-white"
              : "text-gray-400"
          }`}
        />
      ),
    },
    {
      id: "price",
      label: "Give",
      icon: (
        <FontAwesomeIcon
          icon={faHandsPraying}
          className={`h-5 w-5 ${
            activeSection === "price"
              ? "text-white"
              : "text-gray-400"
          }`}
        />
      ),
    },
  ]

  return (
    <div className="flex space-x-4 sticky top-0 z-50 bg-white/90 backdrop-blur-md px-1 py-[3px] rounded-full border-2 border-orange-200 shadow-lg">
      <ul className="flex w-full justify-between">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id || activeSection === tab.id

          return (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative flex items-center justify-center px-4 py-2 text-lg cursor-pointer font-medium outline-none transition focus-visible:outline-2"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-orange-600"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <div className="z-20 flex items-center">{tab.icon}</div>
            </motion.button>
          )
        })}
      </ul>
    </div>
  )
}

function CultIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 17H16M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
function HeartIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.84 4.61012C20.3292 4.09912 19.7228 3.69376 19.0554 3.41891C18.3879 3.14405 17.6725 3.00488 16.95 3.00488C16.2275 3.00488 15.5121 3.14405 14.8446 3.41891C14.1772 3.69376 13.5708 4.09912 13.06 4.61012L12 5.67012L10.94 4.61012C9.9083 3.57842 8.50903 3.00488 7.05 3.00488C5.59096 3.00488 4.19169 3.57842 3.16 4.61012C2.1283 5.64181 1.55477 7.04108 1.55477 8.50012C1.55477 9.95915 2.1283 11.3584 3.16 12.3901L4.22 13.4501L12 21.2301L19.78 13.4501L20.84 12.3901C21.351 11.8794 21.7563 11.2729 22.0312 10.6055C22.3061 9.93801 22.4452 9.22262 22.4452 8.50012C22.4452 7.77762 22.3061 7.06222 22.0312 6.39476C21.7563 5.7273 21.351 5.12087 20.84 4.61012Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function PeopleIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
