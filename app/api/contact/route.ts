import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const notificationEmail = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
        </div>
      `,
    }

    const autoReplyEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Adarsh Mandal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #2563eb;">Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out! I will get back to you within 24-48 hours.</p>
          <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 20px; border-radius: 8px; color: white; margin-top: 20px;">
            <h3>Adarsh Mandal</h3>
            <p>Civil Engineer & Infrastructure Specialist</p>
            <p>📧 adarsh.mandal.143@gmail.com | 📱 +977 9811272899</p>
          </div>
        </div>
      `,
    }

    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(autoReplyEmail)
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}