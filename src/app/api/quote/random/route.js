import quotes from "../../quotes.json" with { type: "json" };
import { NextResponse } from "next/server";

export async function GET(request) {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomQuoteIndex];

  return NextResponse.json({ randomQuote }, { status: 200 });
}
