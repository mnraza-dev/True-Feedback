import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type:String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    VerfifyCode:string;
    VerifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    message:Message[];
}

const UserSchema: Schema<User> = new Schema({
    username:{
        type:String,
        required: [true,"Username is required"],
        trim:true,
        unique:true
    },
    email:{
        type: String,
        unique: true,
        match:[/.+\@.+\..+/,'Please use a valid email address'],
        required: [true,"Email is required"]
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    VerfifyCode:{
        type:String,
        required:[true, "Verify Code is required"]
    },
    VerifyCodeExpiry:{
        type:Date,
        required:[true, "Verfy Code Expiry is required"]
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    message:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel