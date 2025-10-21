import { motion } from "framer-motion";
import React, { Suspense, lazy, useCallback, useEffect, useMemo, useState, useTransition } from "react";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";
import img15 from "../assets/img15.webp";
import img16 from "../assets/img16.webp";
import img17 from "../assets/img17.webp";
import img18 from "../assets/img18.webp";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import m1 from "../assets/m1.webp";
import m2 from "../assets/m2.webp";
import m3 from "../assets/m3.webp";
import m4 from "../assets/m4.webp";
import m5 from "../assets/m5.webp";
import m6 from "../assets/m6.webp";
import m7 from "../assets/m7.webp";
import ThumbnailGrid from "./ThumbnailGrid";

const AtlantaModal = lazy(() => import("./AtlantaModal"));
const MiamiModal = lazy(() => import("./MiamiModal"));

// Prefetch helpers
const scheduleIdle = (fn) => {
	if (typeof window !== "undefined" && "requestIdleCallback" in window) {
		window.requestIdleCallback(fn, { timeout: 2000 });
	} else {
		setTimeout(fn, 200);
	}
};
const prefetchImage = (src) => {
	if (!src) return;
	scheduleIdle(() => {
		const img = new Image();
		img.src = src;
	});
};

const MainProjects = React.memo(() => {
  // useMemo para arrays de imágenes
  const atlantaImages = useMemo(() => [
    { src: img10, description: "Proyecto en Atlanta 1" },
    { src: img11, description: "Proyecto en Atlanta 2" },
    { src: img12, description: "Proyecto en Atlanta 3" },
    { src: img15, description: "Proyecto en Atlanta 4" },
    { src: img16, description: "Proyecto en Atlanta 5" },
    { src: img17, description: "Proyecto en Atlanta 6" },
    { src: img18, description: "Proyecto en Atlanta 7" },
    { src: img22, description: "Proyecto en Atlanta 8" },
    { src: img23, description: "Proyecto en Atlanta 9" },
    { src: img24, description: "Proyecto en Atlanta 10" },
    { src: img25, description: "Proyecto en Atlanta 11" },
    { src: img26, description: "Proyecto en Atlanta 12" },
    { src: img27, description: "Proyecto en Atlanta 13" },
    { src: img21, description: "Proyecto en Atlanta 14" },
  ], []);
  const miamiImages = useMemo(() => [
    { src: m1, description: "Proyecto en Miami 1" },
    { src: m2, description: "Proyecto en Miami 2" },
    { src: m3, description: "Proyecto en Miami 3" },
    { src: m4, description: "Proyecto en Miami 4" },
    { src: m5, description: "Proyecto en Miami 5" },
    { src: m6, description: "Proyecto en Miami 6" },
    { src: m7, description: "Proyecto en Miami 7" },
  ], []);

  const [atlantaSelected, setAtlantaSelected] = useState(0);
  const [atlantaModal, setAtlantaModal] = useState(false);
  const [miamiSelected, setMiamiSelected] = useState(0);
  const [miamiModal, setMiamiModal] = useState(false);
  const [isPending, startTransition] = useTransition();

  // Prefetch en hover miniaturas
  const handleHoverPrefetch = useCallback((index, list) => {
    if (!Array.isArray(list) || list.length === 0) return;
    const len = list.length;
    const current = list[index]?.src;
    const next = list[(index + 1) % len]?.src;
    const prev = list[(index - 1 + len) % len]?.src;
    prefetchImage(current);
    prefetchImage(next);
    prefetchImage(prev);
  }, []);

  // Precarga de bundle del modal al pasar el cursor sobre la imagen principal
  const preloadAtlantaModal = useCallback(() => {
    scheduleIdle(() => { import("./AtlantaModal"); });
  }, []);
  const preloadMiamiModal = useCallback(() => {
    scheduleIdle(() => { import("./MiamiModal"); });
  }, []);

  // Prefetch cuando cambia la selección
  useEffect(() => {
    const len = atlantaImages.length;
    if (len === 0) return;
    const current = atlantaImages[atlantaSelected]?.src;
    const next = atlantaImages[(atlantaSelected + 1) % len]?.src;
    const prev = atlantaImages[(atlantaSelected - 1 + len) % len]?.src;
    prefetchImage(current);
    prefetchImage(next);
    prefetchImage(prev);
  }, [atlantaSelected, atlantaImages]);
  useEffect(() => {
    const len = miamiImages.length;
    if (len === 0) return;
    const current = miamiImages[miamiSelected]?.src;
    const next = miamiImages[(miamiSelected + 1) % len]?.src;
    const prev = miamiImages[(miamiSelected - 1 + len) % len]?.src;
    prefetchImage(current);
    prefetchImage(next);
    prefetchImage(prev);
  }, [miamiSelected, miamiImages]);

  // Callbacks estables
  const handleAtlantaSelect = useCallback((index) => setAtlantaSelected(index), []);
  const handleMiamiSelect = useCallback((index) => setMiamiSelected(index), []);
  const openAtlanta = useCallback(() => startTransition(() => setAtlantaModal(true)), [startTransition]);
  const openMiami = useCallback(() => startTransition(() => setMiamiModal(true)), [startTransition]);
  const handleAtlantaPrev = useCallback(() => setAtlantaSelected(s => (s - 1 + atlantaImages.length) % atlantaImages.length), [atlantaImages]);
  const handleAtlantaNext = useCallback(() => setAtlantaSelected(s => (s + 1) % atlantaImages.length), [atlantaImages]);
  const handleAtlantaClose = useCallback(() => setAtlantaModal(false), []);
  const handleMiamiPrev = useCallback(() => setMiamiSelected(s => (s - 1 + miamiImages.length) % miamiImages.length), [miamiImages]);
  const handleMiamiNext = useCallback(() => setMiamiSelected(s => (s + 1) % miamiImages.length), [miamiImages]);
  const handleMiamiClose = useCallback(() => setMiamiModal(false), []);

  return (
    <div className="relative p-6 md:p-12 bg-white/50">
      {/* Sección Atlanta */}
      <motion.div
        className="flex flex-col items-center mt-10 md:mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Atlanta</h1>
        <div
          className="mt-8 w-full max-w-xl cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={openAtlanta}
          onMouseEnter={preloadAtlantaModal}
        >
          <img
            src={atlantaImages[atlantaSelected].src}
            alt=""
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        <div className="w-full max-w-4xl mx-auto mt-8">
          <ThumbnailGrid
            images={atlantaImages}
            selectedIndex={atlantaSelected}
            onSelect={handleAtlantaSelect}
            columns={7}
            onHoverPrefetch={(index) => handleHoverPrefetch(index, atlantaImages)}
          />
        </div>
      </motion.div>

      {/* Sección Miami */}
      <motion.div
        className="flex flex-col items-center mt-10 md:mt-20 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Miami</h1>
        <div
          className="mt-8 w-full max-w-xl cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={openMiami}
          onMouseEnter={preloadMiamiModal}
        >
          <img
            src={miamiImages[miamiSelected].src}
            alt=""
            loading="lazy"
            className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        <div className="w-full max-w-4xl mx-auto mt-8">
          <ThumbnailGrid
            images={miamiImages}
            selectedIndex={miamiSelected}
            onSelect={handleMiamiSelect}
            columns={7}
            onHoverPrefetch={(index) => handleHoverPrefetch(index, miamiImages)}
          />
        </div>
      </motion.div>

      {/* Modales cargados por demanda */}
      {atlantaModal && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <svg className="animate-spin h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
          }
        >
          <AtlantaModal
            isOpen={atlantaModal}
            images={atlantaImages}
            selectedIndex={atlantaSelected}
            onClose={handleAtlantaClose}
            onPrev={handleAtlantaPrev}
            onNext={handleAtlantaNext}
          />
        </Suspense>
      )}

      {miamiModal && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <svg className="animate-spin h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
          }
        >
          <MiamiModal
            isOpen={miamiModal}
            images={miamiImages}
            selectedIndex={miamiSelected}
            onClose={handleMiamiClose}
            onPrev={handleMiamiPrev}
            onNext={handleMiamiNext}
          />
        </Suspense>
      )}
    </div>
  );
});

export default MainProjects;