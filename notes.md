## Introduction
1. Nestjs is for building efficient, scalable nodejs server side apps.
2. It uses progressive js, is built with and fully supports typescript.
3. It combines elements of OOPS, FP, and FRP(Function reactive programming).
4. Under the hood, Nest makes use of robust HTTP server frameworks like express(the default one). and optionally we can configure it to use fastify also.
5. When you think about it Express(is already a framework) and nest is a framework for a framework😂😂
6. But Why?
7. It is because express is a minimal framework that kind of gives you the syntax reduction and code splitting etc. But it doesn't give you a proper set of rules to do so.. 
8. That's why we can see every expressjs work is different in some way or the other.

## Terminology
1. Well if you are familiar with Angular then you will find this thing super replica of each other.
2. Even the cli and its commands.
   Like 
   - nest new app name.
   - nest generate service service-name.
   - nest g provider provider-name.
   - nest g controller controller-name.
   - nest start
   - nest build etc,.

## Features:
1. Nestjs was created to help devs create Monolith and microservices.
2. It uses Typescript
3. Learning curve is doable and easy if already familiar with angular.
4. Good CLI
5. Support for dozens of nest-specific modules that help you easily integrate with common tech and concepts like type ORM, Mongoose, GraphQL, Logging, Validation, Caching, Websockets and much more.
6. Easy unit testing.
7. Better Documentation(Trust me bro even i think this is not a feature in 2024).
8. Built for enterprise apps.

## Document Structure:
There are 3 main components of Nest.
1. Controllers
2. Providers
3. Modules

- However point to be noted is each and every file is a class with some decoraters (@Injectable, @Controller, @Module etc).
- Decorators just adds some meta data to the classes.