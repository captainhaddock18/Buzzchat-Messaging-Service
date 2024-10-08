"use client";

import clsx from "clsx";
import { useState } from "react";

import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";


import { FullMessageType } from "../../../types";
import ImageModal from "./ImageModal";
import { HiUser } from "react-icons/hi";

interface MessageBoxProps {
  data: FullMessageType;
  isLast?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");
  const avatar = clsx(isOwn && "order-2");
  const body = clsx("flex flex-col gap-2", isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-red-500 text-white" : "bg-lightgray",
    data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
  );

  return (
    <div className={container}>
      {!isOwn && (
        <div className={avatar}>
          <HiUser size={30} />
        </div>
      )}
      <div className={body}>
        <div className={message}>
          <ImageModal
            src={data.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          />
          {data.image ? (
            <Image
              alt="Image"
              height="288"
              width="288"
              onClick={() => setImageModalOpen(true)}
              src={data.image}
              className="
                object-cover 
                cursor-pointer 
                hover:scale-110 
                transition
              "
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
   
      </div>
    </div>
  );
};

export default MessageBox;
