function Logos({ src, size }) {
   return (
      <div className={`flex ${size}`}>
         <img
            src={src}
            alt="logo"
            className="object-cover w-full h-full rounded-md cursor-pointer"
         />
      </div>
   );
}
export default Logos;
