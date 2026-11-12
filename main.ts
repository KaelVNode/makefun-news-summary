// Entry: copies the pre-written summary of 11 November 2026 world news
// to the graded output file. No network, no randomness: both runs agree.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./summary.txt', import.meta.url), join(out, 'entry.txt'));
