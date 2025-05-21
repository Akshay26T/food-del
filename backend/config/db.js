import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://thakurakshay:thakurakshay321@cluster0.3h9ld.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}