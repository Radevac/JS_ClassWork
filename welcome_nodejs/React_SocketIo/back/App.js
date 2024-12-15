
 /*Create socket server*/

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const allSocketServer =
    new Server(httpServer, {
        cors: {
            origin: "*"
        }
    });



 allSocketServer.on("connection", (oneUserSocket) => {
     console.log(`User connected: ${oneUserSocket.id}`);

     // Создайте имя
     oneUserSocket.name = oneUserSocket.id;

     const newUser = {
         name: oneUserSocket.name,
         connectedAt: Date.now(),
     };

     allSocketServer.emit('new_user_connection', newUser);



oneUserSocket.on('new_name_user',(data)=>{

      oneUserSocket.name = data;

})

     oneUserSocket.on('new_message', (data) => {
         const msg = {

             name:`user: ${oneUserSocket.name}`,
             msg: data,

             createdAt: Date.now(),
         };
         allSocketServer.emit('new_message', msg);
     });

     oneUserSocket.on("disconnect", () => {
         console.log(`User disconnected: ${oneUserSocket.id}`);
     });
 });

/**
 * Run socket server
 */
httpServer.listen(3030, () => {
    console.log("Socket server is running on http://localhost:3030");
});