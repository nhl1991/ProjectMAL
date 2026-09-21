import { normalizeAnimationData } from "./normalizeAnimationData";

describe("normalizeAnimationData", () => {
  const input = [
    {
      node: {
        id: 5114,
        title: "Fullmetal Alchemist: Brotherhood",
        main_picture: {
          medium: "https://myanimelist.cdn-dena.com/images/anime/5/47421.jpg",
          large: "https://myanimelist.cdn-dena.com/images/anime/5/47421l.jpg",
        },
      },
      ranking: {
        rank: 1,
      },
    },
    {
      node: {
        id: 32281,
        title: "Kimi no Na wa.",
        main_picture: {
          medium: "https://myanimelist.cdn-dena.com/images/anime/5/87048.jpg",
          large: "https://myanimelist.cdn-dena.com/images/anime/5/87048l.jpg",
        },
      },
      ranking: {
        rank: 2,
      },
    },
    {
      node: {
        id: 30484,
        title: "Steins;Gate 0",
        main_picture: {
          medium:
            "https://myanimelist.cdn-dena.com/images/anime/1031/90444.jpg",
          large:
            "https://myanimelist.cdn-dena.com/images/anime/1031/90444l.jpg",
        },
      },
      ranking: {
        rank: 3,
      },
    },
    {
      node: {
        id: 28977,
        title: "Gintama°",
        main_picture: {
          medium: "https://myanimelist.cdn-dena.com/images/anime/3/72078.jpg",
          large: "https://myanimelist.cdn-dena.com/images/anime/3/72078l.jpg",
        },
      },
      ranking: {
        rank: 4,
      },
    },
  ];

  const expectedOutput = [
    {
      node: {
        id: 5114,
        title: "Fullmetal Alchemist: Brotherhood",
        main_picture: {
          medium: "https://myanimelist.cdn-dena.com/images/anime/5/47421.jpg",
          large: "https://myanimelist.cdn-dena.com/images/anime/5/47421l.jpg",
        },
      },
      ranking: {
        rank: 1,
      },
    },
    {
      node: {
        id: 32281,
        title: "Kimi no Na wa.",
        main_picture: {
          medium: "https://myanimelist.cdn-dena.com/images/anime/5/87048.jpg",
          large: "https://myanimelist.cdn-dena.com/images/anime/5/87048l.jpg",
        },
      },
      ranking: {
        rank: 2,
      },
    },
    {
      node: {
        id: 30484,
        title: "Steins;Gate 0",
        main_picture: {
          medium:
            "https://myanimelist.cdn-dena.com/images/anime/1031/90444.jpg",
          large:
            "https://myanimelist.cdn-dena.com/images/anime/1031/90444l.jpg",
        },
      },
      ranking: {
        rank: 3,
      },
    },
    {
      node: {
        id: 28977,
        title: "Gintama°",
        main_picture: {
          medium: "https://myanimelist.cdn-dena.com/images/anime/3/72078.jpg",
          large: "https://myanimelist.cdn-dena.com/images/anime/3/72078l.jpg",
        },
      },
      ranking: {
        rank: 4,
      },
    },
  ];
  it("should normalize animation data correctly", () => {
    // Arrange

    // Act
    const result = normalizeAnimationData(input);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it("데이터가 배열이 아닌 경우 빈 배열을 반환한다.", ()=>{
    const result = normalizeAnimationData(null);
    expect(result).toEqual([]);
  });

  it("데이터의 배열 길이와 filter로 반환된 길이가 일치하지 않으면 error를 출력한다.", () => {
    const consoleWarnSpy = jest.spyOn(console, "error").mockImplementation();
    const malformedInput = [
      { node: { id: 1, title: "Test", main_picture: { medium: "", large: "" } }, ranking: { rank: 1 } },
      { node: { id: null, title: "Test 2", main_picture: { medium: "", large: "" } }, ranking: { rank: 2 } },
    ];
    normalizeAnimationData(malformedInput);
    expect(consoleWarnSpy).toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });

});
