//! npx nodemon --exec 'npx babel-node src/server.js'
import bodyParser from 'body-parser';
import express from "express";
import { routes } from "./routes";


const app = express();

app.use(bodyParser.json());

//Pass all our routes to our server. Routes in Routes/index.js
routes.forEach(route=>{
  app[route.method](route.path, route.handler);
})

app.get("/hello", (req,res) =>{
  res.send("hoi");
})

app.listen(8080, () =>{
  console.log("listening om 8080")  
})