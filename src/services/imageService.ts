import sharp from "sharp";
import path from "path";

export const processImage = async (
  filePath: string,
  width: number,
  height: number,
): Promise<string> => {
  const filename = path.basename(filePath);
  const outputPath = path.join("uploads", `resized-${filename}`);

  await sharp(filePath).resize(width, height).toFile(outputPath);

  return `resized-${filename}`;
};

