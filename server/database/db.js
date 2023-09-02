import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.2uml2ak.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useunifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connection with the database ', error.message);
    }
}

export default Connection;