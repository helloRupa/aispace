import { GoogleGenAI } from "@google/genai";
import * as AI_DATA from "../constants/ai.js";

const AI = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_KEY });

export default async function generateResponse({ prompt }: { prompt: string }): Promise<string> {
  const response = await AI.models.generateContent({
    model: AI_DATA.MODEL,
    contents: prompt,
    config: {
      systemInstruction: AI_DATA.SYSTEM_INSTRUCTION,
      temperature: AI_DATA.TEMPERATURE,
    }
  });

  return response.text!;
}