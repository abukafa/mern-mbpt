export function chartRadarSVG(scores) {
  const labels = ["Vision", "Meaning", "Validation", "Fear"];
  const values = [
    scores.vision,
    scores.meaning,
    scores.validation,
    scores.fear,
  ];

  const size = 300;
  const center = size / 2;
  const max = 100;
  const levels = 5;
  const radius = 110;

  const angle = (i) => (Math.PI * 2 * i) / labels.length - Math.PI / 2;
  const point = (val, i) => {
    const r = (val / max) * radius;
    return [center + r * Math.cos(angle(i)), center + r * Math.sin(angle(i))];
  };

  const polygon = values.map((v, i) => point(v, i).join(",")).join(" ");

  return `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <!-- GRID -->
  ${Array.from({ length: levels })
    .map((_, l) => {
      const r = ((l + 1) / levels) * radius;
      const pts = labels
        .map((_, i) => {
          const x = center + r * Math.cos(angle(i));
          const y = center + r * Math.sin(angle(i));
          return `${x},${y}`;
        })
        .join(" ");
      return `<polygon points="${pts}" fill="none" stroke="#ddd"/>`;
    })
    .join("")}

  <!-- AXIS -->
  ${labels
    .map((_, i) => {
      const [x, y] = point(max, i);
      return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#ccc"/>`;
    })
    .join("")}

  <!-- LABEL -->
  ${labels
    .map((l, i) => {
      const [x, y] = point(max + 15, i);
      return `<text x="${x}" y="${y}" font-size="12" text-anchor="middle">${l}</text>`;
    })
    .join("")}

  <!-- DATA -->
  <polygon points="${polygon}" fill="rgba(99,102,241,0.4)" stroke="#6366f1" stroke-width="2"/>
</svg>
`;
}
