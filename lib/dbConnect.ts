import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number;
}

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to the database");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        connection.isConnected = db.connections[0].readyState;
        console.log("New database connection established ✅");
    } catch (error) {
        console.log(`Database connection error: ${error}`);
        process.exit(1);
    }
}

export default dbConnect;