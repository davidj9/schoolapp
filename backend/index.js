const express = require('express'); // Importing the express package
const app = express(); //create a web application

//home route
app.get('/', function(req, res){
    res.send('Hello world');
});

//Web server
app.listen(3000, function(){
    console.log('server running on port 3000...');
});