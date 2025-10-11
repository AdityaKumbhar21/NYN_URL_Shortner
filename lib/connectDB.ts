import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number;
}

const connection : ConnectionObject = {}

export const dbConnect = async (): Promise<void> =>{
    try {   
        if(connection.isConnected){
            console.log("Already connected to database");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO_URI as string || "");
        connection.isConnected = db.connections[0].readyState 
        console.log("Connected to database");
        
    } catch (error) {
        console.log("Error in connecting db: ", error);
        process.exit(1);
    }
}