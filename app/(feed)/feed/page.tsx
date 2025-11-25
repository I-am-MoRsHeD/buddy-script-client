import HomeLeft from "@/components/modules/feed/HomeLeft";
import HomeMiddle from "@/components/modules/feed/HomeMiddle";
import HomeRight from "@/components/modules/feed/HomeRight";


const FeedPage = () => {
    return (
        <div className="my-4 xl:w-[90%] 3xl:w-[80%] mx-auto w-full px-4">
            <div className="grid grid-cols-8 gap-5">
                <div className="col-span-2">
                    <HomeLeft />
                </div>
                <div className="col-span-4">
                    <HomeMiddle />
                </div>
                <div className="col-span-2">
                    <HomeRight />
                </div>
            </div>
        </div>
    );
};

export default FeedPage;