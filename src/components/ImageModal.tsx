import { useEffect } from 'react';

interface ImageModalProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export default function ImageModal({
  src,
  alt = 'Image',
  onClose,
}: ImageModalProps) {
  useEffect(() => {
    if (!src) return;

    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={`//${src}`}
        alt={alt}
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-5 right-5 text-white text-3xl font-bold"
        onClick={onClose}
        aria-label="Close image modal"
      >
        &times;
      </button>
    </div>
  );
}
