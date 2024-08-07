import _fecth from "../fetch";
import selectorSession from "../recoil/session";
import { setRecoil } from "../recoil/nexus";

type LoginProps = {
  email: string;
  password: string;
}

const login = async (data: LoginProps) => {
  try {
    const response: any = await _fecth({ method: 'post', url: 'auth/login/', data });
    const { token, ...props } = response?.data ?? undefined;

    if (token) {
      setRecoil(selectorSession, token);
    }

    return props
  } catch (err) {
    console.error(err);
  }

  return null
};

export default login;