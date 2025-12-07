import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Check for API key at runtime
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Initialize Resend at runtime (not at build time)
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { firstName, email, subject, message } = body;

    // Validate required fields
    if (!firstName || !email || !subject) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, email, and subject are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create HTML email
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .email-wrapper { background-color: #0B1525; padding: 30px; border-radius: 8px; }
            .header { color: #0AAAA8; font-size: 28px; margin-bottom: 20px; }
            .content-box { background-color: #152238; padding: 25px; border-radius: 4px; color: #ffffff; }
            .label { color: #0AAAA8; font-weight: bold; margin-bottom: 5px; font-size: 14px; }
            .value { font-size: 16px; margin: 0 0 20px 0; line-height: 1.6; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); }
            .footer-text { color: #ffffff; opacity: 0.6; font-size: 12px; text-align: center; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email-wrapper">
              <h1 class="header">New Contact Form Submission 📬</h1>
              
              <div class="content-box">
                <div style="margin-bottom: 20px;">
                  <p class="label">FROM:</p>
                  <p class="value">${firstName} (${email})</p>
                </div>

                <div style="margin-bottom: 20px;">
                  <p class="label">SUBJECT:</p>
                  <p class="value">${subject}</p>
                </div>

                <div>
                  <p class="label">MESSAGE:</p>
                  <p class="value">${message || 'No message provided'}</p>
                </div>
              </div>

              <div class="footer">
                <p class="footer-text">© ${new Date().getFullYear()} Varro Group. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Varro Group Contact Form <onboarding@resend.dev>',
      to: 'raghavkrishnaiiitk27@gmail.com',
      replyTo: email, // This allows you to reply directly to the sender
      subject: `[Varro Group] ${subject}`,
      html: htmlEmail,
      text: `New Contact Form Submission\n\nFrom: ${firstName} (${email})\nSubject: ${subject}\n\nMessage:\n${message || 'No message provided'}`, // Plain text version
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email sent successfully!',
      data 
    }, { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

