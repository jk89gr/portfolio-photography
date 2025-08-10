// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import RecentPhotos from '../components/RecentPhotos';

export default function Home() {
  return (
    <div>
      <header className="relative">
        <div className="h-[52vh] md:h-[70vh] w-full bg-gray-200">
          <img
            src={hero}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
          />
          <div className="relative z-10 flex items-center justify-center h-full px-6 pt-32">
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
      <RecentPhotos />
    </div>
  );
}
