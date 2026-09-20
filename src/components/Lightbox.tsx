import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/data/gallery';

interface Props {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((p) => (p + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose, images.length]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[80] bg-charcoal/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-ivory/70 hover:text-ivory transition-colors z-10"
        aria-label="Chiudi"
      >
        <X size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 label-small text-ivory/50 text-[0.6rem]">
        {index + 1} / {images.length}
      </div>

      {/* Main image */}
      <div
        className="relative max-w-6xl max-h-[85vh] w-full mx-12 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[85vh] max-w-full object-contain transition-opacity duration-300"
          key={index}
        />
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); setIndex((p) => (p - 1 + images.length) % images.length); }}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors p-2"
        aria-label="Immagine precedente"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setIndex((p) => (p + 1) % images.length); }}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-ivory/60 hover:text-ivory transition-colors p-2"
        aria-label="Immagine successiva"
      >
        <ChevronRight size={28} />
      </button>

      {/* Alt text */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
        <p className="label-small text-ivory/40 text-[0.6rem] text-center">{img.alt}</p>
      </div>
    </div>
  );
}
