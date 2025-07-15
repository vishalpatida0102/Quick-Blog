
import mongoose, { connect } from "mongoose";



const connectDB=async()=>
{
    try{
        mongoose.connection.on('connected',()=>console.log("Database Connected"))
         await mongoose.connect(`${process.env.mongodb_url}/QuickBlog`)
    }catch(error)
    {
        console.log(error.message);
       
        
    }
}

export default connectDB;