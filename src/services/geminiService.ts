import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.VITE_API_KEY || ''; // Use VITE_ prefixo para variáveis de ambiente no frontend

// Initialize only if key exists to avoid crash
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export const sendPilatesQuery = async (question: string): Promise<string> => {
  if (!genAI) {
    console.warn("API Key not found. Check your .env file or Vercel Environment Variables.");
    return "Desculpe, o assistente virtual está temporariamente indisponível (Chave de API não configurada).";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = `Você é um assistente virtual especializado da 'Priscila Valongo - Pilates e Fisioterapia'. Seu papel é tirar dúvidas sobre tratamentos fisioterapêuticos (dor nas costas, reabilitação, postura) e aulas de Pilates (Clássico e Clínico). Enfatize que o estúdio é liderado pela Dra. Priscila Valongo, fisioterapeuta, o que garante segurança clínica. Seja empático, profissional e use uma linguagem acolhedora, mas baseada em saúde. Sempre sugira agendar uma avaliação para casos de dor. Pergunta do usuário: ${question}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Desculpe, tive um problema ao processar sua pergunta. Tente novamente mais tarde.";
  }
};
