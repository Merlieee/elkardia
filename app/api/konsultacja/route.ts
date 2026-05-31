import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const { name, email, phone, arrhythmia, hadAblation, hasEcg, doctor } =
    await req.json()

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const text = [
    `Imię i nazwisko: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone}`,
    `Arytmia: ${arrhythmia || "—"}`,
    `Po ablacji: ${hadAblation || "—"}`,
    `Posiada EKG: ${hasEcg || "—"}`,
    `Preferowany lekarz: ${doctor || "—"}`,
  ].join("\n")

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "noreply@elkardia.pl",
    to: process.env.SMTP_TO ?? "rejestracja@elkardia.pl",
    replyTo: email,
    subject: `Konsultacja elektrofizjologiczna — ${name}`,
    text,
  })

  return NextResponse.json({ ok: true })
}
