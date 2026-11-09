# Full YouTube Automation Site — Design + Build Prompt for Claude / ChatGPT

**Owner:** Mazahar (Mazaharul) — AI Video Production & Content Strategy Consultant
**First use case / proof channel:** American Garage Gold — @AmericanGarageGold — 26,900 subs, USA audience age 50–75
**Date:** 2026-11-09
**How to use this file:** Copy **Part A** (the prompt in the code block) and paste it into a NEW Claude / ChatGPT project, then attach this whole file as the spec. Do not paste only Part A without this file — the details in Part B are the acceptance criteria.

---

## Decision first: aikitfinder or separate domain?

**Answer: SEPARATE DOMAIN. List it on aikitfinder only.**

|  | aikitfinder-এ ভেতরে বানালে | আলাদা ডোমেইনে বানালে |
|---|---|---|
| Brand | AIKitFinder-এর একটা টুল হিসেবে চাপা পড়ে যাবে | নিজের ব্র্যান্ড, নিজের SEO, নিজের প্রাইসিং |
| YouTube OAuth + API quota | aikitfinder-এর প্রজেক্টের কোটা / কী-র সাথে মিশে যাবে — একটা ভুলে দুটো সাইটই আটকাবে | আলাদা Google Cloud প্রজেক্ট, আলাদা কোটা, আলাদা চাবি |
| Billing / user data | aikitfinder-এর auth / DB-র সাথে জট পাকাবে | আলাদা Supabase প্রজেক্ট, আলাদা RLS, আলাদা সাবস্ক্রিপশন |
| Trust | দর্শক বুঝবে না এটা কার প্রোডাক্ট | চ্যানেলের মালিক নিজে YouTube কানেক্ট করবে — বিশ্বাস বাড়ে |
| ভবিষ্যৎ বিক্রি | আলাদা করে বিক্রি / হস্তান্তর করা যাবে না | চাইলে পুরো SaaS আলাদা করে বিক্রি করা যাবে |

**This is the same pattern Mazahar already used for VoiceHub — and it worked:** full studio lives on its own site `voicehubo.vercel.app`, and aikitfinder only has a `/voicehub` listing page + menu link to it. Do the same here.

**Recommended plan:**
1. Build the SaaS on its own Vercel project + own GitHub repo (suggested repo: `mazahar007/autoflowai`).
2. Start on `autoflowai.vercel.app`, later move to a bought domain like `autoflow.ai` / `autoflowai.com` (check availability first — do not claim a domain is bought until it is).
3. After the standalone site is live, add ONE listing card + menu link on aikitfinder (`/tools/autoflowai` → links out to the standalone site). Do not rebuild the studio inside aikitfinder.

---

# PART A — Copy-paste prompt (give this to Claude / ChatGPT)

