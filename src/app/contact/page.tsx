import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                Contact Us
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                Ready to start your next project? Reach out to our team of experts and let's build something incredible together.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-zinc-500">hello@innovate.corp</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Office</h3>
                  <p className="text-zinc-500">123 Innovation Way<br />San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <form className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20" />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20"></textarea>
                </div>
                <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-zinc-200 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
