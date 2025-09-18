import express from "express";
import imageRoutes from "./routes/imageRoutes.js"; 
const app = express();
const PORT = 3000;

app.use("/images", imageRoutes); 

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
export default app;


