# Full Stack Open 2022 Course - University of Helsinki

## Deep Dive Into Modern Web Development

> Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.

<!-- >
> > This course serves as an introduction to modern web application development with JavaScript. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js. The course also contains a section on GraphQL, a modern alternative to REST APIs.
> >
> > The course covers testing, configuration and environment management, and the use of MongoDB for storing the application’s data.
> >
> > The course is worth 5-13 credits, and the content is the same as in the Full stack course held at the Department of Computer Science at the University of Helsinki in Spring 2020. There is also an associated project that is worth 1-10 credits.
> >
> > Partners and affiliates of the course include Houston Inc, Terveystalo, Elisa, K-ryhmä, Unity Technologies and Konecranes. See here for guest lectures on course-related topics given by various experts from our partners and affiliates.
> >
> > Participants are expected to have good programming skills, basic knowledge of web programming and databases, and to know the basics of working with the Git version-control system. You are also expected to have perseverance and the ability for independent problem solving and information seeking.
> >
> > Part 0 of the course material goes through the content and conduct of the course in more detail. Make sure to read the material and instructions thoroughly. -->

Course Website: https://fullstackopen.com/en

## Certificate

## Course Contents

### Part 0: Fundamentals of Web apps

<!-- > In this part, we will familiarize ourselves with the practicalities of taking the course. After that we will have an overview of the basics of web development, and also talk about the advances in web application development during the last few decades. -->

1. General info
2. Fundamentals of Web apps

### Part 1: Introduction to React

<!-- > In this part, we will familiarize ourselves with the React-library, which we will be using to write the code that runs in the browser. We will also look at some features of JavaScript that are important for understanding React. -->

1. Introduction to React
2. JavaScript
3. Component state, event handlers
4. A more complex state, debugging React apps

### Part 2: Communicating with server

<!-- > Let's continue our introduction to React. First, we will take a look at how to render a data collection, like a list of names, to the screen. After this, we will inspect how a user can submit data to a React application using HTML forms. Next, our focus shifts towards looking at how JavaScript code in the browser can fetch and handle data stored in a remote backend server. Lastly, we will take a quick look at a few simple ways of adding CSS styles to our React applications. -->

1. Rendering a collection, modules
2. Forms
3. Getting data from server
4. Altering data in server
5. Adding styles to React app

### Part 3: Programming a server with NodeJS and Express

<!-- > In this part our focus shifts towards the backend, that is, towards implementing functionality on the server side of the stack. We will implement a simple REST API in Node.js by using the Express library, and the application's data will be stored in a MongoDB database. At the end of this part, we will deploy our application to the internet. -->

1. Node.js and Express
2. Deploying app to internet
3. Saving data to MongoDB
4. Validation and ESLint

### Part 4: Testing Express servers, user administration

<!-- > In this part, we will continue our work on the backend. Our first major theme will be writing unit and integration tests for the backend. After we have covered testing, we will take a look at implementing user authentication and authorization. -->

1. Structure of backend application, introduction to testing
2. Testing the backend
3. User administration
4. Token authentication

### Part 5: Testing React apps

<!-- > In this part we return to the frontend, first looking at different possibilities for testing the React code. We will also implement token based authentication which will enable users to log in to our application. -->

1. Login in frontend
2. props.children and proptypes
3. Testing React apps
4. End to end testing

### Part 6: State management with Redux

<!-- > So far, we have placed the application's state and state logic directly inside React components. When applications grow larger, state management should be moved outside React components. In this part, we will introduce the Redux library, which is currently the most popular solution for managing the state of React applications. -->

1. Flux-architecture and Redux
2. Many reducers
3. Communicating with server in a redux application
4. connect

### Part 7: React router, custom hooks, styling app with CSS and webpack

<!-- > The seventh part of the course touches on several different themes. First, we'll get familiar with React router. React router helps us divide the application into different views that are shown based on the URL in the browser's address bar. After this, we'll look at a few more ways to add CSS styles to React applications. During the entire course, we've used create-react-app to generate the body of our applications. This time, we'll take a look under the hood: we'll learn how Webpack works and how we can use it to configure the application ourselves. We shall also have a look at hook functions and how to define a custom hook. -->

1. React-router
2. Custom hooks
3. More about styles
4. Webpack
5. Class components, Miscellaneous
6. Exercises: extending the bloglist

### Part 8: GraphQL

<!-- > This part of the course is about GraphQL, Facebook's alternative to REST for communication between browser and server. -->

1. GraphQL-server
2. React and GraphQL
3. Database and user administration
4. Login and updating the cache
5. Fragments and subscriptions