```text
Build me a full YouTube automation SaaS called AutoFlow AI — YouTube Automation Studio.

Read the attached spec file (Full-Automation-Site-Design-Prompt.md) FIRST and follow Part B exactly. Do not invent features, prices, or fake data that are not in the spec.

Tech stack (do not change): Next.js 15 + TypeScript + Tailwind CSS v4, Supabase (Auth + Postgres + Storage + RLS), Vercel hosting. Video rendering: FFmpeg worker pattern (proven for 1080x1920 Shorts) — do NOT claim Remotion builds the car videos; Remotion is only for the Bengali text-only AiShort template, not this product.

Core rule for the whole product: 80% automation + 20% human approval. NEVER auto-publish a video to YouTube without the user pressing Approve. NEVER upload more than 2 videos per day per channel by default. NEVER use view bots, sub-for-sub, scraped videos, or reused content without original value-add.

Build in this order, and show me a section-by-section preview after EACH step before moving on — do not push anything live without my approval:
1. Landing page + pricing (draft prices only, marked DRAFT)
2. Auth + dashboard + project pipeline board (8 stages)
3. Research module (topic list from YouTube Data API + vidIQ-style outlier check — no scraping)
4. Script + fact-check module (hook + price ladder + payoff + CTA, every price needs a source URL and a status: verified / single-source / unverified)
5. Voice module (user's own VO upload is default; ElevenLabs TTS is optional fallback only, labelled as such)
6. Render module (FFmpeg 1080x1920, big legible captions low on frame, calm pacing, faststart MP4, QA check)
7. Publish-pack module (title + alternatives, thumbnail text, description + 5 hashtags, thumbnail prompt)
8. Upload module (manual YouTube Studio checklist FIRST; YouTube Data API upload only behind an explicit Approve + OAuth, with quota shown: 10,000 units/day, one upload = 1,600 units)

Design: bilingual Bengali + English, light + dark mode, default DARK, header language/mode toggle saved in localStorage. Clean, premium-corporate, subtle one-time motion only — no busy continuous animation. Section gaps exactly 50px. No fake videos, no fake view counts, no fake testimonials, no fake YouTube IDs. Empty states must say EMPTY / DEMO clearly.

Seed the demo with ONE real project only: #95 — 1970 Dodge Challenger T/A, title "Dodge Killed It After One Year — Its Price Kept Climbing", price ladder $62,000 (Mecum Monterey 2014) → $93,500 (Barrett-Jackson Scottsdale 2016, SINGLE-SOURCE) → $143,000 (Mecum Kissimmee Jan 2026, VIN JH23J0B296662, Lot F177, reported SOLD — SINGLE-SOURCE, forum report only, pending Mazahar's keep/soften/drop decision; do NOT present it as a confirmed sale in the seed, script or thumbnail until he taps keep). Do NOT use $170,500 for Sam Posey #76 — it is unverified. Do NOT render a video without a real VO file and real photos.

When you finish each step, tell me: what you built, what you did NOT build, what API keys / setup I still need to do myself (YouTube OAuth, ElevenLabs key, Supabase project), and give me the files / preview link. Never say "live" or "done" until you have opened the deployed URL yourself and checked it loads with no errors.
```

---

# PART B — Full spec (the acceptance criteria)

## 1. Product in one line

**AutoFlow AI** — research, script, voice, video, thumbnail, and upload for YouTube, in one pipeline, with a human approve step before anything goes public.

**Tagline:** `Research to upload — with a human in the loop.`

**Who it is for (in order):**
1. Mazahar himself — American Garage Gold (classic-car auction Shorts + long-form).
2. Bangladeshi creators who want faceless / semi-faceless YouTube channels in Bengali or English.
3. Small US creators in the classic-car / auction niche who want 1–2 Shorts a day without hiring an editor.

**Who it is NOT for:** people who want 20 identical videos a day, view bots, or re-uploading other people's videos. The product must refuse that use case by design (rate limits + approval gate).

## 2. Pages / information architecture

| Route | What is on it | MVP? |
|---|---|---|
| `/` (Landing) | Hero (one-line promise + 60-sec demo video placeholder — EMPTY until a real demo exists), How it works (8 stages), Safety (human approval, YouTube rules), Pricing (DRAFT), FAQ, Footer | Yes |
| `/pricing` | Free trial + Starter / Creator / Pro (see §7, all marked DRAFT until Mazahar finalises) | Yes |
| `/login`, `/register` | Supabase Auth, email + Google. No fake demo login that pretends to be a real account. | Yes |
| `/app` (Dashboard) | My channels, my projects by stage, today's queue, credits left, recent renders | Yes |
| `/app/research` | Topic finder: niche input → 10–20 topic ideas with outlier score, gap note, source links | Yes |
| `/app/projects/[id]` | One project, 8-stage board: research → script → fact-check → voice → render → QA → publish-pack → upload-ready. Each stage shows owner, status, and its files. | Yes |
| `/app/studio` | Script editor (hook / ladder / payoff / CTA), fact-check table, VO upload, photo upload | Yes |
| `/app/library` | All finished videos, publish packs, thumbnails — with expiry note on every download link | Yes |
| `/app/schedule` | Upload calendar, max 2/day default, manual-upload checklist per video | Yes |
| `/app/analytics` | Views / CTR / retention per video (YouTube Analytics API, read-only). If not connected, show EMPTY, never fake numbers. | V2 |
| `/app/settings` | Connect YouTube (OAuth), ElevenLabs key (own key, server-side only), channel defaults, language + theme | Yes |
| `/admin` | Passcode-gated (change the demo passcode before selling), users, credits, health check `/api/health` | Yes |
| `/en` | English version of landing + app (same content, translated — not a separate product) | V2 |

