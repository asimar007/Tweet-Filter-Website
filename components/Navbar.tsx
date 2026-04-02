"use client";
import Link from "next/link";
import Image from "next/image";
// Link is used for the logo; nav items use scrollTo() for smooth scroll
import { Menu } from "lucide-react";
import { InstallButton } from "./InstallButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = ["Features", "Filters", "How it works"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Glass bar */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-[#e5e5e0]/80 shadow-sm shadow-black/[0.03]">
        <nav className="max-w-5xl mx-auto px-6 h-15 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 shadow-sm">
              <Image
                src="/icon.png"
                alt="ZenX"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-[#1a1a18] group-hover:text-black transition-colors">
              Zen<span className="text-[#6b7280]">X</span>
            </span>
          </Link>

          {/* Desktop nav links — centered */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
                className="px-3 py-1.5 text-[13px] text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0] rounded-lg transition-all duration-150 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden md:block">
              <InstallButton size="sm" />
            </div>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="md:hidden text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0]"
                >
                  <Menu className="size-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72 bg-white p-0">
                <SheetHeader className="px-5 py-4 border-b border-[#e5e5e0]">
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 shadow-sm">
                      <Image
                        src="/icon.png"
                        alt="ZenX"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-[15px] tracking-tight text-[#1a1a18]">
                      Zen<span className="text-[#6b7280]">X</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col px-3 py-3">
                  {NAV_LINKS.map((item) => (
                    <SheetClose asChild key={item}>
                      <button
                        onClick={() => scrollTo(item.toLowerCase().replace(/ /g, "-"))}
                        className="flex items-center text-[14px] text-[#6b7280] hover:text-[#1a1a18] hover:bg-[#f3f3f0] px-3 py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        {item}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </nav>
      </div>
    </header>
  );
}
