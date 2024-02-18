import mongoose from "mongoose";

const Schema = mongoose.Schema

const todoShema = new Schema({

    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
    ,
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    }

},{timestamps:true})

export const Todo = mongoose.model('Todo',todoShema)