### Part 9: TypeScript

<!-- > This part is all about TypeScript: an open-source typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript.
>
> In this part, we will be using the tools previously introduced to build end-to-end features to an existing ecosystem with linters predefined and an existing codebase writing TypeScript. After doing this part, you should be able to understand, develop and configure projects using TypeScript.
>
> This part is created by [Tuomo Torppa](https://www.linkedin.com/in/tuomotorppa), [Tuukka Peuraniemi](https://www.linkedin.com/in/tuukkapeuraniemi/) and [Jani Rapo](https://www.linkedin.com/in/jani-rapo-5520817b/), the awesome developers of [Terveystalo](https://www.terveystalo.com/fi/Yritystietoa/Terveystalo-tyontantajana/Digital-Health/), the largest private healthcare service provider in Finland. Terveystalo’s nationwide network covers 300 locations across Finland. The clinic network is supplemented by 24/7 digital services. -->

1. Background and introduction
2. First steps with TypeScript
3. Typing the express app
4. React with types

### Part 10: React Native

<!-- > In this part, we will learn how to build native Android and iOS mobile applications with JavaScript and React using the React Native framework. We will dive into the React Native ecosystem by developing an entire mobile application from scratch. Along the way, we will learn concepts such as how to render native user interface components with React Native, how to create beautiful user interfaces, how to communicate with a server, and how to test a React Native application. -->

1. Introduction to React Native
2. React Native basics
3. Communicating with server
4. Testing and extending our application

### Part 11: CI/CD

<!-- > So you have a fresh feature ready to be shipped. What happens next? Do you upload files to a server manually? How do you manage the version of your product running in the wild? How do you make sure it works, and roll back to a safe version if it doesn’t?
>
> Doing all the above manually is a pain and doesn’t scale well for a larger team. That’s why we have Continuous Integration / Continuous Delivery systems, in short CI/CD systems. In this part, you will gain an understanding of why you should use a CI/CD system, what can one do for you, and how to get started with GitHub Actions which is available to all GitHub users by default.
>
> This module was crafted by the Engineering Team at Smartly.io. At Smartly.io, we automate every step of social advertising to unlock greater performance and creativity. We make every day of advertising easy, effective, and enjoyable for more than 650 brands worldwide, including eBay, Uber, and Zalando. We are one of the early adopters of GitHub Actions in wide-scale production use. Contributors: [Anna Osipova](https://www.linkedin.com/in/a-osipova/), [Anton Rautio](https://www.linkedin.com/in/anton-rautio-768190145/), [Mircea Halmagiu](https://www.linkedin.com/in/mhalmagiu/), [Tomi Hiltunen](https://www.linkedin.com/in/tomihiltunen/). -->

1. Introduction to CI/CD
2. Getting started with GitHub Actions
3. Deployment
4. Keeping green
5. Expanding Further

### Part 12: Containers

<!-- > In this part, we will learn how to package code into standard units of software called containers. These containers can help us develop software faster and easier than before. Along the way, we will also explore a completely new viewpoint for web development outside of the now-familiar Node.js backend and React frontend.
>
> We will utilize containers to create immutable execution environments for our Node.js and React projects. Containers also make it easy to include multiple services with our projects. With the flexibility, we will explore and experiment with many different and popular tools by utilizing containers.
>
> This section has been created by [Jami Kousa](https://github.com/jakousa) in collaboration with the Helsinki-based Services Foundation team at Unity. The Services Foundation team works on providing platforms for other teams at Unity to succeed in their mission of building great services for their customers. The team is passionate about improving Unity’s developer experience and works on tools like the Unity Dashboard, the Unity Editor, and [Unity.com](https://unity.com/). -->

1. Introduction to Containers
2. Building and configuring environments
3. Basics of Orchestration

### Part 13: Using relational databases

<!-- > In the previous sections of the course we used MongoDB for storing data, which is a so called NoSQL database. NoSQL databases became very common just over 10 years ago, when the scaling of the internet started to produce problems for relational databases that utilized the older generation SQL query language.
>
> Relational databases have since then experienced a new beginning. Problems with scalability have been partially resolved and they have also adopted some of the features of NoSQL databases. In this section we explore different NodeJS applications that use relational databases, we will focus on using the database PostgreSQL which is the number one in the open source world.
>
> English translation of this part is by [Aarni Pavlidi](https://github.com/aarnipavlidi). -->

1. Using relational databases with Sequelize
2. Join tables and queries
3. Migrations, many-to-many relationships
