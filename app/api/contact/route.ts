import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer needs the Node.js runtime (not Edge)
export const runtime = 'nodejs';

// Escape user input before inserting it into the email HTML
const escapeHtml = (value: string) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

export async function POST(request: Request) {
    try {
        const { name, phone, email, date, message } = await request.json();

        // Basic validation
        if (!name || !phone || !email || !date || !message) {
            return NextResponse.json(
                { error: 'Name, phone, email, date, and message are required.' },
                { status: 400 }
            );
        }

        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('SMTP_USER or SMTP_PASSWORD environment variable is not set.');
            return NextResponse.json(
                { error: 'Email service is not configured. Please call us instead.' },
                { status: 500 }
            );
        }

        // Google Workspace SMTP (care@taradentalwellness.com + App Password)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"TARA Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO_EMAIL || 'care@taradentalwellness.com', // Address receiving notifications
            replyTo: email, // If the clinic replies, it goes to the patient
            subject: `New Appointment Request from ${name}`,
            html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Preferred Date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Message/Concerns:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `,
        });

        return NextResponse.json(
            { success: true, message: 'Appointment request sent successfully.' },
            { status: 200 }
        );
    } catch (err) {
        console.error('Error sending email via SMTP:', err);
        return NextResponse.json(
            { error: 'Failed to send appointment request. Please try again or call us.' },
            { status: 500 }
        );
    }
}
