const STEPS = [
  {
    n: "01",
    title: "Install the extension",
    desc: "Click the install button above. One click, no account, no configuration needed.",
  },
  {
    n: "02",
    title: "Choose your filters",
    desc: "Click the ZenX icon in your toolbar. All 5 categories are on by default — toggle any off.",
  },
  {
    n: "03",
    title: "Enjoy a calmer feed",
    desc: "Visit X.com and scroll. Filtered tweets collapse silently. Reveal any tweet with one click.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 border-t border-[#e5e5e0]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest text-[#9ca3af] mb-3">
            How it works
          </p>
          <h2
            className="text-3xl md:text-4xl tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Up in 30 seconds.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-6 left-[calc(16.66%+12px)] right-[calc(16.66%+12px)] h-px bg-[#e5e5e0]" />

          {STEPS.map((step) => (
            <div key={step.n} className="relative">
              <div className="w-12 h-12 rounded-full border border-[#e5e5e0] bg-white flex items-center justify-center mb-5 relative z-10">
                <span
                  className="text-[15px] font-semibold tracking-tight text-[#1a1a18]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {step.n}
                </span>
              </div>
              <h3 className="text-[15px] font-semibold mb-2 tracking-tight">{step.title}</h3>
              <p className="text-[13px] text-[#6b7280] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
