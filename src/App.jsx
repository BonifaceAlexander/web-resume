
import React from "react";
import html2pdf from "html2pdf.js";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 md:p-12 font-sans">
      <main className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Boniface Alexander</h1>
            <p className="mt-1 text-sm text-gray-600">AI Prompt Engineer • RAG & Agent Developer • Open Source</p>
            <p className="mt-3 text-sm text-gray-700">Chennai, India.</p>

            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <div>📧 <a href="mailto:bonnybon7@gmail.com" className="text-indigo-600 underline">bonnybon7@gmail.com</a></div>
              <div>📞 +91 99403 65349</div>
              <div>🔗 <a href="https://linkedin.com/in/boniface-alexander" target="_blank" rel="noreferrer" className="text-indigo-600 underline">linkedin.com/in/boniface-alexander</a></div>
              <div>🐙 <a href="https://github.com/BonifaceAlexander" target="_blank" rel="noreferrer" className="text-indigo-600 underline">github.com/BonifaceAlexander</a></div>
            </div>

            <div className="mt-4 flex gap-3 flex-wrap">
              <a href="https://github.com/BonifaceAlexander" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-100">GitHub</a>
              <a href="https://rag-talk.streamlit.app/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-100">RAG-Talk (Live)</a>
              <a href="https://learn-ai-playbook.vercel.app/" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-100">Learn AI Playbook</a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">BA</div>
          </div>
        </header>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Professional Summary</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Innovative and analytical AI Prompt Engineer with 7+ years of experience in automation and LLM systems. Specialised in building production-grade
              RAG pipelines, semantic search, and multi-agent LangChain workflows using Gemini, Vertex AI, OpenAI and cloud platforms (Azure/GCP). Experienced at
              converting business needs into reliable AI agents and developer tools, with a strong focus on observability, cost profiling and practical deployments.
            </p>

            <h3 className="mt-6 text-lg font-medium">Key Projects</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>RAG-Talk</strong> — Voice-enabled RAG assistant (Streamlit). Transcribes audio (Whisper fallback), creates embeddings, supports multi-KB
                searches, and returns grounded answers. Live demo: <a href="https://rag-talk.streamlit.app/" className="text-indigo-600 underline" target="_blank" rel="noreferrer">rag-talk.streamlit.app</a>.
              </li>
              <li>
                <strong>llm-cost-profiler</strong> — Lightweight profiler for token usage, latency and estimated cost across LLM calls (JSONL logging for analytics).
              </li>
              <li>
                <strong>Multi-agent PPT generator</strong> — LangChain + Gemini agents to generate branded PowerPoint presentations from internal documents.
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">Employment History</h3>
            <div className="mt-3 space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold">Verizon Data Services Inc. — Specialist, Digital Marketing (Prompt Engineering & RAG Systems)</h4>
                <p className="text-sm text-gray-600">2020 – Present · Chennai, India</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Designed and maintained prompt-based applications using Gemini and Vertex AI (Gemini 2.5 Pro / Flash models).</li>
                  <li>Built RAG systems (ingest → chunk → embeddings → vector search) using FAISS and Azure OpenAI for semantic search and enterprise Q&A.</li>
                  <li>Developed LangChain agents for PPT generation, campaign validation, and knowledge Q&A integrated with brand APIs.</li>
                  <li>Fine-tuned prompt workflows to improve semantic alignment and reduce hallucinations; improved LLM output relevance by ~25%.</li>
                  <li>Automated validation and QA with Python; led prompt feedback loops and internal tool integrations.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Automation Test Engineer II — Verizon (previous role)</h4>
                <p className="text-sm text-gray-600">(Dates overlapping) — Built automation frameworks, led a 9-member team for SIT/UAT, contributed to React fixes and SQL-based backend work.</p>
              </div>

              <div>
                <h4 className="font-semibold">Cognizant Technology Solutions — Associate</h4>
                <p className="text-sm text-gray-600">2016 – 2017, 2019 – 2020 · Chennai, India</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Developed UI/API test scripts (Selenium, Cucumber) and performed REST/SOAP testing using Postman & SoapUI.</li>
                  <li>Collaborated with global finance and healthcare clients and automated regression cycles (80% automation).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Hewlett Packard Enterprise — Associate</h4>
                <p className="text-sm text-gray-600">2018 – 2019 · Chennai, India</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Worked on macro/SAP-based order & pricing systems and SFDC validation; delivered quick turnarounds on quoting tasks.</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-6 text-lg font-medium">Education</h3>
            <p className="mt-2 text-gray-700">B.Tech in Bioinformatics — Sathyabama University, Chennai (2012 – 2016)</p>

            <h3 className="mt-6 text-lg font-medium">Certifications</h3>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Microsoft Azure AI Engineer — In progress</li>
              <li>Microsoft Azure AI Fundamentals</li>
              <li>GenAI for Everyone — Coursera</li>
              <li>Generative AI: Prompt Engineering Basics — IBM</li>
              <li>React.js Frontend Development — Meta (In progress)</li>
            </ul>
          </div>

          <aside className="p-4 rounded-lg border border-gray-100 bg-gray-50">
            <h3 className="text-lg font-medium">Skills & Tools</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
              <Badge>Python</Badge>
              <Badge>LangChain</Badge>
              <Badge>Streamlit</Badge>
              <Badge>OpenAI / Whisper</Badge>
              <Badge>Gemini / Vertex AI</Badge>
              <Badge>FAISS / Chroma</Badge>
              <Badge>SQL / Power BI</Badge>
              <Badge>Docker / CI</Badge>
            </div>

            <h3 className="mt-6 text-lg font-medium">Technical Summary</h3>
            <p className="mt-2 text-sm text-gray-700">Languages: Python, JavaScript, SQL, TypeScript</p>
            <p className="mt-1 text-sm text-gray-700">Frameworks & Tools: LangChain, Selenium, Playwright, PyTest, Cucumber, Jenkins, GitHub</p>

            <h3 className="mt-6 text-lg font-medium">Interests</h3>
            <p className="mt-2 text-sm text-gray-700">Volleyball · Guitar · Singing</p>

            <h3 className="mt-6 text-lg font-medium">Availability</h3>
            <p className="mt-2 text-sm text-gray-700">Open to relocation to the UK — Skilled Worker visa sponsorship required. Notice period: 60 days (negotiable to 30).</p>
          </aside>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Public Work & Links</h2>
          <div className="mt-3 space-y-3">
            <ProjectCard
              title="RAG-Talk"
              desc="Voice-enabled RAG assistant (Streamlit) — transcribe audio, create embeddings, search multi-KBs, and answer with grounded responses."
              link="https://github.com/BonifaceAlexander/RAG-Talk"
              live="https://rag-talk.streamlit.app/"
            />

            <ProjectCard
              title="llm-cost-profiler"
              desc="Profiler to track token usage, latency and estimated cost across LLM calls — JSONL sinks for analytics and reporting."
              link="https://github.com/BonifaceAlexander/llm-cost-profiler"
            />

            <ProjectCard
              title="Learn AI Playbook"
              desc="A public learning playbook (prompt-first) with plans to add RAG and agent chapters."
              link="https://learn-ai-playbook.vercel.app/"
            />
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-700">Email: <a href="mailto:bonnybon7@gmail.com" className="text-indigo-600 underline">bonnybon7@gmail.com</a> · Phone: +91 99403 65349</p>
          <div className="mt-4">
            <a href="mailto:bonnybon7@gmail.com" className="px-4 py-2 rounded-md bg-indigo-600 text-white font-medium">Email Me</a>
            <a href="https://github.com/BonifaceAlexander" target="_blank" rel="noreferrer" className="ml-3 px-4 py-2 rounded-md border border-gray-200">See GitHub</a>
            <button
              onClick={() => {
                const element = document.querySelector("main");
                const opt = {
                  margin: 0.4,
                  filename: "Boniface_Alexander_Resume.pdf",
                  image: { type: "jpeg", quality: 0.98 },
                  html2canvas: { scale: 2, useCORS: true },
                  jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
                };
                html2pdf().set(opt).from(element).save();
              }}
              className="ml-3 px-4 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-100"
            >
              Download PDF
            </button>
          </div>
        </section>

        <footer className="mt-8 text-sm text-gray-500">Built by Boniface Alexander — edit this template to match your preferences and deploy on GitHub Pages or Vercel.</footer>
      </main>
    </div>
  );
}

function ProjectCard({ title, desc, link, live }) {
  return (
    <div className="p-4 border border-gray-100 rounded-lg">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <div className="mt-3 flex gap-2">
        <a href={link} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-md border border-gray-200">Repo</a>
        {live && (
          <a href={live} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-md border border-gray-200">Live</a>
        )}
      </div>
    </div>
  );
}

function Badge({ children }) {
  return <span className="inline-block px-2 py-1 bg-white rounded-md border border-gray-200 text-xs">{children}</span>;
}
