"use client"

import { useState, useEffect } from "react"

import { createClient } from "@vercel/kv";

import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"

import { FaXTwitter, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa6";
import { IoMoon, IoSunny } from "react-icons/io5";
import { HiCursorClick } from "react-icons/hi";


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
      title: "Funkytown",
      artist: "Lipps Inc.",
      picture: "/songs/ft.png",
      alt: "Mouth to Mouth by Lipps Inc. Album Cover",
      contrast: true,
      link: "https://www.youtube.com/watch?v=Z6dqIYKIBSU&pp=ygUJZnVua3l0b3dt",
      label: "Link to the youtube video of Funkytown by Lipps Inc."
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
    }
  ]

  const projects = [
    {
      name: "Oustro",
      description: "Oustro is my startup that builds software for people and businesses.",
      link: "https://www.oustro.xyz",
      alt: "Oustro, LLC Logo",
      image: "/oustro-logo.svg",
      label: "Link to oustro.xyz",
      color: "from-indigo-500"
    },
    {
      name: "Ziggy",
      description: "Ziggy is an AI tool to help gather feedback in a conversational way.",
      link: "https://www.useziggy.com",
      alt: "Ziggy Logo",
      image: "/ziggy-logo.svg",
      label: "Link to useziggy.com",
      color: "from-sky-400"
    },
    {
      name: "Portfoliwoah",
      description: "An open source platform to display portfolios and projects.", 
      link: "https://www.portfoliwoah.io",
      alt: "Portfoliwoah Logo",
      image: "/portfoliwoah-logo.png",
      label: "Link to portfoliwoah.io",
      color: "from-green-500"
    },
    {
      name: "Hobbes",
      description: "Hobbes is a CLI written in Go to track KPIs for Oustro and Ziggy.",
      link: "https://github.com/jacobtt21/hobbes",
      alt: "Hobbes Logo",
      image: "/hobbes-logo.png",
      label: "Link to the Hobbes Github Repo",
      color: "from-purple-600"
    }
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

  const addClick = (name: string) => async () => {
    const kv = createClient({
      url: process.env.NEXT_PUBLIC_KV_REST_API_URL as string,
      token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN as string,
    });

    const clicks = await kv.get(name)
    const newClicks = (clicks as number) + 1
    await kv.set(name, newClicks)
    
    getViews()
  }

  const getViews = async () => {
    const kv = createClient({
      url: process.env.NEXT_PUBLIC_KV_REST_API_URL as string,
      token: process.env.NEXT_PUBLIC_KV_REST_API_TOKEN as string,
    });

    let viewCount: number[] = []
    for (const project of projects) {
      const clicks = await kv.get(project.name)
      viewCount.push(clicks as number);
    }

    setViews(viewCount)
  }

  const [theme, setTheme] = useState<undefined | null | string>(undefined)
  const [views, setViews] = useState<number[]>([])

  useEffect(() => {
    getViews()
    setTheme(localStorage.getItem("theme") || "dark")
  }, [])

  return (
    <main className={`relative min-h-screen justify-center overflow-hidden transition-all ${theme === "dark" && "bg-slate-900 text-slate-400"}`}>

      <section className="sm:mt-6 p-4 w-full z-20">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 mx-auto w-full sm:w-[50%] p-[1px] rounded-lg">
          <div className={`sm:flex items-center rounded-lg text-center sm:justify-between px-4 pt-5 pb-2 sm:pt-2 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}>
            <Link aria-label="Link to the homepage of Jacob Thomas" href="/"><code className="text-lg mt-2">hi@jacobt.io:~/$</code></Link>
            <div className="mt-2 sm:mt-0 justify-center flex">
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
              <Link aria-label="Twitter link for Jacob Thomas" href="https://twitter.com/jac_c0b" className={`transition rounded p-3 flex items-center gap-2 ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-slate-200"}`}><FaXTwitter /></Link>
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
                <div className={`text-[10px] font-semibold px-2 py-1 rounded ${theme === "dark" ? "bg-slate-800" : "bg-slate-100 border border-slate-200"}`}>
                  <p>📍 College Station, TX</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-0.5"><Link aria-label="Link to Oustro LLC's twitter" href="https://twitter.com/oustrohq" className="underline">@oustrohq</Link> CEO & CS student @ TAMU</p>
            </div>
          </div>
          <div>
            <p className={`text-md mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>Product enthusiast, creative, and founder based in Texas.</p>
            <p className={`text-md mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>I am passionate about technology and design. I believe there is more to come, and I am excited to contribute.</p>
            <p className={`text-md mt-8 text-md mt-10 flex items-center ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>
              Currently working on open source projects at 
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

      <section className="w-full sm:w-[50%] mx-auto">
        <h3 className="mt-8 px-4 text-xl font-semibold">Featured Work</h3>
        <p className={`pt-2 px-4 mx-auto text-sm pb-4 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>Stuff I&apos;ve shipped and am proud of. Feel free to check it out.</p>
        <div className="grid mt-6 sm:grid-cols-2 gap-4 px-4">
          {projects.map((project, index) => (
            <Link aria-label={project.label} onClick={addClick(project.name)} href={project.link} key={index}>
              <div className={`${index % 2 === 0 ? "bg-gradient-to-l "+project.color : "bg-gradient-to-r "+project.color} to-transparent group p-[1px] rounded-lg transition-all`}>
                <div className={`rounded-lg h-full px-4 py-4 transition-all ${theme === "dark" ? "bg-slate-800 group-hover:bg-slate-700" : "bg-slate-100 group-hover:bg-slate-200"}`}>
                  <Image
                  src={project.image}
                  alt={project.alt}
                  width={40}
                  height={40}
                  />
                  <p className="mt-4 group-hover:underline transition-all text-lg font-semibold flex items-center gap-1">{project.name}<span className="text-sm group-hover:translate-x-1 transition-transform"><FaArrowRight /></span></p>
                  <p className="mt-2 text-sm">{project.description}</p>
                  <div className={`mt-5 text-xs inline-block px-2 py-1 bg-slate rounded ${theme === "dark" ? "group-hover:bg-slate-800 bg-slate-700" : "group-hover:bg-slate-100 bg-slate-200"}`}>
                    <p className="flex items-center gap-1"><HiCursorClick /> {views.at(index)}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section aria-label="This section is a carousel of both album covers and movie posters, they are rotating." className="w-full sm:w-[50%] mx-auto">
        <h3 className={`mt-12 border-t pt-8 px-4 text-xl font-semibold ${theme === "dark" ? "border-slate-700" : "border-slate-300"}`}>The Playlist</h3>
        <p className={`pt-2 px-4 mx-auto text-sm pb-4 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>Music I enjoy, click to play.</p>
        <div className="group w-full inline-flex mt-6 flex-nowrap overflow-hidden sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {covers.map((cover, index) => (
              <li key={index}>
                <div className="group/cover w-48">
                  <Link aria-label={cover.label} href={cover.link}>
                    <Image
                    src={cover.picture}
                    alt={cover.alt}
                    width={200}
                    height={200}
                    priority={true}
                    className="w-full rounded-xl hover:opacity-50 transition-all"
                    />
                  </Link>
                  <div className={`backdrop-blur rounded-b-xl h-16 from-white-50 p-2 -mt-16 ${cover.contrast ? "text-white" : "text-black"}`}>
                    <p className="font-semibold group-hover/cover:text-[15px] text-sm transition-all">{cover.title}</p>
                    <p className="text-sm">{cover.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
      
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
            {covers.map((cover, index) => (
              <li key={index}>
                <div className="group/cover w-48">
                  <Link aria-label={cover.label} href={cover.link}>
                    <Image
                    src={cover.picture}
                    alt={cover.alt}
                    width={200}
                    height={200}
                    priority={true}
                    className="w-full rounded-xl hover:opacity-50 transition-all"
                    />
                  </Link>
                  <div className={`backdrop-blur rounded-b-xl h-16 from-white-50 p-2 -mt-16 ${cover.contrast ? "text-white" : "text-black"}`}>
                    <p className="font-semibold group-hover/cover:text-[15px] text-sm transition-all">{cover.title}</p>
                    <p className="text-sm">{cover.artist}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="sm:w-[50%] mx-auto text-center p-4 relative mt-20 z-0">
        <p className={`text-xs mt-8 ${theme === "dark" ? "text-slate-500" : "text-gray-600"}`}>© 2024 Jacob Thomas. <Link aria-label="Link to the source repo" href="https://github.com/jacobtt21/jacobt.io" className="underline">Source on GitHub</Link></p>
      </section>

    </main>
  )
}
