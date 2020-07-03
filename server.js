const express =require("express");
const morgan =require("morgan");
const mongoose =require("mongoose");
const apiRouter = require("./routes/apiRoutes");

// Express set up
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

//Express to hit data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// mongo
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

//route connection
app.use('/apiRoutes',apiRouter);

//Sever Start
app.listen(PORT, function(){
    console.log(`We're live on Port ${PORT}!`);
});