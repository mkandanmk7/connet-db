//server start connection;


//import files
//express 
const express = require('express');
const  db  = require('./db/mongo');

const app = express();
const PORT =process.env.PORT || 5000;

const users=[
    {
        name:"muthu",
        age:23,
    },
    {
        name:"skathi vel",
        age:45,
    }
]


(async () => {
        app.use(express.json()) //parsing data ; string json convert

        await db.connect()
        app.get("/", (req, res) => {
            res.status(200).send("Server is running sucessfully")
           
        })
        app.get("/users/",(req,res)=>{
            res.status(200).send(users)
        })

        app.listen(PORT, () => {
            console.log("server is running at", PORT)
        })
    })()

