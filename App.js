      //Express
const express=require('express')
var app=express()

//http://localhost:3000/
app.get('/',(req,res)=> //the / in this code is the slash after 3000
{
    res.send("Hello Class!")
}) 

//http://localhost:3000/Books      //Routes
app.get('/Books',(req,res)=> //the / in this code is the slash after 3000
{
    res.send("Welcome to the Books Section")
}) 

//http://localhost:3000/Pencils
app.get('/Pencils',(req,res)=> //the / in this code is the slash after 3000
{
    res.send("Welcome to the Pencils Section" )
}) 

//POST Module

app.post('/',(req,res)=> //the / in this code is the slash after 3000
{
    res.send("You have sent a Message to the server")
}) 

//Route Parameters
//http://localhost:3000/Pencils/89/Books/73
app.get('/pencils/:pencilsid/books/:booksid',(req,res)=>{
    res.send(req.params)
})

//calling multiple functions on single route 
app.get('/example/d',(req,res,next)=>{
res.write('The response will be sent by next callback function')
next()
},
(req,res)=>
res.end("Hello from d!")
)

var server=app.listen(3000,()=>{
    console.log("Server is up at port 3000.") 
})
 
