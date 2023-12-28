"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";


const poppins = Poppins({ subsets: ['latin'], weight: ['500'] })

export default function Home() {
  const covers = [
    {
      title: "WHATS POPPIN",
      artist: "Jack Harlow",
      picture: "/songs/wp.png",
      alt: "Sweet Actions by Jack Harlow Album Cover",
      contrast: false,
      link: "https://www.youtube.com/watch?v=w9uWPBDHEKE",
      label: "Link to the youtube video of WHATS POPPIN by Jack Harlow"
    },
    {
      title: "MONACO",
      artist: "Bad Bunny",
      picture: "/songs/monaco.png",
      alt: "Nadie Sabe Lo Que Va a Pasar Mañana by Bad Bunny Album Cover",
      contrast: false,
      link: "https://www.youtube.com/watch?v=_PJvpq8uOZM",
      label: "Link to the youtube video of MONACO by Bad Bunny"
    },
    {
      title: "Yes Indeed",
      artist: "Lil Baby, Drake",
      picture: "/songs/yi.png",
      alt: "Harder Than Ever by Lil Baby Album Cover",
      contrast: false,
      link: "https://www.youtube.com/watch?v=QknbZV_suzg",
      label: "Link to the youtube video of Yes Indeed by Lil Baby, Drake"
    },
    {
      title: "On The Radar Freestyle",
      artist: "Drake, Central Cee",
      picture: "/songs/otrf.png",
      alt: "On The Radar Freestyle by Drake, Central Cee Single Cover",
      contrast: true,
      link: "https://www.youtube.com/watch?v=cfX1QlfxTBI",
      label: "Link to the youtube video of On The Radar Freestyle by Drake, Central Cee"
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
    <main className={`relative min-h-screen justify-center overflow-hidden transition-all ${theme === "dark" && "bg-slate-900 text-slate-400"}`}>

      <section className="p-4 w-full z-20">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 mx-auto w-full sm:w-[50%] p-[1px] rounded-lg">
          <div className={`sm:flex items-center rounded-lg text-center sm:justify-between px-4 py-1 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}>
            <Link aria-label="Link to the homepage of Jacob Thomas" href="/"><code className="text-lg">hi@jacobt.io:~/$</code></Link>
            <div className="mt-4 sm:mt-0 justify-center flex">
              <div className="group gap-1 flex items-center">
                <div className="hidden sm:block">
                  <p className="hidden text-[11px] group-hover:block"><code>{theme}</code></p>
                </div>
                <button aria-label="Button to change the theme of the site" onClick={() => changeTheme(theme)} className={`transition rounded p-3 flex items-center gap-2 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"}`}>
                  {theme === "dark" ? (
                    <IoMoon />
                  ) : (
                    <IoSunny />
                  )}
                </button>
              </div>
              <Link aria-label="Twitter link for Jacob Thomas" href="https://twitter.com/0xjacobt" className={`transition rounded p-3 flex items-center gap-2 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"}`}><FaXTwitter /></Link>
              <Link aria-label="Github link for Jacob Thomas" href="https://github.com/jacobtt21" className={`transition rounded p-3 flex items-center gap-2 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"}`}><FaGithub /></Link>
              <Link aria-label="Linkedin link for Jacob Thomas" href="https://www.linkedin.com/in/jacobt1206/" className={`transition rounded p-3 flex items-center gap-2 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"}`}><FaLinkedin /></Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative z-0">
        <div className="w-full sm:w-[50%] mx-auto p-4">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full h-12 w-12 -z-10"></div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Jacob Thomas</h2>
                <div className={`text-[10px] font-semibold px-2 py-1 rounded ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}>
                  📍 College Station, TX
                </div>
              </div>
              <p className="text-xs text-gray-500"><Link aria-label="Link to Oustro LLC's twitter" href="https://twitter.com/oustrohq" className="underline">@Oustro</Link> CEO</p>
            </div>
          </div>
          <div>
            <p className={`text-md mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>Product enthusiast, creative, and investor based in Texas.</p>
            <p className={`text-md mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>I am passionate about technology and design. I believe there is more to come, and I am excited to contribute.</p>
            <p className={`text-md mt-8 text-md mt-10 flex items-center ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>
              Currently working on
              <Link aria-label="Link to oustro.xyz" href="https://www.oustro.xyz" className={`ml-1 flex gap-0.5 items-center ${theme === "light" && "text-black"}`}>
                <Image
                src="/oustro-logo.svg"
                alt="Oustro, LLC Logo"
                width={24}
                height={24}
                />
                <span className={poppins.className}>Oustro</span>
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="This section is a carousel of both album covers and movie posters, they are rotating." className="w-full sm:w-[50%] mx-auto">
        <h3 className={`mt-12 border-t pt-4 px-4 text-xl font-semibold ${theme === "dark" ? "border-slate-700" : "border-slate-300"}`}>A Playlist Made by Me</h3>
        <p className={`pt-2 px-4 mx-auto text-sm pb-4 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>Songs I liked at a certain point, hover to play.</p>
        <div className="group w-full inline-flex mt-6 flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {covers.map((cover, index) => (
              <li key={index}>
                <div className="rounded-xl w-48">
                  <Link aria-label={cover.label} href={cover.link}>
                    <Image
                    src={cover.picture}
                    alt={cover.alt}
                    width={200}
                    height={200}
                    className="w-full z-0 rounded-xl opacity-100 hover:opacity-50 transition-all"
                    />
                  </Link>
                  <div className={`backdrop-blur rounded-b-xl h-16 from-white-50 p-4 -mt-16 z-10 text-sm ${cover.contrast ? "text-white" : "text-black"}`}>
                    <p className="font-semibold">{cover.title}</p>
                    <p>{cover.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
      
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {covers.map((cover, index) => (
              <li key={index}>
                <div className="rounded-xl w-48">
                  <Link aria-label={cover.label} href={cover.link}>
                    <Image
                    src={cover.picture}
                    alt={cover.alt}
                    width={200}
                    height={200}
                    className="w-full z-0 rounded-xl opacity-100 hover:opacity-50 transition-all"
                    />
                  </Link>
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
