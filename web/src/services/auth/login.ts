import _fecth from "../fetch";
import selectorSession from "../recoil/session";
import { setRecoil } from "../recoil/nexus";
// import { deleteData } from "../../utils/_storage";

type LoginProps = {
  email: string;
  password: string;
}

const login = async (data: LoginProps) => {
  console.log('service login', data);
  try {
    const response = await _fecth({ method: 'post', url: 'auth/login/', data });
    const { user } = response?.data;

    if (user) {
      console.log(user);
      setRecoil(selectorSession, user);
      // deleteData('session');
    }
  } catch (err) {
    console.error(err);
  }

  return null
};

export default login;