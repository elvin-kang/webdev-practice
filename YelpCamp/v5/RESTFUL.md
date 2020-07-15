RESTFUL ROUTES

name   | url         | verb  | description
===============================================================
INDEX  | /dogs       | GET   | Display a list of all dog
NEW    | /dogs/new   | GET   | Displays form to make a new dog
CREATE | /dogs       | POST  | Add new dog to DB
SHOW   | /dogs/:id   | GET   | Shows info about one dog

REST - a mapping between HTTP routes and CRUD

BLOG

CREATE
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id

Name    | Path           |  HTTP Verb | Mongoose Method         | Purpose 
===================================================================================================================
Index   | /dogs          |  GET       | Dog.find()              | List all dogs
New     | /dogs/new      |  GET       | N/A                     | Show new dog form
Create  | /dogs          |  POST      | Dog.create()            | Create a new dog, then redirect somewhere
Show    | /dogs/:id      |  GET       | Dog.findById()          | Show info about one specific dog
Edit    | /dogs/:id/edit |  GET       | Dog.findById()          | Show edit form for one dog
Update  | /dogs/:id      |  PUT       | Dog.findByIdAndUpdate() | Update a particular dog, then redirect somewhere
Destroy | /dogs/:id      |  DELETE    | Dog.findByIdAndRemove() | Delete a particular dog, then redirect somewhere