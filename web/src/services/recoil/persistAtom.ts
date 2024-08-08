import { deleteData, getData, setData } from "../../utils/_storage";
import { DefaultValue } from "recoil";

type PersistAtomProps = {
  setSelf: (value: any) => void;
  onSet: (
    handler: (newValue: any, oldValue: any, isReset: boolean) => void,
  ) => void;
  trigger: "get" | "set";
};

const persistAtom =
  (key: string) =>
  ({ setSelf, onSet }: PersistAtomProps) => {
    setSelf(() => {
      let data = getData(key);
      return data ?? new DefaultValue();
    });

    onSet((newValue, _, isReset) => {
      if (isReset) {
        deleteData(key);
      } else {
        setData(key, JSON.stringify(newValue));
      }
    });
  };

export default persistAtom;
