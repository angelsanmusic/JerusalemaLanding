import React, { useMemo } from "react";

const ThumbnailGrid = ({ images = [], selectedIndex = 0, onSelect = () => {}, columns = 7, onHoverPrefetch = () => {} }) => {
	// Grid responsivo: 2 columnas en móvil, 4 en tablet, 7 en desktop
	const gridClasses = "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-6";

	const thumbs = useMemo(
		() =>
			images.map((img, index) => (
				<img
					key={index}
					src={img.src}
					alt=""
					loading="lazy"
					onMouseEnter={() => onHoverPrefetch(index)}
					onClick={() => onSelect(index)}
					className={`h-20 w-full object-cover rounded-lg cursor-pointer border-2 shadow-md transition-all duration-200
            hover:scale-110 hover:z-10 hover:shadow-xl
            ${selectedIndex === index ? "border-blue-500 ring-2 ring-blue-300" : "border-transparent"}`}
					style={{ background: "#f8fafc" }}
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