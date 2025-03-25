import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});

export interface ChatCompletionChoice {
    message: {
        content: string | null;
    };
}

export interface ChatCompletion {
    choices: ChatCompletionChoice[];
}

/**
 * Mengirim pertanyaan ke Groq AI dan mendapatkan respons.
 * @param userInput - Pertanyaan yang diajukan pengguna.
 * @returns Jawaban dari AI sebagai string.
 */
export async function getGroqChatCompletion(userInput: string): Promise<string> {
    try {
        const response: ChatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: userInput,
                },
            ],
            model: "llama3-70b-8192",
        });

        return response.choices[0]?.message?.content ?? "No response received.";
    } catch (error) {
        console.error("Error fetching chat completion:", error);
        return "Maaf, terjadi kesalahan. Silakan coba lagi.";
    }
}
