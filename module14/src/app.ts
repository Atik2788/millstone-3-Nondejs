import express, { Application, Request, Response } from 'express'
import { todosRouter } from './app/todos/todos.routes';
const app: Application = express()

app.use(express.json())

app.use('/todos', todosRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('Wellcome to todos app!!')

})






export default app;
