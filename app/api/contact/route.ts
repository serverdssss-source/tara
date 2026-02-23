import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the Resend client with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

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

        const { data, error } = await resend.emails.send({
            from: 'care@taradentalwellness.com', // Must be verified in Resend
            to: ['care@taradentalwellness.com'], // Address receiving notifications
            replyTo: email, // If the clinic replies, it goes to the patient
            subject: `New Appointment Request from ${name}`,
            html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Preferred Date:</strong> ${date || 'Not specified'}</p>
        <p><strong>Message/Concerns:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        });

        if (error) {
            console.error('Error sending email via Resend:', error);
            return NextResponse.json(
                { error: 'Failed to send appointment request.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Appointment request sent successfully.', data },
            { status: 200 }
        );
    } catch (err) {
        console.error('Internal server error in contact API:', err);
        return NextResponse.json(
            { error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}
