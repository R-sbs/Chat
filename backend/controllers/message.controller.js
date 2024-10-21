import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from '../socket/socket.js'




const sendMessage = async ( req, res) => {
    try {
        console.log(req.body)
        const { message } = req.body;
        const { id: receiverId } = req.params;

        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all : [ senderId, receiverId]}
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],

            })
        }

        const newMessage = new Message({
            senderId, receiverId, message
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

       // await conversation.save();
        //await newMessage.save();

        //to execute both in parellel
        await Promise.all([conversation.save(), newMessage.save()]);

        //Socket.io Functionality for real time messaging
        const receiverSocketId = getReceiverSocketId(receiverId);
        

        if(receiverSocketId) {
            //io.to(<socketId>.emit(<message>)) is used to send events to specific user
            io.to(receiverSocketId).emit("new message", newMessage);
        }

        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log('Error in sendMessage controller', error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
}

export const getMessages = async ( req, res) => {
    try {

        const { id: userToChatWith } = req.params;
        console.log(req.params);
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatWith ]}
        }).populate("messages"); //populating message id's array with actual messages.

        if(!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);



        
    } catch (error) {
        console.log('Error in sendMessage controller', error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
}

export default sendMessage;

