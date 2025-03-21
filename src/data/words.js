export const easyWords = [
  // 3-5 letter words
  "CAT",
  "DOG",
  "SUN",
  "HAT",
  "CAR",
  "BEE",
  "SKY",
  "FOX",
  "JOB",
  "BOOK",
  "BALL",
  "FISH",
  "DOOR",
  "TREE",
  "MOON",
  "STAR",
  "MILK",
  "CAKE",
  "FROG",
  "LION",
  "BIRD",
  "EASY",
  "FAST",
  "SLOW",
  "NEAR",
  "WARM",
  "LOVE",
  "WIND",
  "WAVE",
  "COLD",
  "CASH",
];

export const mediumWords = [
  // 5-8 letter words
  "APPLE",
  "ROCKY",
  "CLOUD",
  "BRAVE",
  "WATER",
  "TRAIN",
  "SINGER",
  "ROBOTS",
  "WIZARD",
  "PILOT",
  "STORM",
  "SAILOR",
  "CANYON",
  "DESERT",
  "THUNDER",
  "ISLAND",
  "CASTLE",
  "GUITAR",
  "RABBIT",
  "JUNGLE",
  "ROSTER",
  "POETRY",
  "COFFEE",
  "PLANET",
  "DANCER",
  "BREEZE",
  "FARMER",
  "COWBOY",
  "SHADOW",
  "TONGUE",
  "BANANA",
  "REMIX",
  "VORTEX",
  "PICKLE",
];

export const hardWords = [
  // 8+ letter words
  "PSYCHOLOGY",
  "TECHNOLOGY",
  "REVOLUTION",
  "COMPUTATION",
  "PHOTOSYNTHESIS",
  "CONSCIENTIOUS",
  "INTERDISCIPLINARY",
  "DEMOGRAPHICS",
  "CONFIGURATION",
  "ARCHITECTURE",
  "TRANSFORMATIVE",
  "PHILANTHROPIST",
  "QUINTESSENTIAL",
  "MISREPRESENTATION",
  "INCONSEQUENTIAL",
  "INEFFICIENCY",
  "THUNDERSTRUCK",
  "PARAMETRIZATION",
  "ENTHUSIASTIC",
  "BIBLIOGRAPHY",
  "INTERNALIZATION",
  "SUBSTANTIATION",
  "PERSEVERANCE",
  "DETERMINATION",
  "AFFORESTATION",
  "BIODEGRADABLE",
];

export function getWordsByDifficulty(difficulty) {
  switch (difficulty) {
    case "easy":
      return easyWords;
    case "medium":
      return mediumWords;
    case "hard":
      return hardWords;
    default:
      return easyWords;
  }
}
