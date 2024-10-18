import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth.contex";

const useLogin = () => {
    const { setAuthUser} = useAuth();
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }) => {
    const success = handleInputErrors({ username, password });

    if (!success) return;

    setLoading(true);

    try {
      const formData = {
        username,
        password,
      };

      const res = await axios.post('http://localhost:3000/api/auth/login', formData, {
        withCredentials: true,  // Include cookies with request
      });

      console.log(res.cookie)

      const data = await res.data;

      console.log(data);

      if(res.status === 201) {
        toast.success("Logged in Successfully");
        }

        if(data.error) {
            throw new Error(data.error);
        }

        //local storage
        localStorage.setItem("user", JSON.stringify(data));

        setAuthUser(data); 


    } catch (error) {
      console.log(error);
      if(error.response.data.error){
          toast.error(error.response.data.error)
      }


    } finally {
      setLoading(false);
    }
  };

  return { loading, login}
};

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error("Please Fill All Fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password Must be atleasr 6 characters");
    return false;
  }

  return true;
}
