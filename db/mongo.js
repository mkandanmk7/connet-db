//db connections initialization;


// import mongoClient driver
const {MongoClient}=require('mongodb');

const DB_URL=process.env.DB_URL;
const DB_NAME=process.env.DB_NAME;
const client=new MongoClient(DB_URL) //obj literals  

const db={
    db:null, //db data null
    users:null, //initially empty; cpllection;

    // db connection;
  async connect(){
      console.log("in db")
    await client.connect(); //db connected
    console.log("db connected successfully")

    this.db= client.db(DB_NAME);// db selection;
    console.log(`${DB_NAME} selected successfully`)
    
    //select collection

    
    this.users =this.db.collection("users") //select collections

  }



}

module.exports=db;