import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express();
//.use() method generally used for middlewares and configurations
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
));

app.use(express.json({limit:'16kb'}))  //to parse json data in the body of requests
app.use(express.urlencoded({extended:true,limit:'16kb'}))//parse url encoded
app.use(express.static("public"))    //serve static files like css  or images present inside public folder
app.use(cookieParser()) //To parse cookies sent by the client

//routes import 
import userRouter from './routes/user.routes.js'

//routes declaration
app.use("/api/v1/users",userRouter)

export {app}
