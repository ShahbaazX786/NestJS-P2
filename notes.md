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

## Modules:
- Modules are the classes that are annotated with @Module({}) at the top of them.
- A project / app must contain a root module.
- It is highly advised to divide your app into as many modules as required.

## Controllers:
- A controller's purpose is to receive requests for the app and serve response accordingly.
- A controller is annotated with @Controller at top of the class.
- A controller has many methods which vary according to the user needs.
- And these methods in turn call the service layer (provider methods) and acts as an abstraction layer in itself.
- Also a method is again annotated with method type ex: @GET(), @POST() etc.
- Just creating a controller doesn't do much unless and until you tell NEST about the existence of that controller in Module({controllers:[AppController]}) controller's array of the decorator of the respective file in which you want to access that controller.
- Also if you want to decide the route of the controller you can do so by defining the path in methods annotations.
- EX: @GET(cats), @POST(cats/:id) etc.
- We can also define the main common path (base route) in controller itself like
  - @Controller('/users');
- And by doing so each and every sub route, function in that controller file will get /users prefixed in the route.

- @Req()- this is used to handle the request for any post method.
Ex: 
```JS
@Post()
store(@Req() req:Request){
    return req.body;
}
```
- Note: the Request is to be imported from express and not the nestjs common.

- @Params() - this is kind of like the payload for get request that we send in url itself and not in body as compared to post method.
Ex:
```JS
@Get('/:userId')
getUser(@Param() params: {userId:number}){
    return params;
}
```

- Similar methods are @Patch(), @Delete();

## Providers / Services:
- A controller job is to just take requests and respond with whatever the response it has to respond with.
- All the saving, deleting the actual code that works inside is to be placed in service / providers.
- Services are annotated with @Injectable() decorator.
- You can import and utilize a service in controller via constructor method.
- remember to return the result in controller as well.(return of service works upto controller and from there controller has to return further).

## Dependency Injection:
- As we have used to import and use the service / provider file in our controller as private in constructor then it is called as dependency injection.
- but what is it actually?
  - Suppose class a has some dependency on class b we can import / extend the class and move ahead.
  - but what if class b also has some dependency on few other classes like class c , class d and imagine the nested dependencies of nested classes.
  - It would be a nightmare to handle each and every class everytime you make a modification.
  - So to avoid this we can utilize DI by transferring the task of handling class dependencies and directly deal with only the required class is called as DI.
  - Uses:
    - loose coupling
    - boiler plate code reduction
    - unit testing made easy
    - extending the app becomes easier
    - Faster development
  

## Req(), Body() & DTOs:
- As we have already used the req method to handle the requests in post,patch requests.
- But we have a better alternative that is.. @Body() which is nothing but req.body only.
- but it makes the code a bit simpler so we use it itseems.
- Also do define the data type of the body we need to use DTO(Data Transfer Object).
  