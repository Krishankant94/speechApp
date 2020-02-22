export default function validate(val, type) {
  let res, regex;
  switch (type) {
    case "mobile":
      regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      res = regex.test(val);
      break;
    case "textarea":
      regex = /^[a-z 0-9,.'-]+$/;
      res = regex.test(val);
      break;
    case "name":
      regex = /^[a-z ,'-]+$/;
      res = regex.test(val);
  }
  return res;
}
