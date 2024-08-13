import { Schema, model } from "mongoose";

const loginSchema = new Schema({
    email: String,
    password: String,
    name: String,
    last_name: String,

});

const emailsSchema = new Schema({
    form: String,
    to: [String],
    date: Number,
    subject: String,
    content: String,
});

const draftSchema = new Schema({
    form: String,
    to: [String],
    date: Number,
    subject: String,
    content: String,
    userId:String
});

export const Users = model("users", loginSchema);
export const Email = model("email", emailsSchema);
export const Draft = model("draft", draftSchema);