const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Moviemodel = require('./models/moviemodel')
const port = 3000
app.use(express.json());
mongoose.connect("mongodb+srv://avcoe:K4ZN78v3uOKoydGe@cluster1.3fz4b.mongodb.net/").then(() => {
console.log("mongodb database connected successfully")
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addmoviedata', async (req, res) => {
  try{
    const newdata = new Moviemodel(req.body);
    await newdata.save();
    console.log(req.body);
    res.send("data saved successfully !!!")
  }
  catch(err){
    console.log("data not saved !!");
    }
  })

  app.get('/getmoviedata', async (req, res)=>{
    try{
  
      const newdata = await Moviemodel.find({});
      res.json(newdata);
    }
    catch(err){
      console.err("data not received !!");
      }
    })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})