import { Resend } from "resend";

export async function sendLeadNotification(data: {
  city: string;
  school: string;
  classLabel: string;
  name: string;
  phone: string;
  email?: string;
  role: string;
  interest: string;
  comment?: string;
}) {
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  if (!to || !apiKey) return;

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: "E-Vinetka <onboarding@resend.dev>",
    to,
    subject: `New Lead: ${data.school} - ${data.classLabel} (${data.city})`,
    html: `
      <h2>New Lead from E-Vinetka Landing</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Name:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Phone:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.phone}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Email:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.email || "N/A"}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>City:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.city}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>School:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.school}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Class:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.classLabel}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Role:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.role}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Interest:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.interest}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee"><strong>Comment:</strong></td><td style="padding:8px;border-bottom:1px solid #eee">${data.comment || "N/A"}</td></tr>
      </table>
      <p style="color:#666;font-size:12px;margin-top:16px">Submitted at ${new Date().toISOString()}</p>
    `,
  });
}
