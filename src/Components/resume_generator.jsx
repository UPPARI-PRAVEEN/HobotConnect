import { useState, useRef } from "react";

const PRAVEEN_DATA = {
  name: "UPPARI PRAVEEN",
  title: "SOFTWARE DEVELOPMENT ENGINEER-1 (SDE-1)",
  contact: {
    phone: "+91 6302586752",
    email: "upparipraveen2003@gmail.com",
    linkedin: "LinkedIn",
    github: "Github",
    portfolio: "Portfolio",
  },
  education: {
    institution: "Rayalaseema University College of Engineering, Kurnool",
    degree: "Bachelor of Technology in Computer Science Engineering",
    grade: "78%",
    duration: "June 2020 – April 2024",
    location: "Andhra Pradesh, India",
  },
  technicalSkills: {
    Languages: "JavaScript, TypeScript, Python",
    FrontEnd: "React.js, Redux (RTK Query), Bootstrap, Tailwind",
    BackEnd: "Node.js, Express.js, REST APIs",
    Databases: "SQL (Joins, Indexing), MongoDB",
    Tools: "Docker, CI/CD, Git, Vercel, Postman",
    Others: "REST APIs, Responsive web design",
    "Cloud Tools": "AWS (EC2, DynamoDB, Lambda)",
  },
  experience: [
    {
      company: "Kitaabh (Advisory Accounting Platform)",
      role: "SDE-I",
      duration: "Nov 2024 – June 2025",
      bullets: [
        "Leading front-end development of Kitaabh, a FinTech SaaS product rivaling Tally, focusing on scalable, intuitive, and efficient UX/UI.",
        "Building modular, maintainable components using React.js, Redux, RTK Query, PrimeReact and custom hooks for seamless desktop and web experiences.",
        "Optimized database performance by designing efficient SQL queries using joins and indexing, and structured scalable schemas to improve query execution time and data retrieval efficiency.",
        "Implemented secure backend APIs using Node.js and Express with JWT-based authentication, role-based access control, and robust request validation.",
        "Improved API response time by ~30% using optimized queries.",
        "Reduced redundant API calls using RTK Query caching.",
        "Managed complex financial data tables and forms with dynamic validations using Formik and Yup, increasing data accuracy and submission efficiency.",
      ],
    },
  ],
  internship: {
    title: "Blood Bank Management System | MERN Stack",
    bullets: [
      "Built a full-stack application to manage blood inventory across donors, hospitals, and organizations.",
      "Developed Node.js/Express APIs with JWT-based role-based authentication and validation.",
      "Designed MongoDB schemas and handled efficient data operations.",
      "Implemented features for blood availability tracking, donation history, and reporting.",
      "Completed 6-month internship with end-to-end feature development.",
    ],
  },
  certifications: [
    "React.js Course Completion Certificate from InternShala",
    "Node.js, Express.js and MongoDB Course Completion Certificate from Udemy",
    "AWS Three Months of Internship Certificate from APSSDC",
  ],
  softSkills: ["Planning", "Teamwork", "Active Listening", "Organized"],
};

const systemPrompt = `You are an expert resume tailoring assistant. Given a candidate's resume data and a job description, you will return a tailored resume in strict JSON format.

Your job:
1. Rewrite bullet points in experience/internship to match the job description keywords and priorities
2. Reorder or emphasize technical skills that are most relevant
3. Adjust the professional title slightly if appropriate
4. Keep all personal/contact/education info unchanged
5. Keep certifications and soft skills as-is
6. Make bullet points achievement-oriented and keyword-rich for ATS

Return ONLY valid JSON (no markdown, no backticks) with this exact structure:
{
  "title": "string",
  "technicalSkills": { "Category": "comma-separated skills", ... },
  "experience": [
    {
      "company": "string",
      "role": "string",
      "duration": "string",
      "bullets": ["string", ...]
    }
  ],
  "internship": {
    "title": "string",
    "bullets": ["string", ...]
  },
  "summary": "2-3 sentence professional summary tailored to the job"
}`;

