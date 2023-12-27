import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] })

export default function Home() {
  return (
    <main className="relative min-h-screen justify-center bg-slate-50 overflow-hidden">

      <section className="p-4 w-full z-20">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 mt-12 mx-auto w-full sm:w-[50%] p-[1px] rounded-lg">
          <div className="shadow-sm border-2 border-slate-100 flex items-center bg-slate-100 rounded-lg flex justify-between px-4 py-1">
            <Link href="/"><code className="">$ jacobt.io </code></Link>
            <div className="flex">
              <Link href="https://twitter.com/0xjacobt" className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2"><FaTwitter /></Link>
              <Link href="https://github.com/jacobtt21" className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2"><FaGithub /></Link>
              <Link href="https://www.linkedin.com/in/jacobt1206/" className="hover:bg-slate-200 transition rounded p-3 flex items-center gap-2"><FaLinkedin /></Link>
            </div>
          </div>
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
            <p className="text-md mt-8 text-gray-600">Product enthusiast, creative, and investor based in TX.</p>
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

      <section className="sm:w-[50%] mx-auto p-4 relative mt-20 z-0">
        <p className="text-xs mt-8 text-gray-600">© 2024 Jacob Thomas. <Link href="https://github.com/jacobtt21/jacobt.io" className="underline">Source on Github.</Link></p>
      </section>

    </main>
  )
}
