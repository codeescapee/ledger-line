import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Check for required environment variable
  const webhookUrl = process.env.BUBBLE_LEAD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("Missing BUBBLE_LEAD_WEBHOOK_URL environment variable");
    return NextResponse.json(
      { ok: false, error: "Missing BUBBLE_LEAD_WEBHOOK_URL" },
      { status: 500 }
    );
  }

  try {
    // Parse the request body
    const data = await request.json();
    
    console.log("Contact form submission received:", { 
      name: data.name, 
      email: data.email 
    });

    // Forward to Bubble webhook
    const bubbleResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Check if Bubble request was successful
    if (!bubbleResponse.ok) {
      console.error("Bubble webhook failed:", {
        status: bubbleResponse.status,
        statusText: bubbleResponse.statusText,
      });
      
      return NextResponse.json(
        { 
          ok: false, 
          error: "Failed to forward submission",
          bubbleStatus: bubbleResponse.status 
        },
        { status: 502 }
      );
    }

    console.log("Successfully forwarded to Bubble");

    return NextResponse.json(
      { ok: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
