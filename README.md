### SBA 319: MongoDB Database Application

This assessment from my bootcamp 🏫, Per Scholas
https://perscholas.org , measures your understanding of MongoDB and your capability to implement its features in a practical manner. You have creative freedom

### Objectives 🥅

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

### Tech stack 💻

### Requirements  🔨

- [x] Create GET, DELETE, PATCH, and POST routes using appropriate query commands to retrieve the data from the database.

```
GET http://localhost:5000/contacts

GET http://localhost:5000/contacts/:id

GET http://localhost:500/contacts/method/email

```
![Alt text](<Screen Shot 2023-11-27 at 6.51.28 AM.png>)

```

POST http://localhost:5000/contacts
Content-Type: application/json

//required body
{
    "name": "Benny B",
    "email": "bennyb@benny.com",
    "phone": 2128765642,
    "preferredMethod": "email"
}


PATCH http://localhost:/5000/contacts/:id

//updated body
{
    ...
}

DELETE http://localhost:5000/contacts/:id
```

- [x] Include sensible MongoDB data validation rules for at least one data collection.

```
...
 name: {
        type: String,
        required: true,
        message: "Please provide a name"
    },

```

- [x] Ensure that the program runs without errors

- [x] Commit frequently to the git repository.

- [x] Include a README file that contains a description of your application.

- [x] Use Mongoose to implement your application.

### Screen Shots

**MongoDB Atlas: My Contacts Collection**
![Alt text](<Screen Shot 2023-11-27 at 6.50.51 AM.png>)

**My Contact Schema**
![Alt text](<Screen Shot 2023-11-27 at 6.51.10 AM.png>)


### Operate API locally 🏃

- fork or clone this repo
https://github.com/benjahmin-koenigsberg/SBA_319.git
- open a terminal and run
```npm i```
- then run
```node index.js```
- add your own MongoDB connection string in an .env file or add it in
```mongoose.connection(<your_connection_string>)```

### Shout outs 📣

Thank you to my Per Scholas intsructors, classmates and Kyle of WebDev Simplified for his awesome tutorial on building a CRUD API with Node, MongoDB and Mongoose

https://www.youtube.com/watch?v=fgTGADljAeg

### Reflection 🪞

What could you have done differently during the planning stages of your project to make the execution easier?

>I could have taken more time to learn the MongoDB syntax in addiiton to the Mongoose syntax and be more aware of the differences between them

Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?

>I had trouble remembering that the order of routes listed in code will effect how they respond

What would you add to or change about your application if given more time?

>I think it could be fun to learn how to store images or media in a MongoDB database or sync with a file storage API
