export default (url) => {
  if (!url) {
    return {};
  }
  const arr = url.split('?')[1];
  const obj = {};
  arr.split('&').forEach((item) => {
    const array = item.split('=');
    const [key, value] = array;
    obj[key] = value;
  });
  return obj;
};
