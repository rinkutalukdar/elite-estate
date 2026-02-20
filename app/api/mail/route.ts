import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, config, budget, buyingFor, timeline } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // Configure transporter — uses env vars (see .env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const configLabels: Record<string, string> = {
      "3bhk": "3 BHK (1950-2010 Sqft)",
      "3bhk-maid": "3 BHK + Maid (2400 Sqft)",
      "4bhk-maid": "4 BHK + Maid (2790 Sqft)",
    };

    const budgetLabels: Record<string, string> = {
      "3-3.5": "₹3 - 3.5 Crores",
      "3.5-4": "₹3.5 - 4 Crores",
      "4+": "₹4 Crores+",
    };

    const timelineLabels: Record<string, string> = {
      immediate: "Immediate",
      "3-6months": "3 - 6 Months",
      "6+months": "6+ Months",
    };

    // HTML email to the sales team
    const teamHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #111827; color: #ffffff; padding: 40px; border: 1px solid #C8A14A;">
        <div style="border-bottom: 2px solid #C8A14A; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="color: #C8A14A; font-size: 24px; margin: 0;">New Lead — Purva Hennur</h1>
          <p style="color: #999; font-size: 12px; margin: 6px 0 0;">Submitted via eliteestateexpert.com</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          ${[
            ["Full Name", name],
            ["Phone", phone],
            ["Email", email || "—"],
            ["Configuration", configLabels[config] || config || "—"],
            ["Budget", budgetLabels[budget] || budget || "—"],
            ["Buying For", buyingFor || "—"],
            ["Timeline", timelineLabels[timeline] || timeline || "—"],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 10px 0; color: #C8A14A; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; width: 140px; vertical-align: top;">${label}</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 14px; border-bottom: 1px solid #222;">${value}</td>
            </tr>`
            )
            .join("")}
        </table>

        <div style="margin-top: 30px; padding: 16px; background: #1C1C1C; border-left: 3px solid #C8A14A;">
          <p style="margin: 0; color: #999; font-size: 12px;">Please contact this lead within 2 hours for best conversion.</p>
        </div>
      </div>
    `;

    // Auto-reply HTML to the lead
    const leadHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #111827; color: #ffffff; padding: 40px; border: 1px solid #C8A14A;">
        <div style="text-align: center; border-bottom: 1px solid #333; padding-bottom: 24px; margin-bottom: 30px;">
          <h1 style="color: #C8A14A; font-size: 28px; font-weight: 300; letter-spacing: 4px; margin: 0;">PURVA HENNUR</h1>
          <p style="color: #999; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 8px 0 0;">North Bangalore</p>
        </div>

        <p style="color: #ffffff; font-size: 18px; font-weight: 300;">Dear ${name},</p>
        <p style="color: #cccccc; line-height: 1.8; font-size: 14px;">
          Thank you for your interest in <strong style="color: #C8A14A;">Purva Hennur</strong>. We have received your enquiry and our dedicated sales advisor will contact you within <strong style="color: #ffffff;">2 hours</strong>.
        </p>
        <p style="color: #cccccc; line-height: 1.8; font-size: 14px;">
          Your private viewing will be arranged by confirmed appointment only, ensuring an exclusive and personalised experience.
        </p>

        <div style="margin: 30px 0; padding: 20px; background: #1C1C1C; border: 1px solid #333;">
          <p style="margin: 0 0 6px; color: #C8A14A; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Your Enquiry Summary</p>
          <p style="margin: 4px 0; color: #ccc; font-size: 13px;">Configuration: <span style="color: #fff;">${configLabels[config] || "—"}</span></p>
          <p style="margin: 4px 0; color: #ccc; font-size: 13px;">Budget: <span style="color: #fff;">${budgetLabels[budget] || "—"}</span></p>
          <p style="margin: 4px 0; color: #ccc; font-size: 13px;">Timeline: <span style="color: #fff;">${timelineLabels[timeline] || "—"}</span></p>
        </div>

        <p style="color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #222;">
          For immediate assistance, call us at <a href="tel:+919999999999" style="color: #C8A14A;">+91 99999 99999</a><br/>
          © 2025 EliteEstateExpert · Premium Realty
        </p>
      </div>
    `;

    // Send email to sales team
    await transporter.sendMail({
      from: `"Purva Hennur Leads" <${process.env.SMTP_USER}>`,
      to: process.env.SALES_EMAIL,
      subject: `🏠 New Lead: ${name} — ${configLabels[config] || "Purva Hennur"}`,
      html: teamHtml,
    });

    // Send auto-reply to lead (only if they provided email)
    if (email) {
      await transporter.sendMail({
        from: `"Purva Hennur by EliteEstateExpert" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank You - Your Purva Hennur Enquiry",
        html: leadHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail API error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}