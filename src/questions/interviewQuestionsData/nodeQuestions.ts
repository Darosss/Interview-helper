import { generate_QA_LIST } from "../questions.helpers";
import { QuestionsList } from "../questions.interface";

export const nodeQuestions: QuestionsList[] = generate_QA_LIST("node", [
  {
    question: ["What npm is used for?"],
    answer: [
      "npm stands for Node Package Manager. npm provides the following two main functionalities:",
      "- Online repositories for Node.js packages/modules which are searchable on search.nodejs.org",
      "- Command-line utility to install packages, do version management and dependency management of Node.js packages.",
      `- Another important use for npm is dependency management. When you have a node project with a package.json file, you can run npm install from the project root and npm will install all the dependencies listed in the package.json.`,
    ],
  },
  {
    question: ["Difference between local and global packages installation"],
    answer: [
      `The main difference between local and global packages is this:`,
      `- local packages are installed in the directory where you run npm install <package-name>, and they are put in the node_modules folder under this directory`,
      `- global packages are all put in a single place in your system (exactly where depends on your setup), regardless of where you run npm install -g <package-name>`,
      `In general, all packages should be installed locally.`,
      `- This makes sure you can have dozens of applications in your computer, all running a different version of each package if needed.`,
      `- Updating a global package would make all your projects use the new release, and as you can imagine this might cause nightmares in terms of maintenance, as some packages might break compatibility with further dependencies, and so on.`,
    ],
  },
  {
    question: ["What is Callback "],
    answer: [
      `A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime. Callbacks are the foundation of Node.js. 
      Callbacks give you an interface with which to say, "and when you're done doing that, do all this."`,
    ],
  },
  {
    question: ["Key features of Node.js?"],
    answer: [
      `Let’s look at some of the key features of Node.js.`,
      `Asynchronous event driven IO helps concurrent request handling – All APIs of Node.js are asynchronous. This feature means that if a Node receives a request for some Input/Output operation, it will execute that operation in the background and continue with the processing of other requests. Thus it will not wait for the response from the previous requests.`,
      `Fast in Code execution – Node.js uses the V8 JavaScript Runtime engine, the one which is used by Google Chrome. Node has a wrapper over the JavaScript engine which makes the runtime engine much faster and hence processing of requests within Node.js also become faster.`,
      `Single Threaded but Highly Scalable – Node.js uses a single thread model for event looping. The response from these events may or may not reach the server immediately. However, this does not block other operations. Thus making Node.js highly scalable. Traditional servers create limited threads to handle requests while Node.js creates a single thread that provides service to much larger numbers of such requests.`,
      `Node.js library uses JavaScript – This is another important aspect of Node.js from the developer’s point of view. The majority of developers are already well-versed in JavaScript. Hence, development in Node.js becomes easier for a developer who knows JavaScript.`,
      `There is an Active and vibrant community for the Node.js framework – The active community always keeps the framework updated with the latest trends in the web development.`,
      `No Buffering – Node.js applications never buffer any data. They simply output the data in chunks.`,
    ],
  },
  {
    question: ["Why does Node.js prefer Error-First Callback?"],
    answer: [
      `The usual pattern is that the callback is invoked as callback(err, result), where only one of err and result is non-null, depending on whether the operation succeeded or failed. Without this convention, developers would have to maintain different signatures and APIs, without knowing where to place the error in the arguments array.`,
    ],
  },
  {
    question: ["What do you mean by Asynchronous API?"],
    answer: [
      `All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.`,
    ],
  },
  {
    question: ["Benefits of using Node.js"],
    answer: [
      `Following are main benefits of using Node.js`,
      `- Aynchronous and Event Driven - All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.`,
      `- Very Fast - Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.`,
      `- Single Threaded but highly Scalable - Node.js uses a single threaded model with event looping. Event mechanism helps server to respond in a non-bloking ways and makes server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and same program can services much larger number of requests than traditional server like Apache HTTP Server.`,
      `- No Buffering - Node.js applications never buffer any data. These applications simply output the data in chunks.`,
    ],
  },
  {
    question: ["What is libuv?"],
    answer: [
      `libuv is a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.`,
    ],
  },
  {
    question: ["What is V8?"],
    answer: [
      `The V8 library provides Node.js with a JavaScript engine (a program that converts Javascript code into lower level or machine code that microprocessors can understand), which Node.js controls via the V8 C++ API. V8 is maintained by Google, for use in Chrome.`,
      `The Chrome V8 engine :`,
      `The V8 engine is written in C++ and used in Chrome and Nodejs.`,
      `It implements ECMAScript as specified in ECMA-262.`,
      `The V8 engine can run standalone we can embed it with our own C++ program.`,
    ],
  },
  {
    question: ["What is the file package.json?"],
    answer: [
      `All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.`,
    ],
  },
  {
    question: ["Name some built-in globals in Node.js"],
    answer: [
      `Node.js has a number of built-in global identifiers that every Node.js developer should have some familiarity with. Some of these are true globals, being visible everywhere; others exist at the module level, but are inherent to every module, thus being pseudo-globals.`,
      `The list of true globals:`,
      `- global - The global namespace. Setting a property to this namespace makes it globally visible within the running process.`,
      `- process - The Node.js built-in process module, which provides interaction with the current Node.js process. Read More`,
      `- console - The Node.js built-in console module, which wraps various STDIO functionality in a browser-like way. Read More`,
      `- setTimeout(), clearTimeout(), setInterval(), clearInterval() - The built-in timer functions are globals. Read More`,
      `The pseudo-globals included at the module level in every module:`,
      `- module, module.exports, exports - These objects all pertain to the Node.js module system. Read More`,
      `- __filename - The __filename keyword contains the path of the currently executing file. Note that this is not defined while running the Node.js REPL.`,
      `- __dirname - Like __filename, the __dirname keyword contains the path to the root directory of the currently executing script. Also not present in the Node.js REPL.`,
      `- require() - The require() function is a built-in function, exposed per-module, that allows other valid modules to be included.`,
    ],
  },
  {
    question: ["What does promisifying technique mean in Node.js?"],
    answer: [
      "This technique is a way to be able to use a classic Javascript function that takes a callback, and have it return a promise",
    ],
  },
  {
    question: ["Difference between process.cwd() and __dirname "],
    answer: [
      `- cwd is a method of global object process, returns a string value which is the current working directory of the Node.js process.`,
      `- __dirname is the directory name of the current script as a string value. __dirname is not actually global but rather local to each module.`,
    ],
  },
  {
    question: [
      "Why we always require modules at the top of a file? Can we require modules inside of functions? ",
    ],
    answer: [
      `Yes, we can but we shall never do it.`,
      `Node.js always runs require synchronously. If you require an external module from within functions your module will be synchronously loaded when those functions run and this can cause two problems:`,
      `1. If that module is only needed in one route handler function it might take some time for the module to load synchronously. As a result, several users would be unable to get any access to your server and requests will queue up.`,
      `2. If the module you require causes an error and crashes the server you may not know about the error.`,
    ],
  },
  {
    question: [
      "What is the preferred method of resolving unhandled exceptions in Node.js?",
    ],
    answer: [
      `- Process Uncaught Exception Event: Node.js provides the process.on('uncaughtException') event that allows you to catch unhandled exceptions and perform any necessary cleanup or logging before the process exits. However, it's essential to note that using this method can leave your application in an unstable state, and it's not recommended for production use.`,
      `- Try-Catch Blocks: For specific synchronous code sections that may throw exceptions, use try-catch blocks to catch and handle the errors gracefully.`,
      `- Promises and Async/Await: When working with asynchronous code that returns Promises, use .catch() to handle any rejected Promises. With async/await, you can use try-catch blocks to handle errors in asynchronous functions.`,
      `- Use Middleware in Express: If you are using Express.js, you can define a custom error-handling middleware to catch unhandled exceptions and prevent the server from crashing.`,
    ],
  },
  {
    question: ["Explain how does Node.js work"],
    answer: [
      `-Event-Driven and Non-Blocking: Node.js is designed to be event-driven and non-blocking. This means that it can handle multiple concurrent operations without blocking the execution of other tasks. It uses an event loop to manage asynchronous operations, allowing it to efficiently handle I/O operations and scale well for handling multiple requests simultaneously.`,
      `-Single-Threaded Event Loop: Node.js runs on a single thread, which means it uses a single process to handle all incoming requests. However, it leverages the non-blocking I/O model to avoid blocking the thread while waiting for I/O operations to complete. When an I/O operation is initiated, Node.js continues executing other tasks while waiting for the I/O operation to finish. Once the I/O operation is completed, a callback function is triggered, and the result is processed.`,
      `-Callbacks and Asynchronous Programming: Node.js heavily relies on callbacks and asynchronous programming to handle I/O operations. Instead of waiting for an operation to complete, Node.js registers a callback function and continues executing other tasks. When the operation is finished, the callback is invoked, allowing the program to process the result.`,
      `-Modules and NPM: Node.js supports the use of modules, allowing you to organize your code into reusable components. The Node Package Manager (NPM) is a package manager that comes bundled with Node.js, allowing you to install and manage external libraries and modules easily.`,
      `-HTTP and Web Servers: Node.js has built-in support for creating web servers using the HTTP module. It enables you to handle HTTP requests and responses, making it well-suited for building web applications and APIs.`,
      `-Libuv: Node.js uses the Libuv library to handle the event loop and provide cross-platform support for asynchronous I/O operations. Libuv abstracts the underlying operating system's I/O functionality, enabling Node.js to work efficiently on various platforms.`,
    ],
  },
  {
    question: ["What is Stream Chaining in Node.js"],
    answer: [
      `Stream chaining in Node.js refers to the process of connecting multiple streams together to create a pipeline for processing data in a more efficient and modular way. It allows you to pass data from one stream to another, enabling data processing in chunks rather than loading the entire data into memory.`,
      `Node.js provides a powerful Stream API that allows you to work with streams for reading and writing data. Streams are objects that facilitate the flow of data between a source and a destination. They are especially useful for handling large datasets or data that arrives incrementally.`,
      `Stream chaining involves connecting different types of streams together to perform various operations on the data as it flows through the pipeline. Here are some common stream types used in stream chaining:`,
      `- Readable Streams: These streams are the source of data. They emit data that can be read by other streams.`,
      `- Writable Streams: These streams are the destination of data. They receive and process data from readable streams.`,
      `- Transform Streams: These streams can both read and write data. They allow you to modify or transform the data as it passes through the pipeline. Transform streams are often used for data manipulation, parsing, or compression.`,
      `The typical approach for stream chaining involves creating a pipeline by piping the output of one stream to the input of another. This is done using the pipe() method, which simplifies the process of handling data flow between streams.`,
      `By chaining streams together, Node.js can efficiently process large amounts of data without consuming excessive memory. Stream chaining is particularly useful for scenarios like file processing, network communication, and data transformation, where data needs to be processed incrementally and in smaller chunks.`,
    ],
  },
  {
    question: ["What are Event Emitters?"],
    answer: [
      `Event Emitters in Node.js are objects that allow you to handle and respond to events in an event-driven architecture. They are a core part of the Node.js event system and play a crucial role in enabling asynchronous, non-blocking operations.`,
      `An Event Emitter is an instance of the EventEmitter class provided by the events module in Node.js. It allows you to define custom events and register listeners (also known as event handlers) for those events. When an event is emitted, all registered listeners for that event are executed in the order they were registered.`,
      `Key components of Event Emitters:`,
      `- EventEmitter Class: The EventEmitter class is a built-in class in Node.js, and you can create an instance of it using the new keyword. It provides methods to define events, register listeners, emit events, and more.`,
      `- Event: An event is a string identifier that represents a specific action or occurrence. Events can be predefined (e.g., 'data', 'error', 'close', etc.) or custom events defined by the developer.`,
      `- Listener: A listener, also known as an event handler, is a function that is executed when a specific event is emitted. Listeners are registered to events using the on() or addListener() method of the EventEmitter class.`,
      `- Emit: To trigger an event, you use the emit() method of the EventEmitter class. When an event is emitted, all registered listeners for that event are called synchronously.`,
    ],
  },
  {
    question: ["What are Buffer and why to use thme in Node.js"],
    answer: [
      `In Node.js, a Buffer is a built-in class that provides a way to work with binary data, such as raw bytes of memory. Buffers are used to handle and manipulate binary data directly, without requiring the data to be converted to strings or other data types.`,
      `Here are some key characteristics and reasons to use Buffers in Node.js:`,
      `- Handling Binary Data: Buffers are used to store and manipulate binary data, which may include images, audio, video, network packets, or any other form of data that is not directly represented as text.`,
      `- Efficient Memory Management: Buffers are allocated from the system's memory pool, which is an area of memory optimized for handling binary data. This allows Buffers to be more memory-efficient and performant when dealing with large datasets.`,
      `- Data Conversion: Buffers allow you to convert data between different formats, such as converting a string to binary data or vice versa.`,
      `- Buffer Operations: Buffers provide methods to perform various operations on binary data, such as slicing, copying, filling, comparing, and more.`,
      `- Handling Streams: Buffers are commonly used in conjunction with streams to efficiently read, write, and process data in chunks.`,
      `- Working with Encodings: Buffers support various character encodings, such as UTF-8, ASCII, Base64, etc., allowing you to handle text data in different formats.`,
      `While working with Buffers, it's essential to be aware of potential security risks, such as buffer overflows, which can lead to vulnerabilities in your application. Node.js provides safe methods for handling Buffers, like Buffer.from() and Buffer.alloc(), to avoid security issues related to buffer manipulation.`,
      `Overall, Buffers are a fundamental part of Node.js, especially when dealing with binary data or interacting with the underlying system at a lower level. They are essential for efficient I/O operations and handling various data types in Node.js applications.`,
    ],
  },
  {
    question: ["What is Blocking Code in Node.js"],
    answer: [
      `In Node.js, blocking code refers to code that can cause the entire application to pause or block its execution while waiting for a resource to become available or an operation to complete. During this blocking period, the Node.js event loop, which handles asynchronous operations, is unable to process other tasks, leading to potential performance issues and reduced responsiveness.`,
      `Blocking code is often associated with synchronous operations, where the code execution follows a strict sequence, and the program waits for each operation to finish before proceeding to the next one. Common examples of blocking operations include:`,
      `- File System Operations: Reading or writing files synchronously can cause the application to block until the operation is completed.`,
      `- Network Requests: Making synchronous network requests can lead to delays in the application, especially if the network response takes time.`,
      `- CPU-Intensive Tasks: Performing complex computations synchronously can monopolize the CPU and prevent other tasks from being executed.`,
      `Blocking code can lead to poor performance, especially in server applications where responsiveness is crucial. Node.js is designed to be non-blocking and asynchronous, enabling it to handle multiple tasks concurrently without getting blocked by long-running operations.`,
      `To avoid blocking code in Node.js, developers are encouraged to use asynchronous operations, such as callbacks, Promises, or async/await, which allow the event loop to handle multiple tasks concurrently while waiting for I/O operations or other asynchronous tasks to complete. Asynchronous programming helps improve the overall performance and scalability of Node.js applications by maximizing the utilization of system resources.`,
    ],
  },
  {
    question: ["How does concurrency work in Node.js"],
    answer: [
      `Concurrency in Node.js is achieved through its non-blocking, event-driven architecture. Node.js utilizes a single-threaded event loop, which enables it to handle multiple concurrent connections and tasks efficiently without creating additional threads for each operation.`,
      `Here's how concurrency works in Node.js:`,
      `- Single-Threaded Event Loop: Node.js operates on a single thread to execute JavaScript code. The event loop is the heart of Node.js, responsible for handling I/O operations and callbacks. When an asynchronous operation, such as reading a file or making a network request, is initiated, Node.js doesn't wait for it to complete. Instead, it registers a callback and continues to execute other code. When the asynchronous operation finishes, the event loop retrieves the corresponding callback and executes it.`,
      `- Non-Blocking I/O: Node.js uses non-blocking I/O operations to ensure that the application can continue processing other tasks while waiting for I/O operations to complete. This approach is particularly suitable for handling a large number of concurrent connections, such as in web servers or real-time applications.`,
      `- Event-Driven Architecture: Node.js relies heavily on event-driven programming. It listens for various events, such as incoming HTTP requests or file read completions, and triggers corresponding callbacks when those events occur. This event-driven model allows Node.js to efficiently manage concurrency by handling multiple tasks in parallel.`,
      `- Event Loop Phases: The event loop in Node.js goes through several phases in each iteration. During each phase, it processes different types of events and executes the corresponding callbacks. The main phases are: timers, I/O callbacks, idle, poll, check, and close callbacks. This ensures that different types of events are processed in the most optimal order.`,
      `- Libuv: Under the hood, Node.js uses the Libuv library to handle asynchronous I/O operations and provide cross-platform support. Libuv abstracts the underlying operating system's asynchronous capabilities, enabling Node.js to be highly performant across different platforms.`,
      `- Worker Threads (Optional): Although Node.js primarily runs on a single thread, it also provides an optional Worker Threads module that allows developers to create additional threads for CPU-intensive tasks. However, most Node.js applications do not require explicit use of worker threads due to the efficiency of the event loop and non-blocking I/O.`,
      `By leveraging these concurrency mechanisms, Node.js can handle thousands of concurrent connections efficiently, making it well-suited for building high-performance and scalable applications. It is particularly popular for web servers, real-time applications, and other network-intensive use cases.`,
    ],
  },
  {
    question: [
      "What is stream and what are types of streams available in Node.js",
    ],
    answer: [
      `In Node.js, streams are a fundamental concept used to handle data flow efficiently, especially for handling large volumes of data or when dealing with data that is received or generated incrementally. Streams allow data to be processed piece by piece (chunk by chunk) instead of loading the entire data into memory all at once, making them memory-efficient and faster for I/O operations.`,
      `There are four types of streams available in Node.js:`,
      `- Readable Streams: Readable streams are used for reading data from a source, such as a file, network request, or standard input (stdin). They provide an interface to read data in chunks, allowing data to be processed as soon as it becomes available, rather than waiting for the entire data to load. Examples include fs.createReadStream() for reading files and http.IncomingMessage for reading HTTP request bodies.`,
      `- Writable Streams: Writable streams are used for writing data to a destination, such as a file, network response, or standard output (stdout). They provide an interface to write data in chunks, which can be more memory-efficient when dealing with large datasets. Examples include fs.createWriteStream() for writing files and http.ServerResponse for writing HTTP responses.`,
      `- Duplex Streams: Duplex streams combine both Readable and Writable streams, allowing data to be both read from and written to the stream. They are useful for situations where a continuous flow of data is required bidirectionally. Examples include network sockets and TCP connections.`,
      `- Transform Streams: Transform streams are a type of Duplex stream that allow data to be modified or transformed as it is read from the source and written to the destination. They are commonly used for data processing tasks, such as compression, encryption, or parsing. Examples include the zlib.createGzip() transform stream for compressing data and the crypto.createCipher() transform stream for encrypting data.`,
      `Node.js provides a set of built-in modules and classes for working with streams, making it easy to read, write, and manipulate data in a streaming fashion. Streams are particularly useful when dealing with large files, real-time data processing, network communication, and other scenarios where memory efficiency and performance are critical.`,
    ],
  },
  {
    question: ["How does Node.js handle Child Threads?"],
    answer: [
      `Node.js has a single-threaded event loop architecture, which means it runs all JavaScript code in a single thread. However, it provides a mechanism to handle child threads for CPU-intensive tasks through the "Worker Threads" module.`,
      `Here's how Node.js handles child threads using the Worker Threads module:`,
      `- Worker Threads: The Worker Threads module is a built-in module in Node.js that allows developers to create and manage child threads. Child threads are separate threads that can run concurrently with the main event loop, enabling parallel execution of CPU-intensive tasks.`,
      `- Creating Child Threads: To create a child thread, you use the Worker class provided by the Worker Threads module. You can pass a JavaScript file (module) to be executed in the child thread, or you can use a function that will be executed in the child thread.`,
      `- Isolation: Each child thread is isolated and runs in its own V8 instance, which means they have their own JavaScript heap and do not share memory with the main thread. This isolation ensures that changes made to variables or data in one thread do not affect the other threads.`,
      `- Communication: Communication between the main thread and child threads is done through message passing. You can use the postMessage() method to send messages from the main thread to a child thread, and the child thread can use the on('message') event to receive and handle these messages. Likewise, a child thread can send messages back to the main thread using parentPort.postMessage().`,
      `- SharedArrayBuffer: While child threads have isolated memory, Node.js provides the SharedArrayBuffer object that can be used to share memory between multiple threads. However, it is important to note that using shared memory comes with potential synchronization issues and requires careful handling to avoid race conditions.`,
      `- Use Cases: Worker Threads are primarily useful for parallelizing CPU-intensive tasks, such as mathematical computations, image processing, and heavy data manipulation. They allow Node.js to leverage multi-core CPUs efficiently.`,
      `- Limitations: It's important to use Worker Threads judiciously, as creating too many threads can still introduce performance overhead due to context switching and thread management. Additionally, not all Node.js libraries and modules are designed to work seamlessly with Worker Threads, so some modules may not be compatible with multi-threaded execution.`,
      `Overall, Worker Threads provide a way to achieve limited concurrency in Node.js by leveraging multiple CPU cores for CPU-bound tasks. However, Node.js remains single-threaded for handling I/O operations, which is its primary strength for handling high levels of concurrency in I/O-bound applications.`,
    ],
  },
  {
    question: ["When should we use Node.js"],
    answer: [
      `Node.js is a versatile platform that can be used for a wide range of applications. Here are some scenarios where Node.js is particularly well-suited:`,
      `- Real-time Applications: Node.js is excellent for building real-time applications like chat applications, online gaming, collaborative tools, and streaming applications, where low latency and instant data updates are crucial. Its event-driven, non-blocking I/O model makes it efficient for handling real-time connections.`,
      `- Asynchronous and I/O-Intensive Applications: Node.js shines in applications that involve heavy I/O operations, such as web servers, RESTful APIs, and file systems. Its asynchronous nature allows it to handle multiple concurrent requests efficiently, making it suitable for high-traffic applications.`,
      `- Microservices: Node.js is a great choice for building microservices architecture. Its lightweight and modular design, along with its ability to handle asynchronous requests, makes it ideal for building scalable and easily maintainable microservices.`,
      `- Single-Page Applications (SPAs): Node.js can be used to serve the backend for single-page applications, allowing developers to use the same language (JavaScript) on both the client and server sides. This simplifies code sharing and improves developer productivity.`,
      `- Streaming Applications: Node.js is well-suited for applications that involve data streaming, such as real-time video and audio processing, file uploading, and large-scale data processing.`,
      `- Prototyping and MVP Development: Node.js allows developers to quickly build prototypes and minimum viable products (MVPs) due to its fast development cycle and vast ecosystem of packages and libraries.`,
      `- Proxy Servers and Load Balancers: Node.js can be used to build lightweight proxy servers and load balancers to distribute traffic across multiple servers or microservices.`,
      `- Internet of Things (IoT): For IoT applications that require lightweight and efficient communication between devices and servers, Node.js can be a good choice.`,
      `However, there are also scenarios where Node.js might not be the best fit:`,
      `- CPU-Intensive Tasks: Node.js is not the best choice for CPU-bound tasks, such as heavy mathematical computations or complex data processing. In such cases, other languages like Python, Java, or C++ might be more suitable.`,
      `- Legacy Systems Integration: If you need to integrate with legacy systems or technologies that are not compatible with Node.js, you might need to consider other solutions.`,
      `- Large-Scale Enterprise Applications: While Node.js can be used for large-scale applications, it may require careful architecture design and considerations for performance and scalability.`,
      `In summary, Node.js is a powerful and flexible platform that can be used for a wide range of applications. It excels in scenarios where real-time communication, asynchronous I/O, and fast prototyping are required. However, it's essential to consider the specific requirements of your project and choose the right technology stack accordingly.`,
    ],
  },
  {
    question: [
      "What is the difference between setTimeout(fn,0) vs setImmediate(fn)",
    ],
    answer: [
      `Both setTimeout(fn, 0) and setImmediate(fn) are used to schedule a function to be executed asynchronously in Node.js, but there are some differences in how they work.`,
      `- Timing: The primary difference between setTimeout(fn, 0) and setImmediate(fn) is in the timing of when the function will be executed.`,
      `- * setTimeout(fn, 0): When you use setTimeout(fn, 0), you are scheduling the function to be executed after a minimum delay of 0 milliseconds. However, due to the event loop's internal mechanisms, the actual execution may be delayed slightly. This is because the event loop needs to check the timer queue and execute the function at the next available opportunity, which could be a few milliseconds later.`,
      `- * setImmediate(fn): On the other hand, setImmediate(fn) schedules the function to be executed in the next iteration of the event loop, immediately after the current one. It does not use a timer, so there is no delay involved. If there are other pending I/O events or callbacks, they will be executed before the function passed to setImmediate.`,
      `- Priority: In terms of priority, setImmediate(fn) has higher priority than setTimeout(fn, 0).`,
      `- * setImmediate(fn): When you use setImmediate(fn), the function will be placed in the check phase of the event loop, which has higher priority than the timer phase where setTimeout callbacks are executed. This means that functions scheduled with setImmediate will be executed before any callbacks scheduled with setTimeout.`,
      `- * setTimeout(fn, 0): Functions scheduled with setTimeout(fn, 0) will be placed in the timer phase of the event loop, which has slightly lower priority than the check phase. As a result, if there are any pending setImmediate callbacks, they will be executed before the setTimeout callbacks.`,
      `In most cases, both setTimeout(fn, 0) and setImmediate(fn) will achieve similar results, and the differences in timing and priority are generally not critical for most applications. However, if you have a specific use case where the timing or priority is crucial, you can choose one over the other accordingly. For most scenarios, using either of them is a valid way to schedule a function to be executed asynchronously in Node.js.`,
    ],
  },
  {
    question: ["What's the Event loop?"],
    answer: [
      `The event loop is a fundamental concept in Node.js and other event-driven programming environments. It is the mechanism responsible for handling and processing asynchronous events in an efficient and non-blocking manner. The event loop enables Node.js to handle concurrent operations and execute code asynchronously, which is crucial for building scalable and performant applications.`,
      `Here's a simplified explanation of how the event loop works in Node.js:`,
      `- Event Queue: When asynchronous operations, such as reading from a file, making a network request, or setting a timer with setTimeout, are executed, the results are placed in the event queue. The event queue is a data structure that holds callbacks and events that have completed or need to be executed.`,
      `- Call Stack: The call stack is a data structure that keeps track of the functions that are currently being executed in the program. When a function is called, it is added to the top of the call stack. When a function finishes its execution, it is removed from the stack.`,
      `- Event Loop: The event loop is a loop that constantly checks the event queue and the call stack. When the call stack is empty (i.e., there are no functions currently being executed), the event loop picks the first callback from the event queue and pushes it onto the call stack for execution.`,
      `- Non-Blocking: The event loop's key feature is that it is non-blocking. While the event loop is waiting for new events to arrive in the event queue, it does not block the main execution thread. Instead, it keeps the program responsive and continues processing other events and callbacks. This allows Node.js to handle multiple concurrent operations without the need for multiple threads.`,
      `- Single-Threaded: Node.js is single-threaded, meaning it runs all JavaScript code on a single thread. The event loop is responsible for managing the asynchronous operations and distributing the work among other system threads if needed, but the application code itself executes in a single thread.`,
      `The event loop is the heart of Node.js's asynchronous and non-blocking nature. It allows Node.js to efficiently handle I/O operations and scale well even with a large number of concurrent connections. This makes it particularly well-suited for building high-performance web servers, real-time applications, and other applications that require handling a large number of concurrent requests.`,
    ],
  },
  {
    question: ["When should I use EventEmitter"],
    answer: [
      `You should use EventEmitter in Node.js when you want to implement a publish-subscribe pattern or create custom event-driven communication between different parts of your application. EventEmitter is a built-in class in Node.js that allows you to emit events from one part of your code and listen for those events in other parts.`,
      `Here are some situations where using EventEmitter can be beneficial:`,
      `- Custom Events: If you need to define and handle custom events in your application, EventEmitter provides a convenient way to create and manage event names and their corresponding listeners.`,
      `- Asynchronous Communication: EventEmitter is particularly useful for handling asynchronous communication between different modules or components of your application. It allows you to decouple different parts of your code and enable them to communicate without directly invoking each other's functions.`,
      `- Event Notifications: If you want to notify other parts of your application when a particular action or operation occurs, you can emit an event using EventEmitter, and the relevant listeners can respond to that event accordingly.`,
      `- Custom Event Handling: EventEmitter enables you to define custom event handling logic, such as performing specific actions when certain events occur, updating data, triggering additional processes, or logging information.`,
      `- Event-driven Architectures: EventEmitter is a core component of event-driven architectures, where different components of the application communicate with each other through events, promoting loose coupling and modular design.`,
      `- Node.js Core Modules: EventEmitter is used in various Node.js core modules, such as HTTP, File System, and others, to handle events and notify consumers about the status or results of asynchronous operations.`,
      `Overall, EventEmitter is valuable when you need to implement event-based communication in your Node.js application, whether it's to create custom events, enable decoupled interactions, or build a flexible and scalable architecture. It is a powerful tool that leverages the event-driven nature of Node.js to create efficient and responsive applications.`,
    ],
  },
  {
    question: [
      "Whats is difference between synchronous and asynchronous method of fs module",
    ],
    answer: [
      `The File System (fs) module in Node.js provides both synchronous and asynchronous methods for interacting with the file system. The main difference between the two is how they handle blocking and non-blocking operations.`,
      `- Synchronous Methods:`,
      `- * Synchronous methods in the fs module block the execution of the code until the operation is completed. This means that when you call a synchronous method, the code will wait for the operation to finish before moving on to the next line of code.`,
      `- * The syntax for synchronous methods is straightforward, and they return the result directly. For example, fs.readFileSync() reads a file synchronously and returns the file contents as a string or buffer.`,
      `- * Synchronous methods are easier to use in terms of code flow since they execute sequentially. However, they can cause the entire application to block if the operation takes a long time, leading to reduced performance and responsiveness.`,
      `Example of synchronous method:`,
      `[img] questions/nodejs/synchronious-fn.png`,
      `- Asynchronous Methods:`,
      `- * Asynchronous methods in the fs module do not block the execution of the code. Instead, they use callbacks or Promises to handle the results once the operation is completed.`,
      `- * When you call an asynchronous method, the code immediately moves on to the next line without waiting for the operation to finish. The result of the operation is then passed to a callback function or handled through a Promise once it's available.`,
      `- * Asynchronous methods are preferred in Node.js for I/O operations, such as reading/writing files or making network requests, as they allow the application to continue processing other tasks while waiting for the I/O to complete, resulting in better performance and responsiveness.`,
      `Example of asynchronous method using callbacks:`,
      `[img] questions/nodejs/asynchronous-fn.png`,
      `Example of asynchronous method using Promises:`,
      `[img] questions/nodejs/asynchronous-promises-fn.png`,
      `In summary, synchronous methods block the execution until the operation is complete, while asynchronous methods allow the application to continue processing other tasks while waiting for the operation to finish, resulting in better performance and responsiveness for I/O operations. Asynchronous methods are generally recommended for most file system interactions in Node.js applications.`,
    ],
  },
  {
    question: ["Could we run an external process with Node.js?"],
    answer: [
      `Yes, Node.js provides the ability to run external processes using the child_process module. This module allows you to spawn new processes, interact with them, and capture their outputs.`,
      `There are several functions available in the child_process module for running external processes:`,
      `- exec(): This function is used to run a command in a shell and buffer the output. It is suitable for simple commands that do not require interaction.`,
      `[img] questions/nodejs/external-process-exec.png`,
      `- spawn(): This function is used to launch a new process with the given command and arguments. It allows streaming of data between the parent and child process.`,
      `[img] questions/nodejs/external-process-spawn.png`,
      `- fork(): This function is a variation of spawn() that allows communication between the parent and child processes using inter-process communication (IPC).`,
      `[img] questions/nodejs/external-process-fork.png`,
      `Using the child_process module, you can execute various external commands, scripts, or programs from your Node.js application and handle their outputs or communicate with them as needed. However, it's important to be cautious when running external processes to avoid security risks and potential vulnerabilities. Always validate and sanitize any user inputs that might be used in the commands you execute to prevent command injection attacks.`,
    ],
  },
  {
    question: [
      "Are you familiar with differences between Node.js and ES6 modules?",
    ],
    answer: [
      `1. Import and Export Syntax:`,
      `- Node.js (CommonJS):`,
      `- * Importing: const module = require('module');`,
      `- * Exporting: module.exports = { /* ... */ };`,
      `- ES6 Modules:`,
      `- * Importing: import module from 'module';`,
      `- * Exporting: export default { /* ... */ };`,
      `2. Compatibility:`,
      `- Node.js (CommonJS) modules are compatible with all versions of Node.js and can be used in older versions.`,
      `- ES6 modules require a more recent version of Node.js (version 12 or later). They may not work with older versions of Node.js without using transpilers or other tools to convert them to CommonJS format.`,
      `3. Static vs Dynamic Import:`,
      `- Node.js (CommonJS) modules are dynamically loaded, meaning the require function is evaluated at runtime.`,
      `- ES6 modules are statically imported, meaning they are evaluated at compile time. This allows better tree-shaking and optimization during the build process.`,
      `4. Top-Level Scope:`,
      `- Node.js (CommonJS) modules have their own top-level scope. Variables declared inside a module are local to that module and not accessible outside.`,
      `- ES6 modules are strict by default and have their own top-level scope. Variables declared inside a module are not automatically added to the global scope.`,
      `5. Circular Dependencies:`,
      `- Node.js (CommonJS) allows circular dependencies between modules, but it may lead to unexpected behavior or race conditions.`,
      `- ES6 modules do not support circular dependencies. If a circular dependency is detected, it will result in an error.`,
      `6. Named Exports:`,
      `- Node.js (CommonJS) modules export all their members as a single object.`,
      `- ES6 modules support named exports, allowing you to export individual functions, variables, or classes by name.`,
      `7. Default Exports:`,
      `- Node.js (CommonJS) does not have a built-in concept of default exports. You need to explicitly specify what to export.`,
      `- ES6 modules have a default export, which is the main export of a module and can be imported with a different name when imported.`,
      `In summary, Node.js modules (CommonJS) and ES6 modules have different syntax and features. While Node.js modules are well-established and widely used in Node.js applications, ES6 modules provide more modern features and better integration with modern JavaScript tools and build processes. The choice between the two depends on the Node.js version and the specific needs of your project.`,
    ],
  },
  {
    question: ["What are the use cases for the Node.js vm core module?"],
    answer: [
      `The Node.js vm (Virtual Machine) core module provides an isolated environment where JavaScript code can be executed in a sandboxed context. It allows you to run untrusted code or scripts securely and manage its execution environment. Here are some of the use cases for the vm module:`,
      `- Sandboxed Execution: The vm module allows you to execute JavaScript code in a sandboxed environment, separate from the main Node.js process. This is useful when you want to run untrusted code or scripts from external sources, such as user-generated content or plugins, without risking the security of your main application.`,
      `- Dynamic Code Evaluation: You can use the vm module to evaluate dynamically generated JavaScript code. For example, if you need to execute code generated at runtime or code received from an API or database, the vm module can be used to safely evaluate it without polluting the global scope.`,
      `- Code Isolation: The vm module provides a way to execute code in an isolated context, preventing it from accessing variables, functions, or modules from the outer scope. This helps maintain a separation of concerns and prevents conflicts between different parts of the application.`,
      `- Context Sharing: With the vm module, you can share a context between different pieces of code. This allows you to create reusable functions or libraries that can be used in multiple contexts without interfering with each other.`,
      `- Dynamic Script Loading: You can use the vm module to load and execute JavaScript files at runtime. This can be useful for implementing dynamic plugins or adding new functionality to an application without requiring a server restart.`,
      `- Testing and Debugging: The vm module can be used in testing and debugging scenarios. For example, you can create isolated environments for running tests to ensure that they do not interfere with each other and can safely be executed in parallel.`,
      `- Customized Application Sandboxes: If your application needs to provide a secure environment for user-provided code, such as a code playground or scripting interface, the vm module can help create custom sandboxes with specific restrictions on resources and access.`,
      `It's important to note that while the vm module provides a way to run code securely, executing untrusted code still comes with risks. Careful consideration should be given to limit access to sensitive resources and to implement proper security measures to prevent malicious code from causing harm to your system.`,
      `Overall, the Node.js vm module is a powerful tool that enables you to safely execute JavaScript code in isolated contexts and is particularly useful in scenarios where code needs to be evaluated dynamically or provided by external sources.`,
    ],
  },
  {
    question: ["How do you debug Node.js applications?"],
    answer: [
      `Debugging Node.js applications can be done using various tools and techniques. Here are some common ways to debug Node.js applications:`,
      `- Console Logging: One of the simplest ways to debug is by using console.log() statements in your code to print out values and messages at various points in your application. This helps you understand the flow of execution and inspect the values of variables.`,
      `- Debugger Statement: Node.js has a built-in debugger statement that you can insert into your code. When the debugger statement is encountered, the Node.js application will pause execution, and you can inspect the code using the Chrome Developer Tools or other debugging tools.`,
      `- Chrome Developer Tools: You can use the Chrome Developer Tools to debug Node.js applications. Start your Node.js application with the --inspect flag, and it will create a debugging session. Then, open Chrome and navigate to chrome://inspect, where you can see the list of active Node.js processes and start debugging.`,
      `- Node Inspector: Node Inspector is a third-party tool that provides a graphical user interface for debugging Node.js applications. It integrates with the Chrome Developer Tools and allows you to set breakpoints, inspect variables, and step through the code.`,
      `- Visual Studio Code (VSCode) Debugger: If you use Visual Studio Code as your code editor, you can take advantage of its built-in debugger for Node.js. Simply set breakpoints in your code and use the debugging features provided by VSCode.`,
      `- Debugging Middleware: In Express.js applications, you can use debugging middleware like morgan or debug to log request/response information and debug API routes.`,
      `- Heapdump and Flamegraph: For memory and performance profiling, you can use tools like heapdump and flamegraph to generate heap snapshots and CPU flame graphs for further analysis.`,
      `- Node.js Inspector API: The Node.js Inspector API allows you to interact with the debugger programmatically. You can use it to control the execution flow, set breakpoints, and collect information about the running Node.js application.`,
    ],
  },
  {
    question: ["What is export default in JS"],
    answer: [
      "In JavaScript, export default is a feature introduced in ECMAScript 6 (ES6) that allows a module to export a single default value or function. It is commonly used when a module has a single primary function or object to export. The export default statement is used to mark the default export of a module, and it can be imported in other modules using the import statement without the need for curly braces.",
    ],
  },
  {
    question: ["Is an Event Emitter Synchronous or Asynchronous"],
    answer: [
      "In Node.js, an Event Emitter is synchronous. When an event is emitted using an Event Emitter, the registered listeners (also known as event handlers) for that event are executed in a synchronous manner in the order they were registered. This means that the listeners are executed one after the other, and the execution of the code that emits the event does not continue until all the listeners have finished executing.",
    ],
  },
  {
    question: ["What is the purpose of pm2 save"],
    answer: [
      `pm2 save is a command provided by PM2, which is a process manager for Node.js applications. The purpose of pm2 save is to save the current list of running processes managed by PM2 to a process file. This process file is used to automatically resurrect the managed processes when PM2 restarts or when the system reboots.`,
      `When you start a Node.js application with PM2, it creates a process list that includes the applications you have configured to be managed by PM2. This process list is stored in memory while PM2 is running. However, if the PM2 process is terminated or the system reboots, the process list will be lost, and the managed applications will not be automatically restarted.`,
      `By using the pm2 save command, you can persist the process list to a process file called pm2.json or process.yml in the PM2 configuration directory. This file will contain information about all the applications managed by PM2, including their names, script paths, and other configuration settings.`,
      `With the process file in place, whenever PM2 starts or the system reboots, it will read the process file and automatically resurrect all the managed processes, ensuring that your Node.js applications are up and running again without manual intervention.`,
      `In summary, pm2 save is used to store the list of managed processes to a process file, allowing PM2 to automatically restart the applications when necessary, ensuring high availability and improved uptime for your Node.js applications.`,
    ],
  },
  {
    question: ["When would you use cluster module in Node.js"],
    answer: [
      `The cluster module in Node.js is used to take advantage of multi-core systems by creating child processes (workers) that share the same server port. Each child process can handle incoming connections independently, which can significantly improve the performance and concurrency of a Node.js application.`,
      `You would use the cluster module in Node.js when:`,
      `- High Concurrency: Your application needs to handle a large number of concurrent connections, and you want to utilize all available CPU cores effectively.`,
      `- Scalability: By using the cluster module, you can scale your application across multiple CPU cores, allowing it to handle more requests simultaneously.`,
      `- Performance: By distributing the workload across multiple processes, you can improve the overall performance of your application and reduce response times.`,
      `- Server Optimization: The cluster module can help you optimize server resources and reduce the chances of a single process becoming a bottleneck.`,
      `Keep in mind that not all applications may benefit from using the cluster module. Smaller applications or applications with low concurrency requirements might not see a significant improvement in performance by using multiple processes. Additionally, the cluster module is more suitable for CPU-bound tasks rather than I/O-bound tasks.`,
      `It's essential to carefully consider your application's specific needs and the resources available on the server before deciding to use the cluster module. Proper load testing and performance analysis can help determine whether the cluster module is beneficial for your particular use case.`,
    ],
  },
  {
    question: ["What is the meaning of the @ prefix on npm package?"],
    answer: [
      `The "@" prefix on an npm package is used to denote that the package is scoped. Scoped packages are packages that are organized under a specific scope, which is typically associated with a specific organization or project.`,
      `In the npm ecosystem, scoped packages are used to prevent naming conflicts and to provide a way to group related packages together. The scope is indicated by the "@" symbol followed by the scope name, like this: @scope/package-name.`,
      `For example, if an organization named "example" wants to publish a package called "utils", they can create a scoped package with the name @example/utils. This way, it is clear that the package belongs to the "example" organization, and it is less likely to clash with packages from other organizations or individuals.`,
      `Scoped packages are commonly used for packages that are intended to be used within a specific organization or project. They can also be used for private packages that are not meant to be published publicly on the npm registry.`,
    ],
  },
  {
    question: ["What is the purpose of ussing assert module in Node.js?"],
    answer: [
      `The assert module in Node.js is used for making assertions in code and validating conditions. It provides a set of functions that allow developers to check whether certain conditions are met, and if not, it throws an error with a customizable error message. The primary purpose of the assert module is to help with debugging and catching potential issues early in the development process.`,
      `Key features and purposes of using the assert module:`,
      `- Input Validation: Developers can use the assert module to validate function arguments, ensuring that they meet the expected criteria. For example, checking if a required argument is provided or if a numeric argument is within a certain range.`,
      `- Debugging: When writing tests or debugging code, assertions are helpful for checking the correctness of expected outcomes and actual results. If an assertion fails, it immediately indicates that something unexpected occurred, which can help identify and fix bugs more efficiently.`,
      `- Preconditions and Postconditions: In complex functions or algorithms, developers can use assertions to enforce preconditions (required conditions before the function is executed) and postconditions (expected conditions after the function is executed). This helps ensure the function's behavior aligns with the intended design.`,
      `- Testing: The assert module is commonly used in test suites to verify the expected behavior of functions and modules. It helps in writing test cases to check if functions produce the correct outputs or handle edge cases correctly.`,
    ],
  },
  {
    question: [
      "What is the difference between browser global scope and Node.js global scope?",
    ],
    answer: [
      `The difference between the browser global scope and Node.js global scope lies in the context in which they operate:`,
      `- Browser Global Scope:`,
      `- * In the browser, the global scope refers to the top-level scope within a web page or web application.`,
      `- * In the global scope of a browser, variables and functions declared without the var, let, or const keywords become properties of the global window object.`,
      `- * Any variable or function declared in the global scope can be accessed and modified from any part of the JavaScript code running on that web page.`,
      `- * Each tab or window in the browser has its own isolated global scope, meaning variables and functions declared in one tab are not directly accessible from another tab.`,
      `- Node.js Global Scope:`,
      `- * In Node.js, the global scope refers to the top-level scope within a Node.js application.`,
      `- * Unlike the browser, Node.js does not have a single global object like the window object. Instead, Node.js has its own global object called global.`,
      `- * Variables and functions declared without the var, let, or const keywords in the global scope of a Node.js module become properties of the global object, making them accessible across the entire application.`,
      `- * Unlike the browser, there is only one global scope in Node.js, and it is shared across all modules in the application.`,
      `In summary, the primary difference between the browser global scope and Node.js global scope is the object that represents the global context (window in the browser and global in Node.js) and the isolation of the global scope (separate for each tab/window in the browser and shared across all modules in Node.js). Understanding these differences is important when writing code that involves global variables and functions in either environment. It is generally recommended to avoid excessive use of global variables and to prefer using module-based encapsulation to reduce the risk of naming conflicts and unintended side effects.`,
    ],
  },
  {
    question: ["How to use global variable in Node.js?"],
    answer: [
      "In Node.js, you can use global variables by attaching properties to the global object. The global object is the global scope in Node.js, and any properties attached to it are accessible throughout your application.",
    ],
  },
  {
    question: [
      "When would you use global variables in Node.js? Are they always bad?",
    ],
    answer: [
      `Global variables in Node.js should be used sparingly and with caution because they can lead to code that is hard to maintain and debug. In general, it's best to avoid using global variables whenever possible. Instead, opt for other patterns and mechanisms to manage data flow and share information between modules. However, there are some cases where using global variables might be considered appropriate:`,
      `- Configuration Settings: Global variables can be used to store configuration settings that need to be accessible across different parts of the application.`,
      `- Constants: If you have values that are truly constant and won't change during the application's lifecycle, you can use global variables to store them.`,
      `- Dependency Injection: In some cases, global variables can be used for dependency injection to pass shared resources or services to various parts of the application.`,
      `- Polyfills and Shims: Global variables might be used for polyfills or shims that need to be available globally.`,
      `- Development and Debugging: During development or debugging, global variables can be temporarily used to inspect or manipulate application state.`,
      `While there are some specific scenarios where global variables may be acceptable, it's crucial to use them judiciously and be aware of their potential drawbacks:`,
      `- They can introduce tight coupling between modules, making the code harder to maintain and refactor.`,
      `- Global variables can lead to unexpected side effects when multiple modules modify the same variable.`,
      `- They may cause naming conflicts and collisions, especially in larger projects.`,
      `- Global state can make it harder to reason about the flow of data and dependencies within the application.`,
    ],
  },
  {
    question: [
      "Is there any difference between res.send and return res.send in Express.js?",
    ],
    answer: [
      `Using res.send:`,
      `- When you use res.send without a return statement, the function will continue to execute after the response is sent. This means that any code written after res.send will also be executed, which may not be desired if you want to terminate the response and prevent further processing.`,
      `Using return res.send:`,
      `- When you use return res.send, the function will immediately return after sending the response, and any code after the return statement will not be executed. This is useful when you want to terminate the response and avoid further processing.`,
    ],
  },
  {
    question: [
      "What are express.json() and express.urlencoded() in Express.js?",
    ],
    answer: [
      `In Express.js, express.json() and express.urlencoded() are middleware functions used to parse incoming request data.`,
      `- express.json():`,
      `- * express.json() is a built-in middleware in Express.js that parses incoming JSON payloads. It is responsible for parsing the request body and populating req.body with the JSON data sent by the client.`,
      `- express.urlencoded():`,
      `- * express.urlencoded() is another built-in middleware in Express.js that parses incoming URL-encoded form data. It is used to handle data submitted through HTML forms with application/x-www-form-urlencoded as the Content-Type header.`,
    ],
  },
  {
    question: [
      `What is the purpose of the "package-lock.json" file in Node.js projects?`,
    ],
    answer: [
      `The "package-lock.json" file is automatically generated by npm and serves as a lockfile. It ensures that the exact versions of dependencies installed in the project are consistent across different environments. This helps prevent any unexpected version mismatches and ensures reproducible builds.`,
    ],
  },
  {
    question: [
      `Explain the concept of middleware in Express.js and how it is used.`,
    ],
    answer: [
      `Middleware in Express.js are functions that have access to the request and response objects and the next middleware function in the application's request-response cycle. Middleware functions can perform various tasks, such as logging, parsing request data, or handling authentication. They are added using the "use()" method and can be used globally for all routes or for specific routes.`,
    ],
  },
  {
    question: [
      `How can you handle file uploads in Node.js using libraries like Multer?`,
    ],
    answer: [
      `Multer is a popular Node.js middleware used for handling file uploads. To use Multer, I first install it using npm. Then, I configure it in my Express application. I can specify the destination folder where uploaded files will be saved, and I can define a custom filename function. When handling a file upload, I add the Multer middleware to the route, and it automatically processes the file and stores it in the designated folder.`,
    ],
  },
  {
    question: [
      `What are the differences between RESTful and GraphQL APIs, and when would you choose one over the other?`,
    ],
    answer: [
      ` RESTful APIs and GraphQL are both ways to design APIs, but they have different approaches. RESTful APIs use predetermined endpoints and HTTP methods to perform CRUD operations. In contrast, GraphQL provides a single endpoint and allows clients to request exactly the data they need, reducing over-fetching or under-fetching of data. I would choose RESTful APIs for simpler applications with a clear data structure and use GraphQL for complex applications where the data requirements are diverse.`,
    ],
  },
  {
    question: [
      `What is Cross-Origin Resource Sharing (CORS) and how can you handle it in an Express.js application?`,
    ],
    answer: [
      `Cross-Origin Resource Sharing (CORS) is a security feature implemented in web browsers to prevent web pages from making requests to a different domain than the one that served the page. It is a mechanism that allows servers to specify which origins are allowed to access their resources. In an Express.js application, we can handle CORS by using the "cors" middleware. The "cors" middleware automatically adds the necessary CORS headers to responses, allowing or denying access based on the configuration provided.`,
    ],
  },
  {
    question: [
      `How does session management work in Node.js, and what are some popular libraries for handling sessions?`,
    ],
    answer: [
      `Session management in Node.js involves maintaining user-specific data across multiple requests. One common way to handle sessions is by using session cookies. When a user logs in, a unique session identifier is stored in a cookie on the client-side, and the corresponding session data is stored on the server-side. On subsequent requests, the server retrieves the session data based on the session identifier from the cookie. Some popular libraries for handling sessions in Node.js are "express-session" and "cookie-session."`,
    ],
  },
  {
    question: [
      `What are the different ways to handle authentication and authorization in a Node.js application?`,
    ],
    answer: [
      `There are several ways to handle authentication and authorization in a Node.js application. For authentication, we can use techniques like username and password, social media authentication, or JSON Web Tokens (JWT). Once the user is authenticated, we can implement authorization by setting up roles or permissions. Some popular authentication libraries include "Passport.js" and "jsonwebtoken," while "CASL" and "Access Control" are commonly used for authorization.`,
    ],
  },

  {
    question: [
      `Explain the purpose of the "npm start" command and how it's typically configured in a Node.js project.
    `,
    ],
    answer: [
      `The "npm start" command is used to start a Node.js application. It is defined in the "scripts" section of the "package.json" file and is commonly used as a convenient way to run the application during development. When I run "npm start" in the terminal, npm looks for the "start" script in "package.json" and executes the command specified there. For example, the "start" script might run the application using "node app.js" or any other command to launch the main server file.

    `,
    ],
  },

  {
    question: [
      `What is the purpose of the "dotenv" package in Node.js projects, and how can it be used to manage environment variables?
    `,
    ],
    answer: [
      `The "dotenv" package in Node.js projects is used to load environment variables from a file named ".env" into the process's environment. It allows us to manage sensitive information, configuration details, or API keys securely without exposing them in version control. By placing environment-specific variables in the ".env" file, we can access them using "process.env" throughout the application. The "dotenv" package is commonly used during development and can be excluded in production environments where environment variables are set directly.

    `,
    ],
  },

  {
    question: [
      `How can you implement caching mechanisms in a Node.js application to improve performance?
    `,
    ],
    answer: [
      `Implementing caching mechanisms in a Node.js application can significantly improve performance. One approach is to use in-memory caching with libraries like "node-cache" or "memory-cache." These libraries store frequently accessed data in memory, reducing the need to fetch the data from the database repeatedly.`,
      `Another approach is to use a caching layer like Redis, which allows storing and managing cached data separately from the application's memory. Redis offers better scalability and persistence options, making it suitable for caching in more extensive and distributed applications.`,
      `Caching can be applied to various levels, such as database query results, API responses, or even rendered HTML pages, depending on the specific use case and performance needs of the application. By carefully choosing what data to cache and setting appropriate cache expiry times, we can achieve significant performance improvements.`,
    ],
  },

  {
    question: [
      `What are WebSockets, and how can you implement real-time communication using libraries like Socket.io in Node.js?
    `,
    ],
    answer: [
      `      WebSockets are a protocol that provides full-duplex communication channels over a single TCP connection, allowing real-time, bi-directional data transfer between the client and the server. Unlike traditional HTTP, where the client initiates a request and the server responds, WebSockets enable continuous communication, making them ideal for real-time applications like chat applications, notifications, or live updates.`,
      `To implement real-time communication using libraries like Socket.io in Node.js, we first install Socket.io via npm. In the server-side code, we create an HTTP server using Express or HTTP module, and then we integrate Socket.io with that server. On the client-side, we include the Socket.io client library in our HTML page.`,
      `Socket.io provides a simple API to handle events, such as "connect," "disconnect," and custom events that we can emit and listen for on both the client and server sides. This bidirectional event-based communication allows real-time data exchange between clients and the server.`,
    ],
  },

  {
    question: [
      `Describe the concept of template engines in Express.js and provide examples of popular template engines used in Node.js.
    `,
    ],
    answer: [
      `Template engines in Express.js are used to render dynamic content on the server and generate HTML pages by combining data with pre-designed templates. Instead of sending static HTML files to the client, we can use template engines to inject dynamic data into those templates before sending the final HTML to the client.`,
      `Some popular template engines used in Node.js with Express are:`,
      `- Pug (formerly known as Jade): It uses indentation-based syntax and offers concise and readable code for writing templates.`,
      `- EJS (Embedded JavaScript): It allows embedding JavaScript code within HTML, making it easy to mix dynamic data with HTML templates.`,
      `- Handlebars: It provides a simple syntax for embedding data into templates using curly braces and allows creating reusable partial templates.`,
    ],
  },

  {
    question: [
      `How can you handle database interactions in Node.js applications, and what are some popular database libraries used in Node.js?
    `,
    ],
    answer: [
      `Node.js offers multiple ways to handle database interactions. We can use raw SQL queries with libraries like "mysql," "pg" for PostgreSQL, or "sqlite3" for SQLite. However, working with raw queries can be tedious, so using Object-Relational Mapping (ORM) libraries like "Sequelize" (for SQL databases) or "Mongoose" (for MongoDB) is a popular choice. These ORM libraries abstract the database interactions, allowing us to work with JavaScript objects instead of raw SQL queries.`,

      `Using ORMs, we can define models and perform database operations using high-level methods, making database interactions more convenient and easier to manage.`,
    ],
  },

  {
    question: [
      `What is the purpose of the "cluster" module in Node.js, and how does it enable scaling for multi-core processors?`,
    ],
    answer: [
      `The "cluster" module in Node.js enables scaling applications to fully utilize the processing power of multi-core processors. It allows us to create child processes (worker threads) that share the same server port. Each child process runs as a separate Node.js instance and can handle incoming requests independently.`,

      `By creating multiple worker processes, the application can distribute the load across the available CPU cores, improving performance and handling more concurrent connections. The "cluster" module helps achieve better utilization of server resources and enhances the application's ability to handle high loads, making it suitable for scalable and performance-intensive applications.`,
    ],
  },
  {
    question: [
      `Explain how you can deploy a Node.js application to a production server, including best practices for security and performance.
    `,
    ],
    answer: [
      `Deploying a Node.js application to a production server involves several steps and considerations for security and performance. Here's a general outline:`,
      `- Set up a production environment: Ensure the production server has Node.js and npm installed. Use a process manager like PM2 or Forever to manage the Node.js process.`,
      `- Use environment variables: Store sensitive information like API keys, database credentials, or secret keys as environment variables, not in the code or configuration files.`,
      `- Secure dependencies: Regularly update dependencies and avoid using vulnerable packages. Use npm audit to check for security issues.`,
      `- Enable HTTPS: Use SSL certificates to encrypt data and enable HTTPS for secure communication between the server and clients.`,
      `- Use a reverse proxy: Set up a reverse proxy like Nginx or Apache to handle incoming requests and forward them to the Node.js application. This can improve security, performance, and handle SSL termination.`,
      `- Optimize performance: Minify and compress static assets like CSS and JS files. Use a Content Delivery Network (CDN) to distribute static files to edge servers for faster delivery.`,
      `- Enable caching: Set cache headers to cache static assets and API responses that don't change frequently.`,
      `- Load balancing: Implement load balancing using tools like Nginx, HAProxy, or cluster module to distribute incoming requests across multiple instances or processes for improved performance and availability.`,
    ],
  },
  {
    question: [
      `What are microservices, and how can you implement them in a Node.js architecture?

    `,
    ],
    answer: [
      `Microservices is an architectural style where an application is divided into smaller, independent services, each serving a specific business function. Each service runs as a separate process and can communicate with other services through APIs. This approach allows teams to work independently on different services, making it easier to scale, maintain, and update the application.`,
      `In Node.js architecture, microservices can be implemented by creating individual Node.js applications for each service, each with its own domain logic and database if needed. These services can communicate via HTTP, messaging systems like RabbitMQ, or shared databases. Docker and Kubernetes can be used for containerization and orchestration, allowing easy scaling and deployment of microservices.`,
    ],
  },
  {
    question: [
      `What is the "Event Loop" in Node.js, and how does it enable non-blocking I/O operations?
    `,
    ],
    answer: [
      `The Event Loop is a critical part of Node.js that enables non-blocking I/O operations. It is responsible for handling and dispatching events, such as incoming requests or timers, in an event-driven architecture.`,
      `When a Node.js application starts, it enters the Event Loop, which keeps checking for pending I/O operations, like reading files or making network requests. Instead of blocking the execution until the I/O operation completes, Node.js continues executing other tasks while waiting for I/O events. Once an I/O operation completes, a callback is added to the event queue, and the Event Loop processes the queued callbacks when the main thread becomes idle.`,
      `This non-blocking behavior allows Node.js to efficiently handle multiple concurrent connections without creating a thread per connection, making it scalable and suitable for I/O-heavy applications.`,
    ],
  },
  {
    question: [
      `Describe the difference between "process.nextTick()" and "setImmediate()" in Node.js, and when you would use each.`,
    ],
    answer: [
      `Both "process.nextTick()" and "setImmediate()" are used to defer the execution of a function to a future iteration of the event loop, but they have different priorities.`,
      `"process.nextTick()" is used to defer a callback to the next tick of the event loop, which happens immediately after the current operation completes and before any I/O or timer events are processed. This makes it higher priority and allows you to insert a callback at the front of the event queue. It's often used for performing tasks right after the current function finishes.`,
      `On the other hand, "setImmediate()" is used to defer a callback to the beginning of the next event loop iteration, after I/O events are processed. It's slightly lower priority compared to "process.nextTick()". If multiple "setImmediate()" callbacks are queued, they are executed in the order they were added to the event queue.`,
      `Use "process.nextTick()" when you want a callback to be executed before any other I/O events, and "setImmediate()" when you want a callback to be executed after I/O events but before the next pass through the event loop.`,
    ],
  },
  {
    question: [
      `What is the purpose of the "npm run-script" command, and how can you define custom scripts in the "package.json" file?`,
    ],
    answer: [
      `The "npm run-script" command is used to execute custom scripts defined in the "scripts" section of the "package.json" file. It allows us to create and execute custom commands for tasks such as running the application, running tests, building assets, or any other automation needed for our project.`,
      `To define custom scripts, we add a "scripts" object in "package.json" and assign the script names as keys and the command to execute as values.`,
    ],
  },
  {
    question: [
      `How can you deploy a Node.js application using Docker, and what are the benefits of containerization?`,
    ],
    answer: [
      ` Deploying a Node.js application using Docker involves creating a Docker image of the application and running containers from that image on the production server. Here are the general steps:`,

      `- Create a Dockerfile: In the project's root directory, create a "Dockerfile" specifying the base image, copying the application code, installing dependencies, and defining the entry point.`,
      `- Build the Docker image: Use the "docker build" command to build the Docker image from the Dockerfile. This step packages the application and its dependencies into an image.`,
      `- Push the image to a container registry: Store the built image in a container registry like Docker Hub or Amazon ECR.`,
      `- Deploy the container: On the production server, pull the Docker image from the container registry and run it as a container using the "docker run" command.`,

      `Benefits of containerization:`,
      `- Isolation: Containers encapsulate applications and their dependencies, providing a consistent environment across different systems, preventing conflicts, and ensuring the application runs the same way on any platform.`,
      `- Scalability: Containers can be easily scaled up or down, allowing the application to handle varying loads efficiently.`,
      `- Portability: Docker images can be run on any platform that supports Docker, making it easy to deploy the application across various environments.`,
      `- Resource optimization: Containers share the host OS kernel, reducing resource overhead compared to virtual machines.`,
      `- Faster deployments: Containers package the application and dependencies together, making deployment faster and more straightforward.`,
    ],
  },
  {
    question: [
      `Describe the concept of "Promises" in Node.js and how they improve the readability of asynchronous code.`,
    ],
    answer: [
      `Promises in Node.js are a way to handle asynchronous operations in a more elegant and readable manner. A Promise is an object representing the eventual completion or failure of an asynchronous operation, and it provides a clean way to work with asynchronous code in a synchronous-like fashion.`,
      `Promises have three states: pending, fulfilled, and rejected. When a Promise is resolved, it calls the "then()" method with the result value. When an error occurs or the Promise is rejected, it calls the "catch()" method, allowing us to handle errors gracefully.`,
      `Using Promises, we can chain asynchronous operations together and handle them sequentially using ".then()" or catch errors with ".catch()", making the code easier to follow and avoiding callback hell.`,
    ],
  },
  {
    question: ["What is N-API in node.js"],
    answer: [
      `N-API (Node-API) in Node.js is an API that provides a stable and ABI (Application Binary Interface) stable layer for native modules. It allows native modules written in C/C++ to be compiled once and then be compatible with different versions of Node.js without requiring recompilation. N-API aims to make it easier for developers to write native add-ons for Node.js by providing a stable interface that is less likely to break with future Node.js releases. It enhances the portability and maintainability of native modules and reduces the need for module authors to maintain multiple versions of their code for different Node.js versions.`,
    ],
  },
]);
