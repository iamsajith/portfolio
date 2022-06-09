const express = require("express")
const cors = require("cors")
const Testimonial = require("./testimonyDB")

const app = new express();
app.use(cors())

app.get('',(req,res)=>{
 res.header('Access-Control-Allow-Origin','*')
 res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")

 Testimonial.find({},{_id:0,name:1,company:1,testimony:1,imageURL:1}).then((testi)=>{
  res.send(testi)
 })

})
app.listen(3000,()=>{
 console.log("App is running on 3000")
}
)