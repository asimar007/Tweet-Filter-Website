"use client";
import { useState } from "react";

const TWEETS = [
  {
    id: 1,
    avatar: "S",
    color: "bg-violet-100 text-violet-700",
    name: "Sarah Chen",
    handle: "@sarahchen",
    time: "2m",
    text: "Just finished reading an amazing book on urban architecture 📚 The way cities evolve over decades is genuinely fascinating. Any recommendations?",
    hidden: false,
    category: null,
    likes: "189",
    replies: "12",
  },
  {
    id: 2,
    avatar: "🏛️",
    color: "bg-red-50 text-red-400",
    name: "Hidden",
    handle: "",
    time: "",
    text: "",
    hidden: true,
    category: "Politics",
    keyword: "election",
    likes: "",
    replies: "",
  },
  {
    id: 3,
    avatar: "M",
    color: "bg-sky-100 text-sky-700",
    name: "Marcus Rivera",
    handle: "@marcusdev",
    time: "8m",
    text: "TypeScript generics are actually beautiful once you understand them. Spent 2 hours debugging yesterday and now I get it 🧠",
    hidden: false,
    category: null,
    likes: "441",
    replies: "45",
  },
  {
    id: 4,
    avatar: "⚔️",
    color: "bg-amber-50 text-amber-500",
    name: "Hidden",
    handle: "",
    time: "",
    text: "",
    hidden: true,
    category: "War & Conflict",
    keyword: "ceasefire",
    likes: "",
    replies: "",
  },
  {
    id: 5,
    avatar: "A",
    color: "bg-emerald-100 text-emerald-700",
    name: "Aiko Tanaka",
    handle: "@aiko_t",
    time: "15m",
    text: "Café morning in Kyoto ☕ There's something timeless about sitting by the window when it's raining outside.",
    hidden: false,
    category: null,
    likes: "312",
    replies: "8",
  },
];

export function FeedMockup() {
  const [revealed, setReveal] = useState<Set<number>>(new Set());

  return (
    <section className="px-6 pb-28">
      <div className="max-w-xl mx-auto">
        {/* Browser chrome */}
        <div className="rounded-2xl border border-[#e5e5e0] overflow-hidden shadow-sm bg-white">
          {/* URL bar */}
          <div className="bg-[#f8f8f6] border-b border-[#e5e5e0] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              {["bg-red-400", "bg-amber-400", "bg-emerald-400"].map((c) => (
                <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
            </div>
            <div className="flex-1 bg-white border border-[#e5e5e0] rounded-md px-3 py-1 text-[11px] text-[#9ca3af] flex items-center justify-between">
              <span>x.com/home</span>
              <span className="text-emerald-500 text-[10px] font-medium">
                🛡️ ZenX active
              </span>
            </div>
          </div>

          {/* Feed header */}
          <div className="border-b border-[#e5e5e0] px-4 py-3 flex items-center justify-between bg-white">
            <span className="text-[13px] font-semibold">For You</span>
            <span className="text-[11px] text-[#9ca3af] bg-[#f3f3f0] px-2 py-0.5 rounded-full">
              2 hidden
            </span>
          </div>

          {/* Tweets */}
          {TWEETS.map((tweet) => {
            if (tweet.hidden && !revealed.has(tweet.id)) {
              return (
                <div
                  key={tweet.id}
                  className="px-4 py-3 flex items-center justify-between border-b border-[#f0f0ec] bg-[#fafaf8]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${tweet.color}`}
                    >
                      {tweet.avatar}
                    </div>
                    <div>
                      <p className="text-[12px] text-[#9ca3af]">
                        Tweet hidden by ZenX
                      </p>
                      <span className="inline-block mt-0.5 text-[10px] px-1.5 py-0.5 rounded bg-[#f3f3f0] text-[#9ca3af] border border-[#e5e5e0]">
                        {tweet.category} · &quot;{tweet.keyword}&quot;
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setReveal((p) => new Set([...p, tweet.id]))}
                    className="text-[11px] text-[#6b7280] hover:text-[#1a1a18] border border-[#e5e5e0] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    Reveal
                  </button>
                </div>
              );
            }

            if (tweet.hidden) {
              // Revealed
              return (
                <div
                  key={tweet.id}
                  className="px-4 py-3 flex gap-3 border-b border-[#f0f0ec] bg-amber-50/30"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm shrink-0">
                    {tweet.avatar}
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6b7280] italic">
                      This tweet was filtered ({tweet.category})
                    </p>
                    <p className="text-[12px] text-[#9ca3af] mt-1">
                      Placeholder revealed tweet content...
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={tweet.id}
                className="px-4 py-4 flex gap-3 border-b border-[#f0f0ec] last:border-0 hover:bg-[#fafaf8] transition-colors"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${tweet.color}`}
                >
                  {tweet.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[13px] font-semibold truncate">
                      {tweet.name}
                    </span>
                    <span className="text-[12px] text-[#9ca3af]">
                      {tweet.handle}
                    </span>
                    <span className="text-[11px] text-[#c4c4be]">
                      · {tweet.time}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#374151] leading-relaxed">
                    {tweet.text}
                  </p>
                  <div className="flex gap-5 mt-2.5">
                    <span className="text-[11px] text-[#9ca3af]">
                      💬 {tweet.replies}
                    </span>
                    <span className="text-[11px] text-[#9ca3af]">
                      ❤️ {tweet.likes}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-4">
          ↑ Interactive preview — click &quot;Reveal&quot; to peek at a hidden
          tweet
        </p>
      </div>
    </section>
  );
}
