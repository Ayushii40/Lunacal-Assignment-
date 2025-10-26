import { useState } from "react";
import TabButton from "./TabButton";
import { FaQuestion } from "react-icons/fa";

const TabsWidget = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", label: "About Me" },
        { id: "exp", label: "Experiences" },
        { id: "rec", label: "Recommended" },
    ];

    const tabContent = {
        about: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM.`,
        exp: `Over 3 years of experience in sales and CRM at Salesforce. Previously worked at HubSpot. Focused on helping enterprise clients with digital transformation.`,
        rec: `Dave is highly recommended by clients for his patience, attention to detail, and clear communication.`,
    };

    return (
        <div className="relative max-w-[600px] mx-auto ">
            <div className="w-full bg-[#1E1F22]/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-700">

                <button
                    className="absolute top-6 left-6 bg-[#2C2D31] hover:bg-[#3A3B3F] p-2.5 rounded-full text-gray-300 transition-all duration-300 shadow-md z-10"
                    aria-label="Help"
                >
                    <FaQuestion size={14} />
                </button>


                <div className="flex bg-[#2C2D31] rounded-full p-1 gap-2 mb-4 ml-12">
                    {tabs.map((tab) => (
                        <TabButton
                            key={tab.id}
                            label={tab.label}
                            isActive={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        />
                    ))}
                </div>


                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line bg-[#2C2D31]/60 rounded-xl p-4 border border-gray-700/50">
                    {tabContent[activeTab]}
                </div>
            </div>
        </div>
    );
};

export default TabsWidget;
