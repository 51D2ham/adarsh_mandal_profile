import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json() as ContactFormData;
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate field types
    if (typeof name !== 'string' || typeof email !== 'string' || 
        typeof phone !== 'string' || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid field types' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    
    if (!gmailUser || !gmailPassword) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Sanitize inputs for HTML
    const sanitizedName = name.replace(/[<>"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;'
      };
      return entities[match] || match;
    });
    
    const sanitizedEmail = email.replace(/[<>"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;'
      };
      return entities[match] || match;
    });
    
    const sanitizedPhone = phone.replace(/[<>"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;'
      };
      return entities[match] || match;
    });
    
    const sanitizedMessage = message.replace(/[<>"'&]/g, (match) => {
      const entities: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;'
      };
      return entities[match] || match;
    });

    const currentDate = new Date().toLocaleString('en-US', { 
      timeZone: 'Asia/Kathmandu',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Email to you (notification)
    const mailToYou: nodemailer.SendMailOptions = {
      from: gmailUser,
      to: gmailUser,
      subject: `🔔 New Contact: ${sanitizedName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
          <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #3b82f6, #1d4ed8); margin: 15px auto; border-radius: 2px;"></div>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 25px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
              <p style="margin: 8px 0;"><strong style="color: #475569;">Name:</strong> <span style="color: #1e293b;">${sanitizedName}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #475569;">Email:</strong> <span style="color: #2563eb;">${sanitizedEmail}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #475569;">Phone:</strong> <span style="color: #1e293b;">${sanitizedPhone}</span></p>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 2px solid #e2e8f0; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">💬 Message</h3>
              <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">Received on ${currentDate} (Nepal Time)</p>
            </div>
          </div>
        </div>
      `,
    };

    // Auto-reply to sender
    const autoReply: nodemailer.SendMailOptions = {
      from: gmailUser,
      to: email,
      subject: '✅ Thank you for contacting me - Adarsh Mandal',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
          <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2563eb; margin: 0; font-size: 24px;">🙏 Thank You for Your Message!</h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #3b82f6, #1d4ed8); margin: 15px auto; border-radius: 2px;"></div>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">Dear <strong>${sanitizedName}</strong>,</p>
            
            <p style="color: #374151; line-height: 1.6;">Thank you for reaching out to me! I have successfully received your message and truly appreciate you taking the time to contact me.</p>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e293b; margin-top: 0; font-size: 16px;">📝 Your Message Summary:</h3>
              <p style="color: #64748b; font-style: italic; margin: 0;">${sanitizedMessage.substring(0, 150)}${sanitizedMessage.length > 150 ? '...' : ''}</p>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">I will review your message carefully and get back to you as soon as possible, typically within 24-48 hours.</p>
            
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #1e40af; margin-top: 0; font-size: 16px;">📞 Need Immediate Assistance?</h3>
              <p style="color: #1e40af; margin: 5px 0;"><strong>Phone:</strong> +977 9811272899</p>
              <p style="color: #1e40af; margin: 5px 0;"><strong>Email:</strong> adarsh.mandal.143@gmail.com</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #374151; margin: 10px 0;">Best regards,</p>
              <p style="color: #1e293b; font-weight: bold; font-size: 18px; margin: 5px 0;">Adarsh Mandal</p>
              <p style="color: #64748b; margin: 5px 0;">Civil Engineer • NEC Registration #85377</p>
              <p style="color: #64748b; font-size: 14px; margin: 15px 0 0 0;">Birgunj, Nepal</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToYou),
      transporter.sendMail(autoReply)
    ]);

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully! You will receive a confirmation email shortly.' 
    }, { status: 200 });
    
  } catch (error: unknown) {
    console.error('Email sending error:', error);
    
    // Type guard for error handling
    if (error instanceof Error) {
      // Handle specific nodemailer errors
      if ('code' in error) {
        const nodeError = error as Error & { code: string };
        
        if (nodeError.code === 'EAUTH') {
          return NextResponse.json(
            { error: 'Email authentication failed. Please try again later.' },
            { status: 500 }
          );
        }
        
        if (nodeError.code === 'ECONNECTION') {
          return NextResponse.json(
            { error: 'Connection failed. Please try again later.' },
            { status: 500 }
          );
        }
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}