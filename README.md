# Storyline

A Next.js digital book for Netlify, with Cloudinary-aware image delivery, optional Netlify DB progress sync, and OpenAI-generated narration with browser speech fallback.

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add only the services you want to enable. The reading experience works without credentials.

After connecting Netlify DB, run `npm run db:setup` once with `NETLIFY_DB_URL` available. Runtime routes do not receive schema-change permissions.

## Services

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: routes source illustrations through Cloudinary fetch delivery with automatic format and quality.
- `NETLIFY_DB_URL`: automatically provided by the current Netlify Database integration; stores anonymous reading position.
- `OPENAI_API_KEY`: enables server-side narration. `OPENAI_AUDIO_MODEL` defaults to the Speech API model `gpt-4o-mini-tts`.

The public Gemini source and original YouTube URL are preserved in `lib/stories.ts`.
