function BlockTime({ timerDays, timerHours, timerMinutes, timerSeconds }) {
   return (
      <div className="grid grid-cols-4 gap2">
         <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center p-2 mt-2 mr-2 bg-black rounded-lg shadow">
               <div className="text-xl font-bold text-white">{timerDays}</div>
            </div>
            <div className="text-sm mb-2">Days</div>
         </div>
         <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center p-2 mt-2 mr-2 bg-black rounded-lg shadow">
               <div className="text-xl font-bold text-white">{timerHours}</div>
            </div>
            <div className="text-sm mb-2">Hours</div>
         </div>
         <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center p-2 mt-2 mr-2 bg-black rounded-lg shadow">
               <div className="text-xl font-bold text-white">
                  {timerMinutes}
               </div>
            </div>
            <div className="text-sm mb-2">Minutes</div>
         </div>
         <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center p-2 mt-2 mr-2 bg-black rounded-lg shadow">
               <div className="text-xl font-bold text-white">
                  {timerSeconds}
               </div>
            </div>
            <div className="text-sm mb-2">Seconds</div>
         </div>
      </div>
   );
}

BlockTime.defaultProps = {
   timerDays: 10,
   timerHours: 10,
   timerMinutes: 10,
   timerSeconds: 10,
};

export default BlockTime;
