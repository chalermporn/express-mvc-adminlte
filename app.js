var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
var path = require('path');  
var port = process.env.PORT || 1995; 

app.use(express.static(path.join(__dirname, 'assets')));  
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var opn = require('opn');

/** Router  */
var userRouter = require('./routes/routes.js');  
userRouter(app);

app.listen(port);
    
console.log('\n================   •?((¯°·._.• ţµąɲ ąɲh ƶɨρρ¥ •._.·°¯))؟•   ================   \nServer running: http://localhost:' + port); 

/* Connect database */
global.connection = require('./config/database.js');
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ...");    
} else {
    console.log("Error connecting database ...");    
}
});




//open default browser
opn('http://localhost:'+port); 