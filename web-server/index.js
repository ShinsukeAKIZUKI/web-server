const express = require('express')
const app = express()
const path = require("path")

app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.get('/', function (req, res) {
  console.log(req)
  res.send('<h1>Hello World2</h1>')
})

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  res.send(answer);
})

app.get('/api/v1/users', function (req, res) {
  res.send({
    name: "Mike",
    age : 30,
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT,function(){
  console.log("running")
}

)
