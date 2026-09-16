# Chapter 02 — Code Snippets

Extracted from `512_02_Final.docx`. Code blocks are reproduced in document order.


## Code files

- `snippet-01.tsx` — Consider a line of JSX such as the following, which we will meet properly later in the chapter:
- `snippet-02.ts` — It is easy to forget that this is really just a function call with an object argument.
- `snippet-03.ts` — Consider a concrete case.
- `snippet-04.ts` — JavaScript has a small number of primitive data types:
- `snippet-05.ts` — A union type lets a value be exactly one of a fixed set of options.
- `snippet-06.ts` — Later in React, the same idea is expressed as a named type, which makes a component self-documenting:
- `snippet-07.ts` — React components are, at heart, just functions, which is why becoming comfortable with functions early pays off immediately.
- `snippet-08.ts` — The same logic written as an arrow function, which is the style React code tends to favour, looks like this:
- `Button.tsx` — Arrow functions are preferred in React because they are shorter and clearer, they sit neatly alongside inline JSX, and they avoid the confusing behaviour of the this keyword.
- `snippet-09.ts` — When you pass data to a component you are passing an object, and when you render lists you work with arrays, so these two structures are central to React.
- `snippet-10.ts` — Without destructuring, we would pull the values out one at a time:
- `snippet-11.ts` — With destructuring, we extract both in a single, readable line:
- `UserCard.tsx` — This becomes especially useful when writing React, where the destructuring happens right inside the function signature, which is idiomatic React style:
- `snippet-12.ts` — Arrays can be destructured too, this time by position rather than by name:
- `snippet-13.ts` — This exact pattern reappears later when we use hooks, for example the useState hook returns a value and its setter as a two-element array:
- `snippet-14.ts` — The spread operator lets you clone or merge objects, producing a new object rather than mutating the original:
- `snippet-15.ts` — This idea maps perfectly onto user interfaces, where you frequently take a set of existing props and extend them.
- `snippet-16.tsx` — Later, this becomes useful for flexible components that forward any extra props they receive, as in the following:
- `snippet-17.tsx` — What the JSX compiles into has changed over time, and this is worth understanding clearly.
- `snippet-18.ts` — Modern React, meaning version 17 and later with the automatic JSX runtime, compiles this into a call to an internal helper, roughly as follows:
- `snippet-19.ts` — The older classic transform, used before React 17, compiled the same element into a call to React.createElement instead:
- `App.tsx` — Consider a short component that greets a user by name:
- `snippet-20.tsx` — For example, the following is valid JSX rather than plain HTML, precisely because it uses className rather than class:
- `snippet-21.tsx` — The single-parent rule is the one beginners meet first.
- `snippet-22.ts` — We begin with a plain arrow function that returns a string, then convert it into a component that returns JSX.
- `Greet.tsx` — The JSX version keeps the same shape but returns UI instead of a string, and destructures its argument in the signature:
- `snippet-23.ts` — At its core, though, it is still just a function call.
- `Welcome.tsx` — Props in React are simply the parameters of a component function.
- `Welcome-2.tsx` — In TypeScript-first React we go one step further and declare the exact shape those props must have, then destructure them:
- `Button-2.tsx` — The assistant will produce something close to the following:
- `Button-3.tsx` — With this you already have JSX, a real component, props in action, and reusability, which is React in close to its purest form.
- `Button-4.tsx` — The button is now reusable, flexible, adaptable, and properly engineered, because the behaviour lives with whoever uses it.
- `App-2.tsx` — One of the biggest mindset shifts in React is realising that you do not build pages; you compose components.
- `snippet-24.tsx` — The most powerful built-in prop in React is children, which allows one component to wrap arbitrary JSX supplied by its caller.
- `Card.tsx` — The Card does not need to know in advance what it will contain; it simply provides the outer layout, and whatever is placed between its tags arrives as the children prop.
- `snippet-25.tsx` — With that in place, the earlier usage works, and any content can be nested inside:
- `App-3.tsx` — We can now combine Card and Button to produce something that begins to look like a genuine interface:
- `Card-2.tsx` — A likely first draft, simplified, would look like this:
- `Card-3.tsx` — The assistant might then produce the following:
- `App-4.tsx` — The parent component supplies the data and the nested content:
- `ProfileCard.tsx` — The child component declares its typed props, including the optional children, and renders them:
