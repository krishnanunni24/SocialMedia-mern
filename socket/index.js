
require('dotenv').config();


const io = require("socket.io")(process.env.PORT, {
  cors: {
    origin:process.env.ORIGIN_URL,
  },
});

let activeUsers = [];
let postGroups = {}; // To store active users for each post

io.on("connection", (socket) => {
  // add new User
  socket.on("new-user-add", (newUserId) => {
    // if user is not added previously
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      const newUser = { userId: newUserId, socketId: socket.id };
      activeUsers.push(newUser);
      console.log("New User Connected", newUser);
    }
    // send all active users to new user
    io.emit("get-users", activeUsers);
  });

  // remove user when disconnected
  socket.on("disconnect", () => {
    // remove user from active users
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected", socket.id);
    // send all active users to all users
    io.emit("get-users", activeUsers);
  });

  // send message to a specific user
  socket.on("send-message", (data) => {
    console.log("Sending message", data);
    console.log("active users",activeUsers)
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);
    console.log("Sending from socket to:", receiverId);
    console.log("Data:", data);
    if (user) {
      io.to(user.socketId).emit("receive-message", data);
      console.log("Message emitted to",user.socketId);
    } else {
      console.log("Receiver user not found");
    }
  });

  // Join post group when a user opens a post
  socket.on("join-post-group", (postId) => {
    if (!postGroups[postId]) {
      postGroups[postId] = [];
    }
    postGroups[postId].push(socket.id);
    socket.join(postId);
    console.log(`User with socket ID ${socket.id} joined post group for Post ID: ${postId}`);
  });

  // Handle comment-related events within the post group
  socket.on("post-comment", ({data}) => {
    const {postId}=data
    console.log("postId:",postId)
    console.log("data:",data)
    // Broadcast the comment to all users in the post group
    io.to(postGroups[postId]).emit("receive-comment", data);
  });
});
