"use server"

import postModel from "../models/postModel"
import connectDB from "../config/database"
  export async function getPosts(){
    try {
        await connectDB()
        const data = JSON.parse(JSON.stringify( await  postModel.find()))
        console.log(data);

      
        return {data}
    } catch (error) {
        return {errMsg:error.message}
        
    }
  }