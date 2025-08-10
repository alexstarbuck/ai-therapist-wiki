---
id: instructions-for-publishing
slug: instructions-for-publishing
title: Instructions For Publishing
sidebar_label: Publishing instructions
tags:
  - eu
  - gajger
parent: 
source: 
date_created: 2025-07-25 18:51
---

## VERY high level explanation

| Tool                 | Purpose                                                                   |
| -------------------- | ------------------------------------------------------------------------- |
| **Obsidian**         | Writing your notes in Markdown (GUI)                                      |
| **Markdown**         | The language your notes are written in — portable and readable            |
| **Docusaurus**       | Turns Markdown into a structured website (docs, navigation, build system) |
| **Node script**      | Copies vault → Docusaurus .../docs/ folder, adjusts internal links        |
| **Git**              | Tracks changes and syncs the whole project to GitHub                      |
| **GitHub Pages**     | Hosts your final website at a public URL                                  |
| **Local dev server** | Lets you test the site on your machine (`npm run serve`)                  |

## Obsidian → GitHub Pages (via Docusaurus) Publishing Pipeline

This is a standardized workflow for maintaining clean, publishable project Wikis from within Obsidian.

---
### 1. ✍️ Writing the Notes

- Write in Obsidian, as usual, within your vault;
- Keep all content in proper Markdown format `.md`;
- Feel free to use `[Wiki-Style](Wiki-Style)` links here;
	- (see #5 here below, regarding the concept of "*frontmatter*"!);
- If any attachment files, keep them in an `/attachments` folder WITHIN the project root, NOT in a global vault's `/attachments` folder;

---
### 2. 🧱 Naming Conventions

- Use **kebab-case** for all filenames:
	- ✅ `this-is-an-example.md`;
	- ❌ `ThisIsBad.md` or `this one also bad.md`;

---
### 3. 🔗 Internal Linking

- While writing, use **wiki-style links** (`[filename](filename)`) for speed;
- Before publishing:
	- Run the **Link Converter plugin** to turn wiki links into Markdown format: `[Label](./filename.md)` > safe to choose vault-wide option, let it replace all links;
	- ⚠️ Obsidian’s plugin may omit the `./` — that's OK, the `update-project-content.js` script will handle both variants;

---
### 4. 📂 Project Setup

To create a new public-facing wiki/project from local vault folder:

1. Open Terminal;
2. Navigate to `~/Documents/` and scaffold a Docusaurus site:
	- `npx create-docusaurus@latest [your-project-name] classic`;
3. Copy the `update-project-content.js` script from an existing project "AI Therapist Assistant":
	- `cp ~/Documents/ai-therapist-wiki/update-project-content.js ~/Documents/[your-project-root]/`;
4. Edit `update-project-content.js`:
	- Update paths to match your Obsidian vault and new Project folder's `.../docs/`;
	- This script:
	     - **Copies** Obsidian vault's `project folder` untouched into Docusaurus `project folder/vault/` > anyone pulling the repo can later "rebuild" this as their own, completely functional, local Obsidian vault, with links, attachments and all;
	     - **Copies** Obsidian project's `/docs/` folder to the Docusaurus `/docs/` folder;
	     - **Rewrites internal links** from `./file.md` → `/docs/file` , which during build gets routed (replaced) with `/docs/slug`, same for attachments' links as well;
	     - Copies vaults `/attachments/` into Docusaurus' project `/static/attachments` to be served once deployed to web;

---
### 5. ⚙️ Templating & MoC

- Use the **Templater plugin** to insert standard frontmatter in new notes: `Ctrl+T` or `Ctrl+P` → "Templater: Insert template";
- Then run the template with `Ctrl+R`;
- Your `index.md` (Map of Content) must:
	- Be located at the root of the `docs/` directory;
	- Have the following in its frontmatter:
    ```
    ---
    id: index
    title: [whatever]
    sidebar_label: Index
    slug: /
    ---
    ```
	- This will make it the **homepage** for your published project;
	- `id` MUST be the exact same as the "filename.md", `slug` MUST be "/";

---
### 6. ⚡ Generating the MoC (Index.md) Automatically

- To avoid compiling all internal links here manually:
	- Use the `generate-index-links` template (Templater);
	- Insert with `Ctrl+T`, then run it with `Ctrl+R`

---
✅ You’re now ready to sync, transform, and publish your project wiki to Docusaurus. Enjoy your static site with full Markdown control!