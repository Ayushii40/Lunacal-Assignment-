import { useRef, useState } from "react";
import { FaQuestion, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";

const GalleryWidget = () => {
    const scrollRef = useRef(null);
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600",
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToImage = (index) => {
        const container = scrollRef.current;
        const child = container?.children[index];
        if (child) {
            container.scrollTo({
                left: child.offsetLeft,
                behavior: "smooth",
            });
        }
    };

    const scrollLeft = () => {
        setCurrentIndex((prev) => {
            const newIndex = Math.max(prev - 1, 0);
            scrollToImage(newIndex);
            return newIndex;
        });
    };

    const scrollRight = () => {
        setCurrentIndex((prev) => {
            const newIndex = Math.min(prev + 1, images.length - 1);
            scrollToImage(newIndex);
            return newIndex;
        });
    };

    const addImage = () => {
        const newUrl = prompt("Enter image URL:");
        if (newUrl) {
            setImages((prev) => [...prev, newUrl]);
        }
    };

    return (
        <div className="relative w-full max-w-[600px] mx-auto bg-[#1E1F22]/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-700 flex">

            <div className="flex-shrink-0 mr-4">
                <button
                    className="bg-[#2C2D31] hover:bg-[#3A3B3F] p-3 rounded-full text-gray-300 transition-all duration-300 shadow-md"
                    aria-label="Help"
                >
                    <FaQuestion size={16} />
                </button>
            </div>


            <div className="flex-1">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-100">Gallery</h2>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={addImage}
                            className="flex items-center gap-2 bg-[#2C2D31] hover:bg-[#3A3B3F] px-4 py-2 rounded-xl font-medium text-gray-200 transition-all duration-300 shadow-md"
                        >
                            <FaPlus /> Add
                        </button>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={scrollLeft}
                                className="bg-[#2C2D31] hover:bg-[#3A3B3F] p-2.5 rounded-full transition-all duration-300 shadow-md disabled:opacity-40"
                                disabled={currentIndex === 0}
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={scrollRight}
                                className="bg-[#2C2D31] hover:bg-[#3A3B3F] p-2.5 rounded-full transition-all duration-300 shadow-md disabled:opacity-40"
                                disabled={currentIndex === images.length - 1}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>


                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar p-3 bg-[#2C2D31] rounded-xl shadow-md"
                    onMouseEnter={(e) => e.currentTarget.classList.add('scroll-smooth')}
                    onMouseLeave={(e) => e.currentTarget.classList.remove('scroll-smooth')}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative group flex-shrink-0 cursor-pointer"
                            onClick={() => window.open(img, "_blank")}
                        >
                            <img
                                src={img}
                                alt={`gallery-${index}`}
                                className={`w-48 h-36 object-cover rounded-xl transition-transform duration-300 ${index === currentIndex ? "ring-4 ring-gray-500 scale-105" : ""
                                    } group-hover:opacity-90`}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-xl transition duration-300 flex items-center justify-center text-sm font-medium text-gray-100">
                                View
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryWidget;
