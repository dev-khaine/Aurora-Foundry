import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCreativeConcept = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "API Key not configured. Simulating response: A futuristic fusion of organic geometry and industrial raw materials, featuring glowing accents in teal and magenta.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are the creative AI assistant for 'Aurora Foundry', a futuristic design studio. Generate a short, evocative concept description (max 50 words) based on this input: ${prompt}`,
    });
    return response.text || "No concept generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to the Foundry core. Please try again.";
  }
};