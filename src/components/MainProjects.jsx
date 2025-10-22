import React, { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import img10 from "../assets/img10.webp";
import img11 from "../assets/img11.webp";
import img12 from "../assets/img12.webp";
import img15 from "../assets/img15.webp";
import img16 from "../assets/img16.webp";
import img17 from "../assets/img17.webp";
import img18 from "../assets/img18.webp";
import img21 from "../assets/img21.webp";
import img22 from "../assets/img22.webp";
import img23 from "../assets/img23.webp";
import img24 from "../assets/img24.webp";
import img25 from "../assets/img25.webp";
import img26 from "../assets/img26.webp";
import img27 from "../assets/img27.webp";
import m1 from "../assets/m1.webp";
import m2 from "../assets/m2.webp";
import m3 from "../assets/m3.webp";
import m4 from "../assets/m4.webp";
import m5 from "../assets/m5.webp";
import m6 from "../assets/m6.webp";
import m7 from "../assets/m7.webp";
import AtlantaModal from "./AtlantaModal";
import MiamiModal from "./MiamiModal";
import ThumbnailGrid from "./ThumbnailGrid";


// helper simple para prefetch de imágenes (usa scheduleIdle) con dedupe
const _prefetchSet = new Set();
const scheduleIdle = (fn) => {
	if (typeof window !== "undefined" && "requestIdleCallback" in window) {
		window.requestIdleCallback(fn, { timeout: 2000 });
	} else {
		setTimeout(fn, 200);
	}
};
const prefetchImage = (src) => {
	if (!src || _prefetchSet.has(src)) return;
	_prefetchSet.add(src);
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

  // estados para animar la entrada de las secciones con CSS (no framer-motion)
  const [atlantaVisible, setAtlantaVisible] = useState(false);
  const [miamiVisible, setMiamiVisible] = useState(false);

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

  useEffect(() => {
    // activar animaciones de entrada después del mount (ligero stagger)
    const t1 = setTimeout(() => setAtlantaVisible(true), 80);
    const t2 = setTimeout(() => setMiamiVisible(true), 260);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative p-6 md:p-12 bg-white/50">
      {/* Sección Atlanta */}
      <div
        className={`flex flex-col items-center mt-10 md:mt-20 relative z-10 transition-all duration-700 ease-out
          ${atlantaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Atlanta</h1>

        <div
          className="mt-8 w-full max-w-xl cursor-pointer transition-transform duration-300"
          onClick={openAtlanta}
          onMouseEnter={preloadAtlantaModal}
        >
          <img
            src={atlantaImages[atlantaSelected].src}
            alt=""
            loading="lazy"
            style={{ aspectRatio: "16/9" }}
            className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
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
      </div>

      {/* Sección Miami */}
      <div
        className={`flex flex-col items-center mt-10 md:mt-20 relative z-10 transition-all duration-700 ease-out
          ${miamiVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 tracking-wide">Miami</h1>

        <div
          className="mt-8 w-full max-w-xl cursor-pointer transition-transform duration-300"
          onClick={openMiami}
          onMouseEnter={preloadMiamiModal}
        >
          <img
            src={miamiImages[miamiSelected].src}
            alt=""
            loading="lazy"
            style={{ aspectRatio: "16/9" }}
            className="rounded-xl shadow-md object-cover w-full h-64 md:h-80"
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
      </div>

      {/* Modales cargados por demanda */}
      {atlantaModal && (
        <AtlantaModal
          isOpen={atlantaModal}
          images={atlantaImages}
          selectedIndex={atlantaSelected}
          onClose={handleAtlantaClose}
          onPrev={handleAtlantaPrev}
          onNext={handleAtlantaNext}
        />
      )}

      {miamiModal && (
        <MiamiModal
          isOpen={miamiModal}
          images={miamiImages}
          selectedIndex={miamiSelected}
          onClose={handleMiamiClose}
          onPrev={handleMiamiPrev}
          onNext={handleMiamiNext}
        />
      )}

    </div>
  );
});

export default MainProjects;