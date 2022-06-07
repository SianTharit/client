import Logos from "../common/Logos";

const logos = [
   {
      id: 1,
      src: "https://www.mercular.com/img/social/fb-new.svg",
   },
   {
      id: 2,

      src: "https://www.mercular.com/img/social/line-new.svg",
   },
   {
      id: 3,
      src: "https://www.mercular.com/img/social/yt-new.png",
   },
   {
      id: 4,
      src: "https://www.mercular.com/img/social/ig-new.png",
   },
];

function Footer() {
   return (
      <div className="mx-auto grid justify-center space-y-2 bg-black text-white">
         <div className="mt-3 space-y-3">
            <div className="grid justify-center items-center">
               <small className="font-bold grid justify-center">Nike</small>
               <small className="grid justify-center">
                  Including quality products from all over
               </small>
               <small className="grid justify-center">
                  for a special customer like you
               </small>
            </div>
            <div className="grid justify-center">
               <small className="font-bold grid justify-center">Info</small>
               <small className="grid justify-center">Contact us</small>
               <small className="grid justify-center">Review and article</small>
            </div>

            <small className="font-bold grid justify-center">Follow us</small>
            <div className="flex gap-2 w-full place-content-center">
               {logos.map((el) => (
                  <Logos key={el.id} src={el.src} size="w-[30px]" />
               ))}
            </div>
            <small className="grid justify-center text-lightGray">
               @2022 NikeJa
            </small>
         </div>
      </div>
   );
}

export default Footer;
