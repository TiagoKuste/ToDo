//require('dotenv').config();
//require('dotenv').load();
var express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
 	res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(PORT, function(){
	console.log("Aplicação rodando na porta " + PORT);
});
