
import { useForm } from "react-hook-form"
import { DataFormProps, InputProps } from "../types";
import { BsXLg } from "react-icons/bs";

const InputWithCancelButton = ({ onSubmit }: InputProps) => {
   const {
      register,
      setValue,
      handleSubmit,
   } = useForm<DataFormProps>()

   const submit = handleSubmit((data) => onSubmit(data))

   return (
      <form onSubmit={submit} className="relative w-full">
         <input {...register("data")} className="w-full text-wp-18 leading-wp-18 shadow-wp-251 border border-wp-96 py-[10px] pl-5 pr-10 rounded-[4px] focus:outline-none" />
         <BsXLg onClick={() => setValue('data', '')} className="absolute right-3 -translate-y-2/4 top-1/2 text-wp-18 cursor-pointer" />
      </form>
   )
}

export default InputWithCancelButton;