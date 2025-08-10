import Masonry from 'react-masonry-css';
import ImageModal from '../components/ImageModal';
import { useState } from 'react';

const photos = [
  'hero1.jpg',
  'hero2.jpg',
  'hero3.jpg',
  'hero2.jpg',
  'hero1.jpg',
  'hero3.jpg',
  'hero1.jpg',
  'hero3.jpg',
  'hero2.jpg',
];

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  480: 1,
};

export default function Photos() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-xl font-semibold text-slate-800 mb-6">
        My Photo Gallery
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-auto gap-4"
        columnClassName=""
      >
        {photos.map((src, i) => (
          <img
            key={i}
            src={`./${src}`}
            alt={`Photo ${i + 1}`}
            className="rounded-lg shadow-md object-cover w-full mb-4 cursor-pointer"
            onClick={() => setModalSrc(`./${src}`)}
          />
        ))}
      </Masonry>

      <ImageModal
        src={modalSrc}
        alt="Enlarged photo"
        onClose={() => setModalSrc(null)}
      />
    </section>
  );
}