## 3. The 8-stage pipeline (the heart of the product)

This is the same pipeline Mazahar already runs by hand in `~/workspace/garage-gold-pipeline/` — the site must digitise it, not replace it with a different flow.

| # | Stage | Auto / Manual | What must happen | Gate to next stage |
|---|---|---|---|---|
| 1 | Research | Semi-auto | Topic ideas from YouTube Data API + Trends + outlier check (a video doing 3x the channel average). No scraping, no bot. | User picks 1 topic |
| 2 | Script | LLM draft + human edit | 100–130 words / 45–55s for Shorts. Template: Hook (0–3s) + Attraction (3–6s) + Story / price ladder + Payoff + CTA. Every script must have a hook and a reason to watch to the end. | User saves script |
| 3 | Fact-check | Manual check, system tracks it | Every price / year / VIN / lot number has: value, source URL, status (verified / single-source / unverified). Unverified prices are BLOCKED from the script — the UI must show them in red and refuse to render until removed or softened. | All facts verified or softened |
| 4 | Voice | Manual default | User uploads own VO (WAV 48kHz/24-bit, sections). ElevenLabs TTS is an optional fallback, clearly labelled "AI voice", and cloning needs written consent (checkbox + note). | VO file present |
| 5 | Render | Auto (FFmpeg worker) | 1080x1920, 30fps, photos + VO + key-text captions only (not word-by-word), big legible captions low on frame, calm pacing, eased Ken Burns, warm grade, SFX/music only where needed, AMERICAN GARAGE GOLD lockup at end. Output: faststart MP4 (`-movflags +faststart`). Chunked render if a single pass crashes (~frame 275 memory rule from the existing setup). | Render finishes, file exists |
| 6 | QA | Auto check + human watch | Auto: file exists, duration, resolution, faststart (moov before mdat), loudness ~-16 LUFS, QA frames at 10/50/90%. Human: watch once, confirm voice/caption sync OK. Publish is DISABLED until QA passes. | QA pass + sync confirmed |
| 7 | Publish-pack | Auto draft + human pick | Main title + 2 alternatives, thumbnail text (main + alt), CTR note (honest 1–10, with reason), short description + 5 hashtags, thumbnail prompt with text (real photo only, text off grille/headlights, no redraw of the car). | User picks title + thumbnail text |
| 8 | Upload-ready | Manual default | Checklist + metadata JSON (title, description, tags, thumbnail, schedule time, AI-disclosure checkbox) for YouTube Studio manual upload. API upload is a V2 option behind explicit Approve + OAuth — never the default. | User marks uploaded (with YouTube URL) |

**State machine:** a project can only move forward one stage at a time. It can move back (e.g. QA fail → back to Render). The dashboard must show this honestly — never show a stage as done when its gate has not passed.

## 4. Data model (Supabase Postgres)

```sql
-- Keep table names exactly like this so the existing pipeline.json maps 1:1.
profiles        (id uuid PK, email, display_name, language bn|en, theme dark|light, created_at)
channels        (id uuid PK, owner_id FK profiles, youtube_channel_id, title, handle, connected_at, quota_units_per_day int default 10000)
projects        (id uuid PK, channel_id FK, slug text unique, title, car_or_topic, series text, stage text, -- one of the 8 stages
                 status text, created_at, updated_at)
scripts         (id uuid PK, project_id FK, body text, word_count int, duration_sec int, version int)
fact_checks     (id uuid PK, project_id FK, claim text, value text, source_url text, status text, -- verified | single-source | unverified
                 notes text)
assets          (id uuid PK, project_id FK, kind text, -- vo | photo | thumbnail | video
                 storage_path text, file_name text, created_at)
renders         (id uuid PK, project_id FK, file_path text, duration_sec numeric, resolution text, faststart bool,
                 loudness_lufs numeric, qa_status text, qa_frames jsonb)
publish_packs   (id uuid PK, project_id FK, title text, title_alts jsonb, thumbnail_text text, thumbnail_alts jsonb,
                 ctr_note text, description text, hashtags jsonb, thumbnail_prompt text)
uploads         (id uuid PK, project_id FK, method text, -- manual | api
                 youtube_url text, scheduled_at timestamptz, uploaded_at timestamptz, ai_disclosed bool)
credits         (id uuid PK, owner_id FK, balance int, used int, plan text)
subscriptions   (id uuid PK, owner_id FK, plan text, status text, provider text, -- stripe | bkash
                 renews_at timestamptz)
```

