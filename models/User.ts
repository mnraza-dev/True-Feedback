import mongoose, { Document, Schema } from "mongoose";


export interface Message extends Document{
    content:string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type:String
    }
})
