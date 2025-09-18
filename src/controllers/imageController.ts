

import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import sharp from "sharp";

const __dirname = path.resolve(); 

const UPLOADS_DIR = path.join(__dirname, "uploads");

export const getImage = async (req: Request, res: Response) => {
  const { filename, width, height } = req.query;
  // if (!filename) return res.status(400).send("Filename is required");

  const filePath = path.join(UPLOADS_DIR, String(filename));

  if (!fs.existsSync(filePath)) return res.status(404).send("File not found");

  if (width || height) {
    const w = width ? parseInt(width as string) : undefined;
    const h = height ? parseInt(height as string) : undefined;

    const data = await sharp(filePath).resize(w, h).toBuffer();
    res.type(path.extname(String(filename)) === ".png" ? "image/png" : "image/webp");
    return res.send(data);
  }
if (!filename || !width || !height) {
    return res.status(400).send("Missing one ore more of required parameters. Filename, width, and height are required.");
  }
// if ( parseInt(width) <= 0 ||parseInt(height) <= 0) {
//     return res.status(400).send("Invalid dimensions. Width and height must be positive integers.");
//   }
// const w = parseInt(width, 10);
  // const h = parseInt(height, 10);

  // if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
  //   return res.status(400).send("Invalid dimensions. Width and height must be positive integers.");
  // }

  res.sendFile(filePath);
};

export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  res.json({
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
};

  

  // Check params
  

  

  
  // Process image here ...

