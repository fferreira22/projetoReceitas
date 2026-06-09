import Navbar from "@/components/Navbar";
import { useState, type ChangeEvent, type FormEvent } from "react";
import "../ContactUs/ContactUs.css";

const ContactUs: React.FC = () => {
  const [to, setTo] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.append("view", "cm");
    gmailUrl.searchParams.append("fs", "1");
    gmailUrl.searchParams.append("to", to);
    gmailUrl.searchParams.append("su", subject);
    gmailUrl.searchParams.append("body", body);

    window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />
      <div className="contact-content">
        <h2>Envia-nos a tua receita!</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
          <div className="email-form-group">
            <label htmlFor="to">Para:</label>
            <input
              id="to"
              type="email"
              value={to}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTo(e.target.value)
              }
              required
              style={{ width: "100%" }}
            />
          </div>

          <div className="email-form-group">
            <label htmlFor="subject">Assunto:</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
              style={{ width: "100%" }}
            />
          </div>

          <div className="email-form-group">
            <label htmlFor="body">Mensagem:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setBody(e.target.value)
              }
              rows={6}
              style={{ width: "100%" }}
            />
          </div>

          <button className="form-button" type="submit">
            Enviar Email
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
