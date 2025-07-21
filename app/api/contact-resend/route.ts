import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Skip this API route during build time
export const runtime = 'edge';

// No need to initialize Resend during build time
// This will only run when the API is actually called during runtime
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

export async function POST(request: Request) {
  try {
    const resend = getResendClient();
    // Check if Resend is properly initialized
    if (!resend) {
      console.error('Resend API key is missing. Please add RESEND_API_KEY to your environment variables.');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { fullName, contactInfo, message } = body;

    // Basic validation
    if (!fullName || !contactInfo || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with Resend:', {
      name: fullName,
      contact: contactInfo,
      messagePreview: message.substring(0, 50) + (message.length > 50 ? '...' : '')
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use the default sender or your verified domain
      to: ['srosthai00@gmail.com'],
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Contact:</strong> ${contactInfo}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully with Resend:', data?.id);
    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error details:', error);
    
    // Provide more specific error information
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = `${errorMessage}: ${error.message}`;
      console.error('Stack trace:', error.stack);
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 