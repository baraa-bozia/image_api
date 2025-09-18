import express from "express";
import { getImage, uploadImage } from "../controllers/imageController.js";

const router = express.Router();

router.get("/", getImage);       
router.post("/upload", uploadImage); 

export default router;



