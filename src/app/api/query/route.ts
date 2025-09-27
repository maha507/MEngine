import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/chroma";
import { askOllama } from "@/lib/ollama";

export async function POST(req: NextRequest) {
    const { question } = await req.json();
    const collection = await getCollection("docs");

    const results = await collection.query({
        queryTexts: [question],
        nResults: 1,
    });

    const context = results.documents[0]?.[0] || "No context found.";
    const answer = await askOllama(context, question);

    return NextResponse.json({ answer });
}
