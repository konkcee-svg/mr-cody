import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              INNOVATE
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/features" className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="/solutions" className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </Link>
              <Link href="/about" className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <Link href="/contact" className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
