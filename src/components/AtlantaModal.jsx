import React, { useEffect, useState } from "react";

const AtlantaModal = ({ isOpen, images = [], selectedIndex = 0, onClose = () => {}, onPrev = () => {}, onNext = () => {} }) => {
	const current = images[selectedIndex] || { src: "", description: "" };

	// schedule idle helper local (no dependencia externa)
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

	useEffect(() => {
		if (!isOpen) return;
		const len = images.length;
		if (len === 0) return;
		const cur = images[selectedIndex]?.src;
		const next = images[(selectedIndex + 1) % len]?.src;
		const prev = images[(selectedIndex - 1 + len) % len]?.src;
		prefetchImage(cur);
		prefetchImage(next);
		prefetchImage(prev);
	}, [isOpen, images, selectedIndex]);

	const [visible, setVisible] = useState(false);
	useEffect(() => {
		setVisible(true);
		return () => setVisible(false);
	}, []);

	return isOpen ? (
		<div
			className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500
        ${visible ? "opacity-100" : "opacity-0"}`}
			role="dialog"
			aria-modal="true"
		>
			<div className="relative w-full max-w-4xl p-4">
				<img
					src={current.src}
					alt=""
					loading="lazy"
					style={{ aspectRatio: "16/9" }}
					className="w-full h-96 object-cover rounded-lg"
				/>
				<p className="text-white mt-4 text-lg">
					{current.description}
				</p>
				<div className="flex justify-between mt-4">
					<button onClick={onPrev} className="text-white text-2xl">◀</button>
					<button onClick={onNext} className="text-white text-2xl">▶</button>
				</div>
				<button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">✕</button>
			</div>
		</div>
	) : null;
};

export default React.memo(
	AtlantaModal,
	(prev, next) =>
		prev.isOpen === next.isOpen &&
		prev.selectedIndex === next.selectedIndex &&
		prev.images === next.images
);
// No changes required: el <img> ya incluye loading="lazy".