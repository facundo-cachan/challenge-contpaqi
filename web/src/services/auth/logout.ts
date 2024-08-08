import { deleteData, getData } from "../../utils/_storage";
import _fecth from "../fetch";
import { resetRecoil } from "../recoil/nexus";
import selectorSession, { key } from "../recoil/session";

const logout = async () => {
  const data = { token: getData(key) };
  try {
    const response = await _fecth({ method: "post", url: "auth/logout", data });
    const { redirectTo } = response?.data ?? undefined;

    if (redirectTo) {
      resetRecoil(selectorSession);
      deleteData(key);
      return true;
    }
  } catch (err) {
    console.error(err);
  }

  return false;
};

export default logout;
