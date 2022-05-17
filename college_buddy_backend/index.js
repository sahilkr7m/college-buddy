const express = require('express')

//create express app
const app = express();

// setup server port
const port = process.env.PORT || 3000;

// root route
app.get('/', (req, res) =>{
    res.send('Hello World!');
});

//import pg routes
const pgRoutes = require('./src/routes/pg.route')

//create pg routes
app.use('/api/pg', pgRoutes)

//listen to the port
app.listen(port, ()=>{
    console.log(`listening on port of backend server at port ${port}`); 
})