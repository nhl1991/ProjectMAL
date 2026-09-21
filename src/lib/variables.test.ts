import { getCurrentSeason, getYears } from "./variables";

describe("variables", () => {
  it("should return the correct years", () => {
    const years = getYears();
    const currentYear = new Date().getFullYear();
    expect(years[0]).toBe(currentYear + 1);
    expect(years[years.length - 1]).toBe(1970);
  });

  it("should return current season in string", () => {
    const currentSeason = getCurrentSeason();
    expect(typeof currentSeason).toBe("string");
    expect(currentSeason).toBe("summer");
  });

  it.each(['2026-01-20', '2026-04-20', '2026-07-20', '2026-11-20'])("현재 계절을 문자열을 반환한다.", (date) => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(date));
    const currentSeason = getCurrentSeason();
    if (date === '2026-01-20') expect(currentSeason).toBe("winter");
    if (date === '2026-04-20') expect(currentSeason).toBe("spring");
    if (date === '2026-07-20') expect(currentSeason).toBe("summer");
    if (date === '2026-11-20') expect(currentSeason).toBe("fall");
    jest.useRealTimers();
  });

});
