const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/libraryDB");

(async () => {
  const hashed = await bcrypt.hash("user123", 10);

  await User.create({
    username: "user1",
    password: hashed,
    role: "user",
  });

  console.log("User created");
  process.exit();
})();
