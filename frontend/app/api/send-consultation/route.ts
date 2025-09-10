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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // your SMTP server
      port: Number(process.env.SMTP_PORT), // usually 465 (SSL) or 587 (TLS)
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // your email/login
        pass: process.env.SMTP_PASS, // your password/app password
      },
    });

    const formattedDate = appointmentDateTime
      ? new Date(appointmentDateTime).toLocaleString("en-NG", {
          timeZone: "Africa/Lagos",
          weekday: "long", // Monday, Tuesday...
          year: "numeric",
          month: "long", // January, February...
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true, // 12-hour clock (e.g. 3:45 PM)
        })
      : "Not provided";

    await transporter.sendMail({
      from: `"Haven Clinic" <wayne@benjys.me>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `🩺 New Appointment for ${specialist}`,
      text: `
    New Consultation Appointment
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
    Specialist: ${specialist}
    Complaint: ${complaint}
    Appointment Date & Time: ${formattedDate}
      `,
      html: `
      <div style="font-family: Arial, sans-serif; background: #f4f7fa; padding: 30px; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); overflow: hidden;">
          
          <!-- Header -->
          <div style="background: #2c3e50; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">🩺 New Appointment Request</h2>
            <p style="margin: 5px 0 0; font-size: 14px;">Specialist: <strong>${specialist}</strong></p>
          </div>
    
          <!-- Body -->
          <div style="padding: 20px;">
            <p style="font-size: 16px; margin-bottom: 15px;">Hello,</p>
            <p style="margin-bottom: 20px;">
              A new consultation appointment has been scheduled. Below are the details:
            </p>
    
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Address</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Specialist</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${specialist}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Complaint</strong></td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${complaint}</td>
              </tr>
              <tr>
                <td style="padding: 8px;"><strong>Appointment Date & Time</strong></td>
                <td style="padding: 8px;">${formattedDate}</td>
              </tr>
            </table>
    
            <p style="margin: 0; font-size: 14px; color: #555;">
              Please continue communication with the Client with the email provided above
            </p>
          </div>
    
          <!-- Footer -->
          <div style="background: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            Haven Clinic © ${new Date().getFullYear()} | Confidential
          </div>
        </div>
      </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email not sent" }, { status: 500 });
  }
}
