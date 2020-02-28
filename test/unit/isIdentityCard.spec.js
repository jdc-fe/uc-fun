import isIdentityCard from "../../src/isIdentityCard";

describe("isIdentityCard", () => {
  it("normal", () => {
    const number = [
      "622001790122123",
      "610124199803283778",
      "61012419970228377x",
      "61012420200229377X"
    ];
    const result = number.every(item => {
      return isIdentityCard(item);
    });
    assert(result === true);
  });

  it("error: if length is not 15 or 18", () => {
    const result = isIdentityCard("");
    assert(result === false);
  });

  it("error: if year is leap year and February day more than 29", () => {
    const number = ["610124202002303778", "622001800230123"];
    const result = number.every(item => {
      return isIdentityCard(item);
    });
    assert(result === false);
  });

  it("error: if year is not leap year and February day more than 28", () => {
    const number = ["610124201902293778", "622001810229123"];
    const result = number.every(item => {
      return isIdentityCard(item);
    });
    assert(result === false);
  });

  it("error: if number is invalid", () => {
    const result = isIdentityCard("1=3+34");
    assert(result === false);
  });
});
