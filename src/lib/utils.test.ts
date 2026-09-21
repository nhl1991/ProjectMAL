import { cn } from "./utils";

describe("utils", () => {

  it("ClassValue를 처리하고, string으로 변환한다.", () => {
    const result = cn("class1", "class2");
    expect(result).toBe("class1 class2");
  });

  it("alternative_titles.ja를 리턴한다.", () => {
    const { getTitle } = require("./utils");
    const node = {
      title: "Title in English",
      alternative_titles: {
        ja: "Title in japanese",
      },
    };

    expect(getTitle(node)).toBe("Title in japanese");
  });

  it("alternative_titles.ja가 없으면 title을 리턴한다.", () => {
    const { getTitle } = require("./utils");
    const node = {
      title: "Title in English",
      alternative_titles: {},
    };

    expect(getTitle(node)).toBe("Title in English");
  });

  it("STATUS_LABELS를 리턴한다.", () => {
    // Add your test cases here
    const { formatStatus } = require("./utils");
    expect(formatStatus("finished_airing")).toBe("Finished Airing");
  });

  it("STATUS_LABELS에 없는 경우 문자열을 그대로 반환한다.", () => {
    const { formatStatus } = require("./utils");
    expect(formatStatus("non_existent_status")).toBe("non_existent_status");
  });

  it("RATING_LABELS를 리턴한다.", () => {
    const { formatRating } = require("./utils");
    expect(formatRating("pg_13")).toBe("PG-13");
  });
  
  it("RATING_LABELS에 없는 경우 문자열을 그대로 반환한다.", () => {
    const { formatRating } = require("./utils");
    expect(formatRating("non_existent_rating")).toBe("non_existent_rating");
  });
});
