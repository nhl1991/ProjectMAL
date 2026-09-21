import { getRecentSearches, removeRecentSearch, saveRecentSearch } from "./recentSearch";

describe("recentSearch", () => {
  it("localStorage에서 최근 검색어를 가져온다.", () => {
    // Add your test cases here
    localStorage.clear();
    localStorage.setItem(
      "recentSearch",
      JSON.stringify(["search1", "search2"]),
    );
    const recentSearches = getRecentSearches();
    expect(recentSearches).toEqual(["search1", "search2"]);
  });

  it("localStorage에서 최근 검색어가 없는 경우 빈 배열을 반환한다.", () => {
    // Add your test cases here
    localStorage.clear();
    global.window
    const recentSearches = getRecentSearches();
    expect(recentSearches).toEqual([]);
    expect(recentSearches).toHaveLength(0);
  });
  it("window가 undefined인 경우 빈 배열을 반환한다.", () => {
    const originalWindow = global.window;

    Reflect.deleteProperty(globalThis, "window");
    const recentSearches = getRecentSearches();
    expect(recentSearches).toEqual([]);
    expect(recentSearches).toHaveLength(0);
    global.window = originalWindow;
  });

  it("에러가 발생하면 빈 배열을 반환한다.", ()=>{
    localStorage.setItem("recentSearch", "invalid JSON");
    const recentSearches = getRecentSearches();
    expect(recentSearches).toEqual([]); 
  })

  it("localStorage에 최대 5개의 배열을 저장한다.", () => {
    localStorage.clear();

    for (let i = 1; i <= 6; i++) {
      saveRecentSearch(`search${i}`);
    }

    const recentSearches = getRecentSearches();

    expect(recentSearches).toHaveLength(5);
    expect(recentSearches).toEqual(["search6", "search5", "search4", "search3", "search2"]);
  });

  it("중복된 검색어를 저장하면 가장 최근에 추가된 것으로 갱신된다.", () => {
    localStorage.clear();
    saveRecentSearch("search1");
    saveRecentSearch("search2");
    saveRecentSearch("search1");

    const recentSearches = getRecentSearches();
    expect(recentSearches).toHaveLength(2);
    expect(recentSearches).toEqual(["search1", "search2"]);
  });

  it("빈 문자열을 입력 받으면 저장되지 않는다.", ()=>{
    localStorage.clear();
    saveRecentSearch("");

    const recentSearches = getRecentSearches();
    expect(recentSearches).toHaveLength(0);
    expect(recentSearches).toEqual([]);
  })

  it("입력 받은 검색어와 일치하는 문자를 삭제한다.",()=>{
    localStorage.clear();
    saveRecentSearch("search1");
    saveRecentSearch("search2");
    saveRecentSearch("search3");

    // Assuming there is a function deleteRecentSearch to remove a search term
    removeRecentSearch("search2");

    const recentSearches = getRecentSearches();
    expect(recentSearches).toHaveLength(2);
    expect(recentSearches).toEqual(["search3", "search1"]);
  })
});
