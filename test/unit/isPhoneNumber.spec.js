import isPhoneNumber from "../../src/isPhoneNumber";

describe("isPhoneNumber", () => {
  it("normal", () => {
    const number = ["+8618202972981", 18202972981];
    const result = number.every(item => {
      return isPhoneNumber(item);
    });
    assert(result === true);
  });

  it("error: if number is empty", () => {
    const result = isPhoneNumber("");
    assert(result === false);
  });

  it("error: if number is invalid", () => {
    const result = isPhoneNumber("1=3+34");
    assert(result === false);
  });
});
