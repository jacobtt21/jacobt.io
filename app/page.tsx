import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      
      <section className="relative z-0">
        <div className="w-full sm:w-[50%] mx-auto  p-4">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full h-12 w-12"></div>
            
            <div>
              <h2 className="text-xl font-semibold">Jacob Thomas</h2>
              <p className="text-sm text-gray-600"><Link href="https://twitter.com/oustrohq" className="underline">@Oustro</Link> CEO</p>
            </div>

          </div>

          <div>
            <p className="text-md mt-8 text-gray-600">I am a software engineer and product enthusiast based in Texas.</p>
            <p className="text-md mt-10 text-gray-600">I am currently working at <Link href="https://www.oustro.xyz" className="text-indigo-500">Oustro</Link>, on <Link href="https://www.useziggy.com/" className="text-sky-600">Ziggy</Link>.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 relative z-0">
        <div className="w-full mx-auto">
          <div className="text-center">
            <Link className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 before:-z-10 before:transition-colors before:duration-500 group" href="https://www.oustro.xyz">
              <span className="relative p-0.5 rounded-full bg-slate-200 group-hover:bg-slate-800 transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0">
                <span className="relative whitespace-nowrap">
                  <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">What I am working on?</span>
                  <span className="absolute inset-0 leading-loose rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-['oustro.xyz_useziggy.com_jacobt.io'] after:content-['oustro.xyz_useziggy.com_jacobt.io'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll" aria-hidden="true"></span>
                </span>
              </span>          
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
