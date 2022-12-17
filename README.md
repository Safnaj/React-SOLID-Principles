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

[Code Example](https://github.com/Safnaj/React-SOLID-Principles/tree/main/src/principles/SRP)

## Open-closed Principle

OCP States that **"Software entities should be open for extension, but closed for modification"**. The open-closed principle advocates for structuring the our components in a way that allows them to be extended without chaning their original form.

The principle is related to code maintenance and new code change. To easy to understand the principle example in the system we have an existing common component and it is used in a lot of places in our project. The component should have a way to change from the outside instead of modifying itself.

#### The goal of this principle is:

- Make it easier to add new features to a software system without affecting the existing functionality.
- This helps to make a software system more mmaintainable and extensible.
- Reduce the risk of breaking existing functionality.

[Code Example](https://github.com/Safnaj/React-SOLID-Principles/tree/main/src/principles/OCP)
