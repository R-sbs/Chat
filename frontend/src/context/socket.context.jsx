import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./auth.contex.jsx";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocket = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider =  ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuth();

    useEffect( () => {
        if(authUser) {
            const socket = io('https://chat-fsrw.onrender.com', {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })



            return () => socket.close();
        } else {
            if(socket) {
                socket.close();
                setSocket(null);

            }
        }
    }, [authUser]);
    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}