import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Check if RESEND_API_KEY is available
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      // Log the message for development/debugging
      console.log("[v0] Contact form submission (no email service configured):")
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Message: ${message}`)

      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 })
    }

    // Import Resend only when needed to avoid build-time errors
    const { Resend } = await import("resend")
    const resend = new Resend(resendApiKey)

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["roselynngito@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
            <p style="margin: 0; padding: 10px; background-color: #f9f9f9; border-radius: 5px;">
              <strong>${name}</strong><br>
              <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
            <div style="padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #0066cc;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    })

    if (emailResult.error) {
      console.error("[v0] Resend error:", emailResult.error)
      return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
