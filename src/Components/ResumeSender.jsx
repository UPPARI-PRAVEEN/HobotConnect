import { useState, useRef } from "react";

const SENDER_EMAIL = "uppparipraveen2003@gmail.com";

const ROLE_PROFILES = {
  frontend: {
    keywords: ["frontend", "front-end", "react", "vue", "angular", "ui", "css", "html", "next", "nuxt", "svelte"],
    subject: "Frontend Developer Application – Praveen Uppari",
    body: (recruiterName) => `Dear ${recruiterName || "Hiring Manager"},

I hope this message finds you well. I am reaching out to express my strong interest in Frontend Developer opportunities at your organization.

I am a passionate Frontend Developer with hands-on experience building responsive, performant web applications using modern frameworks such as React.js, along with a solid grasp of HTML5, CSS3, JavaScript (ES6+), and UI/UX best practices. I enjoy crafting pixel-perfect interfaces and thrive on turning design mockups into seamless user experiences.

Key highlights of my profile:
• Proficient in React.js, component-based architecture, and state management
• Experience with RESTful API integration and responsive design principles
• Strong understanding of web performance optimization and accessibility standards
• Collaborative team player with good communication skills

I have attached my resume for your review. I would love the opportunity to discuss how my skills and enthusiasm can contribute to your team's goals.

Looking forward to hearing from you.

Warm regards,
Praveen Uppari
${SENDER_EMAIL}`
  },
  backend: {
    keywords: ["backend", "back-end", "node", "express", "django", "flask", "spring", "java", "python", "api", "server", "database", "sql", "mongodb"],
    subject: "Backend Developer Application – Praveen Uppari",
    body: (recruiterName) => `Dear ${recruiterName || "Hiring Manager"},

I hope you are doing well. I am writing to express my keen interest in Backend Developer roles within your organization.

I am a Backend Developer with experience designing and building scalable server-side applications, RESTful APIs, and database-driven systems. I enjoy solving complex logic problems and building robust systems that power great user experiences.

Key highlights of my profile:
• Proficient in Node.js / Express (or equivalent backend stack) and RESTful API design
• Experience with relational and non-relational databases (MySQL, MongoDB)
• Understanding of authentication, authorization, and security best practices
• Comfortable with version control (Git), CI/CD concepts, and cloud deployment basics

Please find my resume attached for your consideration. I would welcome the chance to discuss how I can contribute to your engineering team.

Thank you for your time.

Best regards,
Praveen Uppari
${SENDER_EMAIL}`
  },
  fullstack: {
    keywords: ["fullstack", "full-stack", "full stack", "mern", "mean", "lamp", "rails", "developer"],
    subject: "Full Stack Developer Application – Praveen Uppari",
    body: (recruiterName) => `Dear ${recruiterName || "Hiring Manager"},

I hope this email finds you well. I am writing to express my interest in Full Stack Developer opportunities with your team.

I am a Full Stack Developer comfortable working across the entire web development spectrum — from building interactive, responsive frontends to designing efficient, scalable backends. I enjoy owning features end-to-end and collaborating with cross-functional teams to ship impactful products.

Key highlights of my profile:
• Frontend: React.js, HTML5, CSS3, JavaScript (ES6+), responsive design
• Backend: Node.js, Express, RESTful APIs, database design (SQL & NoSQL)
• End-to-end feature development, debugging, and deployment experience
• Quick learner with strong problem-solving and communication skills

I have attached my resume for your review. I would be excited to explore how I can add value to your organization and would love to connect at your earliest convenience.

Looking forward to your response.

Sincerely,
Praveen Uppari
${SENDER_EMAIL}`
  }
};

function detectRole(filename) {
  const lower = filename.toLowerCase();
  for (const [role, profile] of Object.entries(ROLE_PROFILES)) {
    if (profile.keywords.some(kw => lower.includes(kw))) return role;
  }
  return "fullstack";
}

