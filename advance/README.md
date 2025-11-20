# ⚡ Advanced JavaScript – 7-Day Revision Summary (Only What Matters)

table of contents

1.  [Core Mechanics]()
    - Execution context, call stack, heap
    - Lexical scope, closures
    - Hoisting (var/function vs let/const)
    - TDZ
    - Strict mode differences
    - `“this”` binding (call/apply/bind)

<br>

2.  [Asynchronous JS]()
    - Event loop: microtask vs macrotask
    - Promises deep behavior
    - `async`/`await` pitfalls (parallelization, `try`/`catch`)
    - Promise.all vs race vs allSettled vs any
    - fetch + abort controllers
    - debounce / throttle patterns

<br>

3. [Advanced Concepts]()

   - Prototype chain
   - Class vs Prototype
   - Getters/setters
   - Pure functions, immutability
   - Currying, composition
   - Deep clone (structuredClone, custom)

<br>

4. [Data Structures]()

   - Map, Set, WeakMap, WeakSet
   - Symbols
   - Typed arrays
   - JSON tricks (parse/stringify replacers)

<br>

5. [Performance]()

   - Memory leaks: timers, listeners, closures
   - Debounce/throttle
   - Lazy loading
   - Web Workers
   - Reflow vs Repaint

<br>

6. [Patterns]()
   - Module pattern
   - Factory pattern
   - Singleton
   - Observer / Pub-Sub
   - Strategy

<br>

7. [Security]()
   - XSS basics
   - CSRF basics
   - Content security policies (CSP)

# Core Mechanics

1. Execution Context

   Every time JS runs your code, it creates an Execution Context with:

   - Variable Environment (var, function)
   - Lexical Environment (let, const, scope chain)
   - this binding

✔️ Example

```js
let a = 10;

function sum(b) {
  let c = 20;
  return a + b + c;
}

console.log(sum(5)); // 35
```

Explanation:

- When sum() is called, JS creates a new execution context.
- It includes its own variables (b, c) and also has access to the outer scope (a).
