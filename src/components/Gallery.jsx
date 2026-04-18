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

  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section>
      <div className="mb-4 border border-[var(--comborder)] shadow-xl rounded-md p-6 h-70 flex flex-col transition hover:scale-99 transition-transform duration-250">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <h2 className="text-base font-satoshi font-bold">Gallery</h2>
        </div>

        <div className="relative w-full overflow-hidden rounded-lg flex-1">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <div 
                key={i} 
                className="relative min-w-full h-full group cursor-pointer"
                onClick={() => setPreview(src)}
              >
                <img
                  src={src}
                  className="w-full h-full object-cover flex-shrink-0"
                  alt=""
                />
                
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-10 hover:bg-white">‹</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-10 hover:bg-white">›</button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === i
                    ? "w-6 bg-blue-500"
                    : "w-2.5 bg-black/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center" onClick={() => setPreview(null)}>
          <img src={preview} className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()} />
          <button onClick={() => setPreview(null)} className="absolute top-4 right-4 text-white text-3xl">✕</button>
        </div>
      )}
    </section>
  );
}