import { ChevronDownIcon } from "@heroicons/react/outline";
import { useProduct } from "../../../contexts/ProductContext";

function ProductInfo() {
   const {
      setProductName,
      setProductPrice,
      setProductDiscount,
      setDescription,
      setProductAmount,
      setProductSize,
   } = useProduct();
   return (
      <>
         <div className=" md:flex-col items-start mb-6 space-y-4">
            <div className="md:w-1/3">
               <label
                  className="block text-gray-500 font-bold md:text-right  mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
               >
                  PRODUCT NAME
               </label>
            </div>
            <div className="md:w-2/3">
               <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-green-400"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => setProductName(e.target.value)}
               />
            </div>
            <div className="md:w-1/3">
               <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-full-name"
               >
                  DESCRIPTION
               </label>
            </div>
            <div className="md:w-2/3">
               <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-light-green-400"
                  id="inline-full-name"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
               />
            </div>
         </div>
         <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
               >
                  Size
               </label>
               <div className="relative">
                  <select
                     className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-state"
                     onChange={(e) => setProductSize(e.target.value)}
                  >
                     <option>size</option>
                     <option>US 6</option>
                     <option>US 7</option>
                     <option>US 8</option>
                     <option>US 9</option>
                     <option>US 10</option>
                     <option>US 10.5</option>
                     <option>US 11</option>
                     <option>US 11.5</option>
                     <option>US 12</option>
                     <option>US 12.5</option>
                     <option>US 13</option>
                     <option>US 14</option>
                     <option>US 15</option>
                  </select>
                  <ChevronDownIcon className="w-5 h-5 absolute right-2 top-4" />
               </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
               >
                  Amount
               </label>
               <div className="relative">
                  <select
                     className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-state"
                     onChange={(e) => setProductAmount(e.target.value)}
                  >
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                     <option>6</option>
                     <option>7</option>
                     <option>8</option>
                     <option>9</option>
                     <option>10</option>
                  </select>
                  <ChevronDownIcon className="w-5 h-5 absolute right-2 top-4" />
               </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
               >
                  Price
               </label>
               <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="$..."
                  onChange={(e) => setProductPrice(e.target.value)}
               />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-2">
               <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
               >
                  Discount
               </label>
               <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="...%"
                  onChange={(e) => setProductDiscount(e.target.value)}
               />
            </div>
         </div>
      </>
   );
}

export default ProductInfo;
