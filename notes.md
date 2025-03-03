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
  

## Pipes & Validations:
- For validations you need to install dependencies by referring the docs.
- yarn add class-validator class-transformer 
- After this go to main.ts and add app.use(useGlobalPipe(new validationpipe())). to enable validations.
- And after this go and annotate the dtos fields with whatever validations you need.
- Pipes are also classes which uses injectable annotation and extends pipetransform class.
  - pipes have 2 main uses:
    - Validation
    - Transformation
- One major thing is even though we provide dtos with 2 fields for any method and we give 3 fields in post req then it will return 3 fields if consoled the req.
- To fix this we can add {whitelist:true} to the validationpipe() in main.ts method.

- You can also have validations at param level when the datatype is simple number,string conversion.


## Connecting to a DB:
- To access the DB we need to install libs related to typeorm
  - yarn add @nestjs/typeorm typeorm mysql2
- After adding these goto appmodule and in imports array configure the typeorm module.

```JS
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'peesword',
      database: 'nest2',
      entities: [User],
      synchronize: true, //  enable this only in dev mode.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

- Then we need to create an entity folder just like dto folder and create a user.entity.ts file in it.
- Entity is also a class file which is annotated with @Entity().
- This can be considered as a class which defines the strucuture of the table in the database.(similar to a Java Bean class).
- Then we need to add this entity file in the module where we are using it by importing it and configuring it in the imports array.
- Ex: see below user module.

```JS
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

- Now that we have imported and configured the entity in the user module, we now need to inject the same entity in the service file in constructor to utilize it.
- And also after injecting it in the service file we need to annotate it with @InjectRepository() in constructor itself.
- See below for reference: 

```JS
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
    ) {}
  getUsers() {
    return { name: 'Shaik Shahbaaz Alam', email: 'shahbaaz@gmail.com' };
  }
}
```
- After this step is done update or add your existing service methods to promises and utilize the repository methods like findOne(), find(), delete() etc.

Ex:
Before:
```JS
getUsers() {
    return { 
      name: 'Shaik Shahbaaz Alam',
       email: 'shahbaaz@gmail.com'
      };
  }
```
After:
```JS
 getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
```
- Remember to add the entities in the appmodule entities array when ever you added another new entity file and want to use it. (This will avoid us the no metadata found for User entity error in console.)

## Mysql in local setup and utilization: 
1. To use mysql in local you first need to install it locally.
2. then set the env variables in system path.
3. then you need to check if it is installed using command mysql --version. 
4. then you need to login using the default user id and password which you might have set during installation.
5. using the command mysql -u root -p and then enter password.
6. then if version popsup you need to create a new db using command create database nest2;
7. then checkout the db using command use nest2;
8. then hit the api and see the results.

- By adding jwt stretegy using passport we can enable the creation of access_token which is nothing but a jwt token when we hit login with correct data.
- And this access_token we can again use to authorize the further reqs of other APIs.