import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast'
import axios from 'axios'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {

    setLoading(true);

    try {
      const res = await axios.post(
        `http://localhost:3000/api/messages/send/${selectedConversation._id}`,
        { message },
        {
          withCredentials: true,
        }
      );

      const data = await res.data;

      if (res.data.error) throw new Error(res.data.error);

      setMessages([...messages, data]);


    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

  };

  return { loading, sendMessage };
};

export default useSendMessage;
