// src/pages/Home.tsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <header className="relative">
        {/* Replace '/assets/hero.jpg' with your own image path or an external url */}
        <div className="h-[52vh] md:h-[70vh] w-full bg-gray-200">
          <img
            src="/assets/hero.jpg"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
          />
          <div className="relative z-10 flex items-center justify-center h-full px-6">
            <div className="max-w-3xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
                Dimitris — Photography
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
                Amateur photographer — capturing light, texture and everyday
                moments.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Link
                  to="/photos"
                  className="inline-block bg-white bg-opacity-90 text-slate-900 px-5 py-2 rounded-md shadow-sm hover:shadow-md transition"
                >
                  View Photos
                </Link>
                <a
                  href="/about"
                  className="inline-block text-white border border-white/30 px-4 py-2 rounded-md text-sm hover:bg-white/10 transition"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Intro / small feature area */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-800">Recent work</h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            Welcome — here are some recent frames. Click any image to view
            bigger.
          </p>
        </div>
        {/* small placeholder grid — we'll replace with real gallery next step */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="h-40 bg-gray-100 rounded-md" />
          <div className="h-40 bg-gray-100 rounded-md" />
          <div className="h-40 bg-gray-100 rounded-md" />
        </div>
      </section>
    </div>
  );
}
