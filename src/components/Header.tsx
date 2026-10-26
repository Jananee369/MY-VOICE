import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface HeaderProps {
  onOpenBrief: () => void;
}

export function Header({ onOpenBrief }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'The Problem', href: '#the-problem' },
    { label: 'The Solution', href: '#solution' },
    { label: 'Software', href: '#software' },
    { label: 'Hardware', href: '#hardware' },
    { label: 'Research', href: '#research' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
    { label: 'About', href: '#about-creator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-[#080c14]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#overview"
          className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-sky-300 transition-colors"
        >
          Voxera <span className="text-sky-400 font-semibold tracking-wider text-sm ml-1">MYVOICE</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-sky-400/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBrief}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Research Brief</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
