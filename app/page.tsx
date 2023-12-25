import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] })

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">

      <section className="sm:flex hidden fixed p-4 w-full top-0 z-20">
        <div className="w-full sm:w-[50%] flex items-center bg-slate-200 rounded-full flex justify-between mt-12 mx-auto px-8 py-4">
          <Link href="/" className="">Essays</Link>
          <Link href="https://twitter.com/0xjacobt" className="flex items-center gap-2"><FaTwitter /> Twitter</Link>
          <Link href="https://github.com/jacobtt21" className="flex items-center gap-2"><FaGithub /> Github</Link>
          <Link href="https://www.linkedin.com/in/jacobt1206/" className="flex items-center gap-2"><FaLinkedin /> Linkedin</Link>
        </div>
      </section>

      <section className="sm:hidden flex fixed p-4 w-full top-0 z-20">
        <div className="w-full sm:w-[50%] flex items-center bg-slate-200 rounded-full flex justify-between mt-12 mx-auto px-8 py-4">
          <Link href="/" className="">Essays</Link>
          <Link href="https://twitter.com/0xjacobt" className="font-semibold flex items-center gap-2"><FaTwitter /></Link>
          <Link href="https://github.com/jacobtt21" className="font-semibold flex items-center gap-2"><FaGithub /></Link>
          <Link href="https://www.linkedin.com/in/jacobt1206/" className="font-semibold flex items-center gap-2"><FaLinkedin /></Link>
        </div>
      </section>
      
      <section className="relative mt-20 z-0">
        <div className="w-full sm:w-[50%] mx-auto p-4">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full h-12 w-12 -z-10"></div>
            <div>
              <h2 className="text-xl font-semibold">Jacob Thomas</h2>
              <p className="text-xs text-gray-500"><Link href="https://twitter.com/oustrohq" className="underline">@Oustro</Link> CEO</p>
            </div>
          </div>
          <div>
            <p className="text-md mt-8 text-gray-600">Product enthusiast, creative, and investor based in Texas.</p>
            <p className="text-md mt-8 text-gray-600">I am passionate about technology and design. I believe there is more to come, and I am excited to contribute.</p>
            <p className="text-md mt-10 text-gray-600 flex items-center">
              Currently working at 
              <Link href="https://www.oustro.xyz" className="ml-1 flex text-black gap-0.5 items-center">
                <Image
                src="/oustro-logo.svg"
                alt="Oustro"
                width={24}
                height={24}
                />
                <span className={poppins.className}>Oustro</span>
              </Link>, on 
              <Link href="https://www.useziggy.com" className="ml-1 font-semibold gap-1.5 text-black flex items-center">
                <Image
                src="/ziggy-logo.svg"
                alt="Oustro"
                width={30}
                height={30}
                />
                Ziggy
              </Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 relative z-0">
        <div className="w-full mx-auto p-4">
          <div className="text-center">
            <Link className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-2xl font-semibold text-slate-900 before:absolute before:inset-0 before:-z-10 before:transition-colors before:duration-500 group" href="https://www.oustro.xyz">
              <span className="relative p-0.5 rounded-full bg-slate-200 group-hover:bg-slate-800 transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0">
                <span className="relative whitespace-nowrap">
                  <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">What I am working on?</span>
                  <span className="absolute inset-0 leading-loose rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-['/_oustro.xyz_/_useziggy.com_/_jacobt.io_/'] after:content-['/_oustro.xyz_/_useziggy.com_/_jacobt.io_/'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll" aria-hidden="true"></span>
                </span>
              </span>          
            </Link>
          </div>
        </div>
      </section>

      <section className="flex text-xs text-gray-500 p-4 sm:p-16 justify-between items-center">
        <Link className="underline" href="https://github.com/jacobtt21/jacobt.io">Source</Link>
        <div className="text-right">
          <p>Made with ❤️ in TX</p>
          <p>&copy; 2024 Jacob Thomas</p>
        </div>
      </section>
    </main>
  )
}
