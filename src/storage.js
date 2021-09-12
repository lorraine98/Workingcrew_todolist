const storage = window.localStorage;

export const setItem = (key, value) => {
  try {
    storage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (key, defaultValue) => {
  try {
    return JSON.parse(storage.getItem(key)) ?? defaultValue;
  } catch (e) {
    return defaultValue;
  }
};
