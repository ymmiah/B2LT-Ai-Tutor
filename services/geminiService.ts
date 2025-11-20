import { GoogleGenAI, Type, GenerateContentResponse, Chat } from "@google/genai";
import { lifeInUKMockExams, b1MockExams } from '../data/mockExams';
import { MockQuestion } from "../types";

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateMockTest = async (topic: 'B1' | 'Life in the UK', examNumber: number): Promise<GenerateContentResponse> => {
    // Use the central question management system for Life in the UK
    if (topic === 'Life in the UK') {
        // The proxy in data/mockExams.ts handles the slicing logic for any exam number
        const prebakedExam = (lifeInUKMockExams as any)[`exam${examNumber}`];
        if (prebakedExam) {
            console.log(`Loading Central Pool Life in the UK Mock Exam #${examNumber}`);
            return {
                text: JSON.stringify(prebakedExam)
            } as GenerateContentResponse;
        }
    }
    
    // For B1, try to use a pre-baked exam first.
    if (topic === 'B1') {
        const prebakedExam = b1MockExams[`exam${examNumber}`];
        if (prebakedExam) {
            console.log(`Loading pre-baked B1 Mock Exam #${examNumber}`);
            return {
                text: JSON.stringify(prebakedExam)
            } as GenerateContentResponse;
        }
    }

    // Fallback to AI generation if absolutely necessary (shouldn't happen for Life in UK 1-20)
    console.log(`Generating AI Mock Exam for ${topic}, #${examNumber}`);
    const questionCount = 24;
    let prompt = `Generate a ${questionCount}-question multiple choice mock test for the ${topic} exam, specifically for Mock Exam #${examNumber}. Ensure the questions are relevant and cover different aspects of the exam. Provide one correct answer and three incorrect options for each question, along with a brief explanation for the correct answer.`;

    if (topic === 'Life in the UK') {
        prompt = `Generate a full ${questionCount}-question multiple choice mock test for the 'Life in the UK' exam, specifically for Mock Exam #${examNumber}. The questions, options, and correct answers MUST be sourced from the content available at https://lifeintheuktestweb.co.uk/exams/. Ensure this exam is unique from other exam numbers. Provide one correct answer and three plausible but incorrect options for each question, along with a brief explanation for the correct answer.`;
    }

    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    questions: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                question: { type: Type.STRING },
                                options: {
                                    type: Type.ARRAY,
                                    items: { type: Type.STRING }
                                },
                                correct_answer: { type: Type.STRING },
                                explanation: { type: Type.STRING }
                            },
                             required: ["question", "options", "correct_answer", "explanation"]
                        }
                    }
                },
                 required: ["questions"]
            },
        },
    });
};

interface IncorrectAnswer {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    explanation: string;
}

export const generateDetailedFeedback = async (incorrectAnswers: IncorrectAnswer[]): Promise<GenerateContentResponse> => {
    const feedbackPrompt = `You are an expert tutor for UK exams. A student has answered the following questions incorrectly in a mock test. For each question, provide detailed, constructive feedback.

For each incorrect answer, please provide:
1.  **The Question:** Restate the question.
2.  **Your Answer:** State the user's incorrect answer.
3.  **Correct Answer:** State the correct answer.
4.  **Detailed Explanation:**
    *   Explain in detail why the user's answer is incorrect, addressing potential misunderstandings.
    *   Elaborate on why the correct answer is right, providing more context than the original brief explanation.
5.  **Study Focus:** Suggest a specific topic, concept, or chapter from the official handbook that the user should study to improve their understanding of this area.

Keep the tone encouraging and helpful. Format the entire response as a single block of text using Markdown for clarity (e.g., use headings, bold text, and lists).

Here are the incorrect questions:
${incorrectAnswers.map(item => `
---
Question: ${item.question}
Your Answer: ${item.userAnswer}
Correct Answer: ${item.correctAnswer}
Original Explanation: ${item.explanation}
`).join('\n')}
`;

    return ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: feedbackPrompt,
        config: {
            thinkingConfig: {
                thinkingBudget: 32768
            }
        }
    });
};

export const translateQuestion = async (question: MockQuestion, targetLanguage: string): Promise<GenerateContentResponse> => {
    const prompt = `Translate the 'question' and each string in the 'options' array of the following JSON object into ${targetLanguage}. Return the response in the exact same JSON format, with the translated text.
    
    {
        "question": "${question.question}",
        "options": ${JSON.stringify(question.options)}
    }`;

    return ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    question: { type: Type.STRING },
                    options: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING }
                    },
                },
                required: ["question", "options"]
            },
        },
    });
};


export const createChat = (systemInstruction: string): Chat => {
    return ai.chats.create({
        model: 'gemini-2.5-flash-lite',
        config: {
            systemInstruction,
        },
    });
};

export const generateImage = async (prompt: string, aspectRatio: string): Promise<GenerateContentResponse> => {
     return await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: aspectRatio as "1:1" | "3:4" | "4:3" | "9:16" | "16:9",
        },
    });
};

export const generateSpeech = async (text: string): Promise<GenerateContentResponse> => {
    return ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: { voiceName: 'Kore' },
                },
            },
        },
    });
};

export const generateHint = async (question: string, correctAnswer: string): Promise<string> => {
    const prompt = `The student is stuck on this question: "${question}". The correct answer is "${correctAnswer}". Give a cryptic, mysterious, but helpful hint that points them in the right direction without revealing the answer directly. The hint should be short (one sentence) and clever.`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
    });
    
    return response.text || "Think carefully about the history...";
};
