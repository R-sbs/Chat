import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";
import useAPI from "./useAPI";

const useGetMessages = () => {
  const API_URL = useAPI.API_URL;
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    
    const getMessages = async () => {

      setLoading(true);

      try {

        const res = await axios.get(`${API_URL}/messages/${selectedConversation._id}`,
          { withCredentials: true }
        );

        const data = res.data;

        if (data.error) throw new Error(data.error);

        setMessages(data);

      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
