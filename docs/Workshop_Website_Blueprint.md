# Faculty Workshop: Agentic Workflow with Codex · Website Blueprint

> **Purpose:** Single source of truth used to plan, iterate, and generate the workshop website and printed handout.

---

## 0. Global Website Design & Interactive Features

* **Hosting & Format:** Static single-page website (HTML/CSS/JS) hosted on **GitHub Pages** (no login required, direct access on campus Wi-Fi, hosting 6 downloadable starter files).
* **Visual Style:** Bold Swiss high-contrast academic layout with section color-coding:
  * **Opening, Quick Tips, Personal Project, Padlet & FAQ:** DKU Navy & Ice Blue
  * **Part 1 (Workflow Automation):** Academic Forest Green & Sage
  * **Part 2 (Vibe Coding):** Warm Terracotta & Sand
* **Sticky Top Navigation:** `Opening` · `Part 1: Workflow` · `Part 2: Vibe Coding` · `Quick Tips` · `Personal Project` · `Padlet` · `FAQ`.
* **Core Interactive Components:**
  1. **One-Click Copy Prompt Buttons:** Every demo and reference case prompt includes a `Copy` button that flashes `Copied ✓`.
  2. **Interactive Demo Checkboxes:** Clickable step checkboxes in Demo 1 and Demo 2 with local browser persistence.
  3. **Direct Single-File Downloads (No ZIP):** 6 standalone files stored in `files/`:
     * `File 1A`: `DKU_Calendar_2026-2027.pdf`
     * `File 1B`: `Sample_Syllabus_Spring2025.docx`
     * `File 2A`: `Sheldon_Sample_CV.docx`
     * `File 2B`: `Sheldon_Portrait.png`
     * `File 3A`: `Sample_Lesson_Plan_Week2.docx`
     * `File 4A`: `OWID_AI_Scholarly_Publications_by_Country.csv`

---

## Section 1 · Hero & Opening

### 1.1 Hero Header
* **Title:** Faculty Workshop: Agentic Workflow with Codex
* **Subtitle:** A hands-on introduction for faculty across disciplines · No coding experience required
* **Quick Note Banner:** *Today's exercises use mock or non-sensitive materials. Institutional permissions for real student records or live campus systems will be gathered and clarified separately with CTL & IT.*

### 1.2 Two-Hour Schedule

| Time | Session | What You'll Do |
| :--- | :--- | :--- |
| 0–5 min | Opening | Quick intro: Chatbots vs. AI Agents |
| 5–35 min | **Part 1 · Workflow Automation** | Practice multi-file agent workflows *(demo: update a syllabus & generate a Canvas import file)* |
| 35–65 min | **Part 2 · Vibe Coding** | Practice building & refining webpages *(demo: CV to personal website)* |
| 65–90 min | **Personal Project** | Try Codex on one small task from your own work |
| 90–115 min | **Gallery Walk** | Two rounds of informal peer sharing |
| 115–120 min | **Wrap-Up** | Q&A and share ideas/projects on Padlet |

### 1.3 Opening Visual: From Talking to Doing (Chatbots vs. AI Agents)
* **Left · Chatbot** *(ChatGPT web, Claude chat)* — **The Brain (in a chat window)** · `Chat · Answer · Draft`: Mainly works inside a chat window—great for brainstorming, answering questions, and drafting text, while **you** handle the files and next steps.
* **Right · AI Agent** *(Codex, ChatGPT Work, Claude Code, Antigravity)* — **The Brain + Hands & a Toolbelt** · `Read · Use Tools · Execute · Iterate`: Works directly inside your project folder—reading files, using tools, and delivering real outputs for you to review and refine:
  1. **Project Folders** *(read multiple files at once)*
  2. **Documents & Files** *(edit Word with Track Changes, create `.imscc` / CSV)*
  3. **Webpages & Tools** *(build, preview & refine HTML pages or mini-apps)*
  4. **Scripts & Platforms** *(run code, connect authorized tools)*

---

## Section 2 · Part 1: Workflow Automation

