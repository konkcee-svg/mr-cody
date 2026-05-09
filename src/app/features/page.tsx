import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Features from "@/components/Features";

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Our Features
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl mb-16">
            Explore the advanced capabilities that make our platform the leader in the industry. We provide tools designed for speed, scale, and security.
          </p>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
