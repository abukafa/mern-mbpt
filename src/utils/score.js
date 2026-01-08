export function normalizeScores(rawScores) {
  const MAX = 5 * 5; // 5 soal × skala 5

  return {
    vision: Math.round((rawScores.vision / MAX) * 100),
    meaning: Math.round((rawScores.meaning / MAX) * 100),
    validation: Math.round((rawScores.validation / MAX) * 100),
    fear: Math.round((rawScores.fear / MAX) * 100),
  };
}

export function determineDominant(scores) {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const max = entries[0][1];

  // ambil semua yg dekat dengan skor tertinggi
  const top = entries.filter((e) => max - e[1] < 5);

  // balanced → semua masuk
  if (top.length === entries.length) {
    return entries.map((e) => e[0]).join("+");
  }

  // single
  if (top.length === 1) {
    return top[0][0];
  }

  // hybrid / triple
  return top.map((e) => e[0]).join("+");
}
