# AutoFlow AI — YouTube Automation Studio

Research, script, voice, video, thumbnail, and upload for YouTube — in one pipeline, with a human approve step before anything goes public.

**Tagline:** Research to upload — with a human in the loop.

**First proof channel:** American Garage Gold — @AmericanGarageGold

## The rule

80% automation + 20% human approval. Never auto-publish without the user pressing Approve. Never more than 2 uploads per day per channel by default.

## Status

Design phase — see [Full-Automation-Site-Design-Prompt.md](Full-Automation-Site-Design-Prompt.md). That file is the copy-paste build prompt for Claude / ChatGPT, plus the full spec (pages, 8-stage pipeline, data model, integrations, pricing DRAFT, Definition of Done).

Planned stack: Next.js 15 + TypeScript + Tailwind v4, Supabase (Auth + Postgres + Storage + RLS), Vercel. Video rendering: FFmpeg worker pattern.

## Pipeline (8 stages)

research → script → fact-check → voice → render → QA → publish-pack → upload-ready

Uploads stay manual by default. YouTube Data API upload is behind an explicit Approve + OAuth only.
