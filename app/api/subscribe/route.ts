import { NextRequest, NextResponse } from "next/server";

const MAILERLITE_API_URL = "https://connect.mailerlite.com/api/subscribers";
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || "";
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID || "";

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!MAILERLITE_API_KEY) {
      console.error("MAILERLITE_API_KEY is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch(MAILERLITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: { name },
        groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : [],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MailerLite error:", data);
      return NextResponse.json({ error: "Subscription failed" }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
