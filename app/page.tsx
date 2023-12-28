"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";


const poppins = Poppins({ subsets: ['latin'], weight: ['500'] })

export default function Home() {
  const covers = [
    {
      title: "WHATS POPPIN",
      artist: "Jack Harlow",
      picture: "/songs/wp.png",
      alt: "Sweet Actions by Jack Harlow Album Cover",
      contrast: false
    },
    {
      title: "MONACO",
      artist: "Bad Bunny",
      picture: "/songs/monaco.png",
      alt: "Nadie Sabe Lo Que Va a Pasar Mañana by Bad Bunny Album Cover",
      contrast: false
    },
    {
      title: "Yes Indeed",
      artist: "Lil Baby, Drake",
      picture: "/songs/yi.png",
      alt: "Harder Than Ever by Lil Baby Album Cover",
      contrast: false
    },
    {
      title: "On The Radar Freestyle",
      artist: "Drake, Central Cee",
      picture: "/songs/otrf.png",
      alt: "On The Radar Freestyle by Drake, Central Cee Single Cover",
      contrast: true
    },
  ]

  const changeTheme = (theme: string | null | undefined) => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else if (theme === "light") {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
  }

  const [theme, setTheme] = useState<undefined | null | string>(undefined)

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light")
  }, [])

  return (
    <main className={`relative min-h-screen justify-center overflow-hidden ${theme === "dark" && "bg-slate-900 text-slate-400"}`}>

      <section className="p-4 w-full z-20">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 mt-12 mx-auto w-full sm:w-[50%] p-[1px] rounded-lg">
          <div className={`shadow-sm border-2 border-slate-100 flex items-center rounded-lg flex justify-between px-4 py-1 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}>
            <Link aria-label="Link to the homepage of Jacob Thomas" href="/"><code className="">~/ $ jacobt.io </code></Link>
            <div className="flex">
              <div className="group gap-1 flex items-center">
                <p className="hidden text-[11px] group-hover:block"><code>{theme}</code></p>
                <button aria-label="Button to change the theme of the site" onClick={() => changeTheme(theme)} className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2">
                  {theme === "dark" ? (
                    <IoMoon />
                  ) : (
                    <IoSunny />
                  )}
                </button>
              </div>

              <Link aria-label="Twitter link for Jacob Thomas" href="https://twitter.com/0xjacobt" className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2"><FaTwitter /></Link>
              <Link aria-label="Github link for Jacob Thomas" href="https://github.com/jacobtt21" className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2"><FaGithub /></Link>
              <Link aria-label="Linkedin link for Jacob Thomas" href="https://www.linkedin.com/in/jacobt1206/" className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2"><FaLinkedin /></Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative mt-10 z-0">
        <div className="w-full sm:w-[50%] mx-auto p-4">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full h-12 w-12 -z-10"></div>
            <div>
              <h2 className="text-xl font-semibold">Jacob Thomas</h2>
              <p className="text-xs text-gray-500"><Link aria-label="Link to Oustro LLC's twitter" href="https://twitter.com/oustrohq" className="underline">@Oustro</Link> CEO</p>
            </div>
          </div>
          <div>
            <p className={`text-md mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>Product enthusiast, creative, and investor based in TX.</p>
            <p className={`text-md mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>I am passionate about technology and design. I believe there is more to come, and I am excited to contribute.</p>
            <p className={`text-md mt-8 text-md mt-10 flex items-center ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>
              Currently working at 
              <Link aria-label="Link to oustro.xyz" href="https://www.oustro.xyz" className={`ml-1.5 flex gap-0.5 items-center ${theme === "light" && "text-black"}`}>
                <Image
                src="/oustro-logo.svg"
                alt="Oustro, LLC Logo"
                width={24}
                height={24}
                />
                <span className={poppins.className}>Oustro</span>
              </Link>, on 
              <Link aria-label="Link to useziggy.com" href="https://www.useziggy.com" className={`ml-1.5 flex gap-2 font-semibold items-center ${theme === "light" && "text-black"}`}>
                <Image
                src="/ziggy-logo.svg"
                alt="Ziggy by Oustro, LLC logo"
                width={30}
                height={30}
                />
                Ziggy
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="This section is a carousel of both album covers and movie posters, they are rotating." className="w-full sm:w-[80%] mx-auto">
        <div className="w-full inline-flex mt-12 sm:mt-20 flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {covers.map((cover, index) => (
              <li key={index}>
                <div className="rounded-xl w-48">
                  <Image
                  src={cover.picture}
                  alt={cover.alt}
                  width={200}
                  height={200}
                  className="w-full z-0 rounded-xl"
                  />
                  <div className={`backdrop-blur rounded-b-xl h-16 from-white-50 p-4 -mt-16 z-10 text-sm ${cover.contrast ? "text-white" : "text-black"}`}>
                    <p className="font-semibold">{cover.title}</p>
                    <p>{cover.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
      
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {covers.map((cover, index) => (
              <li key={index}>
                <div className="rounded-xl w-48">
                  <Image
                  src={cover.picture}
                  alt={cover.alt}
                  width={200}
                  height={200}
                  className="w-full z-0 rounded-xl"
                  />
                  <div className={`backdrop-blur rounded-b-xl h-16 from-white-50 p-4 -mt-16 z-10 text-sm ${cover.contrast ? "text-white" : "text-black"}`}>
                    <p className="font-semibold">{cover.title}</p>
                    <p>{cover.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="sm:w-[50%] mx-auto text-center p-4 relative mt-20 z-0">
        <p className="text-xs mt-8 text-gray-600">© 2024 Jacob Thomas. <Link aria-label="Link to the source repo" href="https://github.com/jacobtt21/jacobt.io" className="underline">Source on Github.</Link></p>
      </section>

    </main>
  )
}
