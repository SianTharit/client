function CartHeader() {
   return (
      <>
         <div className="grid grid-cols-8 justify-center items-center">
            <div className="grid col-start-2 p-2 justify-center">
               <h3>PRODUCT</h3>
            </div>
            <div className="gird col-start-5 p-2 justify-center">
               <h3>PRICE</h3>
            </div>
            <div className="gird col-start-6 p-2 justify-center">
               <h3>QTY</h3>
            </div>
            <div className="grid col-start-7 p-2 justify-center">
               <h3>UNIT PRICE</h3>
            </div>
         </div>
         <hr className=" border-2 shadow-md" />
      </>
   );
}

export default CartHeader;
