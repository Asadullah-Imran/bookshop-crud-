import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

const app= express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"asdf",
    database:"test",
})

app.get("/books",(req,res)=>{
    const sql="select * from test.books";
    db.query(sql,(err,data)=>{
        if(err){return res.json(err)}
        return res.json(data);
    })
})


app.post("/books",(req,res)=>{
    const query= "insert into books(`title`,`description`,`price`,`cover`) values(?)";
    const values= [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover];

    db.query(query,[values],(err,data)=>{
        return res.json(" created");
    })
})


app.delete

app.listen(8080,()=>{
    console.log("server running at the port at 8080")
})