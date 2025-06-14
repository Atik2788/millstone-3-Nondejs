const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://atik2788:AAAAAaaaaa111@cluster0.6du7f.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});