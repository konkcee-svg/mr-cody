import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Innovate Your Future
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Unlock the potential of next-generation technology. We build solutions that define the industry standard and empower your vision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-200 transition-all transform hover:scale-105">
            Get Started
          </Link>
          <Link href="/features" className="bg-transparent border border-zinc-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-900 transition-all transform hover:scale-105">
            Learn More
          </Link>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent opacity-50 blur-3xl" />
    </section>
  );
}
