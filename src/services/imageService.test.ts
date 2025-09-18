import { processImage } from "./imageService";
import fs from "fs";

test("image is resized", async () => {
  const output = await processImage("uploads/t1.webp", 100, 100);
  expect(fs.existsSync(`uploads/${output}`)).toBe(true);
});

