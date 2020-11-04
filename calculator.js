const express=require("express");
const bodyParser=require("body-parser");
const { text, json } = require("body-parser");
const https=require("https");
const { response } = require("express");
const { connect } = require("http2");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/API.html");
});

app.post("/",function(req,res){
    var n1=req.body.in;

    const url= "https://api.openweathermap.org/data/2.5/weather?q="+ n1 +"&appid=344f83e92de56a8c8f451d9ebb98e99a&units=metric";
https.get(url, function(response){
    response.on("data",function(data){
        if(response.statusCode===200){
        const all =JSON.parse(data)
        const temperature=all.main.temp; 
    
    
        
             
            res.write(temperature);
        }    
       
            
        else{
            res.write("OOOps!");
        }
          
    });
        
});

});
   
   

app.listen(3000,function(){
    console.log("Server is running on Port 3000");
});