import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "gracewumi26@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Opeyemi 0la",
    email: "atefoba01@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Admin User",
    email: "dadajoshua055@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
export default users;
