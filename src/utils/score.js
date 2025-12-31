export function normalizeScores(rawScores) {
  const MAX = 5 * 5; // 5 soal × skala 5

  return {
    vision: Math.round((rawScores.vision / MAX) * 100),
    meaning: Math.round((rawScores.meaning / MAX) * 100),
    reward: Math.round((rawScores.reward / MAX) * 100),
    fear: Math.round((rawScores.fear / MAX) * 100),
  };
}

export function determineDominant(scores) {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  // balanced
  if (entries.every((e) => e[1] === entries[0][1])) {
    return "balanced";
  }

  const diff = entries[0][1] - entries[1][1];

  // hybrid
  if (diff < 5) {
    return `${entries[0][0]}+${entries[1][0]}`;
  }

  // single
  return entries[0][0];
}
