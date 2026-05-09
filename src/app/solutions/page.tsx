import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  const solutions = [
    { title: "Enterprise AI", desc: "Custom AI models tailored to your business needs." },
    { title: "Cloud Scale", desc: "Infrastructure that scales horizontally without downtime." },
    { title: "Data Analytics", desc: "Real-time insights from your most complex data sets." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Solutions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {solutions.map((s, i) => (
              <div key={i} className="border-l border-zinc-800 pl-8 py-4">
                <h2 className="text-2xl font-bold text-white mb-4">{s.title}</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
