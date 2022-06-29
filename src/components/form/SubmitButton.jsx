import React from "react";

const SubmitButton = ({ onClick, children, disabled = false, className }) => {
   return (
      <button type="submit" className={className}>
         {children}
      </button>
   );
};

export default SubmitButton;
