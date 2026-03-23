import express from "express"
import http from "http"
import { Server } from "socket.io"

const app = express()
const server = http.createServer(app)

const io = new Server(server,{
  cors:{ origin:"*" }
})

io.on("connection",socket=>{
  console.log("User Connected")

  socket.on("handMove",data=>{
    socket.broadcast.emit("handMove",data)
  })
})

app.get("/",(req,res)=>{
  res.send("GhostHands Server Running")
})

server.listen(3000,()=>{
  console.log("Server Running")
})