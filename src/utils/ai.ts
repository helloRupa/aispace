import { GoogleGenAI } from "@google/genai";
import * as AI_DATA from "../constants/ai.js";

const AI = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_KEY });

export default async function generateResponse({ prompt, instruction }: { prompt: string, instruction: string }): Promise<string> {
  const response = await AI.models.generateContent({
    model: AI_DATA.MODEL,
    contents: prompt,
    config: {
      systemInstruction: instruction,
      temperature: AI_DATA.TEMPERATURE,
    }
  });

  return response.text!;
}