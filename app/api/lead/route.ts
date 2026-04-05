import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation/leadSchema";
import { sendLeadNotification } from "@/lib/email/sendLeadNotification";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    // Forward to external webhook if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...data,
            submittedAt: new Date().toISOString(),
            source: "landing-page",
          }),
        });
      } catch (webhookError) {
        console.error("Webhook forwarding failed:", webhookError);
      }
    }

    // Send email notification
    try {
      await sendLeadNotification(data);
    } catch (emailError) {
      console.error("Email notification failed:", emailError);
    }

    console.log("New lead received:", {
      city: data.city,
      school: data.school,
      classLabel: data.classLabel,
      name: data.name,
      phone: data.phone,
      role: data.role,
      interest: data.interest,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
