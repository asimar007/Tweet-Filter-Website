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

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#fafaf8]/80 backdrop-blur-md border-b border-[#e5e5e0]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/icon.png"
            alt="Tweet Filter"
            width={32}
            height={32}
            className="shrink-0"
            style={{ width: 32, height: 32 }}
          />
          <span
            className="font-semibold text-[15px] tracking-tight text-[#1a1a18]"
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            Tweet Filter
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-[13px] text-[#6b7280] hover:text-[#1a1a18] transition-colors duration-150"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <InstallButton size="sm" />
          </div>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="md:hidden text-[#6b7280] hover:text-[#1a1a18]"
              >
                <Menu className="size-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-[#fafaf8]">
              <SheetHeader className="px-4 pt-2 pb-4 border-b border-[#e5e5e0]">
                <SheetTitle className="flex items-center gap-2 text-[15px] font-semibold text-[#1a1a18]">
                  <Image
                    src="/icon.png"
                    alt="FeedClear"
                    width={28}
                    height={28}
                    className="shrink-0"
                    style={{ width: 28, height: 28 }}
                  />
                  <span style={{ fontFamily: "'Geist', sans-serif" }}>
                    FeedClear
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-0 px-4 py-2">
                {NAV_LINKS.map((item) => (
                  <SheetClose asChild key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-[14px] text-[#6b7280] hover:text-[#1a1a18] py-3 border-b border-[#e5e5e0] last:border-0 transition-colors"
                    >
                      {item}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
