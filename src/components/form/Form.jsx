/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export const Form = ({
   defaultValues = {},
   children,
   schema,
   className,
   onSubmit,
}) => {
   const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
   return (
      <FormProvider {...methods}>
         <form
            className={className}
            onSubmit={methods.handleSubmit((data) => {
               onSubmit(data);
            })}
         >
            {children}
         </form>
      </FormProvider>
   );
};
