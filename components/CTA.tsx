"use client";
import { InstallButton } from "./InstallButton";

export function CTA() {
  return (
    <section className="py-24 px-6 border-t border-[#e5e5e0] bg-[#f8f8f6]">
      <div className="max-w-lg mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl tracking-tight mb-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Ready for a calmer timeline?
        </h2>
        <p className="text-[15px] text-[#6b7280] mb-8 leading-relaxed font-light">
          Free, open source, and always will be.
          <br />
          Your feed, your rules.
        </p>

        <InstallButton size="lg" />

        <p className="mt-4 text-[12px] text-[#9ca3af]">
          Works on Chrome &middot; Brave &middot;Microsoft Edge
        </p>
      </div>
    </section>
  );
}
