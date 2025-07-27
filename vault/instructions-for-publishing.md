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
[← Back to MoC](./index.md)

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

This is a standardized workflow for maintaining clean, publishable project wikis from within Obsidian.

---
### 1. ✍️ Writing Notes

- Write as usual in Obsidian, within your vault;
- Keep all content in Markdown format (`.md`);
- Feel free to use `[[Wiki-Style]]` links here;
- (also see #5 here below, regarding the concept of "*frontmatter*"!);

---
### 2. 🧱 Naming Conventions

- Use **kebab-case** for all filenames:
	- ✅ `this-is-an-example.md`;
	- ❌ `ThisIsBad.md` or `this one also bad.md`;

---
### 3. 🔗 Internal Linking

- While writing, use **wiki-style links** (`[[filename]]`) for speed;
- Before publishing:
	- Use the **Link Converter plugin** to turn wiki links into Markdown format: `[Label](./filename.md)`;
	- ⚠️ Obsidian’s plugin may omit the `./` — that's OK, the `update-docs.js` script will handle both variants;

---
### 4. 📂 Project Setup

To create a new public-facing wiki/project:

1. Open Terminal;
2. Navigate to `~/Documents/` and scaffold a Docusaurus site: `npx create-docusaurus@latest your-project-name classic`;
3. Copy the `update-docs.js` file from your existing project: `cp ~/Documents/ai-therapist-wiki/update-docs.js ~/Documents/your-project-name/`;
4. Edit `update-docs.js` in Vim or VS Code:
	- Update paths to match your Obsidian vault and new Project folder .../docs/;
	- This script:
	     - **Copies** your Obsidian project's `docs/` folder to the Docusaurus `/docs/` folder;
	     - **Rewrites internal links** from `./file.md` → `/docs/file`  which during build gets routed (replaced) with `/docs/slug`;

---
### 5. ⚙️ Templating & MoC

- Use the **Templater plugin** to insert standard frontmatter in new notes: `Ctrl + T` or `Ctrl + P` → Templater: Insert template;
- Then run the template with `Ctrl + R`;
- Your `index.md` (Map of Content) must:
	- Be located at the root of the `docs/` directory;
	- Have the following in its frontmatter:
    ```yaml
    ---
    id: index
    title: Project Overview
    sidebar_label: MoC
    slug: /
    ---
    ```
- This will make it the **homepage** for your published project.

---
### 6. ⚡ Generating the MoC Automatically

- To avoid writing all internal links manually:
	- Use the `generate-index-links` template (Templater);
	- Insert with `Ctrl + T`, then run it with `Ctrl + R`

---

✅ You’re now ready to sync, transform, and publish your project wiki to Docusaurus. Enjoy your static site with full Markdown control!



"Old version"

## Instructions for Obsidian > Docusaurus (publishing) pipeline

1. **Writing**:
	- Write notes here in Obsidian locally, as usual;
2. **Nomenclature**:
	- Name everything in kabob case (`this-is-an-example-name`);
3. **Internal Links**:
	- while writing, use wiki-style links for speed;
	- then use Link replacement plug-in to change these into proper markdown links;
		- Watch out! plug-in formats markdown links without initial ./;
		- Script from the next step includes SED command, which takes this into consideration — works with both forms with and without ./ ;
4. **Set up new project to be published**:
	- Set up a project directory in `~/Documents/[project directory]` using terminal and Docusaurus commands;
	- Into the root of that project, copy `update-docs.sh` file from `~/Documents/ai-therapist-wiki/update-docs.sh`;
	- Open that file in Vim and edit the relevant path(s):
		- Script essentially copies your local Obsidian files, from your vault into `~/Documents/[project-directory/docs/`) whish is a subdir from which content is served;
		- All internal links within these copied files, need to be changed from Obsidian style `./file-to-link-to` into Docusaurus relative routes `/docs/file-to-link-to` (shell script does this automatically);
5. **Peculiarities**:
	- Moved towards standardized (and VERY useful!) "Templater plugin" style templates (remember: you insert the template `Ctrl+C` but you also have to "run" it `Ctrl+R`);
	- For each new project (directory) which is going to be Docusaurus published, make sure there is an `index.md` file in the root AND that in the frontmatter (this header with "properties" in Obsidian YAML) `slug` is set to `/`;
	- `index.md` will be your "homepage" for the project / notes wiki and hold the links towards all the other notes in that particular directory:
		- these links, this MoC is painful to write manually, there is a template here called "generate-index-links"  > use that one (remember: you insert the template `Ctrl+C` but you also have to "run" it `Ctrl+R`);