const TabButton = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${isActive
                    ? "bg-[#3A3B3F] text-white shadow-md"
                    : "text-gray-400 hover:text-gray-200"
                }`}
        >
            {label}
        </button>
    );
};

export default TabButton;
