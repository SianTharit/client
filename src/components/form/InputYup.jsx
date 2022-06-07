import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Icon } from "../common/Icon";

function InputYup({ name, type, icon, placeholder, rounded, color }) {
   const {
      control,
      formState: { errors },
   } = useFormContext();
   return (
      <>
         <Controller
            defaultValue={""}
            control={control}
            render={({ field: { onChange, value } }) => {
               return (
                  <div>
                     <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                           <Icon icon={icon} />
                        </span>
                        <input
                           className={`placeholder:italic placeholder:text-slate-400 block bg-${color} w-full border border-hidden rounded-${rounded} py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-none sm:text-sm mb-2`}
                           placeholder={placeholder}
                           type={type}
                           name={name}
                           value={value}
                           onChange={onChange}
                        />
                     </label>
                     {/* <label htmlFor={name} className="pr-5 text-lg">
                                {name}
                            </label>
                            <input
                                type={type}
                                name={name}
                                onChange={onChange}
                                value={value}
                                className="border-2 border-slate-300 focus:border-teal-500 rounded outline-none px-[5px] py-[3px] text-sm col-start-3 col-span-4"
                            /> */}
                  </div>
               );
            }}
            name={name}
         />
         {errors[name] && (
            <span className="text-red-600 text-right flex grow justify-end text-sm">
               {errors[name].message}
            </span>
         )}
      </>
   );
}

export default InputYup;
