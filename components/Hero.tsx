"use client";
import { InstallButton } from "./InstallButton";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import GithubIcon from "./icons/Github";

export function Hero() {
  return (
    <section className="pt-36 pb-24 px-6 max-w-5xl mx-auto">
      {/* Badge */}
      <div className="afu flex justify-center mb-8">
        <Badge
          variant="outline"
          className="px-3 py-1 h-auto rounded-full text-[12px] text-[#6b7280] bg-white/60 border-[#e5e5e0] gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Free & Open Source — v1.0
        </Badge>
      </div>

      {/* Headline */}
      <div className="afu d1 text-center max-w-2xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] tracking-tight mb-6">
          Your Twitter feed,
          <br />
          <em className="not-italic text-[#6b7280]">finally peaceful.</em>
        </h1>
        <p className="text-[16px] text-[#6b7280] leading-relaxed max-w-md mx-auto font-light">
          Automatically hides political arguments, hate speech, war news, and
          controversy — so you can enjoy social media again.
        </p>
      </div>

      {/* CTA */}
      <div className="afu d2 flex flex-col items-center gap-3 mt-10">
        <div className="flex items-center gap-3">
          <InstallButton size="lg" />
          <Button
            asChild
            variant="outline"
            className="px-6 py-3 h-auto text-[14px] rounded-xl border-[#e5e5e0] text-[#6b7280] hover:text-[#1a1a18] hover:bg-white gap-2"
          >
            <a
              href="https://github.com/asimar007/ZenX.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon width={16} height={16} />
              <span>View on GitHub</span>
            </a>
          </Button>
        </div>
        <p className="text-[12px] text-[#9ca3af]">
          No account · No data collected · 100% local
        </p>
      </div>

      {/* Social proof */}
      <div className="afu d3 mt-12">
        <Separator className="bg-[#e5e5e0]" />
        <div className="flex items-center justify-center gap-6 pt-12">
          {[
            ["200+", "keywords blocked"],
            ["5+", "filter categories"],
            ["0", "data collected"],
            ["100%", "local processing"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif text-xl font-semibold tracking-tight">
                {num}
              </div>
              <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
