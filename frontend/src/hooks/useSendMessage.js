import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast'
import axios from 'axios'
import useAPI from "./useAPI";

const useSendMessage = () => {
  const API_URL = useAPI.API_URL;
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {

    setLoading(true);

    try {
      const res = await axios.post(
        `${API_URL}/messages/send/${selectedConversation._id}`,
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
