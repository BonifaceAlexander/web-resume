import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Boniface Alexander — Portfolio React component

export default function BonifaceResume() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("ba:dark") : null;
    if (stored) setDark(stored === "1");
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("ba:dark", dark ? "1" : "0");
    }
  }, [dark]);

  const downloadPDF = async () => {
    try {
      if (typeof window === "undefined") return;

      const element = document.querySelector("main");
      if (!element) {
        alert("Resume content not found on the page.");
        return;
      }

      // Dynamic imports to avoid SSR/bundler issues
      const [{ default: html2canvas }, jspdfModule] = await Promise.all([
        import("html2canvas"),
        import("jspdf")
      ]);

      const { jsPDF } = jspdfModule;

      // Render element to canvas
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      // A4 in inches
      const pageWidthIn = 8.27;
      const pageHeightIn = 11.69;

      const pdf = new jsPDF({ unit: "in", format: "a4", orientation: "portrait" });

      // Calculate image size in inches for PDF width
      const imgWidthIn = pageWidthIn;
      const pxPerIn = canvas.width / imgWidthIn;
      const imgHeightIn = canvas.height / pxPerIn;

      // If content fits in one page, add and save
      if (imgHeightIn <= pageHeightIn) {
        pdf.addImage(imgData, "JPEG", 0, 0, imgWidthIn, imgHeightIn);
        pdf.save("Boniface_Alexander_Resume.pdf");
        return;
      }

      // Otherwise slice the canvas into page-sized pieces
      let positionPx = 0;
      const pageHeightPx = Math.round(pageHeightIn * pxPerIn);

      while (positionPx < canvas.height) {
        const sliceCanvas = document.createElement("canvas");
        const sliceHeightPx = Math.min(pageHeightPx, canvas.height - positionPx);
        sliceCanvas.width = canvas.width;
        sliceCanvas.height = sliceHeightPx;
        const ctx = sliceCanvas.getContext("2d");
        ctx.drawImage(canvas, 0, positionPx, canvas.width, sliceHeightPx, 0, 0, canvas.width, sliceHeightPx);
        const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.95);
        const sliceHeightIn = sliceHeightPx / pxPerIn;

        if (positionPx > 0) pdf.addPage();
        pdf.addImage(sliceData, "JPEG", 0, 0, imgWidthIn, sliceHeightIn);

        positionPx += sliceHeightPx;
      }

      pdf.save("Boniface_Alexander_Resume.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Could not generate PDF. See console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1020] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="fixed top-4 left-0 right-0 z-50">
        <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-white/60 dark:bg-black/40 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/profile.jpg" alt="Boniface Alexander" className="w-10 h-10 rounded-md object-cover" />
              <div className="hidden sm:block">
                <div className="text-sm font-semibold">Boniface Alexander</div>
                <div className="text-xs text-gray-600 dark:text-gray-300">AI Prompt Engineer • RAG & Agent Developer</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="#projects" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/5">Projects</a>
              <a href="#experience" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/5">Experience</a>
              <a href="#get-in-touch" className="text-sm px-3 py-2 rounded-md hover:bg-gray-100/60 dark:hover:bg-white/5">Contact</a>

              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent"
                aria-label="Toggle dark mode"
              >
                {dark ? "🌙" : "☀️"}
              </button>

              <button
                onClick={downloadPDF}
                className="ml-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm"
              >
                Download CV
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 1.2 }}
          className="absolute left-[-10%] top-10 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 blur-3xl mix-blend-multiply"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 1.6 }}
          className="absolute right-[-5%] bottom-10 w-80 h-80 rounded-full bg-gradient-to-br from-rose-400 to-yellow-400 blur-3xl mix-blend-multiply"
        />
      </div>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl bg-white dark:bg-[#071022] shadow-lg p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold">Boniface Alexander</h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">AI Prompt Engineer • RAG & Agent Developer.</p>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Chennai, India.</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href="https://github.com/BonifaceAlexander" target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">GitHub</a>
                    <a href="https://rag-talk.streamlit.app/" target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">RAG-Talk (Live)</a>
                    <a href="https://learn-ai-playbook.vercel.app/" target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">Playbook</a>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <img src="/profile.jpg" alt="Boniface Alexander" className="w-36 h-36 rounded-xl object-cover" />
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-6">
                <h3 className="text-lg font-semibold">Summary</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  I build production-ready LLM systems and developer tooling focused on Retrieval-Augmented Generation (RAG), AI Agents, agent orchestration, and
                  observability. I convert business needs into reliable AI agents, dashboards and reproducible open-source tools.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Stat title="Years experience" value="9+" />
                  <Stat title="GitHub AI Projects" value="7+" />
                </div>
              </div>
            </div>

            <section id="projects" className="mt-8">
              <h3 className="text-xl font-semibold">Selected Projects</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard
                  title="RAG-Talk"
                  tags={["Streamlit", "Voice", "RAG"]}
                  desc="Voice-first RAG assistant that transcribes audio, creates embeddings, searches multi-KBs and returns grounded responses."
                  repo="https://github.com/BonifaceAlexander/RAG-Talk"
                  live="https://rag-talk.streamlit.app/"
                />

                <ProjectCard
                  title="llm-cost-profiler"
                  tags={["Observability", "JSONL"]}
                  desc="Profiler to track tokens, latency and estimated costs for LLM calls — lightweight & production-friendly."
                  repo="https://github.com/BonifaceAlexander/llm-cost-profiler"
                />

                <ProjectCard
                  title="Multi-agent PPT generator"
                  tags={["LangChain", "Gemini"]}
                  desc="Agent pipeline that generates branded PowerPoint slides from internal documents and Excel timelines."
                />

                <ProjectCard
                  title="Learn AI Playbook"
                  tags={["Docs", "Prompts"]}
                  desc="Interactive playbook about prompt engineering and RAG — evolving into RAG and agent chapters."
                  live="https://learn-ai-playbook.vercel.app/"
                />

                <ProjectCard
                  title="Vision Prime Agent"
                  tags={["Python", "Agent"]}
                  desc="visionprime ∙ main ∙ app.py"
                  live="https://visionprime-yambasw2uvymkzdyqkeux3.streamlit.app/"
                />
              </div>
            </section>

            <section id="experience" className="mt-8">
              <h3 className="text-xl font-semibold">Experience</h3>
              <div className="mt-4 space-y-4">
                <ExperienceItem
                  title="Specialist, Digital Marketing — Verizon Data Services Inc."
                  date="2020 – Present"
                  bullets={["Built Agentic RAG and AI Agents", "Built prompt-based apps using Gemini & Vertex AI", "Designed RAG pipelines and LangChain agents", "Improved LLM relevance and reduced hallucinations"]}
                />

                <ExperienceItem
                  title="Automation Test Engineer II — Verizon"
                  date="(previous role)"
                  bullets={["Led SIT/UAT automation", "Built frameworks and contributed to front-end fixes", "Performed all DB development"]}
                />

                <ExperienceItem
                  title="Associate — Cognizant Technology Solutions"
                  date="2016 – 2017, 2019 – 2020"
                  bullets={["UI/API test automation", "Regression automation for global clients"]}
                />
              </div>
            </section>

          </motion.div>

          <aside className="space-y-6">
            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="rounded-2xl bg-white dark:bg-[#071022] shadow p-6">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Email: <a href="mailto:bonnybon7@gmail.com" className="text-indigo-500 underline">bonnybon7@gmail.com</a></p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Phone: +91 99403 65349</p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <SocialLink href="https://github.com/BonifaceAlexander">GitHub</SocialLink>
                <SocialLink href="https://linkedin.com/in/boniface-alexander">LinkedIn</SocialLink>
                <SocialLink href="https://rag-talk.streamlit.app/">Live Demo</SocialLink>
              </div>
            </motion.div>

            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }} className="rounded-2xl bg-white dark:bg-[#071022] shadow p-6">
              <h4 className="font-semibold">Skills</h4>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <Badge>Python</Badge>
                <Badge>LangChain</Badge>
                <Badge>Streamlit</Badge>
                <Badge>OpenAI / Whisper</Badge>
                <Badge>Gemini / Vertex AI</Badge>
                <Badge>FAISS / Chroma</Badge>
                <Badge>SQL / Power BI</Badge>
                <Badge>Docker / CI</Badge>
              </div>
            </motion.div>

            <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.14 }} className="rounded-2xl bg-white dark:bg-[#071022] shadow p-6">
              <h4 className="font-semibold">Education</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">B.Tech in Bioinformatics — Sathyabama University (2012 – 2016)</p>

              <h4 className="mt-4 font-semibold">Certifications</h4>
              <ul className="mt-2 text-sm list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Microsoft Azure AI Fundamentals</li>
                <li>Generative AI: Prompt Engineering Basics — IBM</li>
                <li>GenAI for Everyone — Coursera</li>
              </ul>
            </motion.div>
          </aside>
        </section>

        <section id="get-in-touch" className="mt-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="rounded-2xl bg-white dark:bg-[#071022] shadow p-8">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">I’m open to collaborations, consulting and full-time roles in AI engineering. Feel free to reach out.</p>
            <div className="mt-4 flex gap-3">
              <a href="mailto:bonnybon7@gmail.com" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Email Me</a>
              <a href="https://github.com/BonifaceAlexander" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border">See GitHub</a>
            </div>
          </motion.div>
        </section>

        <footer className="mt-8 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Boniface Alexander</footer>
      </main>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-md border border-gray-100 dark:border-gray-800 p-3">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}

function ProjectCard({ title, desc, tags = [], repo, live }) {
  return (
    <motion.a
      whileHover={{ y: -6 }}
      className="block rounded-2xl border border-gray-100 dark:border-gray-800 p-4 bg-white dark:bg-[#071022] shadow"
      href={repo || '#'}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-gray-200 dark:border-gray-700">{t}</span>
            ))}
          </div>
        </div>
        <div className="text-sm flex flex-col gap-2">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md border">Live</a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md border">Repo</a>
          )}
        </div>
      </div>
    </motion.a>
  );
}

function ExperienceItem({ title, date, bullets = [] }) {
  return (
    <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#071022]">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{date}</div>
        </div>
      </div>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md border text-sm">{children}</a>
  );
}

function Badge({ children }) {
  return <span className="inline-block px-2 py-1 bg-white/70 dark:bg-white/5 rounded-md border border-gray-200 dark:border-gray-800 text-xs">{children}</span>;
}
