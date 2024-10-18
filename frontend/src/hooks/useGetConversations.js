import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);

  const [conversations, setConversations] = useState([]);

  useEffect( () => {

    const getConversations = async () => {

        setLoading(true);

        try {
            const response = await axios.get('http://localhost:3000/api/users/', {
                withCredentials: true, // Ensures cookies are sent
              });
              
             setConversations(response.data);

            if(response.data.error) {
                throw new Error(response.data.error);
            }
            
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
        
    }

    getConversations();

  }, [])

  return { loading, conversations }
}



export default useGetConversations







