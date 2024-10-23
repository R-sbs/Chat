import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/auth.contex";
import toast from "react-hot-toast";
import useAPI from "./useAPI";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const logout = async () => {
    const API_URL = useAPI.API_URL;
    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/auth/logout`);

      const data = await res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("user");

      setAuthUser(null);
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout }
};

export default useLogout;
