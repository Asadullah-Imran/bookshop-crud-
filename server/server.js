import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

const app= express();
app.use(express.json());
app.use(cors());



const db=mysql.createConnection({
    // host:"localhost",
    // user:"root",
    // password:"asdf",
    // database:"test",

    // this is my new online free mysql database
    host:"sql12.freesqldatabase.com",
    user:"sql12652834",
    password:"hzpYPE9QVZ",
    database:"",
})

app.get("/books",(req,res)=>{
    const sql="select * from sql12652834.books";
    db.query(sql,(err,data)=>{
        if(err){return res.json(err)}
        return res.json(data);
    })
})

app.get("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const sql = "SELECT * FROM sql12652834.books WHERE id = ?";
    db.query(sql, [bookId], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err); // Handle the error
      }
      return res.json(data[0]); // Return the book data
    });
  });

  
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


app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q, [bookId], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err); // Return a 500 status code with error details
      }
      return res.json("Book has been deleted");
    });
  });



  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `description` = ?, `price` = ?, `cover` = ? where id = ?";

    const values= [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover];



    db.query(q, [...values,bookId], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err); // Return a 500 status code with error details
      }
      return res.json("Book has been updated ");
    });
  });




app.listen(8080,()=>{
    console.log("server running at the port at 8080")
})