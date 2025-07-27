Eidos Design Copilot – README
🚀 Overview
Eidos Design Copilot is a visual, AI-powered platform for creating, editing, and managing design systems with zero coding.
Features include a drag-and-drop playground (Blocks UI), ready-to-use component templates, real-time AI audits, and one-click deploy on Vercel with Supabase integration.

✨ Features
Visual editor/playground (Blocks UI-based, drag-and-drop)

Fully editable design system projects (import/export JSON)

Component library (your exact base list, editable)

Rules/knowledge base (import/export JSON, always editable)

AI Copilot (feedback, audit, suggestions, with user API keys)

Deployable on Vercel

Persistent storage via Supabase (with fallback to local browser storage)

Modern UI (DaisyUI, MagicUI, or shadcn/ui)

100% English documentation & UI

🛠️ Getting Started
1. Clone the repo
bash
Copiar
Editar
git clone https://github.com/your-org/eidos-design-copilot.git
cd eidos-design-copilot
2. Install dependencies
bash
Copiar
Editar
npm install
3. Set up Supabase (optional but recommended)
Go to supabase.com and create a free account.

Create a new project.

Go to Project Settings > API and copy your Project URL and anon/public API key.

Create the following tables in Supabase (SQL Editor):

sql
Copiar
Editar
-- Projects table
create table projects (
  id uuid default uuid_generate_v4() primary key,
  name text,
  data jsonb,
  created_at timestamp default now()
);

-- Components table
create table components (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references projects(id),
  name text,
  category text,
  description text,
  properties jsonb
);

-- Rules table
create table rules (
  id uuid default uuid_generate_v4() primary key,
  project_id uuid references projects(id),
  rule text,
  category text,
  example text
);
4. Create your .env.local file
env
Copiar
Editar
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
If you don’t want to use Supabase, the app will store data in your browser (localStorage/IndexedDB).

5. Run locally
bash
Copiar
Editar
npm run dev
Visit http://localhost:3000 to see Eidos in action.

6. Deploy on Vercel
Go to vercel.com, sign in with GitHub, and import your repo.

Set the environment variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) in the Vercel project settings.

Click Deploy — you’re live!

⚡ Configuration for Blocks UI & UI Libraries
Blocks UI is used as the visual playground/canvas.

DaisyUI, MagicUI, or shadcn/ui + Tailwind are used for the dashboard, panels, dialogs, forms, etc.

You can customize styles freely, but DO NOT change the default component list or rules unless editing via the UI.

🧩 Import/Export JSON
Projects, components, and rules can be imported/exported as JSON at any time.

All JSON structures must match the provided templates (see sample-components.json, sample-rules.json, and sample-project.json in the repo).

Exports are ready for Figma plugins, Storybook, or other tools.

🤖 AI Copilot Setup
In the Settings/API Key panel, enter your own OpenAI, Groq, Mistral, or Gemini API key.

API keys are never stored on our servers — only in your browser/session.

If no key is set, AI features will be disabled until you add one.

🧑‍🎨 How to use Eidos
Start a new project from scratch, import, or use the Eidos Base System.

Edit visually using the drag-and-drop playground.

Add, edit, or remove components and rules in real time.

Ask the AI Copilot for audits, feedback, or suggestions (AI always uses your loaded rules).

Export your project as JSON when done (for Figma, Storybook, etc.).

🏗️ Customization & Advanced
You can extend, fork, or style the app further using DaisyUI, MagicUI, or shadcn/ui.

For advanced users:

Adapt the Supabase schema for multi-user or future authentication.

Integrate new AI providers or design system marketplaces.

📝 Contributing
PRs and issues welcome! Please keep your changes in line with the Eidos philosophy:
designer-first, simple, no vendor lock-in, always editable.

📄 License
MIT License.
© 2024 Eidos Design Copilot, your-org.

📦 Sample JSON Files
See /samples/ for:

components-base.json

rules-base.json

project-example.json

🙌 Questions?
Open an issue or contact Vlad & the team!


## Quick Start

Run `npm install` then `npm run dev` to launch the app locally at http://localhost:3000.
