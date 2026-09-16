# Chapter 03 — Code Snippets

Extracted from `512_03_Final.docx`. Code blocks are reproduced in document order.


## Code files

- `App.tsx` — The assistant should generate something close to the following.
- `App-2.tsx` — The assistant should update the code with several additions.
- `App-3.tsx` — New state holds the list of available categories, the category currently selected in the form, and the category currently used for filtering:
- `snippet-01.ts` — The addTask function is extended to record the selected category on each new task:
- `snippet-02.ts` — A derived value computes the visible tasks from the current filter:
- `snippet-03.tsx` — A dropdown is added to the form so the user can choose a category:
- `snippet-04.tsx` — A filter bar is placed above the list, with the active category highlighted:
- `snippet-05.tsx` — A small badge shows the category beside each task, and the list now renders filteredTasks in place of tasks:
- `vite.config.ts` — Open vite.config.ts and register the Tailwind plugin:
- `index.css` — Open src/index.css and replace its contents with a single import:
- `App-4.tsx` — The assistant will rewrite the JSX with Tailwind classes; the structure and logic remain identical, and only the styling changes.
- `snippet-06.ts` — Every function you have written so far runs in direct response to a user action, such as a click or a keystroke.
- `snippet-07.ts` — The first argument is a function containing the side effect.

## Terminal commands


The instructions that follow describe the Tailwind CSS version 4 setup, which uses a dedicated Vite plugin.

```bash
npm install -D tailwindcss @tailwindcss/vite
```

Restart your development server:

```bash
npm run dev
```

Open your terminal in the project folder and run the following commands, which create a local Git repository, add all your files, and save a snapshot, called a commit, of your curr

```bash
git init
git add .
git commit -m "Task tracker with categories, filtering, and Tailwind styling"
```
