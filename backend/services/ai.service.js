import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchMoviesfromAI = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${ENV_VARS.CHAT_API_KEY}`;

  const body = {
    contents: [
      {
        parts: [
          {
            text: `Always respond with exactly 5 movie titles separated by commas, without any description or extra text.\n\n${prompt}`,
          },
        ],
      },
    ],
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(url, body, options);

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from Gemini: " + response.statusText);
  }

  const geminiText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

  const moviesTitles = geminiText
    ?.split(",")
    .map((title) => title.replace(/^\d+\.\s*/, "").trim());

  return moviesTitles;
};
