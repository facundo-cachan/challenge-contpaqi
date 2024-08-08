import { key } from "../recoil/session";
import { getData } from "../../utils/_storage";

const signIn = async () => {
  // Get token from storage and decrypt to verify if it is valid
  const data = await getData(key);

  return Boolean(data);
};

export default signIn;
