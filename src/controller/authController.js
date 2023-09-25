import {registerService,loginService} from '../service/authService.js';

const registerController = async (req, res) => {
    const user = req.body;
    console.log(req.body);
    try {
      const result = await registerService(user);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  const loginController = async (req, res) => {
    const user = req.body;
    console.log(req.body);
    try {
      const result = await loginService(user);
      console.log(result);
      res.cookie("token", result.DT, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
    registerController,
    loginController
}