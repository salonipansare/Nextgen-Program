const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

//app.get('/', (req, res) => {
  //res.send('Hello good afternoon !!!')
  //res.sendStatus(500)
  /*res.json({
    "id":1,
    "title":"shirt",
    "price":109.95
  })*/
  app.get('/default',(req,res) =>{
    res.sendStatus(200)
  })
  app.get('/product',(req,res) =>{
    res.json({
        "id":1,
        "title":"shirt",
        "price":109.95
      })
  })
  app.get('/about',(req,res) =>{
    res.send("hello everyone !")
  })
  app.get('/user',(req,res) =>{
    res.send('this is user page')
  })
  app.post('/contact',(req,res) =>{
    res.send('contact us')
  })
  app.get('/download',(req,res) =>{
    res.download('./index.js')
  })
  app.post('/postData',(req,res) =>{
    const{id , name} = req.body
    console.log(req.body);
    res.send('data received from '+ name)
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})