### 2.1 Concept Framing
*What it is:* Letting Codex read multiple files in a folder, carry out multi-step edits, and produce new files. **Updating a syllabus is just one starter demo**—the same workflow applies to much of our everyday multi-file work, such as course prep, research synthesis, and more.

### 2.2 Demo 1: Update a syllabus & generate a Canvas import file

| Step | What to Do & Sample Prompts |
| :--- | :--- |
| **Step 1 · Set up project** | 1. Create a folder `Demo 1` on your Desktop. 2. Download `File 1A` (`DKU_Calendar_2026-2027.pdf`) and `File 1B` (`Sample_Syllabus_Spring2025.docx`) into `Demo 1`. 3. In Codex, click **Create project**, name it `Demo 1`, and add your Desktop folder `Demo 1`. |
| **Step 2 · Update syllabus** | Sample prompt: *"Use the DKU academic calendar to update the Spring 2025 Session 3 syllabus for Fall 2026 Session 1. Classes meet Tuesdays and Thursdays from 12:00 to 14:30 in IB 2013, with office hours on Tuesdays from 11:00 to 11:45 in IB 2043. Save a separate Word copy with Track Changes and flag anything you can't determine."* |
| **Step 3 · Review & accept** | 1. Open the new Word file and verify key details against the DKU calendar. 2. Once everything looks right, choose **Accept All Changes** and save your updated Fall syllabus. |
| **Step 4 (Bonus) · Canvas import file** | 1. Sample prompt: *"Use the new syllabus to create a course file I can import into Canvas."* 2. Create a test course in Canvas, import the generated `.imscc` file, and check whether the modules, assignments, and due dates look right. |

### 2.3 Part 1 Reference Cases (Collapsible Cards)
* **Reference Case 1 · Course Prep: From Course Materials to Teaching Resources** — Draft an assignment sheet & rubric in Word from `File 1B`, plus university examples (DKU CTL Changcheng Zheng, Northeastern, University of Vermont).
* **Reference Case 2 · Connect to Other Platforms (Google Drive, Zotero, Zoom)** — Summarize 3 shared meeting notes in Google Drive and write back an action tracker into `Outputs`, plus Zoom & Zotero plugin examples.

---

## Section 3 · Part 2: Vibe Coding / AI coding

### 3.1 Concept Framing
*What it is:* Describing what you want in everyday language—English, Chinese, or a mix of both—so Codex builds a working webpage or small digital tool that you can preview, check, refine, and even publish. **A personal website is just an accessible first demo**—the exact same loop works for HTML slides, concept simulations, data dashboards, and even custom tools and apps to solve everyday teaching and research problems.

### 3.2 Demo 2: Turn a CV into a personal website
* **Real Faculty Websites for Inspiration:** Yisu Zhou (DKU) · Dirk Schieborn (Reutlingen Univ.) · Gary King (Harvard) · Brandon Stewart (Princeton)

| Step | What to Do & Sample Prompts |
| :--- | :--- |
| **Step 1 · Set up project** | 1. Create a folder `Demo 2` on your Desktop. 2. Download `File 2A` (`Sheldon_Sample_CV.docx`) and `File 2B` (`Sheldon_Portrait.png`) into `Demo 2` (or swap in your own public CV/photo). 3. Create project `Demo 2` in Codex. |
| **Step 2 · Generate & preview** | Sample prompt: *"Use the CV and portrait in the folder to create a personal website for Sheldon Cooper."* Preview and inspect the HTML file. |
| **Step 3 · Check & revise** | Make at least 1 edit via **Annotation** or **Chat** (e.g., *"Add an Office Hours section"*, or *"Give the website a Star Wars-inspired look"*), then refresh your browser. |
| **Step 4 (Optional) · Publish online** | Sign up at `github.com` and send Codex: *"Help me publish this website to GitHub Pages and give me a shareable link."* |

