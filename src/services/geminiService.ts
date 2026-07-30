import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const generateChatResponse = async (
  userMessage: string,
  systemPrompt: string
): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: { systemInstruction: systemPrompt },
    });
    return response.text ?? null;
  } catch (error) {
    console.error("[Gemini] request failed:", error);
    return null;
  }
};
