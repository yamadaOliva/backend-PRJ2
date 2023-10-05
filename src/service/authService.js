import bcrypt from "bcryptjs";
import db from "../models/index.js";
//hash password
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};

const checkUserExists = async (email) => {
  const user = await db.User.findOne({
    where: {
      email: email,
    },
  });
  return user ? true : false;
};

const registerService = async (user) => {
  console.log("service==>", user);
  const userIsExists = await checkUserExists(user.email);
  console.log("userIsExists==>", userIsExists);
  if (userIsExists) {
    return {
      EC: 400,
      EM: "Email is already exists",
      DT: "",
    };
  } else {
    try {
      await db.User.create({
        email: user.email,
        password: hashPassword(user.password),
        username: user.name,
        role: 2,
        phonenumber: user.phonenumber,
      });
      return {
        EC: 200,
        EM: "Register successfully",
        DT: "",
      };
    } catch (error) {
      console.log(error);
    }
  }
};

const loginService = async (user) => {
  console.log("service==>", user);
  try {
    const userIsExists = await checkUserExists(user.email);
    if (!userIsExists) {
      return {
        EC: 400,
        EM: "Email is not exists",
        DT: "",
      };
    } else {
      const userTemp = await db.User.findOne({
        where: {
          email: user.email,
        },
      });

      const isMatch = bcrypt.compareSync(user.password, userTemp.password);
      if (!isMatch) {
        return {
          EC: 400,
          EM: "Password is not correct",
          DT: "",
        };
      } else {
        return {
          EC: 200,
          EM: "Login successfully",
          DT: {
            email: userTemp.email,
            username: userTemp.username,
            role: userTemp.role,
            phone: userTemp.phonenumber,
            id : userTemp.id
          },
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerService,
  loginService,
};
