import { generate_QA_LIST } from "../questions.helpers";
import { QuestionsList } from "../questions.interface";

export const jsQuestions: QuestionsList[] = generate_QA_LIST("javascript", [
  {
    question: [
      `How can you iterate over an array in JavaScript? Provide examples.`,
    ],
    answer: [
      `There are several ways to iterate over an array in JavaScript.`,
      `- for loop`,
      `- forEach loop`,
      `- for...of loop`,
    ],
  },
  {
    question: [`What are the different data types in JavaScript?`],
    answer: [
      `1.In JavaScript, there are several data types used to represent different types of values:`,
      `- Primitive data types:`,
      `- String: Represents a sequence of characters, enclosed in single ('') or double ("") quotes.`,
      `- Number: Represents numeric values, including integers and floating-point numbers.`,
      `- Boolean: Represents a logical value, either true or false.`,
      `- Undefined: Represents a variable that has been declared but has not been assigned a value.`,
      `- Null: Represents an intentional absence of any value or an empty value.`,
      `- Symbol: Represents a unique, immutable value, often used as object property keys.`,
      `2. Object data type:`,
      `- Object: Represents a collection of key-value pairs and can contain any data type or a combination of data types.`,
      `3. Special data type:`,
      `- Function: Represents a reusable block of code that can be invoked with arguments.`,
      `JavaScript is a dynamically typed language, meaning variables can hold different data types during their lifetime. Understanding these data types helps developers write more robust and flexible code.`,
    ],
  },
  {
    question: [
      `Explain the difference between "let," "const," and "var" when declaring variables.`,
    ],
    answer: [
      `"var": Declaring a variable with "var" has function-level scope. It means the variable is accessible throughout the function it's declared in, regardless of block boundaries (e.g., if, for loops). If declared outside a function, it becomes a global variable. "var" variables can be redeclared and reassigned.`,
      `"let": Variables declared with "let" have block-level scope. It means the variable is limited to the block in which it's declared, such as within an if statement or for loop. "let" variables can be reassigned, but not redeclared within the same scope.`,
      `"const": Declaring a variable with "const" also has block-level scope, like "let." However, "const" variables cannot be reassigned after declaration. They are read-only and should be used for values that should remain constant.`,
    ],
  },
  {
    question: [`What is the difference between "==" and "===" in JavaScript?`],
    answer: [
      `"==" (Equality): The double equals ("==") operator compares the values of two operands after performing type coercion if necessary. It allows comparing values of different data types by converting them to a common type. For example, "5" == 5 will return true because the string "5" is converted to the number 5 during comparison.`,
      `"===" (Strict Equality): The triple equals ("===") operator checks both the values and the data types of the operands. It returns true only if both values are equal and of the same type. For example, "5" === 5 will return false because the string "5" is not of the same type as the number 5.`,
      `Using "===" is generally considered safer and more reliable, as it avoids unexpected type coercion and helps prevent bugs caused by unintentional type conversions.`,
    ],
  },
  {
    question: [`What are closures in JavaScript, and how are they used?`],
    answer: [
      `In JavaScript, a closure is a function that remembers the variables and parameters in its lexical scope, even after the outer function has finished executing. The closure "closes over" these variables, allowing the inner function to access and manipulate them.`,
      `Closures are created when a function is returned from another function, and the returned function retains access to its parent function's variables. They are often used to create private variables and data encapsulation, allowing data to be preserved and accessed within a limited scope.`,
      `Example of a closure:`,
      `[img] questions/js/javascript-closure.png`,
      `In this example, innerFunction is a closure that captures and retains access to outerVar, even after outerFunction has finished executing.`,
    ],
  },
  {
    question: [`How does prototypal inheritance work in JavaScript?`],
    answer: [
      `Prototypal inheritance in JavaScript is a mechanism where objects can inherit properties and methods from another object called the prototype. Every object in JavaScript has an internal property called "proto" that points to its prototype. When accessing a property or method on an object, JavaScript first looks for it on the object itself. If it's not found, it checks the prototype (and its prototype chain) until the property is found or until the end of the prototype chain is reached.`,
      `When you create an object using object literals or constructors, the object automatically inherits properties and methods from its prototype. You can set the prototype explicitly using the "Object.create()" method or by using the prototype property of constructor functions.`,
      `For example:`,
      `[img] questions/js/javascript-protypal-inheritance.png`,
    ],
  },
  {
    question: [`Explain the concept of "hoisting" in JavaScript.`],
    answer: [
      `Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, even before the code is executed. This means that you can use variables and functions before they are declared in your code.`,
      `However, only the declarations are hoisted, not the initializations. Variables initialized with "let" and "const" are hoisted but are in the "temporal dead zone" until the point of declaration.`,
      `Example:`,
      `[img] questions/js/javascript-hoisting.png`,
      `In the first example, the variable "x" is hoisted, but its value is undefined until it's assigned. In the second example, the variable "y" is also hoisted, but it's in the temporal dead zone until the "let" statement is encountered.`,
    ],
  },
  {
    question: [
      `What is the difference between "null" and "undefined" in JavaScript?
    `,
    ],
    answer: [
      `"null": It is a primitive value that represents the intentional absence of any object value. When a variable is assigned to null, it means it explicitly points to no object or value.`,
      `"undefined": It is a primitive value assigned automatically to variables that have been declared but not assigned any value. It is also the default return value of functions that don't explicitly return anything.`,
      `In summary, "null" represents a deliberate absence of a value, while "undefined" is used for variables that have not been assigned a value or functions without return statements.`,
    ],
  },
  {
    question: [
      `How do you handle asynchronous operations in JavaScript, and what are the different ways to achieve it?`,
    ],
    answer: [
      `Handling asynchronous operations in JavaScript is essential to avoid blocking the main thread and to allow non-blocking execution of code. There are several ways to achieve this:`,
      `- Callbacks: Callbacks are functions passed as arguments to another function to be executed once the asynchronous operation is completed. However, nested callbacks can lead to callback hell and make code harder to read and maintain.`,
      `- Promises: Promises provide a cleaner and more structured way to handle asynchronous operations. They represent a value that may not be available yet, but will be resolved or rejected at some point in the future. Promises allow chaining multiple asynchronous operations using "then()" and "catch()" methods.`,
      `- Async/Await: Async/Await is a syntax sugar built on top of Promises to make asynchronous code look more like synchronous code. It allows writing asynchronous code using a synchronous style, which improves code readability.`,
      `- Event Emitters: Node.js provides an EventEmitter class that allows registering event listeners and emitting events to notify subscribers when an asynchronous operation completes.`,
    ],
  },
  {
    question: [
      `Explain the "this" keyword in JavaScript and how its value is determined.`,
    ],
    answer: [
      `The "this" keyword in JavaScript refers to the context within which a function is executed. The value of "this" depends on how the function is invoked. There are four common rules that determine the value of "this":`,
      `- Global Context: When "this" is used in the global scope (outside any function or object), it refers to the global object (e.g., "window" in the browser or "global" in Node.js).`,
      `- Function Context: When "this" is used inside a regular function, its value is determined by how the function is called. If the function is called as a method of an object, "this" refers to the object itself. Otherwise, in strict mode, "this" is undefined, and in non-strict mode, it refers to the global object.`,
      `- Arrow Functions: Arrow functions do not have their own "this" value. Instead, they capture the "this" value from the surrounding lexical scope (i.e., the enclosing function or global context).`,
      `- Constructor Functions: When a function is used as a constructor with the "new" keyword, "this" refers to the newly created object.`,
    ],
  },
  {
    question: [
      `What are arrow functions in JavaScript, and how do they differ from regular functions?`,
    ],
    answer: [
      `Arrow functions are a concise and more readable way to write functions in JavaScript. They were introduced in ES6. `,
      `Arrow functions differ from regular functions in the following ways:`,
      `- "this" binding: Arrow functions do not have their own "this" value. Instead, they inherit the "this" value from the surrounding lexical scope, making it easier to use "this" consistently within nested functions.`,
      `- No "arguments" object: Arrow functions do not have their own "arguments" object. If you need to access function arguments, you should use rest parameters (...args) or use regular functions instead.`,
      `- No "new" keyword: Arrow functions cannot be used as constructors to create new objects. They lack a "prototype" property and cannot be used with the "new" keyword.`,
      `- No "super" keyword: Arrow functions do not have their own "super" keyword. If you need to use "super" for inheritance purposes, you should use regular functions.`,
      `Arrow functions are useful when you need a short, concise function that does not require its own "this" value or "arguments" object. However, for methods on objects or functions that require their own "this" value, regular functions are still preferred.`,
    ],
  },
  {
    question: [`How can you create and manipulate objects in JavaScript?`],
    answer: [
      `In JavaScript, objects can be created and manipulated using several methods:`,
      `- Object Literals: Objects can be created using curly braces ({}) with key-value pairs representing properties and methods.`,
      `- Constructor Functions: You can use constructor functions to create objects with shared properties and methods.`,
      `- Classes (ES6): ES6 introduced classes, which are syntactical sugar over constructor functions, providing a more readable and structured way to define objects.`,
      `- Object.create(): This method allows creating an object with a specified prototype.`,
    ],
  },
  {
    question: [
      `What is event delegation in JavaScript, and how can it improve performance?`,
    ],
    answer: [
      `Event delegation is a technique in JavaScript where you attach an event listener to a parent element rather than individual child elements. When an event occurs, it is captured by the parent element and then bubbled up through the DOM tree to the parent.`,
      `By using event delegation, you can improve performance by reducing the number of event listeners attached to multiple child elements. This is especially beneficial when you have a large number of child elements that need event handling, as it avoids adding numerous event listeners and reduces memory consumption.`,
      `Event delegation is particularly useful for dynamically added elements or elements created through templating frameworks. It allows you to handle events on present and future elements with a single event listener on a parent container.`,
    ],
  },
  {
    question: [
      `What is the purpose of the "map," "filter," and "reduce" functions in JavaScript arrays?`,
    ],
    answer: [
      `- "map": The "map" function is used to transform each element of an array into a new array by applying a provided function to each element. It creates a new array with the same length as the original, where each element is the result of the applied function.`,
      `- "filter": The "filter" function is used to create a new array with elements that pass a certain condition based on the provided function. It returns a new array with elements for which the function returns "true."`,
      `- "reduce": The "reduce" function is used to accumulate values from an array into a single value. It applies a provided function to each element and carries the result to the next element until the final result is obtained.`,
    ],
  },
  {
    question: [
      `How can you prevent the default behavior of an event in JavaScript?`,
    ],
    answer: [
      `To prevent the default behavior of an event in JavaScript, you can use the "preventDefault()" method on the event object. This method is commonly used with event handlers, such as "click," "submit," or "keydown," to prevent the default action associated with that event.`,
    ],
  },
  {
    question: [
      `What are template literals in JavaScript, and how do they differ from regular strings?`,
    ],
    answer: [
      `Template literals, introduced in ES6, are a way to create strings with embedded expressions in JavaScript. They are enclosed by backticks ( ) instead of single or double quotes.`,
      "Template literals support multi-line strings without the need for escape characters, making it easier to write and read multiline strings. They also allow embedding expressions using placeholders ${expression}, which are evaluated and replaced with their corresponding values.",
    ],
  },
  {
    question: [
      `What are the different ways to define a function in JavaScript?`,
    ],
    answer: [
      `1. Function Declaration:`,
      `2. Function Expression (Anonymous Function):`,
      `3. Arrow Function (ES6):`,
      `4. Method Definition (Inside an Object):`,
      `[img] questions/js/javascript-define-functions.png`,
      `Each method of defining a function has its advantages and use cases. Arrow functions are especially concise and useful for simple one-liner functions.`,
    ],
  },
  {
    question: [
      `How can you convert a string to a number and vice versa in JavaScript?`,
    ],
    answer: [
      `To convert a string to a number, you can use functions like "parseInt()" or "parseFloat()" for integers and floating-point numbers,`,
      `To convert a number to a string, you can use the "toString()" method or the String() constructor`,
      `Additionally, you can use template literals to implicitly convert a number to a string when concatenating with other strings`,
    ],
  },
  {
    question: [
      `Explain the purpose of the "Array.isArray()" method in JavaScript.`,
    ],
    answer: [
      `The "Array.isArray()" method in JavaScript is used to determine whether a given value is an array or not. It returns true if the value is an array, and false otherwise. This method is particularly useful because the typeof operator returns "object" for arrays, which can be misleading when checking for array data types.`,
      `Using "Array.isArray()" helps to differentiate between arrays and other objects, ensuring that you're dealing with array-specific methods and behaviors when working with arrays.`,
    ],
  },
  {
    question: [
      `What are "set" and "map" data structures in JavaScript, and how do they differ from arrays?`,
    ],
    answer: [
      `- Set: The "Set" data structure in JavaScript is a collection of unique values. It allows you to store unique values of any data type, and it automatically ensures that there are no duplicate values in the set. It does not have indexes, and you cannot access elements by their position. Sets use the "has()" method to check for the existence of a value and the "add()" method to add new values.`,
      `- Map: The "Map" data structure in JavaScript is a collection of key-value pairs, where each key is unique. It allows you to store and retrieve values based on their keys, similar to objects. However, unlike objects, maps can have keys of any data type. Maps provide methods like "set()" to add key-value pairs, "get()" to retrieve values, and "has()" to check for the existence of keys.`,
      `In summary, arrays are ordered collections with indexed elements, sets are unordered collections of unique values, and maps are collections of key-value pairs with unique keys. Sets and maps are useful for scenarios where uniqueness and key-based retrieval are important.`,
    ],
  },
  {
    question: [
      `How can you handle asynchronous errors in JavaScript Promise chains?`,
    ],
    answer: [
      `In JavaScript Promise chains, you can handle asynchronous errors using the "catch()" method, which allows you to catch any errors that occur in the chain.`,
      `The "catch()" method is attached to a Promise and takes a callback function that will be executed if the Promise is rejected at any point in the chain. This allows you to handle errors in a centralized manner and perform error-specific actions, such as logging the error, showing error messages to the user, or gracefully recovering from the error.`,
      `Using the "catch()" method in Promise chains ensures that any errors are caught and handled appropriately, preventing unhandled rejections and improving the robustness of your asynchronous code.`,
    ],
  },
  {
    question: [
      `Explain the concept of "callback functions" and how they are used in various scenarios.`,
    ],
    answer: [
      `
      Candidate:
      
      Explain the concept of "callback functions" and how they are used in various scenarios.
      In JavaScript, a "callback function" is a function that is passed as an argument to another function and is executed later, often after the completion of an asynchronous operation. The purpose of using callback functions is to ensure that certain code is executed only when a particular task has been completed, making it an essential part of asynchronous programming.`,
      `Callback functions are commonly used in scenarios like:`,
      `- Event handling: When an event occurs (e.g., a button click or form submission), a callback function can be triggered to handle the event and perform specific actions.`,
      `[img] questions/js/javascript-callback-event-handling.png`,
      `- Asynchronous operations: In asynchronous operations like fetching data from an API or reading files, callback functions are used to handle the retrieved data or errors.`,
      `[img] questions/js/javascript-callback-async-operations.png`,
      `- Control flow in JavaScript: Callback functions are used in control flow libraries like "async" to manage the execution order of asynchronous operations.`,
      `[img] questions/js/javascript-callback-control-flow.png`,
    ],
  },
  {
    question: [
      `What are JavaScript Promises, and how do they help with asynchronous programming?`,
    ],
    answer: [
      `JavaScript Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations more easily and avoid callback hell. They simplify error handling and make asynchronous code more readable and maintainable.`,
      `Promises have three states:`,
      `- Pending: The initial state, representing that the operation is still in progress.`,
      `- Fulfilled (Resolved): The operation was successful, and the Promise is resolved with a value.`,
      `- Rejected: The operation failed, and the Promise is rejected with an error.`,
      `Promises use the "then()" method to attach callback functions that are executed when the Promise is fulfilled, and the "catch()" method to handle rejections. Additionally, they allow chaining multiple asynchronous operations using "then()" calls.`,
      `Example:`,
      `[img] questions/js/javascript-promises-example.png`,
      `Promises greatly improve the handling of asynchronous operations, providing a more organized and readable approach to dealing with the outcomes of asynchronous tasks.`,
    ],
  },
  {
    question: [
      `Describe the difference between "local storage" and "session storage" in the browser, and how they are used.`,
    ],
    answer: [
      `Both "local storage" and "session storage" are mechanisms provided by web browsers to store data on the client-side. They allow web applications to store data persistently across browser sessions, making it available even after the user closes or refreshes the page.`,
      `The main differences between local storage and session storage are:`,
      `- Lifetime: Local storage data persists indefinitely until it is explicitly cleared by the user or the application. Session storage data, on the other hand, is only available during the current browser session. If the user closes the tab or window, the session storage data is cleared.`,
      `- Scope: Both local storage and session storage are specific to the origin (protocol, host, and port) of the web application. Data stored in one origin cannot be accessed by another origin due to the same-origin policy.`,
      `- Usage: Local storage is commonly used for storing data that needs to be available across different sessions, such as user preferences or cached data. Session storage is typically used for temporary data that should be available within a specific session, such as form data or user session information.`,
    ],
  },
  {
    question: [`How do you clone or copy an object in JavaScript?`],
    answer: [
      `Using the "Object.assign()" method: The "Object.assign()" method copies the values of all enumerable properties from one or more source objects to a target object. This method creates a shallow copy of the object.`,
      `Using the "spread operator" (for shallow cloning): The "spread operator" (three dots "...") can be used to create a shallow copy of an object.`,
      `Using JSON methods (for deep cloning): You can use the JSON.stringify() and JSON.parse() methods to perform a deep clone of an object. However, this method is not suitable for objects containing functions or circular references.`,
      `[img] questions/js/javascript-object-copy-json.png`,
    ],
  },
  {
    question: [
      `What is the "spread operator" in JavaScript, and how can you use it for array and object manipulation?`,
    ],
    answer: [
      `The "spread operator" is a feature introduced in ES6 (ES2015) that allows you to expand or spread the elements of an array or the properties of an object. It is denoted by three dots "..." followed by the array or object to be expanded.`,
      `Used to clone or manipulate objects or array`,
    ],
  },
  {
    question: [
      `Explain the concept of "promisifying" and how you can convert a callback-based function into a promise-based function.`,
    ],
    answer: [
      `Promisifying is the process of converting a callback-based asynchronous function into a Promise-based function. It allows you to work with asynchronous functions in a more modern and streamlined way using Promises, which simplifies error handling and enables more readable and maintainable code.`,
      `To convert a callback-based function into a promise-based function, follow these steps:`,
      `1. Identify the callback-based function you want to promisify. It should accept a callback function as its last argument, following the standard Node.js convention.`,
      `For example, consider the following callback-based function:`,
      `[img] questions/js/javascript-callback-based-fn.png`,
      `2. Create a new function that returns a Promise and wraps the original callback-based function.`,
      `[img] questions/js/javascript-wrapped-callback-as-promise.png`,
      `3. The new promise-based function, fetchDataFromServerPromise(), now allows you to use it with .then() and .catch() for handling resolved and rejected states respectively.`,
      `[img] questions/js/javascript-promise-based-fn.png`,
      `Promisifying is a useful technique that simplifies working with asynchronous functions, especially when using modern asynchronous programming patterns like async/await. It promotes more organized and readable code by leveraging the power of Promises.`,
    ],
  },
  {
    question: [
      `How do you handle asynchronous errors in async/await functions without using try/catch blocks?`,
    ],
    answer: [
      `In async/await functions, you can handle asynchronous errors without using try/catch blocks by chaining a .catch() method to the Promise returned by the async function. This approach allows you to handle errors in a similar way as you would with traditional Promise chains.`,
      `Here's an example of handling asynchronous errors in an async/await function without using try/catch:`,
      `[img] questions/js/javascript-error-handle-async-wo-try-catch.png`,
      `In this example, the fetchDataUsingAsyncAwait function is an async function that uses await to wait for the data to be fetched from the server. If the data is successfully fetched, it is resolved and handled in the .then() block. If there's an error during the asynchronous operation (data not found), it is caught and handled in the .catch() block.`,
      `Using .catch() with async/await functions allows you to manage asynchronous errors effectively without introducing try/catch blocks inside the function. This can make your code cleaner and more concise, especially when dealing with multiple async/await calls in the same function.`,
    ],
  },
  {
    question: [
      `Describe how you can implement inheritance in JavaScript using ES6 classes and prototypes.`,
    ],
    answer: [
      `In JavaScript, you can implement inheritance using ES6 classes by using the extends keyword to create a subclass (child class) that inherits from a superclass (parent class). This is known as class inheritance, and it allows the child class to inherit properties and methods from the parent class.`,
      `Example of implement inheritance using ES6 classes: `,
      `[img] questions/js/javascript-es6-classes-inheritance.png`,
      `In this example, the Animal class serves as the parent class with a name property and a speak() method. The Dog class is the child class that extends the Animal class using extends. It has its own constructor that calls the parent class's constructor using super() to set the name property, and it also has its own speak() method that overrides the parent class's speak() method.`,
      `By using ES6 classes and the extends keyword, you can easily implement inheritance in JavaScript and create a hierarchy of classes where child classes inherit properties and behaviors from their parent classes.`,
      `Example of implement inheritance using prototypes: `,
      `[img] questions/js/javascript-prototypes-inheritance.png`,
      `In this example, the Animal constructor function serves as the parent constructor with a name property and a speak() method added to its prototype. The Dog constructor function is the child constructor that should inherit from the Animal constructor. To achieve this, we use Object.create(Animal.prototype) to link the prototypes of Dog to Animal.`,
      `The Dog constructor then calls the Animal constructor within itself using Animal.call(this, name) to set the name property of the Animal. We also define a speak() method within the Dog.prototype to override the speak() method of the Animal prototype. Additionally, we add an additional method fetch() specific to the Dog prototype.`,
      `By establishing the prototype chain, Dog objects will inherit properties and methods from the Animal prototype, enabling prototypal inheritance in JavaScript.`,
    ],
  },
  {
    question: [
      `What is the purpose of the "Symbol" data type in JavaScript, and how can you use it to create unique object properties?`,
    ],
    answer: [
      `The "Symbol" data type in JavaScript is a primitive data type introduced in ES6 (ES2015). It is used to create unique and immutable values that can be used as property keys for objects. Symbols are unique, meaning that no two symbols are the same, even if they have the same name.`,
      `To create a Symbol, you can use the Symbol() function. Each call to Symbol() returns a new and unique Symbol value.`,
      `Symbols are often used as property keys for object properties, especially when you want to add non-enumerable properties to objects or avoid naming collisions.`,
      `Since Symbols are unique, they are suitable for scenarios where you need to create hidden or private properties in objects without the risk of accidental overriding or conflicts.`,
    ],
  },
  {
    question: [
      `What are generators in JavaScript, and how do they differ from regular functions?`,
    ],
    answer: [
      `Generators are a special type of function introduced in ES6 (ES2015) that allow you to define an iterative algorithm by pausing and resuming execution manually. Unlike regular functions that run to completion and return a value, generators can pause execution and yield multiple values one by one.`,
      `To create a generator, you use the function declaration with an asterisk (function*) or use the function expression with an asterisk (*) after the function keyword`,
      `[img] questions/js/javascript-fn-generator.example.png`,
      `Generators use the yield keyword to pause the function and return a value. When the generator is called, it does not run the entire function at once. Instead, it returns an iterator object. The iterator can then be used to call .next() to resume the generator and receive the next yielded value.`,
      `Generators are useful for managing complex iterative logic, lazy evaluation, and handling asynchronous operations. They provide a more flexible and controlled way to iterate over values compared to regular functions, which return all values at once.`,
    ],
  },
  {
    question: [
      `Explain the concept of "currying" in JavaScript and provide an example of its practical use.`,
    ],
    answer: [
      `In JavaScript, "currying" is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions, each taking a single argument. The curried functions are created by partially applying the arguments to the original function, producing a chain of specialized functions. This allows for more flexible and reusable code.`,
      `Here's an example of currying in JavaScript:`,
      `[img] questions/js/javascript-currying-example.png`,
      `In the example above, the add function is a regular function that takes three arguments and returns their sum. The curriedAdd function is a curried version of add. It takes one argument a and returns a new function that takes another argument b, which in turn returns another function that takes the final argument c. When all three arguments are supplied, the curried functions return the sum.`,
      `Currying allows you to create specialized versions of functions by fixing some arguments, making it easier to reuse functions with varying arguments. It promotes functional composition and makes it simpler to create higher-order functions that take functions as arguments.`,
      `Practical use cases of currying include creating reusable utility functions, handling configuration and parameterization, and simplifying functional transformations in functional programming paradigms.`,
    ],
  },
  {
    question: [
      `How can you use closures effectively to maintain private variables in JavaScript modules?`,
    ],
    answer: [
      `Closures can be used effectively in JavaScript modules to maintain private variables and encapsulate functionality. By defining functions within an outer function, the inner functions can access and "close over" the variables defined in the outer function's scope, creating a closure. This allows us to create private variables that are not accessible from outside the module.`,
      `Here's an example of how closures can be used to create a JavaScript module with private variables:`,
      `[img] questions/js/javascript-private-variables-closure-example.png`,
      `In this example, we create a closure by wrapping the module code inside an immediately invoked function expression (IIFE). The count, increment, and decrement variables are declared within the outer function's scope, making them inaccessible from outside.`,
      `The module returns an object with methods that provide access to the private variables and functions. The returned object acts as a public interface, allowing external code to interact with the module while keeping the private variables hidden.`,
      `Using closures in this way allows us to achieve data encapsulation and avoid polluting the global scope. JavaScript modules can maintain internal state and provide a controlled and safe way to expose functionality to other parts of the application.`,
    ],
  },
  {
    question: [
      `How can you implement memoization in JavaScript to improve the performance of frequently called functions?`,
    ],
    answer: [
      `Memoization is a technique used to improve the performance of frequently called functions by caching the results of previous function calls and returning the cached result when the same inputs are provided again. This can save computation time for repetitive function calls and significantly boost performance.`,
      `You can implement memoization in JavaScript using a higher-order function that wraps the original function and stores the results in a cache object. Here's a basic example of how to implement memoization using a simple cache:`,
      `[img] questions/js/javascript-memoize-example.png`,
      `In the example above, we define a memoize function that takes a function func as its argument. It returns a new function that wraps the original function. The cache object stores the results of previous function calls using a serialized version of the function arguments as the key.`,
      `When the wrapped function is called, it first checks if the result for the current arguments exists in the cache. If it does, the cached result is returned, avoiding the need to recompute the result. If the result is not in the cache, the original function is called with the provided arguments, and the result is stored in the cache before being returned.`,
      `By applying memoization to frequently called functions with repetitive inputs, you can significantly improve the performance and reduce the computation time, especially for functions with expensive computations or recursive calls.`,
    ],
  },
]);
