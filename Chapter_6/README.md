# Chapter 06 — Code Snippets

Extracted from `512_06_Final.docx`. Code blocks are reproduced in document order.


## Code files

- `snippet-01.ts` — The expense form currently accepts negative numbers in the amount field.
- `snippet-02.tsx` — The error state is then rendered near the form so the user sees exactly what went wrong, for example with an accessible alert region:
- `snippet-03.ts` — If the value stored under the expenses key in localStorage is not valid JSON, which can happen when the data is edited by hand or becomes corrupted, the call to JSON.parse(saved) t
- `snippet-04.ts` — A cleaner alternative avoids constructing Date objects altogether.
- `snippet-05.ts` — TypeScript reports an error of the following form:
- `CategoryBreakdown.tsx` — The assistant should produce a memoised version of the calculation:
- `useMonthlyExpenses.ts` — The assistant should create a new hook at src/hooks/useMonthlyExpenses.ts:
- `useMonthlyExpenses-2.ts` — Each consuming component is then simplified to call the hook.
- `vite.config.ts` — It should then extend vite.config.ts to register the test environment:
- `setup.ts` — A small setup file at src/test/setup.ts registers the jest-dom matchers:
- `package.json` — Finally, two scripts are added to package.json so the tests can be run from the command line:
- `ExpenseForm.test.tsx` — The resulting file, saved as src/components/expenses/ExpenseForm.test.tsx, is shown below:

## Terminal commands


The assistant should first install the required development dependencies:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

The tests are then executed with:

```bash
npm test
```
