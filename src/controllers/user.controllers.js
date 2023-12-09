import userModel from "../models/user.models.js";
const RegisterUser = async (req, resp) => {
  let userData = await userModel(req.body);
  let result = await userData.save();
  resp.send(result);
};
  
export { RegisterUser };
