import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e0] px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/ZenX.png"
            alt="ZenX"
            width={80}
            height={32}
            className="object-contain shrink-0"
          />
          <span className="text-[12px] text-[#9ca3af] ml-2">
            © {new Date().getFullYear()} · Made for a calmer internet
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            {
              label: "GitHub",
              href: "https://github.com/asimar007/ZenX.git",
            },
            { label: "Privacy", href: "#" },
            { label: "Chrome Store", href: "#" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={
                l.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="text-[12px] text-[#9ca3af] hover:text-[#6b7280] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
