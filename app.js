const express = require("express");
const app = express();
const https = require("https");





app.get("/",function(req,res){
   
    var cityName = "mohammadpur";
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=4a5cede63aa4e30d65dd90ad3ebd7ebb";
   // url = "https://openweathermap.org/img/wn/10d@2x.png";
    https.get(url,function(response){
        console.log(response.statusMessage);
        response.on("data",function(data){
           // console.log(data);
          const weatheData = JSON.parse(data);
          console.log(weatheData);
         // var weatherTemp = weatheData.main.temp;
         console.log(weatheData.main.temp);
         console.log(weatheData.weather[0].icon);
        //  var url2 ="https://openweathermap.org/img/wn/10d@2x.png";
        // res.write("https://openweathermap.org/img/wn/"+weatheData.weather[0].icon+"@2x.png")
         res.write("<h1><em>hello the wether in "+ cityName +" is "+weatheData.main.temp +"<\h1><\em>");
         res.write("<img src="+"http://openweathermap.org/img/wn/"+weatheData.weather[0].icon+"@2x.png>")
         res.write(" and the weather in "+ cityName +" is "+weatheData.weather[0].description)
         res.send()
        })
       
    })
   
});

app.listen(3000,function(){
    console.log("server started on port 3000");
   });
// app.post("/",function(req,res){
//     console.log(req.body);
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     var ansr = num1 + num2 ; 
//     res.send("tnx for posting "+ ansr);
// });


// app.get("/calculate",function(request,response){
//     response.send("<h1>My name is shams shanto</h1>");
// });

// /// bmi route 
// app.get("/bmi",function(req,res){
//     res.sendFile(__dirname+"/bmi.html");
// });
// app.post("/bmi",function(req,res){
//     console.log(req.body);
//     var num1 = parseFloat(req.body.num1);
//     var num2 = parseFloat(req.body.num2);
//     console.log(num1 );
//     var ansr =  (num1/num2*num2) ; 
//     res.send("Your bmi is  "+num1/(num2*num2));
// });

/// bmi route 




