const express = require('express')
const app = express()
const port = 3000

const routines = require("./routines.json")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.get('/routines/:id', function(req, res){
const routine = routines.find(routine => routine.id == req.params.id)
if(routine){
    res.json(routine)
}
else{
    res.status(404).end()
}
})

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}!`))


