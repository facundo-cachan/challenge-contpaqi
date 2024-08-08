/**
 * Method for Local Storage
 * setData allways return Array object
 *
 * @function
 */

const Storage = sessionStorage;

const getData = (name: string) => {
  const value = Storage.getItem(name);
  return value ? JSON.parse(value) : null;
};

const setData = async (name: string, data: any) => {
  Storage.setItem(name, data);
};

const deleteData = async (name: string) => {
  Storage.removeItem(name);
};

export { deleteData, getData, setData };
