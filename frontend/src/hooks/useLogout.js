import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/auth.contex";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/logout");

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
