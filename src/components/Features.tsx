const features = [
  {
    title: "Cutting Edge Tech",
    description: "Leverage the latest advancements in AI and cloud computing to stay ahead of the curve.",
    icon: "🚀",
  },
  {
    title: "Seamless Integration",
    description: "Easily connect with your existing workflow and tools for a unified experience.",
    icon: "⚙️",
  },
  {
    title: "Scalable Infrastructure",
    description: "Built to grow with your business, from startup to enterprise-level operations.",
    icon: "📈",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Designed for the Future
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Experience the tools that will transform your industry and redefine your productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
