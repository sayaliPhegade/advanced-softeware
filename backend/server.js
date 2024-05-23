import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./Dataimport.js"
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Error.js";
import userRoute from "./Routes/UserRoutes.js";
import orderReducer from "./Routes/OrderReducer.js";
import cors from 'cors'; // Import cors module

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

// Enable CORS
app.use(cors());

// API
app.use("/api/import", ImportData)
app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/orders", orderReducer)
// Example
// app.get("/api/config/paypal", (req, res)=>{
//     res.send(process.env.PAYPAL_CLIENT_ID)
// })

app.use(notFound);
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("Api is running.......")
})


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log("Server Running.... "));