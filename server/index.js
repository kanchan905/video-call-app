const {Server} = require("socket.io");
const io = new Server(4000)
// io = require('socket.io').listen(4000);
io.on("connection",(socket)=>{
    console.log('socket connected',socket.id);
});
console.log("changes");