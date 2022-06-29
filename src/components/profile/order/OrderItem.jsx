function OrderItems(item) {
   const { name, image, orderAmount, totalPrice } = item;
   return (
      <>
         <div className="flex justify-between items-center mb-6 mt-6">
            <img src={image} alt="" className="w-32 h-32" />
            <h2>{name}</h2>
            <h2>{orderAmount}</h2>
            <h2>{`$${totalPrice}`}</h2>
            <div className="flex flex-col justify-center items-center">
               <h2>status</h2>{" "}
               <span className=" text-green-400">successful</span>
            </div>
         </div>
         <hr className="border-1 border-black" />
      </>
   );
}

export default OrderItems;
