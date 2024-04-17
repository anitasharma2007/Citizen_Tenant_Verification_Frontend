# Citizen Tenant Verification Frontend

Welcome to the frontend module of the Citizen Tenant Verification system. This module provides a user interface for landlords, property managers, and administrators to manage tenant information, lease contracts, payments, and verification activities.

## Features
- Tenant Management: Create, view, and update tenant records.
- Owner Management: Create, view, and update owner records.

## Technologies Used

### Framework: Angular version 15.2.6 

### State Management:

- In Angular applications, state management is often handled through services, observables, and the Angular RxJS library, which provides powerful tools for reactive programming. While Angular does not have a specific state management library like Redux for React, developers commonly use a combination of built-in features and external libraries to manage application state effectively.

- Here's how state management is typically approached in Angular:

**Services:** Angular services are a fundamental part of state management. Services can be used to encapsulate business logic, manage application state, and facilitate communication between components. By injecting services into components, you can share state and functionality across different parts of your application.

**RxJS Observables:** RxJS is a library for reactive programming that is widely used in Angular applications. Observables are a key concept in RxJS and are used to represent streams of data over time. By leveraging observables, you can create reactive data streams for managing asynchronous operations, handling user input, and responding to changes in application state.

**BehaviorSubjects and Subject:** BehaviorSubjects and Subjects are specialized types of observables that are commonly used for state management in Angular. BehaviorSubjects maintain the current value and emit it to subscribers immediately upon subscription, making them suitable for storing and sharing application state. Subjects, on the other hand, do not have an initial value but can emit multiple values over time.

**Angular Router:** The Angular Router provides built-in mechanisms for managing application state based on URL changes and routing events. You can use router events, route parameters, and router guards to control navigation, load data dynamically, and manage application state based on the current route.

**External Libraries:** While Angular itself does not have a dedicated state management library like Redux, you can still use external libraries such as NgRx or Akita if you prefer a more structured and centralized approach to state management. NgRx, for example, is heavily inspired by Redux and provides tools for managing state using actions, reducers, and selectors.

### User Interface: Angular Material

- Angular Material is a UI component library developed by the Angular team. It provides a set of pre-built and customizable UI components that follow the Material Design guidelines, offering consistency and a modern look and feel to Angular applications. 
- Angular Material components include buttons, cards, forms, dialogs, menus, and more, making it easy to create responsive and accessible user interfaces.


## This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
