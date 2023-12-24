import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="py-24">
        <section className="relative z-0">
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-48">
            <div className="text-center">
              <Link className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center justify-center text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 before:absolute before:inset-0 before:-z-10 before:transition-colors before:duration-500 group" href="https://www.oustro.xyz">
                <span className="relative p-0.5 rounded-full bg-slate-200 group-hover:bg-slate-800 transition duration-500 overflow-hidden flex items-center justify-center before:opacity-0">
                  <span className="relative whitespace-nowrap">
                    <span className="block px-8 py-6 rounded-full bg-gradient-to-r from-slate-200 to-slate-100 z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">Jacob Thomas</span>
                    <span className="absolute inset-0 leading-loose rounded-full bg-gradient-to-r from-slate-900 to-slate-800 z-10 inline-flex items-center whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 before:bg-clip-text before:text-transparent before:bg-gradient-to-r before:from-indigo-500 before:to-indigo-300 after:bg-clip-text after:text-transparent after:bg-gradient-to-r after:from-indigo-500 after:to-indigo-300 before:content-['oustro.xyz_useziggy.com_jacobt.io'] after:content-['oustro.xyz_useziggy.com_jacobt.io'] before:px-2 after:px-2 before:animate-infinite-scroll after:animate-infinite-scroll" aria-hidden="true"></span>
                  </span>
                </span>          
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
