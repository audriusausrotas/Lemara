import nodemailer from "nodemailer";
import { IncomingForm } from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ message: "Klaidingi duomenys" });
      }

      let totalSize = 0;
      if (files.attachment) {
        const attachments = Array.isArray(files.attachment) ? files.attachment : [files.attachment];
        attachments.forEach((file) => {
          totalSize += file.size;
        });
      }

      if (totalSize > 25 * 1024 * 1024) {
        return res.status(413).json({ message: "Failų dydis didesnis nei 25 MB" });
      }

      const { name, email, number, message } = fields;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Lemara" <${process.env.GMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: "Nauja užklausa",
        html: `
        <p><strong>Vardas:</strong> ${name}</p>
        <p><strong>El Paštas:</strong> ${email}</p>
        <p><strong>Telefonas:</strong> ${number}</p>
        <p><strong>Žinutė:</strong> ${message}</p>
      `,
        attachments: [],
      };

      if (files.attachment) {
        const attachments = Array.isArray(files.attachment) ? files.attachment : [files.attachment];
        attachments.forEach((file) => {
          mailOptions.attachments.push({
            filename: file.originalFilename || file.name,
            path: file.filepath,
          });
        });
      }

      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Žinutė sėkmingai išsiųsta" });
      } catch (error) {
        res.status(500).json({ message: "Klaida siunčiant žinutę: " + error.message });
      }
    });
  } else {
    res.status(405).json({ message: "Negalimas veiksmas" });
  }
}
