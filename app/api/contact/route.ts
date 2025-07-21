import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, contactInfo, message } = body;

    // Basic validation
    if (!fullName || !contactInfo || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with the following data:', {
      to: 'srosthai00@gmail.com',
      from: process.env.EMAIL_USER || 'srosthai00@gmail.com',
      name: fullName,
      contact: contactInfo,
      messagePreview: message.substring(0, 50) + (message.length > 50 ? '...' : '')
    });

    // Create a transporter with more secure settings for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER || 'srosthai00@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // App password
      },
      debug: true,
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email server configuration error: ' + (verifyError instanceof Error ? verifyError.message : String(verifyError)) },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'srosthai00@gmail.com',
      to: 'srosthai00@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Contact: ${contactInfo}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Contact:</strong> ${contactInfo}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully', id: info.messageId },
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