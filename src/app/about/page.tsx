import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
              About Us
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed mb-8">
              Innovate Corp was founded on the principle that technology should be accessible, scalable, and secure. Our mission is to empower teams to build the future of the web.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Based in the heart of the tech world, we work with industry leaders and disruptive startups to solve the most challenging engineering problems of our time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
