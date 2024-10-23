import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../context/auth.contex";
import useAPI from "./useAPI";


const useSignUp = () => {
  const API_URL = useAPI.API_URL;
  const [loading, setLoading] = useState(false); 
  
  const { setAuthUser } = useAuth();

  const signup = async ({
    username,
    gender,
    email,
    password,
    confirmPassword,
  }) => {
    const success = handleInputErrors({
      username,
      gender,
      email,
      password,
      confirmPassword,
    });
    if (!success) return;

    setLoading(true);

    try {

        const formData = {
            username,
            gender,
            email,
            password,
            confirmPassword,
          };
      const res = await axios.post(`${API_URL}/auth/signup`, formData);

      const data = await res.data;

      if(res.status === 201) {
        toast.success("User Successfully Created");
        }

        if(data.error) {
            throw new Error(data.error);
        }

        //local storage
        localStorage.setItem("user", JSON.stringify(data));

        setAuthUser(data); 

    } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);

    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  username,
  gender,
  email,
  password,
  confirmPassword,
}) {
  if (!username || !gender || !email || !password || !confirmPassword) {
    toast.error("Please Fill In All the Fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords Do Not Match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Passwords Must be Atleast 6 Characters");
    return false;
  }

  return true;
}
