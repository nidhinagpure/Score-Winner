import { CircleMinus as IconCircleMinus, CirclePlus as IconCirclePlus } from "lucide-react";

function ScoreCard({ score, increaseScore, decreaseScore, teamName, isWinner }) {
    return (
        <div className="bg-white m-5 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 
        rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl text-center my-4 border-b-2 pb-2 text-blue-500 w-full">
                {teamName} {isWinner ? "🏆":""}
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl text-center text-blue-500">
                {score}
            </h3>
            <div className="flex justify-between w-full max-w-xs md:max-w-sm lg:max-w-md mt-6 md:mt-12">
                <IconCircleMinus className="cursor-pointer" color="#000" size={60} onClick={decreaseScore} />
                <IconCirclePlus className="cursor-pointer" color="#000" size={60} onClick={increaseScore} />
            </div>
        </div>
    );
}

export default ScoreCard;
