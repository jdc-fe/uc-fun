export default target => (
  Object.prototype.toString.call(target).slice(8, -1)
);
