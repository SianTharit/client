function SizeButton({ size, found }) {
   return (
      <button
         className={`border-2 w-[88px] h-[50px] rounded-xl shadow-md ${
            found ? "bg-white" : " bg-gray-300"
         }  active:border-orange-500 focus:outline-none focus:ring focus:ring-org-main`}
         disabled={`${found ? "" : "disable"}`}
      >
         {size}
      </button>
   );
}

export default SizeButton;
