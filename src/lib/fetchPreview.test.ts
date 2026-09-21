import { fetchPreview } from "./fetchPreview";

describe("fetchPreview", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch preview data correctly", () => {
    // Add your test cases here
  });

  it("404 에러 시 빈 배열을 반환한다.", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 404,
    });
    await expect(fetchPreview("/test")).resolves.toEqual({ data: [] });
  });

  it("에러가 발생 시 에러 메세지 또는 에러 내용을 반환한다.", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Test error"));

    await expect(fetchPreview("/test")).rejects.toThrow("Test error");
  });

  it("fetchPreview는 한번만 호출된다.", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      ok: true,
      json: async () => ({ data: [] }),
    });
    await fetchPreview("test");
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/preview/test', { method: "GET" });
  });

});
