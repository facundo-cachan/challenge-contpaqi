import _fecth from "../fetch";
import selectorSession from "../recoil/session";
import { setRecoil } from "../recoil/nexus";

type LogOutProps = {
  token: string;
}

const logout = async (data: LogOutProps) => {
  try {
    const response = await _fecth({ method: 'delete', url: 'auth/logout', data });
    const user = response?.data?.user;

    if (user) {
      setRecoil(selectorSession, null)
    }

  } catch (err) {
    console.error(err);
  }

  return null
};

export default logout;