function Step({ num, label, active, done }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 12, fontWeight: 500,
        background: done ? "#1D9E75" : active ? "#378ADD" : "var(--color-background-secondary)",
        color: done || active ? "#fff" : "var(--color-text-tertiary)",
        border: done || active ? "none" : "0.5px solid var(--color-border-tertiary)",
        transition: "all 0.3s"
      }}>{done ? "✓" : num}</div>
      <span style={{ fontSize: 13, color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)", fontWeight: active ? 500 : 400 }}>{label}</span>
    </div>
  );
}

export default function ResumeSender() {
  const [step, setStep] = useState(1);
  const [senderEmail] = useState(SENDER_EMAIL);
  const [recruiterEmail, setRecruiterEmail] = useState("");
  const [recruiterName, setRecruiterName] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [detectedRole, setDetectedRole] = useState(null);
  const [emailContent, setEmailContent] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [editSubject, setEditSubject] = useState("");
  const [editBody, setEditBody] = useState("");
  const fileRef = useRef();

  function handlePdfSelect(e) {
    const file = e.target.files[0];
    if (!file || file.type !== "application/pdf") { setError("Please select a valid PDF file."); return; }
    setError("");
    setPdfFile(file);
    const role = detectRole(file.name);
    setDetectedRole(role);
  }

  function handleGenerate() {
    if (!recruiterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recruiterEmail)) {
      setError("Please enter a valid recruiter email."); return;
    }
    if (!pdfFile) { setError("Please select your resume PDF."); return; }
    setError("");
    const profile = ROLE_PROFILES[detectedRole];
    const subject = profile.subject;
    const body = profile.body(recruiterName);
    setEmailContent({ subject, body });
    setEditSubject(subject);
    setEditBody(body);
    setStep(3);
  }

  async function handleSend() {
    setSending(true);
    setError("");
    try {
      // Create the mailto link and open it
      const mailtoLink = `mailto:${recruiterEmail}?subject=${encodeURIComponent(editSubject)}&body=${encodeURIComponent(editBody)}`;
      
      // Open the email client
      window.location.href = mailtoLink;
      
      // Give a brief moment before showing success
      setTimeout(() => {
        setSending(false);
        setSent(true);
        setStep(4);
        setEmailContent(prev => ({ 
          ...prev, 
          confirmation: `Confirmed: Email to ${recruiterEmail} for ${detectedRole} role has been prepared and opened in your mail client.` 
        }));
      }, 500);
    } catch (err) {
      setSending(false);
      setError("Something went wrong. Please try again.");
    }
  }

  function reset() {
    setStep(1); setRecruiterEmail(""); setRecruiterName(""); setPdfFile(null);
    setDetectedRole(null); setEmailContent(null); setSent(false); setError(""); setEditSubject(""); setEditBody("");
  }

  const roleLabel = { frontend: "Frontend Developer", backend: "Backend Developer", fullstack: "Full Stack Developer" };
  const roleColor = { frontend: "#378ADD", backend: "#9F4FBD", fullstack: "#1D9E75" };

  return (
    <div style={{ padding: "2rem 1.5rem", maxWidth: 620, margin: "0 auto", fontFamily: "var(--font-sans)" }}>

      <div style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>Resume Mailer</p>
        <h1 style={{ fontSize: 22, fontWeight: 500, margin: 0, color: "var(--color-text-primary)" }}>Send your resume to a recruiter</h1>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem", flexWrap: "wrap" }}>
        <Step num={1} label="Your details" active={step === 1} done={step > 1} />
        <div style={{ height: 1, flex: 1, minWidth: 16, background: "var(--color-border-tertiary)" }} />
        <Step num={2} label="Upload resume" active={step === 2} done={step > 2} />
        <div style={{ height: 1, flex: 1, minWidth: 16, background: "var(--color-border-tertiary)" }} />
        <Step num={3} label="Review email" active={step === 3} done={step > 3} />
        <div style={{ height: 1, flex: 1, minWidth: 16, background: "var(--color-border-tertiary)" }} />
        <Step num={4} label="Sent" active={step === 4} done={step === 4} />
      </div>

      {step === 1 && (
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1.5rem" }}>
          <p style={{ margin: "0 0 1.25rem", fontSize: 14, color: "var(--color-text-secondary)" }}>Enter the recruiter's details and your sender info.</p>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 6 }}>Your email (sender)</label>
            <input value={senderEmail} readOnly style={{ width: "100%", boxSizing: "border-box", background: "var(--color-background-secondary)", color: "var(--color-text-secondary)", cursor: "not-allowed" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 6 }}>Recruiter name <span style={{ color: "var(--color-text-tertiary)", fontWeight: 400 }}>(optional)</span></label>
            <input placeholder="e.g. Riya Sharma" value={recruiterName} onChange={e => setRecruiterName(e.target.value)} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 6 }}>Recruiter email <span style={{ color: "#E24B4A" }}>*</span></label>
            <input type="email" placeholder="recruiter@company.com" value={recruiterEmail} onChange={e => { setRecruiterEmail(e.target.value); setError(""); }} style={{ width: "100%", boxSizing: "border-box" }} />
          </div>

          {error && <p style={{ color: "#E24B4A", fontSize: 13, margin: "0 0 1rem" }}>{error}</p>}

          <button onClick={() => {
            if (!recruiterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recruiterEmail)) { setError("Please enter a valid recruiter email."); return; }
            setError(""); setStep(2);
          }} style={{ width: "100%" }}>Continue →</button>
        </div>
      )}

      {step === 2 && (
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1.5rem" }}>
          <p style={{ margin: "0 0 1.25rem", fontSize: 14, color: "var(--color-text-secondary)" }}>Upload your resume PDF. The role type will be auto-detected from the filename.</p>

          <div onClick={() => fileRef.current.click()} style={{
            border: "1.5px dashed var(--color-border-secondary)", borderRadius: "var(--border-radius-md)",
            padding: "2rem", textAlign: "center", cursor: "pointer", marginBottom: "1.25rem",
            background: pdfFile ? "var(--color-background-success)" : "var(--color-background-secondary)",
            transition: "background 0.2s"
          }}>
            <input ref={fileRef} type="file" accept="application/pdf" style={{ display: "none" }} onChange={handlePdfSelect} />
            <i className="ti ti-file-type-pdf" style={{ fontSize: 32, color: pdfFile ? "#1D9E75" : "var(--color-text-tertiary)", display: "block", marginBottom: 8 }} aria-hidden="true" />
            {pdfFile ? (
              <>
                <p style={{ margin: "0 0 4px", fontWeight: 500, color: "var(--color-text-primary)", fontSize: 14 }}>{pdfFile.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary)" }}>{(pdfFile.size / 1024).toFixed(0)} KB · Click to change</p>
              </>
            ) : (
              <>
                <p style={{ margin: "0 0 4px", fontWeight: 500, color: "var(--color-text-primary)", fontSize: 14 }}>Click to upload resume PDF</p>
                <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-tertiary)" }}>PDF files only</p>
              </>
            )}
          </div>

          {detectedRole && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: "var(--border-radius-md)", background: "var(--color-background-secondary)", marginBottom: "1.25rem" }}>
              <i className="ti ti-wand" style={{ fontSize: 16, color: roleColor[detectedRole] }} aria-hidden="true" />
              <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>Detected role:</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: roleColor[detectedRole] }}>{roleLabel[detectedRole]}</span>
              <select value={detectedRole} onChange={e => setDetectedRole(e.target.value)} style={{ marginLeft: "auto", fontSize: 12, padding: "2px 6px" }}>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Full Stack</option>
              </select>
            </div>
          )}

          {error && <p style={{ color: "#E24B4A", fontSize: 13, margin: "0 0 1rem" }}>{error}</p>}

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setStep(1)} style={{ flex: 1, background: "transparent" }}>← Back</button>
            <button onClick={handleGenerate} style={{ flex: 2 }}>Generate email →</button>
          </div>
        </div>
      )}

      {step === 3 && emailContent && (
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <p style={{ margin: 0, fontSize: 14, color: "var(--color-text-secondary)" }}>Review and edit before sending.</p>
            <span style={{ fontSize: 12, padding: "3px 10px", borderRadius: "var(--border-radius-md)", background: "var(--color-background-secondary)", color: roleColor[detectedRole], fontWeight: 500, border: `0.5px solid ${roleColor[detectedRole]}` }}>{roleLabel[detectedRole]}</span>
          </div>

          <div style={{ marginBottom: "0.75rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)", display: "block", marginBottom: 4 }}>FROM</label>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", padding: "8px 10px", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)" }}>{senderEmail}</div>
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)", display: "block", marginBottom: 4 }}>TO</label>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)", padding: "8px 10px", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)" }}>{recruiterEmail}</div>
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)", display: "block", marginBottom: 4 }}>SUBJECT</label>
            <input value={editSubject} onChange={e => setEditSubject(e.target.value)} style={{ width: "100%", boxSizing: "border-box", fontSize: 13 }} />
          </div>
          <div style={{ marginBottom: "0.75rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)", display: "block", marginBottom: 4 }}>ATTACHMENT</label>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)" }}>
              <i className="ti ti-paperclip" style={{ fontSize: 14, color: "var(--color-text-secondary)" }} aria-hidden="true" />
              <span style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>{pdfFile?.name}</span>
            </div>
          </div>
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: "var(--color-text-tertiary)", display: "block", marginBottom: 4 }}>BODY</label>
            <textarea value={editBody} onChange={e => setEditBody(e.target.value)} rows={14} style={{ width: "100%", boxSizing: "border-box", fontSize: 13, lineHeight: 1.6, fontFamily: "var(--font-sans)", resize: "vertical" }} />
          </div>

          {error && <p style={{ color: "#E24B4A", fontSize: 13, margin: "0 0 1rem" }}>{error}</p>}

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setStep(2)} style={{ flex: 1, background: "transparent" }}>← Back</button>
            <button onClick={handleSend} disabled={sending} style={{ flex: 2, opacity: sending ? 0.7 : 1 }}>
              {sending ? "Sending…" : "Send email →"}
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div style={{ background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: "2rem", textAlign: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#E1F5EE", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
            <i className="ti ti-circle-check" style={{ fontSize: 28, color: "#1D9E75" }} aria-hidden="true" />
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 500, margin: "0 0 8px" }}>Email ready to send!</h2>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", margin: "0 0 1.25rem", lineHeight: 1.6 }}>
            Your <strong>{roleLabel[detectedRole]}</strong> application email has been composed and is ready to send to <strong>{recruiterEmail}</strong>.
          </p>

          {emailContent?.confirmation && (
            <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 14px", marginBottom: "1.25rem", textAlign: "left" }}>
              <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{emailContent.confirmation}</p>
            </div>
          )}

          <div style={{ background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-md)", padding: "12px 14px", marginBottom: "1.5rem", textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>To</span>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{recruiterEmail}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>From</span>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{senderEmail}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>Subject</span>
              <span style={{ fontSize: 12, color: "var(--color-text-secondary)", maxWidth: "65%", textAlign: "right" }}>{editSubject}</span>
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <a href={`mailto:${recruiterEmail}?subject=${encodeURIComponent(editSubject)}&body=${encodeURIComponent(editBody)}`}
              style={{
                display: "block", width: "100%", boxSizing: "border-box", padding: "10px",
                background: "#1D9E75", color: "#fff", textDecoration: "none",
                borderRadius: "var(--border-radius-md)", fontSize: 14, fontWeight: 500, textAlign: "center"
              }}>
              <i className="ti ti-send" style={{ fontSize: 15, marginRight: 6 }} aria-hidden="true" />
              Open in mail app to send
            </a>
          </div>

          <button onClick={reset} style={{ width: "100%", background: "transparent" }}>Send another →</button>
        </div>
      )}
    </div>
  );
}
