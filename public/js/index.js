let socket = io(); // It is trying to make call to backend
socket.on("connect", () => {
  // After connection is made
  console.log(`connected to server `);

  socket.on('userJoined', (msg) => {
    console.log(`${JSON.stringify(msg.text)}`)
  })

  socket.on('welcome', (msg) => {
    console.log(`from :${msg.from} ${JSON.stringify(msg.text)}`)
  })

});
socket.on("disconnect", (socket) => {
  console.log(`disconnected from server`);
});



