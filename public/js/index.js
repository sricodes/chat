let socket = io(); // It is trying to make call to backend
socket.on("connect", () => {
  // After connection is made
  console.log(`connected to server `);
});
socket.on("disconnect", (socket) => {
  console.log(`disconnected from server`);
});

socket.on('welcome', function (msg,cb){
  console.log(`from :${msg.from}  --- ${JSON.stringify(msg.text)}`)
  cb(`This is client Side welcome cb rendering `);
});
socket.on('userJoined', (msg) => {
  console.log(`${JSON.stringify(msg.text)}`)
});