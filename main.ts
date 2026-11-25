// The printer jammed on deadline day — and filed a grievance about it.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const JOKE =
  "The printer jammed on deadline day and filed a grievance.";

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, JOKE, "utf8");
console.log(
  `wrote ${OUT_DIR}/entry.txt: ${JOKE.length} chars, ${wordCount(JOKE)} words, ${Buffer.byteLength(JOKE, "utf8")} bytes`
);
