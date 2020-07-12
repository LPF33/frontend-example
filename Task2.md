# Task2

### Explain with your own words the different state management approaches (context, redux) with their advantages and disadvantages. 

Context API: 
A different way of passing data through components in React is with the built-in Context API.
First advantage is, that you don't need any extra third-party dependencies, and for handling asynchronous actions
you need no extra package like in Redux(thunk).
First you create the Context Object with React.createContext().
(see in file frontend-example/src/examples/context/ProgramContext.tsx)
Now we can store data in the Context Object. Following we have to provide the data to the components, where we need it. So we wrap the components, which should have access to the data, inside of the Provider component like this: (see file frontend-example/src/examples/context/Example.tsx). The button and on of the Matchlists are the childrens of the Context.Provider and the passed values to the Provider are passed to the child components.
Next step is to retrieve the data by the child components. There are two different ways for both functions and classes: In classes with Context.Consumer or with static ContextType and in a function we can use either Context.Consumer or a hook called useContext. (see file frontend-example/src/examples/context/components/MatchList.tsx)
The Consumer wrapper component passes the state or props of Context as an argument of a function to the child component, which has now access to the state of the "ProgramContext". If you use the hook useContext, you just pass
the (Program)Context to the hook and declare the state or e.g. the needed props with destructuring to a variable.
A much easier way and your code is much cleaner, to my mind. Especially when you have multiple Contexts it can get very confusing, with Context.Consumer you wrap each Consumer in the next Consumer and so on, and with the hook you just can declare it to a variable. Much cleaner. I would say, that the Context API can handle smaller Applications,
but if the application is getting bigger you need a single, centralized state, which handles all your data.
So in this setting Redux come in very handy.

Redux:
A single, centralized and global store, where all the state information is stored and gets updated, which is not directly accessible or mutable. It is much easier to retrieve and change data in contrast to the Context API.
First of all you have to wrap the Provider around the highest-level component and hand over the store as a prop 
( see file frontend-example/src/examples/redux/Example.tsx). 
Than you create Actions ( like frontend-example/src/examples/redux/store/program/Actions.ts ):
You create these actions with a function called action creators. Actions consist of a type and an additional  
property. You define, what shall happen/change in your application's state and some information, like 
type: "add a match" and the other property is the match, which should be stored in the state.
Next we have the reducers (see file: frontend-example/src/examples/redux/store/program/Reducers.ts).
These are functions, which do the calculation. They get the old state and return a new calculated state with the given information.  
The Redux-Store has some methods:
dispatch: a function, which takes an action as an argument and "dispatch" it to the reducer.
subscribe: e.g. useSelector-hook, with this hook a functional component can get the data out of the store.
Another advantage: Redux Middleware: functions, that can run between the dispatching of an action and the action's arrival at the reducer.

### What are the differences between classes and functional components?
|Class:                                  |Function:                                                         |
|----------------------------------------|------------------------------------------------------------------|
|ES6 class                               |normal JS function or arrow function                              |
|extends the React.Component             |                                                                  |
|access props with this.props            |as an argument passed to the function                             |
|React lifecycle methods                 |useEffect - Hooks / specify more side effects  / go more in detail|
|in constructor initial this.state       |useState - Hooks / can have different states                      |
|render-method                           |returns the JSX                                                   |
|Higher-Order Components                 |Higher-Order Components / Custom hooks                            |
|                                        |easier to code and to read                                        |

### What are the advantages of hooks over high order components or even mixins?
Much easier to read, to understand and to code.
With HOC you change the the whole component and get a new component.
So when you just want to reuse any logic in more than one component, you can
create a Custom Hook and use this hook inside of any component, so no more
wrapping of components and returning of new components. But you can only use
Hooks with functional components, but there are no advantages of class components
in React anymore.