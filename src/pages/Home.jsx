import TabsWidget from "../components/TabWidget";
import GalleryWidget from "../components/GalleryWidget";

const Home = () => {
    return (
        <div
            className="flex justify-center items-center h-[100svh] w-[100svw] bg-[#0F1115] overflow-hidden"
        >

            <div className="flex gap-6 items-center justify-center w-full h-full px-8">

                <div
                    className="flex-shrink-0 w-[min(680px,40vw)] h-[min(600px,calc(100svh-6rem))]
                     rounded-[22px]
                     bg-gradient-to-b from-[#373E44] to-[#191B1F]
                     shadow-[6px_6px_30px_4px_rgba(0,0,0,0.5)]
                     overflow-hidden"
                ></div>


                <div
                    className="flex-shrink-0 w-[min(680px,40vw)] h-[min(600px,calc(100svh-6rem))]
                     rounded-[22px]
                     bg-gradient-to-b from-[#373E44] to-[#191B1F]
                     shadow-[6px_6px_30px_4px_rgba(0,0,0,0.5)]
                     overflow-hidden flex flex-col justify-center items-center gap-6 p-6"
                >
                    <TabsWidget />
                    <GalleryWidget />
                </div>
            </div>
        </div>
    );
};

export default Home;