import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one story. A whole marriage in a single sentence:
// she saved his letters — but burned mine.
const STORY = "She saved his letters. Burned mine.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), STORY + "\n", "utf8");
