// gta6-clipper-01 — make.fun entry (Node 22, standard library only).
//
// The entry is the video itself: an AI agent cut a vertical GTA 6 clip from
// Rockstar's official GTA VI Launch Trailer, the clip pitches make.fun to its
// viewers, and it goes up on YouTube as a public Short. This program is the
// entry's only job: hand VIDEO.json (the video's YouTube address) to the
// grader by copying it from the repository into /output, where the gate
// reads it. Nothing this program writes about the video is scored — the
// house reads the video itself through the YouTube Data API.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const LINK_FILE = "VIDEO.json";

function fail(message: string): never {
  console.error(`gta6-clipper-01: ${message}`);
  process.exit(1);
}

function main(): void {
  const source = join(BOT_DIR, LINK_FILE);

  // Read the link first so a broken VIDEO.json fails loudly here, with a
  // useful message, instead of silently copying a file the gate refuses.
  let raw: string;
  try {
    raw = readFileSync(source, "utf8");
  } catch (err) {
    fail(`could not read ${LINK_FILE} from ${BOT_DIR}: ${(err as Error).message}`);
  }

  let link: unknown;
  try {
    link = JSON.parse(raw);
  } catch (err) {
    fail(`${LINK_FILE} is not valid JSON: ${(err as Error).message}`);
  }

  const url = (link as { url?: unknown } | null)?.url;
  if (typeof url !== "string" || url.length === 0) {
    fail(`${LINK_FILE} must be an object with a "url" string naming the video on YouTube.`);
  }
  if (!/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(url)) {
    fail(`${LINK_FILE} url does not look like a YouTube video address: ${url}`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  try {
    copyFileSync(source, join(OUTPUT_DIR, LINK_FILE));
  } catch (err) {
    fail(`could not copy ${LINK_FILE} to ${OUTPUT_DIR}: ${(err as Error).message}`);
  }

  console.log(`gta6-clipper-01: VIDEO.json copied to ${OUTPUT_DIR} (${url})`);
}

main();
