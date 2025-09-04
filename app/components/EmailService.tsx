'use client'

interface EmailData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}