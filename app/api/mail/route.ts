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
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #C8A14A; margin: 0 0 16px;">🏠 New Lead: Purva Hennur</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || '—'}</p>
        <p><strong>Config:</strong> ${configLabels[config] || config || '—'}</p>
        <p><strong>Budget:</strong> ${budgetLabels[budget] || budget || '—'}</p>
        <p><strong>Timeline:</strong> ${timelineLabels[timeline] || timeline || '—'}</p>
        
        <div style="margin-top: 24px; padding: 12px; background: #f5f5f5; border-left: 3px solid #C8A14A;">
          <p style="margin: 0; font-size: 13px; color: #555;">
            ⏰ Please contact within 2 hours for best conversion.
          </p>
        </div>
        
        <p style="margin-top: 20px; font-size: 12px; color: #888;">
          Source: eliteestateexpert.com
        </p>
      </div>
    `;

    // Auto-reply HTML to the lead
    const leadHtml = `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #C8A14A; margin: 0 0 16px;">PURVA HENNUR</h2>
        
        <p>Dear ${name},</p>
        
        <p>Thank you for your interest in <strong>Purva Hennur</strong>. Our sales advisor will contact you within <strong>2 hours</strong>.</p>
        
        <div style="margin: 20px 0; padding: 12px; background: #f9f9f9; border: 1px solid #eee;">
          <p style="margin: 4px 0;"><strong>Your Enquiry:</strong></p>
          <p style="margin: 4px 0; font-size: 14px;">• ${configLabels[config] || config}</p>
          <p style="margin: 4px 0; font-size: 14px;">• Budget: ${budgetLabels[budget] || budget}</p>
          <p style="margin: 4px 0; font-size: 14px;">• Timeline: ${timelineLabels[timeline] || timeline}</p>
        </div>
        
        <p style="margin-top: 24px; font-size: 14px;">
          For immediate help: <a href="tel:+919999999999" style="color: #C8A14A;">+91 99999 99999</a>
        </p>
        
        <p style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 16px;">
          © 2025 EliteEstateExpert
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