import express, { Request, Response } from "express";
import path from 'path'
import fs from 'fs'
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();

const filepath = path.join(__dirname, '../../../db/todo.json')


todosRouter.get('/', async(req: Request, res: Response) => {
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")
 
    const cursor = await collection.find({});
    const todos = await cursor.toArray()

    res.json(todos);
})


todosRouter.post('/create-todo', async(req: Request, res: Response) => {
  const {title, description, priority} = req.body;

    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    await collection.insertOne({
      title: title,
      description: description,
      priority: priority,
      isCompleted: false
    })

    const cursor = await collection.find({});
    const todos = await cursor.toArray()

    res.json(todos);
})

todosRouter.get('/:id', async(req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB")
  const collection = await db.collection("todos")

  const todo = await collection.findOne({_id : new ObjectId(id)})

  console.log(id);
  
  res.json(todo);
})

todosRouter.put('/update-todo/:id', async(req: Request, res: Response) => {
  const id = req.params.id;
  
  const db = await client.db("todosDB");
  const collection = await db.collection("todos");
  
  const {title, description, priority, isCompleted} = req.body;
  const filter = {_id: new ObjectId(id)}
  
  const updatedTodo = await collection.updateOne(
    filter, 
    {$set: {title, description, priority, isCompleted}}, 
    {upsert: true})
    
    
    console.log(id, title);
  res.json(updatedTodo);
})

todosRouter.delete('/delete-todo/:id', async(req: Request, res: Response) => {
  const id = req.params.id;

  const db = await client.db("todosDB")
  const collection = await db.collection("todos")

  const data = await collection.deleteOne({_id: new ObjectId(id)})
  console.log(data);

  res.json({message: "deleted successfully..."});
})