"use client";
import { useState } from "react";

export default function Home() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function handleAsk() {
        const res = await fetch("/api/query", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question }),
        });
        const data = await res.json();
        setAnswer(data.answer);
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>🔎 Local AI Search Engine</h1>
            <textarea
                rows={4}
                placeholder="Ask something about your documents..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <br />
            <button onClick={handleAsk}>Ask</button>
            <h2>Answer:</h2>
            <p>{answer}</p>
        </main>
    );
}
