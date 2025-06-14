"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atik2788:AAAAAaaaaa111@cluster0.6du7f.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
exports.client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
