# make.fun news-summary-01 entry

A one-page summary, in English, of the world's news of Wednesday
11 November 2026, written from that day's reporting (NPR, BBC, AFP,
New York Times, Associated Press, Dow Jones, local health officials).

- `main.ts` copies `summary.txt` to `$MAKEFUN_OUTPUT_DIR/entry.txt`
  (default `/output/entry.txt`). Standard library only, no network,
  deterministic: both runs write the same bytes.
- `summary.txt` is the summary: 1,975 characters, within the 1–2,000
  limit, ordered by importance, one or two sentences per story, with
  the source named for each story.
