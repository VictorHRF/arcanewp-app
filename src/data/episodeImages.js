export const episodeImages = [
  // Episodio 1 - 30 imágenes
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `S1E01-${i + 1}`,
    season: 1,
    episode: 1,
    url: `season1/ep1/S01E01-${i + 1}.webp`,
    urlDownload: `season1/ep1/S01E01-${i + 1}.jpg`,
    alt: `Image ${i + 1} Episode 1 Season 1`
  })),

  // Episodio 2 - 7 imágenes
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `S1E02-${i + 1}`,
    season: 1,
    episode: 2,
    url: `season1/ep2/S01E02-${i + 1}.webp`,
    urlDownload: `season1/ep2/S01E02-${i + 1}.jpg`,
    alt: `Image ${i + 1} Episode 2 Season 1`
  })),

  // Episodio 3 - 18 imágenes
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `S1E03-${i + 1}`,
    season: 1,
    episode: 3,
    url: `season1/ep3/S01E03-${i + 1}.webp`,
    urlDownload: `season1/ep3/S01E03-${i + 1}.jpg`,
    alt: `Image ${i + 1} Episode 3 Season 1`
  }))
];
