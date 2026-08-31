import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "public");
const files = [
  "index.html",
  "services.html",
  "works.html",
  "project.html",
  "styles.css",
  "script.js",
  "services.js",
  "works.js",
  "project.js",
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await writeFile(resolve(output, ".nojekyll"), "");

for (const file of files) {
  await cp(resolve(root, file), resolve(output, file));
}

await cp(resolve(root, "image"), resolve(output, "image"), {
  recursive: true,
});
