import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "필수 항목을 입력해주세요." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    return NextResponse.json(
      { error: "이메일 서비스가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio 문의" <${gmailUser}>`,
    to: "atb1135@gmail.com",
    subject: subject ? `[Portfolio 문의] ${subject}` : `[Portfolio 문의] ${name}님의 메시지`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #111; border-bottom: 2px solid #dc2626; padding-bottom: 8px;">포트폴리오 문의</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; background: #f9fafb; font-weight: 600; width: 100px;">이름</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background: #f9fafb; font-weight: 600;">이메일</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          ${subject ? `<tr><td style="padding: 8px; background: #f9fafb; font-weight: 600;">제목</td><td style="padding: 8px;">${subject}</td></tr>` : ""}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-left: 4px solid #dc2626; border-radius: 0 8px 8px 0;">
          <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 16px; color: #9ca3af; font-size: 12px;">발신자 이메일: ${email}</p>
      </div>
    `,
    replyTo: email,
  });

  return NextResponse.json({ success: true });
}
