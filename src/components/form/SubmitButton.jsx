import React from "react";

const SubmitButton = ({ onClick, children, disabled = false }) => {
   return (
      <button
         type="submit"
         className="orgColor font-bold rounded-md p-2 shadow-md text-white hover:translate-y-1 duration-75 mb-2"
      >
         {children}
      </button>
   );
};

export default SubmitButton;
