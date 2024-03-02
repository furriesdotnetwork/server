import express from "express";
const app = express();
const port = 8080


app.get("/", function(req, res){
    res.json({message: "welcome to the API"});
})

app.listen(port, function () {
    console.log(`App running at: ${port}`)
    
})