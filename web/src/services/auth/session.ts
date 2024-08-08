import { useRecoilState } from "recoil";
import { useEffect } from "react";
import _fecth from "../fetch";
import { getData } from "../../utils/_storage";
import selectorUser from "../recoil/user";

const useSession = async () => {
  const [user, setUser] = useRecoilState<any>(selectorUser);

  useEffect(() => {
    if (!user) {
      (async () => {
        const session = getData('user');
        if (session) {
          setUser(session);
        } else {
          const response = await _fecth({ url: 'auth/me' });
          setUser(response?.data);
        }
      })();
    }

  }, []);

  return user;
};

export default useSession;