import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      specialist,
      complaint,
      appointmentDateTime,
    } = body;

    // Transporter setup (use environment variables!)
    // const transporter = nodemailer.createTransport({
    //   service: "gmail", // Or use SMTP
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // your SMTP server
      port: Number(process.env.SMTP_PORT), // usually 465 (SSL) or 587 (TLS)
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email/login
        pass: process.env.SMTP_PASS, // your password/app password
      },
    });

    // await transporter.sendMail({
    //   from: `"Haven Clinic" <${process.env.EMAIL_USER}>`,
    //   to: process.env.RECEIVER_EMAIL,
    //   subject: "New Consultation Appointment",
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Phone: ${phone}
    //     Address: ${address}
    //     Specialist: ${specialist}
    //     Complaint: ${complaint}
    //     Appointment Date & Time: ${appointmentDateTime}
    //   `,
    // });

    await transporter.sendMail({
      from: `"Haven Clinic" <wayne@benjys.me>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Consultation Appointment",
      text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Address: ${address}
          Specialist: ${specialist}
          Complaint: ${complaint}
          Appointment Date & Time: ${appointmentDateTime}
        `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email not sent" }, { status: 500 });
  }
}
