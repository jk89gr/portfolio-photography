import { useState } from 'react';

const recentPhotos = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg'];

export default function RecentPhotos() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-slate-800">Recent work</h2>
        <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
          Welcome — here are some recent frames. Click any image to view bigger.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {recentPhotos.map((src, i) => (
          <img
            key={i}
            src={`./${src}`}
            alt={`Recent photo ${i + 1}`}
            className="w-full rounded-lg shadow-md object-cover h-48 cursor-pointer"
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={`./${selected}`}
            alt="Enlarged photo"
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={() => setSelected(null)}
            aria-label="Close image modal"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}
