# Chapter 04 — Code Snippets

Extracted from `512_04_Final.docx`. Code blocks are reproduced in document order.


## Code files

- `App.tsx` — The simplest approach is to place a console.log at the very top of the component, so that it runs on every render:
- `App-2.tsx` — You attach a ref to the input element and then call focus on it once the task has been added:
- `snippet-01.tsx` — In the returned JSX, the ref is wired to the input element itself:
- `App-3.tsx` — The change involves reading the saved tasks when the component first mounts and writing them back whenever they change:
- `snippet-02.ts` — A cleanup function is a function returned from inside the effect.
- `App-4.tsx` — In React, data flows in one direction, from parent to child, through props.
- `App-5.tsx` — Each child then declares the props it expects and uses them.
- `snippet-03.ts` — Mutating State Directly
- `snippet-04.tsx` — Omitting the key Prop in Lists
- `snippet-05.tsx` — Calling a Function Instead of Passing a Reference
- `snippet-06.ts` — Using State Where a Plain Variable Would Do
- `snippet-07.ts` — Relying on Stale State in Event Handlers
