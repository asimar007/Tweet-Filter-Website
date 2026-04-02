"use client";
import Link from "next/link";
import Image from "next/image";
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
      <div className="bg-white/70 backdrop-blur-xl border-b border-[#e5e5e0]/80 shadow-sm shadow-black/[0.03]">
        <nav className="max-w-5xl mx-auto px-6 h-15 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="group shrink-0 flex items-center">
            <Image
              src="/ZenX.png"
              alt="ZenX"
              width={80}
              height={32}
              className="h-11 w-auto object-contain group-hover:opacity-80 transition-opacity"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
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
                  <SheetTitle>
                    <Image
                      src="/ZenX.png"
                      alt="ZenX"
                      width={80}
                      height={32}
                      className="h-9 w-auto object-contain"
                      style={{ width: "auto" }}
                    />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col px-3 py-3">
                  {NAV_LINKS.map((item) => (
                    <SheetClose asChild key={item}>
                      <button
                        onClick={() =>
                          scrollTo(item.toLowerCase().replace(/ /g, "-"))
                        }
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
