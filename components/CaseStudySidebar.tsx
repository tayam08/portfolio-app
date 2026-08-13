"use client";

import { useState, useEffect } from "react";

export interface SidebarItem {
  id: string;
  number: string;
  title: string;
}

export default function CaseStudySidebar({ items }: { items: SidebarItem[] }) {
  const [activeSection, setActiveSection] = useState(items[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <aside className="w-52 flex-shrink-0 hidden lg:block">
      <div className="sticky top-36">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink-400 mb-5">
          Contents
        </p>
        <nav className="space-y-0.5">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full flex items-start gap-3 py-2 px-1 text-left text-[13px] transition-colors rounded-sm ${
                activeSection === item.id
                  ? "text-navy font-semibold"
                  : "text-ink-400 hover:text-ink"
              }`}
            >
              <span className="font-mono text-[10px] mt-0.5 flex-shrink-0 opacity-60">
                {item.number}
              </span>
              <span className="leading-snug">{item.title}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-5 border-t border-ink-100">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[11px] text-ink-400 hover:text-ink transition-colors"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </aside>
  );
}
