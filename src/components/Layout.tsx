import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-slate-800">
      {/* NAV */}
      <nav className="bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold text-slate-900">
            Dimitris Photography
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link to="/" className="hover:text-slate-900">
              Home
            </Link>
            <Link to="/photos" className="hover:text-slate-900">
              Photos
            </Link>
            <Link to="/about" className="hover:text-slate-900">
              About
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((s) => !s)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/80">
            <div className="px-4 py-3 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                to="/photos"
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-slate-900"
              >
                Photos
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-slate-900"
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white/70 border-t border-gray-200 text-gray-600 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          © {new Date().getFullYear()} Dimitris Photography
        </div>
      </footer>
    </div>
  );
}
