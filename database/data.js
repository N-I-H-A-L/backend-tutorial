import mongoose from "mongoose";

//Database Conenction
const connection_URL = 'mongodb+srv://admin:g087cvJPScO6qYBC@cluster0.cby4n3m.mongodb.net/';
export const connectDB = () => {
    mongoose.connect(connection_URL, {
    dbName: "users",
    })
        .then(()=> console.log("DB connected"))
        .catch((e)=> console.log(e));
}