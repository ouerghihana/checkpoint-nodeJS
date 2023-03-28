console.log("HELLO WORLD");

//creation du serveur
 const http =require ('http');
 const server =http.createServer(function(req,res){
    res.write('<h1>Hello Node!!!!</h1>')
    res.end()
 })
 server.listen(3000,(err)=>{
     err?console.log(err):console.log('ur linked to server 3000 ')
 })

 const fs = require('fs');
 // // Create a file named "welcome.txt" containing one line "Hello Node"
 fs.writeFile('welcome.txt', 'Hello Node', err=>{
        if(err){console.log(err)}  else{
             console.log("created successfully")}
           })
 //Read and console.log data from welcome.txt
 fs.readFile('welcome.txt', (err, data)=> {
     if (err) {
       console.log('Something went wrong', err);
     } else {
       console.log('welcome ',data.toString());
     }
  });

 
  


   