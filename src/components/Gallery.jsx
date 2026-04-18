import { useState, useEffect } from "react";
import interestIcon from "../assets/interest.png";

import img0 from "../assets/sui.jpeg";
import img1 from "../assets/google.png";
import img2 from "../assets/move.jpg";
import img3 from "../assets/devfest.jpg";

const images = [img0, img1, img2, img3];

export default function Interest() {
  const [current, setCurrent] = useState(0);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section>
      <div className="mb-4 border border-black/20 shadow-lg rounded-md p-6 h-60 flex flex-col transition hover:scale-99 transition-transform duration-250">
        <div className="flex items-center gap-2 mb-4">
          <img
            src={interestIcon}
            alt="Interest"
            className="w-4 h-4 opacity-70"
          />
          <h2 className="text-base font-satoshi font-bold">Gallery</h2>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg flex-1">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                onClick={() => setPreview(src)}
                className="w-full flex-shrink-0 object-cover cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 
            bg-white/80 p-2 rounded-full shadow"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 
            bg-white/80 p-2 rounded-full shadow"
          >
            ›
          </button>
        </div>
      </div>
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={() => setPreview(null)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
