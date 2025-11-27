import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const sendPilatesQuery = async (question: string): Promise<string> => {
  if (!apiKey) {
    return "Desculpe, o assistente virtual está temporariamente indisponível.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: "Você é um assistente virtual especializado da 'Priscila Valongo - Pilates e Fisioterapia'. Seu papel é tirar dúvidas sobre tratamentos fisioterapêuticos (dor nas costas, reabilitação, postura) e aulas de Pilates (Clássico e Clínico). Enfatize que o estúdio é liderado pela Dra. Priscila Valongo, fisioterapeuta, o que garante segurança clínica. Seja empático, profissional e use uma linguagem acolhedora, mas baseada em saúde. Sempre sugira agendar uma avaliação para casos de dor.",
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    return response.text || "Não consegui gerar uma resposta no momento.";
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Desculpe, tive um problema ao processar sua pergunta. Tente novamente mais tarde.";
  }
};
