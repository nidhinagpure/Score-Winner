
import React , {useEffect , useState} from 'react';
import toast, { Toaster } from "react-hot-toast";
import ScoreCard from "../components/ScoreCard"; 

function Home() {
    const [scoreA,setScoreA]=useState(0);
    const [scoreB,setScoreB]=useState(0);
    const [winner,setWinner]=useState(null);

    const MAX_Score = 5;

    useEffect(() => {
      if (scoreA < MAX_Score && scoreB < MAX_Score){
        return;
      }

      if (scoreA == MAX_Score){
        setWinner("Team A");
        toast.success("Team A winner");
      }

      if (scoreB == MAX_Score){
        setWinner("Team B");
        toast.success("Team B winner");
      }
    }, [scoreA,scoreB]);

    return (
      <div className="bg-blue-100 min-h-screen p-10">
        <h1 className="text-center text-3xl md:text-5xl py-4 md-py-10 border-2 border-blue-500
         border-dashed rounded-md text-blue-500 bg-white"> Winner Score 👍 </h1>
       
        <div className="flex flex-col md:flex-row justufy-center md:justufy-around md-mt-10"> 
        <ScoreCard
         teamName="Player A"
         score={scoreA}
         increaseScore = {() => {
          if(winner) return;
            setScoreA(scoreA + 1);
         }}

         decreaseScore = {() => {
          if(winner) return;
           setScoreA(scoreA - 1);
         }}
         isWinner={winner ==="Team A"} 
         />

         <ScoreCard
         score={scoreB}
         teamName="Player B"

         increaseScore = {() => {
          if(winner) return;
            setScoreB(scoreB + 1);
         }}

         decreaseScore = {() => {
          if(winner) return;
           setScoreB(scoreB - 1);
         }}
         isWinner={winner ==="Team B"} 
         />
        </div>

        { winner ? (
          <p className='text-center text-2xl'>Winner Team is 
          <b className="Underline decoration-wavy mx-4 bg-yellow-400 px-2 py-1">{winner}🏆🏆🏆 . </b>
          Click reset to start again.
          </p>
        ) : null }
        
        <div className="flex justify-center mt-10">
             <button 
             className="bg-blue-500 px-6 py-2 text-xl md:px-10 md:py-3 md:text-2xl 
             lg:text-3xl text-white rounded-lg shadow-lg transition hover:bg-blue-600"
             onClick={() => {
             setScoreA(0);
             setScoreB(0);
             setWinner(null);
       }}
         >
             Reset
            </button>
        </div>
        <Toaster/>
      </div>
    )
}

export default Home;
