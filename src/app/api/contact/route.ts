// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactRequestBody {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json() as ContactRequestBody

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: 'adhikarykishan11@gmail.com', // 👈 your own email
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ message: 'Message sent successfully', data }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
