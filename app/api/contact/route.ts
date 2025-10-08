import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json()

    // Validation des champs requis
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    // Vérifier si les credentials SMTP sont configurés
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Simulation d\'envoi d\'email (credentials SMTP non configurés):')
      console.log(`De: ${name} (${email})`)
      console.log(`Service: ${service}`)
      console.log(`Message: ${message}`)
      
      return NextResponse.json(
        { message: 'Message reçu (mode développement - configurez SMTP pour l\'envoi réel)' },
        { status: 200 }
      )
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Formatage du service
    const serviceLabels: { [key: string]: string } = {
      'creation-site-web': 'Création de site web',
      'application-mobile': 'Application mobile',
      'refonte-site': 'Refonte de site existant',
      'optimisation-seo': 'Optimisation SEO',
      'autre': 'Autre'
    }

    const serviceLabel = serviceLabels[service] || service

    // Contenu de l'email
    const emailContent = `
      Nouvelle demande de contact depuis le site SlupDev
      
      Informations du client :
      - Nom : ${name}
      - Email : ${email}
      - Téléphone : ${phone || 'Non renseigné'}
      - Service demandé : ${serviceLabel}
      
      Message :
      ${message}
      
      ---
      Email envoyé automatiquement depuis le site SlupDev
    `

    // Configuration de l'email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'boyer.dorian974@gmail.com',
      subject: `[SlupDev] Nouvelle demande - ${serviceLabel}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">SlupDev</h1>
            <p style="margin: 10px 0 0 0;">Nouvelle demande de contact</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Informations du client</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Nom :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Téléphone :</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${phone || 'Non renseigné'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #374151;">Service :</td>
                  <td style="padding: 10px 0; color: #6b7280;">${serviceLabel}</td>
                </tr>
              </table>
            </div>
            
            <h3 style="color: #1f2937; margin-bottom: 15px;">Message du client</h3>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #1e40af;">
                <strong>Répondez rapidement pour ne pas perdre cette opportunité !</strong>
              </p>
              <a href="mailto:${email}" style="display: inline-block; margin-top: 15px; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Répondre au client
              </a>
            </div>
          </div>
          
          <div style="background: #374151; color: #9ca3af; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Email envoyé automatiquement depuis le site SlupDev</p>
          </div>
        </div>
      `,
    }

    // Envoi de l'email
    try {
      await transporter.sendMail(mailOptions)
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
