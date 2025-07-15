import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const emailResult = await resend.emails.send({
      from: 'Estudio Jurídico <info@estudiodeabogadosgomezlopez.com.ar>',
      to: 'jllopez1269@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje del formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true, data: emailResult });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json(
      { 
        error: 'Error sending email',
        details: err.message 
      },
      { status: 500 }
    );
  }
} 