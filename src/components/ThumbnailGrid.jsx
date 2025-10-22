import React, { useMemo, useRef } from "react";

const ThumbnailGrid = ({ images = [], selectedIndex = 0, onSelect = () => {}, columns = 7, onHoverPrefetch = () => {} }) => {
	// Grid responsivo: 2 columnas en móvil, 4 en tablet, 7 en desktop
	const gridClasses = "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6";

	// Debounce interno para onHoverPrefetch (evita muchas llamadas al pasar rápido)
	const hoverTimer = useRef(null);
	const handleMouseEnter = (index) => {
		clearTimeout(hoverTimer.current);
		hoverTimer.current = setTimeout(() => {
			onHoverPrefetch(index);
		}, 120); // 120ms debounce
	};
	const handleMouseLeave = () => {
		if (hoverTimer.current) {
			clearTimeout(hoverTimer.current);
			hoverTimer.current = null;
		}
	};

	const thumbs = useMemo(
		() =>
			images.map((img, index) => (
				<img
					key={index}
					src={img.src}
					alt=""
					loading="lazy"
					onMouseEnter={() => handleMouseEnter(index)}
					onMouseLeave={handleMouseLeave}
					onClick={() => onSelect(index)}
					// estilos ligeros: pequeña escala y sombra minimal, promote transform to GPU
					className={`w-full object-cover rounded-lg cursor-pointer border-2 transition-transform duration-150
            ${selectedIndex === index ? "border-blue-500 ring-1 ring-blue-200" : "border-transparent"}`}
					style={{ height: "5rem", objectFit: "cover", aspectRatio: "1/1", willChange: "transform" }}
				/>
			)),
		[images, selectedIndex, onSelect, onHoverPrefetch]
	);

	return <div className={gridClasses}>{thumbs}</div>;
};

export default React.memo(
	ThumbnailGrid,
	(prev, next) => prev.selectedIndex === next.selectedIndex && prev.images === next.images
);