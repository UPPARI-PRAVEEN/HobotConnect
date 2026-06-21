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
    "Cloud Tools": "AWS (EC2, DynamoDB, Lambda)",
    "Generative AI": "LLMs, Prompt Engineering, AI API Integration, Structured Output Parsing",
    Others: "REST APIs, Responsive Web Design",
  },
  experience: [
    {
      company: "Kitaabh (Advisory Accounting Platform)",
      role: "SDE-I",
      duration: "Nov 2024 – June 2025",
      bullets: [
        "Leading front-end development of Kitaabh, a FinTech SaaS product rivaling Tally, focusing on scalable and intuitive UX/UI.",

        "Built modular and reusable components using React.js, Redux (RTK Query), and custom hooks for seamless web and desktop experiences.",

        "Designed and optimized SQL queries using joins and indexing, improving data retrieval efficiency and reducing query execution time.",

        "Developed secure backend APIs using Node.js and Express with JWT-based authentication and role-based access control.",

        "Improved API performance by ~30% through query optimization and efficient backend design.",

        "Reduced redundant API calls using RTK Query caching, improving application performance and responsiveness.",

        "Handled complex financial data forms with dynamic validations using Formik and Yup, increasing data accuracy.",
        "Integrated Generative AI (LLMs) to build AI-powered resume tailoring, dynamically generating job-specific content using prompt engineering and structured JSON parsing.",
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
    "AWS Internship Certificate from APSSDC",
  ],

  softSkills: ["Planning", "Teamwork", "Active Listening", "Organized"],
};

const Pavan_DATA = {
  name: "UPPARI PAVAN",
  title: "Software Quality Engineering",
  contact: {
    phone: "+91 7382778745",
    email: "upparipavan2001@gmail.com",
    linkedin: "LinkedIn",
    github: "Github",
    portfolio: "Portfolio",
  },
  education: {
    institution: "Vikrama Simhapuri University, Kavali",
    degree: "Master of Computer Applicaton(MCA)",
    grade: "78%",
    duration: "June 2021 – April 2023",
    location: "Andhra Pradesh, India",
  },
  technicalSkills: {
    Languages: "C,JavaScript, java, Python, AWS",
    Databases: "SQL (Joins, Indexing), MongoDB",
    Tools: "Selenium Web Driver, Git, TestNG, Junit, Jenkins, PostMan,Selenium Grid, Cucumber,Jira,ADO Dashboard,ServiceNow,Playwright, CI/CD Pipelines",
    Databases: "SQL,Oracle,Postgress DB",
    Systems: "Linux, Windows,Cloud Saas Products",
  },
  experience: [
    {
      company: "Accenture 2+ years experience",
      Role: "Quality Engineer / QA Test Engineer",
      duration: "April 2024 – Present ",
      Project: "TRUE SUPPLIER MARKET PLACE",
      bullets: [
        "Project Description: TRUE SUPPLIER MARKET PLACE is a role-based Single Page Web Application that enables users, suppliers, and administrators to manage supplier onboarding, form submissions, approvals, and marketplace operations through a streamlined web interface.Thoroughly involved in different types of testing like Smoke Testing, Functional Testing, System Integration Testing, Sanity Testing, UAT Testing, and Regression Testing",
        "Performed end-to-end testing of a B2C Single Page Application (SPA) involving multiple user roles and workflows",
        "Validated form-based functionality, business rules, data submission, and approval processes across different modules",
        "Executed Smoke, Functional, Sanity, System Integration, User Acceptance Testing (UAT), and Regression Testing",
        "Designed, reviewed, and executed test cases based on business requirements and acceptance criteria",
        "Tested role-based access control (RBAC) and validated user-specific permissions and navigation flows",
        "Participated in Agile ceremonies including backlog refinement, sprint planning, and PI planning sessions",
        "Conducted cross-browser and cross-platform compatibility testing to ensure consistent user experience",
        "Performed accessibility testing to verify compliance with WCAG standards",
        "Identified, documented, and tracked defects using bug tracking tools and collaborated with developers for resolution",
        "Validated complete business workflows including supplier registration, form submission, approval/rejection processes, and user management activities",
        "Executed regression test suites after enhancements and bug fixes to ensure application stability",
        "Delivered testing status updates, defect reports, and feature demonstrations to Product Owners and stakeholders"
     ]
    },
  ],

  internship: {
title: "Blood Bank Management System | QA / Software Testing",
bullets: [
"Performed manual testing on a full-stack application managing blood inventory across donors, hospitals, and organizations.",
"Designed and executed test cases to validate API functionality, authentication flows, and data integrity.",
"Identified, reported, and tracked bugs using structured test reports and ensured timely resolution with the development team.",
"Tested key features such as blood availability tracking, donation workflows, and reporting modules.",
"Validated MongoDB data consistency and ensured accuracy of CRUD operations through backend testing.",
"Completed 6-month internship with hands-on experience in end-to-end application testing and quality assurance processes."
],
},

  
  certifications: [
    "GitHub Copiolt-300",
  ],
  softSkills: ["Decision-Making", "Team Collaboration", " Communication", "Problem-solving"],
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
  const [candidate, setCandidate] = useState("PRAVEEN");
  const resumeRef = useRef(null);

  const candidateData = candidate === "PRAVEEN" ? PRAVEEN_DATA : Pavan_DATA;

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
              content: `CANDIDATE DATA:\n${JSON.stringify(candidateData, null, 2)}\n\nJOB DESCRIPTION:\n${jd}`,
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
    ? { ...candidateData, ...tailored }
    : candidateData;

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

      {/* Candidate Selection */}
      <div style={{ marginBottom: 16, padding: "12px", borderRadius: "var(--border-radius-md)", border: "0.5px solid var(--color-border-secondary)", background: "var(--color-background-secondary)" }}>
        <label style={{ fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: 10, display: "block" }}>
          Select Candidate:
        </label>
        <div style={{ display: "flex", gap: 20 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14 }}>
            <input
              type="radio"
              name="candidate"
              value="PRAVEEN"
              checked={candidate === "PRAVEEN"}
              onChange={(e) => setCandidate(e.target.value)}
              style={{ cursor: "pointer" }}
            />
            <span style={{ color: "var(--color-text-primary)" }}>Uppari Praveen (SDE-I)</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14 }}>
            <input
              type="radio"
              name="candidate"
              value="PAVAN"
              checked={candidate === "PAVAN"}
              onChange={(e) => setCandidate(e.target.value)}
              style={{ cursor: "pointer" }}
            />
            <span style={{ color: "var(--color-text-primary)" }}>Uppari Pavan (QA Engineer)</span>
          </label>
        </div>
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
              {candidateData.name}
            </div>
            <div className="resume-title" style={{ textAlign: "center", fontSize: 10, marginTop: 2 }}>
              {resumeData.title || candidateData.title}
            </div>
            <div className="resume-contact" style={{ textAlign: "center", fontSize: 9, marginTop: 3, marginBottom: 6 }}>
              {candidateData.contact.phone} &nbsp;||&nbsp; {candidateData.contact.email} &nbsp;||&nbsp;
              {candidateData.contact.linkedin} &nbsp;||&nbsp; {candidateData.contact.github} &nbsp;||&nbsp; {candidateData.contact.portfolio}
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
                <strong>{candidateData.education.institution}</strong>
                <div>{candidateData.education.degree} with {candidateData.education.grade}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div>{candidateData.education.duration}</div>
                <div>{candidateData.education.location}</div>
              </div>
            </div>

            {/* Technical Skills */}
            <SectionHead title="Technical Skills" />
            {Object.entries(resumeData.technicalSkills || candidateData.technicalSkills).map(([k, v]) => (
              <div key={k} style={{ fontSize: "9.5pt", marginBottom: 2 }}>
                <strong>{k}:</strong> {v}
              </div>
            ))}

            {/* Experience */}
            <SectionHead title="Experience" />
            {(resumeData.experience || candidateData.experience).map((exp, i) => (
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
              <strong style={{ fontSize: "9.5pt" }}>{(resumeData.internship || candidateData.internship).title}</strong>
              <ul style={{ paddingLeft: 16, margin: "2px 0" }}>
                {(resumeData.internship || candidateData.internship).bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5pt", lineHeight: 1.5 }}>{b}</li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <SectionHead title="Certifications" />
            {candidateData.certifications.map((c, i) => (
              <div key={i} style={{ fontSize: "9.5pt", marginBottom: 2 }}>▸ {c}</div>
            ))}

            {/* Soft Skills */}
            <SectionHead title="Soft Skills" />
            <div style={{ fontSize: "9.5pt" }}>
              {candidateData.softSkills.join(" · ")}
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