export default function ResumeGenerator() {
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [tailored, setTailored] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("input");
  const resumeRef = useRef(null);

  const generateResume = async () => {
    if (!jd.trim()) return;
    setLoading(true);
    setError("");
    setTailored(null);

    try {
      const response = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          max_tokens: 1000,
          messages: [
            { role: "system", content: systemPrompt },
            {
              role: "user",
              content: `CANDIDATE DATA:\n${JSON.stringify(PRAVEEN_DATA, null, 2)}\n\nJOB DESCRIPTION:\n${jd}`,
            },
          ],
        }),
      });

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setTailored(parsed);
      setActiveTab("preview");
    } catch (e) {
      setError("Failed to generate resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const printResume = () => {
    const content = resumeRef.current.innerHTML;
    const win = window.open("", "_blank");
    win.document.write(`<!DOCTYPE html><html><head><title>Uppari Praveen - Resume</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Times New Roman', serif; font-size: 10.5pt; color: #000; background: #fff; padding: 0.6in; }
  .resume-name { font-size: 20pt; font-weight: bold; text-align: center; letter-spacing: 2px; }
  .resume-title { font-size: 10pt; text-align: center; margin: 2px 0 4px; }
  .resume-contact { font-size: 9pt; text-align: center; margin-bottom: 8px; }
  .resume-contact span { margin: 0 6px; }
  .section-hr { border: none; border-top: 1.5px solid #000; margin: 4px 0 6px; }
  .section-heading { font-size: 11pt; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 2px; }
  .summary-text { font-size: 9.5pt; line-height: 1.5; margin-bottom: 6px; }
  .skills-row { font-size: 9.5pt; margin-bottom: 2px; }
  .skills-label { font-weight: bold; }
  .exp-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1px; }
  .exp-company { font-weight: bold; font-size: 10pt; }
  .exp-role { font-style: italic; font-size: 9.5pt; }
  .exp-date { font-size: 9pt; }
  ul { padding-left: 16px; margin: 2px 0 6px; }
  li { font-size: 9.5pt; line-height: 1.5; margin-bottom: 1px; }
  .edu-row { display: flex; justify-content: space-between; }
  .cert-item { font-size: 9.5pt; margin-bottom: 2px; }
  .softskills { font-size: 9.5pt; }
</style></head><body>${content}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 500);
  };

  const resumeData = tailored
    ? { ...PRAVEEN_DATA, ...tailored }
    : PRAVEEN_DATA;

  return (
    <div style={{ fontFamily: "var(--font-sans)", maxWidth: 860, margin: "0 auto", padding: "1.5rem 1rem" }}>
      <h2 style={{ fontSize: 18, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 4 }}>
        AI Resume Tailoring
      </h2>
      <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 20 }}>
        Paste a job description and get a tailored version of Uppari Praveen's resume instantly.
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["input", "preview"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "6px 18px",
              borderRadius: "var(--border-radius-md)",
              border: "0.5px solid var(--color-border-secondary)",
              background: activeTab === tab ? "var(--color-background-secondary)" : "transparent",
              color: "var(--color-text-primary)",
              fontWeight: activeTab === tab ? 500 : 400,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            {tab === "input" ? "Job Description" : "Resume Preview"}
          </button>
        ))}
      </div>

      {activeTab === "input" && (
        <div>
          <textarea
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the job description here..."
            style={{
              width: "100%",
              minHeight: 220,
              fontSize: 14,
              padding: "12px",
              borderRadius: "var(--border-radius-md)",
              border: "0.5px solid var(--color-border-secondary)",
              background: "var(--color-background-primary)",
              color: "var(--color-text-primary)",
              resize: "vertical",
              lineHeight: 1.6,
            }}
          />
          {error && (
            <p style={{ color: "var(--color-text-danger)", fontSize: 13, marginTop: 8 }}>{error}</p>
          )}
          <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center" }}>
            <button
              onClick={generateResume}
              disabled={loading || !jd.trim()}
              style={{
                padding: "8px 22px",
                borderRadius: "var(--border-radius-md)",
                border: "0.5px solid var(--color-border-secondary)",
                background: loading ? "var(--color-background-secondary)" : "var(--color-background-primary)",
                color: "var(--color-text-primary)",
                fontWeight: 500,
                fontSize: 14,
                cursor: loading || !jd.trim() ? "not-allowed" : "pointer",
                opacity: !jd.trim() ? 0.5 : 1,
              }}
            >
              {loading ? "Tailoring resume..." : "Generate Tailored Resume ↗"}
            </button>
            {tailored && !loading && (
              <span style={{ fontSize: 13, color: "var(--color-text-success)" }}>
                ✓ Resume tailored! Switch to Preview tab.
              </span>
            )}
          </div>
        </div>
      )}

      {activeTab === "preview" && (
        <div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
            <button
              onClick={printResume}
              style={{
                padding: "7px 18px",
                borderRadius: "var(--border-radius-md)",
                border: "0.5px solid var(--color-border-secondary)",
                background: "var(--color-background-primary)",
                color: "var(--color-text-primary)",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <i className="ti ti-download" style={{ fontSize: 16 }} aria-hidden="true" />
              Download / Print PDF
            </button>
          </div>

          <div
            ref={resumeRef}
            style={{
              background: "#fff",
              color: "#000",
              fontFamily: "'Times New Roman', serif",
              fontSize: "10.5pt",
              padding: "0.55in 0.6in",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: "var(--border-radius-lg)",
              lineHeight: 1.5,
            }}
          >
            {/* Header */}
            <div className="resume-name" style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", letterSpacing: 2 }}>
              {PRAVEEN_DATA.name}
            </div>
            <div className="resume-title" style={{ textAlign: "center", fontSize: 10, marginTop: 2 }}>
              {resumeData.title || PRAVEEN_DATA.title}
            </div>
            <div className="resume-contact" style={{ textAlign: "center", fontSize: 9, marginTop: 3, marginBottom: 6 }}>
              {PRAVEEN_DATA.contact.phone} &nbsp;||&nbsp; {PRAVEEN_DATA.contact.email} &nbsp;||&nbsp;
              {PRAVEEN_DATA.contact.linkedin} &nbsp;||&nbsp; {PRAVEEN_DATA.contact.github} &nbsp;||&nbsp; {PRAVEEN_DATA.contact.portfolio}
            </div>

            {/* Summary (if tailored) */}
            {tailored?.summary && (
              <>
                <SectionHead title="Professional Summary" />
                <p className="summary-text" style={{ fontSize: "9.5pt", lineHeight: 1.5, marginBottom: 6 }}>{tailored.summary}</p>
              </>
            )}

            {/* Education */}
            <SectionHead title="Education" />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9.5pt" }}>
              <div>
                <strong>{PRAVEEN_DATA.education.institution}</strong>
                <div>{PRAVEEN_DATA.education.degree} with {PRAVEEN_DATA.education.grade}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div>{PRAVEEN_DATA.education.duration}</div>
                <div>{PRAVEEN_DATA.education.location}</div>
              </div>
            </div>

            {/* Technical Skills */}
            <SectionHead title="Technical Skills" />
            {Object.entries(resumeData.technicalSkills || PRAVEEN_DATA.technicalSkills).map(([k, v]) => (
              <div key={k} style={{ fontSize: "9.5pt", marginBottom: 2 }}>
                <strong>{k}:</strong> {v}
              </div>
            ))}

            {/* Experience */}
            <SectionHead title="Experience" />
            {(resumeData.experience || PRAVEEN_DATA.experience).map((exp, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10pt" }}>
                  <strong>{exp.company}</strong>
                  <span style={{ fontSize: "9pt" }}>{exp.duration}</span>
                </div>
                <div style={{ fontStyle: "italic", fontSize: "9.5pt", marginBottom: 2 }}>{exp.role}</div>
                <ul style={{ paddingLeft: 16, margin: "2px 0" }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: "9.5pt", lineHeight: 1.5 }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Internship */}
            <SectionHead title="Internship" />
            <div style={{ marginBottom: 8 }}>
              <strong style={{ fontSize: "9.5pt" }}>{(resumeData.internship || PRAVEEN_DATA.internship).title}</strong>
              <ul style={{ paddingLeft: 16, margin: "2px 0" }}>
                {(resumeData.internship || PRAVEEN_DATA.internship).bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5pt", lineHeight: 1.5 }}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <SectionHead title="Certifications" />
            {PRAVEEN_DATA.certifications.map((c, i) => (
              <div key={i} style={{ fontSize: "9.5pt", marginBottom: 2 }}>▸ {c}</div>
            ))}

            {/* Soft Skills */}
            <SectionHead title="Soft Skills" />
            <div style={{ fontSize: "9.5pt" }}>
              {PRAVEEN_DATA.softSkills.join(" · ")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionHead({ title }) {
  return (
    <div style={{ marginTop: 10, marginBottom: 2 }}>
      <div style={{ fontWeight: "bold", fontSize: "10.5pt", letterSpacing: 0.5, textTransform: "uppercase" }}>{title}</div>
      <hr style={{ border: "none", borderTop: "1.5px solid #000", margin: "2px 0 5px" }} />
    </div>
  );
}
