// @ts-ignore
import ollama from "ollama";

export async function askOllama(context: string, question: string) {
    const response = await ollama.chat({
        model: "llama3",
        messages: [
            { role: "system", content: "You are a helpful search engine." },
            { role: "user", content: `Context: ${context}\n\nQuestion: ${question}` }
        ]
    });
    return response.message.content;
}