### 3.3 Part 2 Reference Cases (Collapsible Cards)
* **Reference Case 3 · Course Pages & HTML Slides** *(Quick Demo with `File 1B` + `File 3A`)* — Build a single-file HTML slide deck from a syllabus and Week 2 lesson plan; includes Khalifa University, University of Sydney, CSU Chico, Harvard GSE, and This Workshop Website itself.
* **Reference Case 4 · Data Dashboards & Visualizations** *(Quick Demo with `File 4A` real public OWID dataset)* — Build an interactive HTML data dashboard from a CSV and optionally compare with Our World in Data's official visualization; includes Duke Library Dashboard and Oxford Geographic Bias Dashboard.
* **Reference Case 5 · Interactive Simulations & Learning Games** *(Inspiration Showcase)* — UVM Supply & Demand, Into the Magma Chamber, Oxford 3D Peptide Explorer, The Ames Room, Apothecary Simulator (1680s Mexico City RPG), and WeTeachWithAI Gallery.
* **Reference Case 6 · Custom Tools & Apps** *(Inspiration Showcase)* — `pdf2plot`, `Grantbar`, and `Overhead`.

---

## Section 4 · 4 Quick Tips for Working with Codex

1. **Start simple and iterate:** Don't try to write a perfect prompt in one go. Ask for a simple first version, look at what Codex builds, and adjust one thing at a time in everyday language—English, Chinese, or a mix of both.
2. **Use a screenshot as your prompt:** Like the look of a dashboard, activity page, or website? Take a screenshot of it, drop it into your folder with your own data or text, and tell Codex: *"Build an HTML page for my file using a similar layout and visual style to this screenshot."*
3. **For complex tasks, plan before you build:** Today's sample prompts generate a file in one step so you can try them quickly. For larger projects—like this workshop website—don't jump straight to the final output. Let Codex read your materials first, talk through ideas back and forth, and save an outline or Markdown blueprint. Once the plan looks right, ask Codex to generate the final file and refine it.
4. **Stay in the driver's seat and check key decisions:** When trying a new task, review Codex step by step so you see how it works. Once a routine workflow becomes familiar, you can let Codex handle more of the legwork while you keep checking the key decisions and final outputs.

---

## Section 5 · Personal Project & Gallery Walk

### 5.1 Personal Project Time: Build a First Version

| Track | What to Try |
| :--- | :--- |
| **Track 1 · Build on a Demo** | Continue refining one of today's two demos—using the sample files or swapping in your own syllabus or CV. |
| **Track 2 · Adapt a Reference Case** | Pick a case from the **Reference Cases** above and adapt its sample prompt to your own course or research. |
| **Track 3 · Try Your Own Idea** | Start from a small task in your own teaching or research—put 1–2 non-sensitive files in a folder and experiment on your ideas! |

### 5.2 Gallery Walk (Peer Sharing)
1. **Prepare your sign:** Write your project or idea title in large letters on the **Gallery Walk Sign** section of your Handout and display it next to your laptop.
2. **Two rounds of Gallery Walk:** Round 1: Half of the room stays at their laptops to share; the other half walks around to explore. Round 2: Switch roles!

---

## Section 6 · Wrap-Up: Embedded Padlet

* **Your project or idea:** Share a short note, screenshot, or link so more DKU colleagues can see what you tried.
* **Questions & support:** Post any questions or next-step support you'd like from DKU.
* **Embedded Board:** Live Padlet iframe (`https://padlet.com/embed/s025pc4zxzkm53ienyfg`) + fallback button to open in a new tab.

---

## Section 7 · FAQ (Collapsible Accordion)

1. **Q1:** Why are we using Codex today instead of ChatGPT Work or regular ChatGPT?
2. **Q2:** Can I use real student work with Codex?
3. **Q3:** Do I have to publish an HTML webpage online to use or share it? *(Option 1: regular file; Option 2: GitHub Pages or ChatGPT Sites)*
4. **Q4:** Which file formats work best with Codex (Word / PPT vs. Markdown / HTML)?
5. **Q5:** What if I have a lot of background context to explain—do I have to type it all out? *(Voice input: Doubao Input / 豆包输入法, Shandianshuo / 闪电说, Typeless)*
