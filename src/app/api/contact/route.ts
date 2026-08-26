import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, msg } = await request.json();

    if (!name || !email || !company || !msg) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email delivery logic:
    // This logs the email being sent to tanya@crimsai.com
    console.log(`[EMAIL SENDING]
To: tanya@crimsai.com
From: "${name}" <${email}>
Subject: Nouveau contact client - ${company}
Body:
Nom complet: ${name}
E-mail: ${email}
Entreprise: ${company}

Message:
${msg}
`);

    // In production, you would connect to Nodemailer, Resend, SendGrid, or another mail provider:
    //
    // import nodemailer from "nodemailer";
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({
    //   from: `"${name}" <${email}>`,
    //   to: "tanya@crimsai.com",
    //   replyTo: email,
    //   subject: `Nouveau contact client - ${company}`,
    //   text: `Nom: ${name}\nE-mail: ${email}\nEntreprise: ${company}\n\nMessage:\n${msg}`
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
