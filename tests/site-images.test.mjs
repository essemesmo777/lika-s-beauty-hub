import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function readJpegDimensions(buffer) {
  assert.equal(buffer.readUInt16BE(0), 0xffd8, "expected a JPEG image");

  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const isStartOfFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    const segmentLength = buffer.readUInt16BE(offset + 2);
    offset += segmentLength + 2;
  }

  throw new Error("JPEG dimensions not found");
}

test("uses the submitted professional photo in the shared About and backstage asset", async () => {
  const photo = await readFile(new URL("../src/assets/sobre.jpg", import.meta.url));

  assert.deepEqual(readJpegDimensions(photo), { width: 1448, height: 1086 });
});
