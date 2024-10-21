import React, { useEffect } from 'react'
import { useSocket } from '../context/socket.context'
import useConversation from '../zustand/useConversation';
import notificationSound from '../assets/sounds/notification.mp3';

const useListenMessage = () => {
    const { socket } = useSocket();
    const { messages, setMessages } = useConversation();

    useEffect( () => {
        socket?.on("new message", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play().catch( (error) => {
                console.log('Error playing sound', error)
            });
            setMessages([...messages, newMessage]);

        })

        return () => socket?.off("new message")
    }, [socket, messages, setMessages])

}

export default useListenMessage
