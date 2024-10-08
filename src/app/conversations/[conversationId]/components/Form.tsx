"use client";

import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiArrowRight } from "react-icons/hi2";


import useConversation from "../../../hooks/useConversation";
import MessageInput from "./MessageInput";

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };



  return (
    <div
      className="
        py-4 
        px-4 
        
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
        bg-blue-900
        border-lightgray
      "
    >
     
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full bg-blue-900">
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-full 
            p-2 
            bg-red-500
            cursor-pointer 
            hover:bg-red-900 
            transition
          "
        >
          <HiArrowRight size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
