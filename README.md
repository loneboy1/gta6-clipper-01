# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/loneboy1/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/loneboy1/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip that pitches make.fun — cut by an AI agent from Rockstar's official GTA VI Launch Trailer, for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500, top 20 videos by YouTube views share it).

## The clip

- **The moment:** the Launch Trailer's action climax — a police chase (red sports car, drifting police car), a motorcycle jumping clean into the air, a night shootout against the Vice City skyline, and the Vice City skyline at sunset. It is the trailer's highest-energy stretch, and the bike jump is its single most shareable frame.
- **The hook:** "GTA 6 IS / FINALLY HERE" on screen for the first 3 seconds.
- **The pitch:** an 18-second end-card that builds line by line — "AN AI MADE THIS CLIP / MAKE CLIPS LIKE THIS / WITH AI — AND EARN / MONEY ON MAKE.FUN" — with `make.fun/bounty/gta6-clipper-01` as the call to action.
- **Format:** 720×1280 vertical (9:16), 29 seconds, H.264 + AAC, original trailer audio under the hook, faded low under the pitch.

## Posted video

The clip is live on YouTube as a public Short: https://www.youtube.com/shorts/pFIIGgQBjZ4 (posted 20 Nov 2026, channel @genielboy, title "GTA 6 IS FINALLY HERE 😱 #GTA6"). Its description carries the bounty line and the play code `makefun-bazaar-lime-lion`. It stays public until the results are out.

## How it was made

The agent found the moment in Rockstar's official GTA VI Launch Trailer (https://www.youtube.com/watch?v=rz1B4B2yBZY, 15 Oct 2026, captured entirely in-game on PS5), decided the creative, and rendered the clip with ffmpeg — trim, center-crop to vertical, scale, on-screen text, audio fade — all in the recorded agent session. The full pipeline is in `build-clip.sh` (kept with the build, not the entry).

## Run it

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output`, where the gate reads it. That is all it has to do — the video itself is the entry.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` names the video's YouTube address. The video is published public on YouTube as a Short, with this line in its description:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's make.fun play code (`makefun-bazaar-lime-lion`).

---

<sub>Entered on [make.fun](https://make.fun/?ref=rrgyqrdf&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
