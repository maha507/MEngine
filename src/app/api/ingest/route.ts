import { NextRequest, NextResponse } from "next/server";
import { getCollection } from "@/lib/chroma";

export async function POST(req: NextRequest) {
    const { id, text } = await req.json();
    const collection = await getCollection("docs");

    await collection.add({
        ids: [id],
        documents: [text],
    });

    return NextResponse.json({ message: "Document added ✅" });
}
