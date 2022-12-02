# S.O.L.I.D Principles in React

## Single Responsibility Principle

The origial definition states that **"Every class should have only one responsibility"**. We can simply extrapolate the definition to **"Every function/module/component should do exactly one thing"**, but to understand what “one thing” means we’ll need to examine our components from two different perspectives - internal (meaning what the component does inside) and external (how this component is used by other components).

We’ll start by looking from the inside. To ensure our components do one thing internally, we can:

- break large components that do too much into smaller components.
- extract code unrelated to the main component functionality into separate utility functions.
- encapsulate connected functionality into custom hooks

#### The goal of this principle is:

- Break large components that do too much into smaller components.
- Extract code unrelated to the main component functionality into separate utility functions ( DateUtils, some businesses can be used in different places).
- Move all business logic of the component into custom hooks ( useEffect, handlers, states ).

## Open-closed Principle
