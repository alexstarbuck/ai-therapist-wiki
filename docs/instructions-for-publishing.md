---
id: instructions-for-publishing
slug: instructions-for-publishing
title: Instructions For Publishing
sidebar_label: instructions for publishing

tags: []
parent:
source: ""
date_created: 2025-07-24 21:52
---

## Instructions for Obsidian > Docusaurus (publishing) pipeline

1. **Writing**:
	- Write notes here in Obsidian locally, as usual;
2. **Nomenclature**:
	- Name everything in kabob case (`this-is-an-example-name`);
3. **Internal Links**:
	- [[Wiki Style links]] - fine for anything personal, unimportant, not to ever be published, its fast and works like a charm, as long as you stay within Obsidian;
	- [Proper Markdown link style](link) - use as much as possible, obligatory for anything to be published;
4. **Set up new project to be published**:
	- Set up a project directory in `~/Documents/[project directory]` using terminal and Docusaurus commands;
	- In the root of that project, copy `update-docs.sh` file from `~/Documents/ai-therapist-wiki/update-docs.sh`;
	- Open that file in Vim and edit the relevant path(s):
		- Script essentially copies your local Obsidian files, from your vault into `~/Documents/[project-directory/docs/`);
		- All internal links within these copied files, need to be changed from Obsidian style `./file-to-link-to` into Docusaurus relative routes `/docs/file-to-link-to` (shell script does this automatically);
5. **Peculiarities**:
	- Moved towards standardized (and VERY useful!) "Templater plugin" style templates (remember: you insert the template `Ctrl+C` but you also have to "run" it `Ctrl+R`);
	- For each new project (directory) which is going to be Docusaurus published, make sure there is an `index.md` file in the root AND that in the frontmatter (this header with "properties" in Obsidian YAML) `slug` is set to `/`;
	- `index.md` will be your "homepage" for the project / notes wiki and hold the links towards all the other notes in that particular directory:
		- these links, this MoC is painful to write manually, there is a template here called "generate-index-links"  > use that one (remember: you insert the template `Ctrl+C` but you also have to "run" it `Ctrl+R`);