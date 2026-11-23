# University Faculty AI Agent Cases: Curated Reference Catalog

*Curated public reference for the DKU Faculty Workshop: Agentic Workflow with Codex (compiled November 2026).*  
*Note: Entries below document publicly shared faculty, researcher, and university-support practices across multiple AI tools (Codex, Claude Code, ChatGPT Edu, v0, etc.). Listing an external practice does not imply that identical platform connections or student-data workflows are automatically approved at DKU.*

---

## How to Browse This Catalog

Cases are grouped by **what the final task achieves**—matching the two parts of the workshop:
1. **Part 1 · Workflow Automation:** Reading multiple files, organizing or checking materials, updating course/project documents, or building reusable step-by-step Skills.
2. **Part 2 · Vibe Coding & Custom Tools:** Building interactive webpages, HTML slides, concept simulations, data dashboards, or lightweight utilities and plugins for teaching and research.

---

## Part 1 · Workflow Automation

### 1.1 Course Preparation, Materials & Reusable Skills

* **DKU · Changcheng Zheng (Physics)** — Took existing PHYS 121/201 homework problems and used ChatGPT to rewrite them with built-in hints and step-by-step scaffolding so students attempt solutions before seeing answers (includes before/after comparisons).  
  [DKU CTL Member Reflection](https://ctl.dukekunshan.edu.cn/programs/faculty-learning-community/2025-program/member-reflection-zheng)
* **Penn Carey Law · R. Polk Wagner (Law)** — Built and published open-source reusable **Agent Skills** for faculty: `docx-comment-summary` (batch-extracts Word comments, authors, and context across multiple `.docx` files into Markdown), `materials-md`, and `law-class-prep` (checks alignment across syllabus, readings, slides, and discussion questions).  
  [Penn Carey Law AI Project](https://resources.pennai.law/claude-skills.html) · [GitHub Skills Repo](https://github.com/polkwagner/law-faculty-skills)
* **University of Vermont · Erkmen Aslim (Economics)** — Demonstrated a multi-step agent workflow that extracts structured findings with citations from academic papers and transforms them into lecture notes, slides, discussion prompts, and exam items.  
  [Teaching Deck & Prompts PDF](https://thinkingwithagents.github.io/webinar-jun2026/twa-teaching-deck-erkmen.pdf)
* **Boston College Law · Raúl Carrillo & Kyle Fidalgo** — Fed an existing contract-negotiation teaching plan and spoken notes into Claude to generate ~10 coordinated classroom files (role sheets, evidence packets, guides, and templates), reviewing dates and details before class; separately packaged transcript summarization into a reusable Skill.  
  [BC Law Practice Write-up](https://sites.bc.edu/bclawedtech/2026/02/20/contract-interpretation-can-ai-even-do-this/) · [Workshop Recap](https://sites.bc.edu/bclawedtech/2026/01/09/workshop-creating-course-resources-with-ai/)
* **Northeastern University · Lilo Altali** — Adapted a single multi-week course project into tailored industry scenarios (construction, fashion, etc.) with matching weekly updates, policy memos, and budget changes reviewed by the instructor.  
  [Northeastern AI Gallery](https://learning.northeastern.edu/ai-gallery-post-personalization-at-scale-ai-generated-case-study-simulations/)
* **Northeastern University · Tomás Galguera (Education)** — Used Claude Projects with course documents and pedagogical goals as an ongoing course-design partner to iterate on Canvas HTML pages and teaching notes.  
  [Northeastern AI Gallery](https://learning.northeastern.edu/ai-gallery-post-using-claude-projects-as-a-pedagogical-thinking-and-course-design-partner/)
* **University of Wisconsin–Oshkosh · Steven A. Schilhabel** — Analyzed text-heavy legacy slide decks into structured tables and speaker notes, then used Python (`python-pptx`) to rebuild cleaner PowerPoint files.  
  [Published Paper PDF](https://iacis.org/iis/2025/2_iis_2025_244-257.pdf)

### 1.2 Course Operations, Transcripts & Personal Workflows

* **Cal Poly Maritime / Yale Workshop · Taiyo Inoue (Mathematics)** — Used Codex (and Claude Code in a Yale Poorvu Center workshop) to update Canvas modules, schedules, announcements, and due dates from a calendar and syllabus.  
  [Yale Poorvu Center Takeaways](https://poorvucenter.yale.edu/takeaways-from-a-workshop-on-claude-code-and-canvas-krish-ramkumar-pauli-murray-28) · [Faculty Interview](https://academy.openai.com/public/blogs/taiyo-inoue-codex-canvas-teaching)
* **University of Houston · Seth Chandler (Law)** — Built a batch workflow with Claude Code to clean six class Zoom `.vtt` transcripts (removing administrative chatter), convert them to Markdown, and pair them with NotebookLM for student study guides (includes scripts and Skill files).  
  [Workflow Write-up & Scripts](https://legaled.ai/turn-zoom-transcripts-into-study-materials-with-claude-code-and-notebooklm/)
* **University of Chicago · Chris Blattman (Public Policy)** — Open-sourced his personal Claude Code workflows and Skills for recurring faculty work—triaging email categories into action items, preparing for meetings, and tracking ongoing projects.  
  [Workflow Overview](https://claudeblattman.com/) · [GitHub Repo](https://github.com/chrisblattman/claudeblattman)
* **University of Illinois · Vishal Sachdev (Business)** — Built a curriculum-coordination assistant with Claude to extract decisions from project communications and keep shared program documents updated.  
  [Faculty Write-up](https://chatwithgpt.substack.com/p/when-your-curriculum-talks-back-building)
* **University of Vermont · Emily Beam (Economics)** — Demonstrated a human-in-the-loop grading draft workflow: exporting de-identified assignments, drafting rubric feedback, running verification scripts, and reviewing before re-importing CSVs.  
  [Webinar Deck PDF](https://thinkingwithagents.github.io/webinar-jun2026/twa-teaching-deck-emily.pdf)

### 1.3 Research Data, Grants & Academic Administration

* **Duke University OIT · Jessica Nash (AI Accelerator)** — Public CC BY 4.0 curriculum demonstrating how to use Codex with public library borrowing data for reproducible trend analysis, verification checks, and reusable Skills.  
  [Duke Analytics Accelerator](https://analytics-accelerator.colab.duke.edu/)
* **University of Oxford · Anthony Harris (Research Fellow)** — Used Codex and Python scripts to re-OCR early manuscript catalogs, extract structured fields into Excel, classify entries, and export TEI XML with human spot-checking.  
  [Oxford AI Case Study](https://oerc.ox.ac.uk/ai-centre/ai-in-research-case-studies/improved-access-to-early-manuscripts-using-codex)
* **University of Oxford · Emmanuelle Denis (Operations)** — Used ChatGPT Edu Projects to cross-check grant applications and budget justifications against funder guidelines and standardize meeting minutes.  
  [Oxford AI Case Study](https://oerc.ox.ac.uk/ai-centre/ai-in-professional-services-case-studies/streamlining-grant-writing-and-operations-with-chatgpt-edu)
* **Stanford / HKBU · Yiqing Xu & Leo Yang Yang (Political Science)** — Preprint and Stanford report examining how coding agents (Claude Code, ChatGPT) assist with empirical social-science replication, environment reconstruction, and numerical checks.  
  [Preprint (arXiv)](https://arxiv.org/html/2602.16733v2) · [Stanford News](https://news.stanford.edu/stories/2026/04/ai-social-science-empirical-research)
* **WHU · Dries Faems (Management)** — Demonstrated having an AI agent read comments inside an existing Word manuscript draft and return a revised `.docx` with tracked changes.  
  [Demo Post](https://www.linkedin.com/posts/dries-faems-0371569_working-in-word-will-never-be-the-same-activity-7435717801199321088-DHuh)
* **Duke University OIT · David Zielinski (AR/VR Specialist)** — Used Claude Code + Python + Blender to batch-repair and replace 48 3D asset components in a faculty digital-humanities project, iterating via visual renders and human checks.  
  [Duke Co-Lab Blog](https://ai.colab.duke.edu/colab-ai-blog/all-blogs/i-never-learned-blender-i-fixed-our-3d-model-anyway/)

---

## Part 2 · Vibe Coding & Custom Tools

### 2.1 Interactive Course Pages, HTML Slides & Guided Labs

* **Khalifa University · Laurent Alain Najman (Mathematics)** — Built a complete 15-week course website and browser-based Quarto/RevealJS HTML lecture slides with Codex, publicly documenting his LLM workflow and progress log.  
  [Course Website](https://lnajman.github.io/math346/index.html) · [Sample HTML Slides](https://lnajman.github.io/math346/slides/week-08.html) · [Instructor LLM Notes](https://lnajman.github.io/math346/llm-use.html)
* **University of Sydney · Thomas Elton** — Iterated from a `lesson_plan.md` file with Claude Code to build a guided interactive student lab combining visual explainers, short videos, Colab notebooks, and ethics questions.  
  [Live Interactive Lab](https://tjelton.github.io/LLM-Model-Training-Fine-Tuning-Lab/) · [How It Was Built](https://tjelton.com/2026/05/12/generating-a-university-lab-with-claude-code/)
* **CSU Chico · Melinda Jackson (Spanish)** — Built a single-page Spanish 101 practice site with Codex chaining reading comprehension, self-check hints, and speaking preparation.  
  [Practice Webpage](https://spanish-101-ipa-prep.mgj608062563477.chatgpt.site/)
* **University of Washington Tacoma · Charles Bryan** — Used Claude Code to reorganize two linked courses into interconnected course websites with syllabi, labs, language guides, and transcripts.  
  [Faculty Talk & Course Links](https://cfb3.github.io/AI-TALKS/talks/build-course-materials-with-ai/)
* **Duke Innovation Co-Lab** — Introductory 2-hour no-coding workshop teaching participants to design and publish a single-page website using Codex.  
  [Duke Event Overview](https://iss.duke.edu/events/building-publishing-your-webpage-codex)

### 2.2 Interactive Concept Simulations & Classroom Activities

* **University of Oxford · Matt Rattley (Biochemistry)** — Built an interactive 3D peptide geometry explorer with Codex allowing students to rotate molecules and adjust backbone angles with synchronized projections.  
  [Live 3D Explorer](https://mattrattley.com/peptide-geometry-explorer.html)
* **University of Wollongong · Albert Munoz & Laura Rook (Operations Management)** — Created nine browser-based HTML/JS business simulations (including Supermarket Checkout and Campus Vending Machine) used across three semesters and published in a peer-reviewed paper.  
  [GitHub Simulations Repo](https://github.com/amunozUOW/Operations_Management_Simulations) · [Research Paper](https://doi.org/10.3390/educsci16040558)
* **University of Vermont · Erkmen Aslim (Economics)** — Built an interactive browser-based Supply & Demand explorer where students predict cost-shift effects before moving sliders.  
  [Live Supply & Demand Explorer](https://thinkingwithagents.github.io/webinar-jun2026/supply-demand-explorer.html)
* **Duke University · Alex Steiger (Computer Science)** — Showcased using an AI agent and Skills to convert existing course materials into interactive Marimo notebooks with live controls and mathematical explanations.  
  [Duke AI Summit Showcase](https://ai.duke.edu/duke-ai-in-education-summit/showcase/)
* **KTH Royal Institute of Technology · Ali Wanis Ali Elshaari (Physics)** — Combined Claude Code, Manim, and LaTeX to turn optics lecture notes into physics-driven animated slides with a public starter kit.  
  [Faculty Page & Demos](https://www.kth.se/profile/elshaari/page/physics-lectures-where-the-experiments-run-on-screen?l=en)
* **Ohio State University Moritz College of Law · Rebecca Fordon** — Built eight small vibe-coded legal teaching tools in one semester—including a team-based Citation Hallucination Game and a Document Technology Gallery.  
  [Document Tech Gallery](https://doc-tech-gallery.onrender.com/) · [Faculty Reflections](https://www.ailawlibrarians.com/2026/03/04/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/)

### 2.3 Interactive Data Dashboards & Research Project Hubs

* **Duke University OIT · Interactive Library Data Dashboard** — Public library borrowing CSV turned into a filterable single-page HTML dashboard with downloadable source data and open sample prompts.  
  [Live Dashboard](https://dashboard-starter-with-examples-8c1afe.pages.oit.duke.edu/) · [Sample Prompts](https://analytics-accelerator.colab.duke.edu/session-3-analysis-to-dashboard/static-dashboard-prompts.html)
* **Harvard Graduate School of Education · Karen Brennan** — Used v0 to build a public research hub sharing her lab's generative AI teaching strategies, case studies, and downloadable guides.  
  [Research Project Hub](https://creativecomputing.gse.harvard.edu/genai/) · [Harvard Gazette Interview](https://news.harvard.edu/gazette/story/2026/04/vibe-coding-may-offer-insight-into-our-ai-future/)
* **Oxford Internet Institute · Francisco W. Kerche** — Built an interactive companion website (`inequalities.ai`) allowing readers to explore published research findings on geographic bias across countries and cities.  
  [Live Dashboard](https://inequalities.ai/) · [Oxford Case Study](https://oerc.ox.ac.uk/ai-centre/ai-in-research-case-studies/mapping-geographical-bias-with-genai)

### 2.4 Custom Research & Teaching Mini-Apps and Plugins (2026)

* **LSHTM · Adam Kucharski (Epidemiology) — `pdf2plot`** — Rebuilt his R chart-extraction workflow as a browser app using Claude Code: upload a vector PDF chart (built-in sample included), calibrate axes, and export underlying values to CSV.  
  [Live Web App](https://adamkucharski.github.io/pdf2plot/) · [GitHub Repo](https://github.com/adamkucharski/pdf2plot)
* **University of Virginia · Stephen D. Turner (Data Science) — `Trailmix` & `Grantbar`** — Built two lightweight macOS menu-bar utilities with Claude Code (and cross-checked with Codex): `Trailmix` for local on-device meeting recording/transcription, and `Grantbar` for monitoring NIH/NSF grant RSS feeds.  
  [Trailmix Write-up](https://blog.stephenturner.us/p/trailmix-app-record-transcribe-locally-on-device) · [Grantbar Repo](https://github.com/stephenturner/grantbar)
* **University of South Carolina · S. Wright Kennedy (History) — Zotero Plugin Port & Scholar Finder** — Used Claude Code to port the unmaintained *Paper Machines* digital-humanities plugin to Zotero 10, and built a custom Zotero helper that finds scholars in his reference library affiliated with a university he plans to visit.  
  [Conference Demo & Transcript](https://proflouishyman.github.io/ai_conference_2026/talks/S18.html)
* **Clark College · Bruce Elgort (Computer Technology) — `EarlyARC`** — Built a macOS app with Claude Code that scans Canvas assignment signals to flag students who may need outreach, explaining why each student was flagged and preparing editable message templates (includes mock-data demo mode).  
  [App Page & Mock Screenshots](https://earlyarc.app/) · [Developer Post](https://bruceelgort.com/2026/08/02/canvas-knows-which-students-are-struggling-it-just-doesnt-tell-you/)
* **Shizuoka Institute of Science & Technology · Adam Jenkins — `Textless Forum` (Moodle Plugin)** — Used an AI coding agent to build an open Moodle plugin enabling students to post voice and video replies directly in forum discussions for asynchronous speaking practice.  
  [Moodle Plugin Page](https://marketplace.moodle.com/plugins/3928) · [Conference Presentation](https://events.jalt.org/event/96/contributions/2575/)
* **UIUC · John Clark (Architecture) — `Good Tools`** — Built a suite of studio web utilities (including `Surveyor` for sun, climate, topography, and zoning site analysis) using natural language with Claude Code.  
  [Toolkit Overview](https://toolkit.allmeans.works/) · [Surveyor](https://toolkit.allmeans.works/site-analysis)
* **UIUC · Geoffrey Challen (Computer Science) — `Educators Who Build`** — Built a reusable campus demo-day web app with Claude Code to handle faculty registration, presentation order, screen projection, and post-event feedback.  
  [Illinois Demo Site](https://illinois.educatorswhobuild.org/) · [Project Notes](https://www.geoffreychallen.com/ai#community)
* **University of Sussex · David M. Berry (Digital Humanities) — `Critical Code Studies Workbench`** — Built a collaborative research workbench with Claude Code allowing a humanities seminar to annotate classic source code (such as ELIZA) line by line.  
  [Development Notes](https://stunlaw.blogspot.com/2026/02/vibe-decoding-building-critical-code.html) · [GitHub Repo](https://github.com/Computational-Hermeneutics/CCS-WB-classic)
* **Abdullah Gül University & Univ. of Queensland · Mustafa Özer & Peter Crosthwaite — `VetLingua`** — Built a discipline-specific academic writing and vocabulary web app grounded in a veterinary research corpus, and published their iterative AI development methodology.  
  [VetLingua](https://vetlingua.com/) · [Methodology Paper](https://doi.org/10.1016/j.rmal.2026.100356)
