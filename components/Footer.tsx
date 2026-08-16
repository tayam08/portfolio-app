import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 mt-28">
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p className="text-sm font-semibold text-ink">Taebeen Am</p>
          <p className="text-xs text-ink-400">LLM Agent · RAG · Financial AI · Economics + Mathematics</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tayam08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-400 hover:text-ink transition-colors"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:atb1135@gmail.com"
            className="text-ink-400 hover:text-ink transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <Link href="/contact" className="text-xs text-ink-400 hover:text-ink transition-colors">
            Contact
          </Link>
          <span className="text-xs text-ink-200">© 2025</span>
        </div>
      </div>
    </footer>
  );
}
