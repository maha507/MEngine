import { ChromaClient } from "chromadb";

export const chroma = new ChromaClient({ path: "http://localhost:8000" });

export async function getCollection(name: string) {
    return await chroma.getOrCreateCollection({ name });
}
