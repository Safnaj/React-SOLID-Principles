# S.O.L.I.D Principles in React

## Single Responsibility Principle

The origial definition states that **"Every class should have only one responsibility"**. We can simply extrapolate the definition to **"Every function/module/component should do exactly one thing"**, but to understand what “one thing” means we’ll need to examine our components from two different perspectives - internal (meaning what the component does inside) and external (how this component is used by other components).

We’ll start by looking from the inside. To ensure our components do one thing internally, we can:

- Break large components that do too much into smaller components.
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

## Liskov Substitution Principle

LSP recommends designing objects in such a way that **subtype objects should be substitutable for supertype objects**. The Liskov Substitution Principle (LSP) is a principle in object-oriented programming that states that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.

It's important to follow the Liskov Substitution Principle when creating components in React because it helps to ensure that your components are flexible and easy to work with. By adhering to this principle, you can create a set of components that can be easily composed and reused in different parts of your application.

#### The goal of this principle is:

- In React, we don’t use inheritance to reduce duplicate code between components. We recommend using composition instead of inheritance to reuse code between components [Link](https://reactjs.org/docs/composition-vs-inheritance.html).
- To enable the reuse and composition of components in a flexible and maintainable way.
- By following this principle, you can create a set of flexible, interchangeable components that can be easily composed to create more complex UI elements.

[Code Example](https://github.com/Safnaj/React-SOLID-Principles/tree/main/src/principles/LSP)

## Interface Segregation Principle

According to ISP, **“clients should not depend upon interfaces that they don’t use.”** For the sake of React applications, we’ll translate it into “components shouldn’t depend on props that they don’t use”.

The interface segregation principle advocates for minimizing dependencies between the components of the system, making them less coupled and thus more reusable.

#### The goal of this principle is:

- Improved maintainability: By creating smaller, more focused components, you can make it easier to understand and modify the codebase. This can save time and effort when making changes to the application.
- Increased flexibility: By minimizing dependencies between components, you can make it easier to reuse and refactor components. This can make it easier to add new features or make changes to the application.

[Code Example](https://github.com/Safnaj/React-SOLID-Principles/tree/main/src/principles/ISP)

## Dependency Inversion Principle

The dependency inversion principle states that **“one should depend upon abstractions, not concretions”**. In other words, one component shouldn’t directly depend on another component, but rather they both should depend on some common abstraction.

In other words, you can think that a component should not contain dependencies (external services API call) in itself. and we had to reuse that component from another place. External services should work in a single way to reduce dependence on each other making the code clean and easy to use by other components.

#### The goal of this principle is:

- High-level modules should not depend on low-level modules. Both should depend on abstractions.
- Making it easier to test components in isolation, by removing dependencies on external services or other components.
- Decoupling components from one another, so that changes to one component don't require changes to others.

[Code Example](https://github.com/Safnaj/React-SOLID-Principles/tree/main/src/principles/DIP)

<hr/>

#### References :

- [Applying SOLID principles in React](https://konstantinlebedev.com/solid-in-react/)
- [How to Implement the SOLID Principle in React?](https://javascript.plainenglish.io/solid-principle-in-react-11272c41b529)
- [Write React clean-code - SOLID](https://www.youtube.com/watch?v=MSq_DCRxOxw)
