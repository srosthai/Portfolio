import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Simple test function for checking email configuration
export async function GET() {
  const results = {
    nodemailerConfig: {
      host: 'smtp.gmail.com',
      port: 465,
      user: process.env.EMAIL_USER || 'srosthai00@gmail.com',
      hasPassword: !!process.env.EMAIL_PASSWORD,
      passwordLength: process.env.EMAIL_PASSWORD ? process.env.EMAIL_PASSWORD.length : 0
    },
    resendConfig: {
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyPrefix: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 5) : '',
      apiKeyLength: process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.length : 0
    },
    nodemailerTest: null as any,
    resendTest: null as any
  };

  // Test Nodemailer connection
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'srosthai00@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    const verifyResult = await transporter.verify();
    results.nodemailerTest = { success: true, message: 'SMTP connection verified' };
  } catch (error) {
    results.nodemailerTest = { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown error type'
    };
  }

  // Test Resend configuration
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    results.resendTest = { initialized: true, apiKeyStartsWith: process.env.RESEND_API_KEY?.substring(0, 3) };
    
    // We won't actually send an email here to avoid unnecessary API usage
  } catch (error) {
    results.resendTest = { 
      initialized: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }

  return NextResponse.json(results);
}

// POST method for actually testing sending
export async function POST() {
  const testResults = {
    nodemailer: null as any,
    resend: null as any
  };
  
  // Test sending with Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'srosthai00@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      },
      debug: true
    });
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER || 'srosthai00@gmail.com',
      to: 'srosthai00@gmail.com',
      subject: 'Test Email from Portfolio Contact Form',
      text: 'This is a test email to verify the Nodemailer configuration.',
      html: '<h3>Test Email</h3><p>This is a test email to verify the Nodemailer configuration.</p>'
    });
    
    testResults.nodemailer = { 
      success: true, 
      messageId: info.messageId,
      response: info.response
    };
  } catch (error) {
    testResults.nodemailer = { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : null
    };
  }
  
  // Test sending with Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_API_KEY.startsWith('re_')) {
      throw new Error('Invalid or missing Resend API key');
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['srosthai00@gmail.com'],
      subject: 'Test Email from Portfolio Contact Form (Resend)',
      html: '<h3>Test Email</h3><p>This is a test email to verify the Resend configuration.</p>'
    });
    
    if (error) {
      throw error;
    }
    
    testResults.resend = { 
      success: true, 
      id: data?.id
    };
  } catch (error) {
    testResults.resend = { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
  
  return NextResponse.json(testResults);
} 