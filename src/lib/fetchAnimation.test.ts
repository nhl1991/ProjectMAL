import { getAnimations } from "./fetchAnimation";

describe("fetchAnimation", () => {
    afterEach(() => {
    jest.resetAllMocks();
  });
  it("fetch의 response를 그대로 반환한다", async () => {
  const mockResponse = {
    ok: true,
    status: 200,
    json: jest.fn(),
  } as unknown as Response;

  global.fetch = jest.fn().mockResolvedValue(mockResponse);

  const result = await getAnimations(
    "anime?q=frieren",
    "anime-search",
  );

  expect(result).toBe(mockResponse);
});
});