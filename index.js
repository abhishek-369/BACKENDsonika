//import express
const express=require('express')
//import data service
const dataService=require('./services/data.service')
//using express create server app
const app = express()
//to parse json data
app.use(express.json())
//http
//get-- to read data from server,it only have view in browser
app.get('/',(req,res)=>{
    res.send('GET METHOD')
})

//post--server create ,not view in browser
app.post('/',(req,res)=>{
    res.send('POST METHOD')
})
//put--TO COMPLETE UPDATE
app.put('/',(req,res)=>{
    res.send('PUT METHOD')
})
//patch--PARTIALLY MODIFICATION
app.patch('/',(req,res)=>{
    res.send('PATCH METHOD')
})
//delete--DELETE SOME
app.delete('/',(req,res)=>{
    res.send('DELETE METHOD')
})
//bank app
//http-response status
//1xx-information
//2xx-success
//3xx-redirectiom
//4xx-client error
//5xx-server error
//register api
app.post('/register',(req,res)=>{
    console.log(req.body);
 const result= dataService.register(req.body.username,req.body.acno,req.body.password)
 

 res.status(result.statusCode).json(result)
})
//login api
app.post('/login',(req,res)=>{
    console.log(req.body);
 const result= dataService.login(req.body.acno,req.body.pswd)
 
 res.status(result.statusCode).json(result)
})

//deposit api
app.post('/deposit',(req,res)=>{
    console.log(req.body);
 const result= dataService.deposit(req.body.acno,req.body.pswd,req.body.amt)
 
 res.status(result.statusCode).json(result)
})
//withdraw api
app.post('/withdraw',(req,res)=>{
    console.log(req.body);
 const result= dataService.withdraw(req.body.acno,req.body.pswd,req.body.amt)
 
 res.status(result.statusCode).json(result)
})
//transaction
app.post('/transaction',(req,res)=>{
    console.log(req.body);
 const result= dataService.getTransaction(req.body.acno)
 
 res.status(result.statusCode).json(result)
})





//set port nmbr
app.listen(3000,()=>{
    console.log('server started at 3000');
})