import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 px-8">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 pt-30">
        {/* Left Content */}
        <div className="space-y-8 text-left">
           <Image src="/images/logo-1.svg" alt="Logo" width={220} height={220} className="pb-10"/>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-white max-w-xl">
            <span className="text-yellow-300">Ilmu</span>,{" "}
            <span className="text-purple-400">Inspirasi</span>,
            <br />
            dan{" "}
            <span className="text-cyan-300">Wawasan</span>
            <br />
            Yang Sulit Kamu Dapatkan — 
            <br />
            Semuanya ada
            <br />
             disini!
          </h1>

          <Link href="/home" className="px-8 py-2 bg-[#FFFF02] rounded-xl font-semibold text-black shadow-lg hover:bg-yellow-300 transition-colors">
            Mulai
          </Link>
        </div>

        {/* Right Image with Gradient */}
        <div className="flex justify-end relative">
          {/* Gradient background */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/70 to-purple-900/50 blur-3xl"></div>
          </div>

          {/* Hero Image */}
          <Image
            src="/images/landing.svg"
            alt="Hero"
            width={820}
            height={820}
            className="relative z-10 object-contain"
          />
        </div>
      </section>
    </main>
  )
}
