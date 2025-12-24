import { NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactRequestBody {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("RESEND_API_KEY is not defined in environment variables.");
    return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json() as ContactRequestBody

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', 
      to: 'adhikarykishan11@gmail.com', 
      subject: `Lab Message: ${name}`,
      html: `
        <div style="font-family: monospace; background-color: #050505; color: #d4d4d8; padding: 20px; border: 1px solid #27272a;">
          <h2 style="color: #ffffff; border-bottom: 1px solid #27272a; padding-bottom: 10px;">New Transmission Received</h2>
          <p><strong>Sender:</strong> ${name}</p>
          <p><strong>Source:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #0a0a0a; border-left: 2px solid #06b6d4;">
            <p><strong>Message Body:</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'Transmission successful', data }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error'
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}