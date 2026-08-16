import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { site } from "../src/config/site.ts";

const productionUrl = "https://lika-s-beauty-hub.vercel.app";

test("uses the Vercel production domain as the official site URL", () => {
  assert.equal(site.url, productionUrl);
});

test("publishes an absolute production URL in the sitemap", async () => {
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");

  assert.match(sitemap, new RegExp(`<loc>${productionUrl}/</loc>`));
});
