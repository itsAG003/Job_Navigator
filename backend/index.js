import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import http from "http";
import path from "path";


dotenv.config();

const app=express();

const server=http.createServer(app);
app.use(cors({
    origin: 'https://job-navigator-1.onrender.com',  // Allow only this origin
    credentials: true                // Allow credentials (cookies, authorization headers, etc.)
  }));
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT=process.env.PORT || 3000;

const _dirname=path.resolve();

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(_,res)=>{
  res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})



server.listen(PORT,()=>{
    connectDB();
    console.log(`server is running at port ${PORT}`);
})