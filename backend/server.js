import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import aiRoutes from "./routes/ai.route.js";
import { ENV_VARS  } from "./config/envVars.js";
import { connectDB }  from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;
const __dirname = path.resolve(); // returns absolute path of the current directory

app.use(express.json()); // will allow us to parse req.body object
app.use(cookieParser()); // will allow to parse cookies

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);
app.use("/api/v1/chat", protectRoute, aiRoutes);

if(ENV_VARS.NODE_ENV === "production") {
  
}

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
    connectDB();
});