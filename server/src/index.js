import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoute.js";
import 'dotenv/config.js'
import todoRoutes from './routes/todoRoute.js'
import dbConnection from "./db/connectDb.js";

const app = express();

dbConnection().then(() => 
app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${process.env.PORT}` );
})
)

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

//Route handlers

app.use('/user', userRoutes);
app.use('/todo', todoRoutes);





