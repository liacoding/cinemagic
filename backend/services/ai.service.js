import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchMoviesfromAI = async (prompt) => {

    const url = "https://api.x.ai/v1/chat/completions";

    const body = {
        "model": "grok-beta",  
        "messages": [
            {
                "role": "system",
                "content": "Always respond with exactly 5 movie titles separated by commas, without any description or extra text."
            },
          {
            "role": "user",
            "content": prompt,
          }
        ],
        "max_tokens": 150,
        "temperature": 0.7,
        "n": 1
      };

    const options = {
        headers: {
          "Authorization": 'Bearer ' + ENV_VARS.CHAT_API_KEY,
          "Content-Type": 'application/json',
        },
      };

      const response = await axios.post(url, body, options);

      if(response.status !== 200){
          throw new Error('Failed to fetch data from XAI' + response.statusText);
      }

     const moviesListGeneratedByChat = response.data.choices[0].message.content;

     const moviesTitles = moviesListGeneratedByChat.split(',').map(title => title.replace(/^\d+\.\s*/, '').trim());

     return moviesTitles;

};