**Rules:** RLS on — a user can only see their own channels/projects. Service-role key is server-side only, never in the browser. API keys (ElevenLabs, YouTube client secret) live in Vercel env vars / Supabase Vault, never in frontend code, never logged.

## 5. Integrations (and their honest limits)

| Integration | What it does | Limit — must be shown in the UI |
|---|---|---|
| YouTube Data API v3 | Search, channel info, upload (behind Approve), thumbnails | Free, but quota 10,000 units/day per Google Cloud project; one upload = 1,600 units (~6 uploads/day max). Needs Google OAuth verification for public users. Show quota used today on the dashboard. |
| YouTube Analytics API | Views / CTR / retention (V2) | Read-only. Private data only after the user links their channel in YouTube Studio. No fake numbers if not linked. |
| vidIQ (optional) | Outlier score, keyword ideas | vidIQ is a separate account the user connects; the site must not pretend vidIQ data is its own, and must work without it. |
| LLM (Claude / OpenAI API) | Script drafts, title alternatives, description | Server-side only. Cost per video is shown before generating (estimate in credits). Drafts are never published without human edit. |
| ElevenLabs | TTS fallback voice | Server-side proxy only, key in env var. Trial credits are global server memory in demo — NOT abuse-proof. Real selling needs per-user credits in Supabase. Cloning = paid + written consent only. |
| Supabase Storage | VO, photos, rendered MP4, thumbnails | Private bucket for evidence/VO; public bucket only for final thumbnails the user chooses to share. Every download link states its expiry. |
| Stripe / bKash | Subscriptions (V2) | No checkout in MVP. Pricing page is DRAFT. Do not take payments until the checkout flow is built and tested. |

**What the product must NEVER do:** scrape YouTube, download other creators' videos, buy views/subs, auto-comment, auto-like, or upload without approval. If a user asks for any of these in the app, the UI must refuse with a short YouTube-policy note.

## 6. UI / design rules (Mazahar's standing rules — do not break them)

- **Bilingual BN + EN**, header toggle, default language Bengali for the landing, English for the studio terms where the user works in English (same as VoiceHub).
- **Light + dark, default DARK**, header toggle, choice in `localStorage`, pre-paint script so there is no white flash.
- **Section gaps exactly 50px** on the landing (same rule as VoiceHub home).
- **Popular plan card stays a dark gradient in both modes** (same rule as VoiceHub).
- **Subtle one-time motion only** — staggered entrance, hover lift. No continuous looping animation, no flashing glow, no busy background video on the dashboard.
- **Preview-first:** show a section-by-section preview (screenshots / staging link) before anything goes live. Never push a redesign live without approval.
- **No fake content, ever:** no fake videos, no fake view counts, no fake testimonials, no fake YouTube IDs, no stock photos presented as a real car. Empty states say EMPTY. Demo data is labelled DEMO.
- **Real photos are identity only:** a real car's photo is never AI-redrawn, never animated as if it were live video, text never sits on the grille/headlights.
- **Accessibility:** big legible text (the audience is 50–75 on the channel side, and the dashboard must be readable too), ≥44px tap targets, keyboard-navigable pipeline board.

**Design reference (style only, never copy branding/copy/images):** clean SaaS dashboards like Linear / Notion for the app; editorial landing like the Ollyo-inspired MentionHub home for the marketing page. No 10MS / Zilaseba branding, copy, or assets.

## 7. Pricing (DRAFT — not finalised, must be marked DRAFT in the UI)

