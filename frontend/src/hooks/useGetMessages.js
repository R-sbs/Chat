import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    
    const getMessages = async () => {

      setLoading(true);

      try {

        const res = await axios.get(`http://localhost:3000/api/messages/${selectedConversation._id}`,
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
