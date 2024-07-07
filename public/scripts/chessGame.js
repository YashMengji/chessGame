const socket = io();

socket.emit("churan") // frontend -->>>>> backend

socket.on("churan papadi", () => { // frontend <<<<<-- backend
  console.log("churan papadi received");
});