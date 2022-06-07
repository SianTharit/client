function BlockTime({ title, time }) {
   return (
      <div className="flex flex-col justify-center items-center gap-1">
         <div className="flex justify-center items-center p-2 mt-2 mr-2 bg-black rounded-lg shadow">
            <div className="text-xl font-bold text-white">{time}</div>
         </div>
         <div className="text-sm mb-2">{title}</div>
      </div>
   );
}

export default BlockTime;
