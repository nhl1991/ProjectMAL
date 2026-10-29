import { normalizeAnimationDetails } from "./normalizeAnimationDetails";
describe("normalizeAnimationDetails", () => {
  it("main_picture가 없을 때, 빈 문자열일 때, medium만 있을 때를 각각 확인한다.", () => {
    const input1 = {};
    const input2 = { main_picture: { medium: "", large: "" } };
    const input3 = { main_picture: { medium: "medium.jpg" } };

    const result1 = normalizeAnimationDetails(input1);
    const result2 = normalizeAnimationDetails(input2);
    const result3 = normalizeAnimationDetails(input3);

    expect(result1.main_picture.large).toBe("/no_poster.png");
    expect(result2.main_picture.large).toBe("/no_poster.png");
    expect(result3.main_picture.large).toBe("medium.jpg");
  });
  it("pictures가 없을 때, 이미지가 없는 항목이 걸러지는지 확인한다.", () => {
    const input1 = {};
    const input2 = {
      pictures: [{ medium: "", large: "" }, { medium: "medium.jpg" }],
    };

    const result1 = normalizeAnimationDetails(input1);
    const result2 = normalizeAnimationDetails(input2);

    expect(result1.pictures).toEqual([]);
    expect(result2.pictures).toEqual([{ large: "medium.jpg" }]);
  });
  it("recommendations가 없을 때 []이 되고 console.error가 호출되지 않는다.", () => {
    const input = {};
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    const result = normalizeAnimationDetails(input);
    expect(result.recommendations).toEqual([]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  it("should normalize animation details correctly", () => {
    const input = {
      main_picture: { medium: "medium.jpg", large: "large.jpg" },
      pictures: [
        { medium: "medium1.jpg", large: "large1.jpg" },
        { medium: "medium2.jpg" },
      ],
      recommendations: [
        {
          node: {
            id: 1,
            title: "Title 1",
            main_picture: { medium: "m.jpg", large: "l.jpg" },
          },
        },
      ],
    };

    const result = normalizeAnimationDetails(input);

    expect(result.main_picture.large).toBe("large.jpg");
    expect(result.pictures).toEqual([
      { large: "large1.jpg" },
      { large: "medium2.jpg" },
    ]);
    expect(result.recommendations).toHaveLength(1);
  });
});
