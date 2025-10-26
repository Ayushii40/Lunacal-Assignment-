const ImageCard = ({ src, alt, onClick, isActive }) => {
    return (
        <div
            onClick={onClick}
            className={`overflow-hidden rounded-lg border-2 transition-all duration-300 cursor-pointer ${isActive ? "border-accent scale-105" : "border-transparent"
                }`}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-24 object-cover transition-transform duration-300 hover:scale-105"
            />
        </div>
    );
};

export default ImageCard;
