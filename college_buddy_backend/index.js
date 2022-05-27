const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//create express app
const app = express();
app.use(cors());
// setup server port
const port = process.env.PORT || 3000;

//parse request data content type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse response content type application/json
app.use(bodyParser.json());

// root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//import pg, contribution, blogs routes
const pgRoutes = require("./src/routes/pg.route");
const contributeRoutes = require("./src/routes/contribute.route");
const blogRoutes = require("./src/routes/blogs.route");

//create pg routes
app.use("/api/pg", pgRoutes);
app.use("/api/contribute", contributeRoutes);
app.use("/api/blog", blogRoutes);

//listen to the port
app.listen(port, () => {
  console.log(`listening on port of backend server at port ${port}`);
});