Same shape as VoiceHub's draft, so Mazahar can compare them side by side:

| Plan | Monthly (৳ / $) | Yearly (pay 10, get 12) | What is included |
|---|---|---|---|
| Trial | Free | — | 1 project, 3 Shorts, script + publish-pack only, watermarked preview, no upload |
| Starter | ৳499 / $9 | ৳4,990 / $90 | 10 Shorts/month, 1 channel, TTS fallback, render + QA, manual upload |
| Creator | ৳1,499 / $29 | ৳14,990 / $290 | 30 Shorts/month, 2 channels, API upload (behind Approve), analytics (V2) |
| Pro | ৳4,999 / $99 | ৳49,990 / $990 | 100 Shorts/month, 5 channels, priority render, team seat (V2) |

**Credit rule (same as MentionHub's free rule):** 1 credit = 1 finished Shorts render. A render that fails QA does not consume a credit. Show credits left on every screen where a render can start.

## 8. MVP scope — what MUST be in V1, and what must NOT be

**V1 MUST have:** landing + pricing (DRAFT) + auth + dashboard + 8-stage pipeline board + research + script + fact-check (with block on unverified prices) + VO upload + FFmpeg render + QA + publish-pack + manual-upload checklist + settings (YouTube connect, ElevenLabs key) + `/api/health` + README-SETUP-BN.md (how to create the Supabase project, run the schema, set the 4+ env vars, import to Vercel).

**V1 must NOT have:** auto-publish without Approve, API upload as default, view/engagement bots, scraping, payments/checkout, team seats, analytics (V2), long-form (16:9) render (V2 — Shorts 9:16 only in V1), voice cloning without consent flow.

**V2 (after V1 is proven on American Garage Gold for 30 days):** API upload, analytics, long-form, team seats, Stripe/bKash checkout, bulk queue (still max 2/day/channel).

## 9. Seed data — the ONLY demo project

**#95 — 1970 Dodge Challenger T/A (BEATEN BY series).** Use exactly these corrected facts — do not re-invent them:

- Title: `Dodge Killed It After One Year — Its Price Kept Climbing`
- Frame one: `NEVER WON A RACE / STILL CLIMBING`
- Thumbnail: top-left small `BEATEN BY` · main gold `$62K → $143K` · second line `ONE YEAR ONLY` — the $143K arrow is used ONLY if Mazahar taps keep on the single-source $143,000 figure; otherwise use the $140K–$165K estimate range or drop the arrow. The seed must carry the single-source status, never hard-code $143K as confirmed.
- Price ladder: $62,000 Mecum Monterey 2014 (verified) → $93,500 Barrett-Jackson Scottsdale 2016 (SINGLE-SOURCE) → $143,000 Mecum Kissimmee Jan 2026 (VIN JH23J0B296662, Lot F177, reported SOLD — SINGLE-SOURCE, forum report only, pending Mazahar's keep/soften/drop decision; do NOT present it as a confirmed sale)
- 2,399 built (989 four-speed, 1,410 automatic), 340 Six-Pack, side exhaust, ducktail, one season only, never won a race
- Posey #76: `Sam Posey's backup race car, number seventy-six, went to auction in 2015.` — NO price. $170,500 is unverified and must appear nowhere.
- Sources: AutoEvolution, Supercars.net, MoparInsiders, For E Bodies Only forum ($143k), Sports Car Market, Hemmings
- Photos: folder is EMPTY by design — the user supplies 5–6 real Mecum Lot F177 gallery photos. Do not download them, do not generate a fake car photo.
- VO: folder is EMPTY by design — the user supplies `vo16k.wav`. Do not generate a fake VO.

**Empty slots #96 and #97** exist in the queue as "TBD — pick from research". They are empty, not pre-filled with invented cars.

## 10. File structure Claude / ChatGPT must produce

```
autoflowai/
  README-SETUP-BN.md        # Supabase + Vercel + env vars, in Bengali
  supabase/schema.sql       # tables in §4 + RLS + storage buckets
  supabase/seed.sql         # ONLY the #95 project above, nothing fake
  src/app/                  # (routes in §2)
  src/app/api/health/route.ts
  src/app/api/research/route.ts
  src/app/api/script/route.ts
  src/app/api/render/route.ts      # queues an FFmpeg job, never renders in the request
  src/app/api/qa/route.ts
  src/app/api/publish-pack/route.ts
  src/app/api/upload-prep/route.ts
  src/components/           # PipelineBoard, StageCard, FactCheckTable, PublishPackCard
  src/lib/youtube.ts        # Data API client, quota counter
  src/lib/credits.ts        # credit check + deduct-on-success only
  src/lib/prompts.ts        # script / title / description prompts (Auction Breakdown template)
  worker/render-worker/     # FFmpeg job runner (separate from the web server)
  .env.example              # every env var listed, values EMPTY
```

**Env vars (names exactly like this):** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `YOUTUBE_CLIENT_ID`, `YOUTUBE_CLIENT_SECRET`, `OPENAI_API_KEY` (or `ANTHROPIC_API_KEY`), `ELEVENLABS_API_KEY`, `RENDER_WORKER_URL`, `NEXT_PUBLIC_SITE_URL`.

## 11. Definition of Done — Claude / ChatGPT must check all of these before saying "done"

- [ ] `npm run build` passes with no TypeScript errors.
- [ ] Landing loads in both BN and EN, both dark and light, with no console errors.
- [ ] A new user can register, create a project, move it through all 8 stages with the gates in §3 enforced (unverified price blocks render; QA fail blocks publish).
- [ ] The #95 demo project shows $143,000 labelled SINGLE-SOURCE (pending Mazahar's keep/soften/drop decision) everywhere it appears — nowhere presents it as a confirmed sale, nowhere shows $165K EST as a sale, and nowhere shows $170,500.
- [ ] No page shows fake videos, fake views, fake testimonials, or fake YouTube IDs.
- [ ] `/api/health` returns ok + which services are configured (true/false only — never a key value).
- [ ] The deployed staging URL has been opened and checked by the builder (not just "build passed").
- [ ] README-SETUP-BN.md lists every manual step Mazahar must still do (Supabase project, schema, GitHub repo creation — the builder cannot create a repo for him — Vercel import, env vars, YouTube OAuth app).

## 12. What Mazahar must do himself (the builder cannot do these)

1. Create the GitHub repo `mazahar007/autoflowai` himself (the Muse GitHub App cannot create repos — 403).
2. Create the Supabase project + run `supabase/schema.sql` + create the storage buckets.
3. Create the Google Cloud project + YouTube Data API OAuth app, and set the Vercel env vars.
4. Create the ElevenLabs account + API key (only if he wants the TTS fallback live).
5. Import the repo to Vercel (own project, NOT the aikitfinder project) + set env vars + redeploy.
6. Add the aikitfinder listing card + menu link AFTER the standalone site is verified live.

---

## Appendix — where this design came from (so Claude / ChatGPT does not re-invent it)

- Personal pipeline already built: `~/workspace/garage-gold-pipeline/` — `README-BN.md`, `dashboard.html`, `pipeline.json`, `scripts/01–05`, `templates/`, `items/095-challenger-ta/` (corrected script + publish pack). The site must match this pipeline stage-for-stage.
- Proven render method: ffmpeg + Python in `~/workspace/zl1_shorts/`, `camaro_shorts/`, `roadrunner_shorts/` (eased Ken Burns, warm grade, key-text captions, loudnorm ~-16 LUFS, faststart). Chunk renders at ~frame 275 if a single pass crashes.
- VoiceHub precedent: standalone `voicehubo.vercel.app` + aikitfinder `/voicehub` listing; demo mode until `ELEVENLABS_API_KEY` is set in the right Vercel project (a key in one project does not carry to another).
- MentionHub precedent: opt-in only, no bulk-tagging strangers, public data only with consent, no fake data, free rule counted only when data returns.
- Channel truth: American Garage Gold, 26,900 subs, 169 videos, ~374k views; Shorts are the engine, long-form is weak; winners had a famous anchor + rarity number + discovery emotion in the first seconds.
