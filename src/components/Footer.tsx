import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              INNOVATE
            </Link>
            <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
              Building the next generation of digital infrastructure for forward-thinking companies.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><Link href="/features" className="hover:text-zinc-300 transition-colors">Features</Link></li>
                <li><Link href="/solutions" className="hover:text-zinc-300 transition-colors">Solutions</Link></li>
                <li><Link href="#" className="hover:text-zinc-300 transition-colors">Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><Link href="/about" className="hover:text-zinc-300 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-zinc-300 transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1 text-center sm:text-left">
              <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><Link href="#" className="hover:text-zinc-300 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-zinc-300 transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Innovate Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
