const BlogModel = require("../models/blogs.model");

// get all blogs list
exports.getBlogList = (req, res) => {
  //   console.log("All blog List");
  BlogModel.getAllBlogs((err, blogs) => {
    if (err) res.send(err);
    res.send(blogs);
  });
};

// get blog by id
exports.getBlogById = (req, res) => {
  // console.log("blog by id")
  BlogModel.getBlogById(req.params.id, (err, blog) => {
    if (err) res.send(err);
    res.json(blog);
  });
};

// create new blog
exports.createNewBlog = (req, res) => {
  //   console.log("req data", req.body);
  const blogReqData = new BlogModel(req.body);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .send(400)
      .send({ success: false, message: "please fill all required fields" });
  } else {
    console.log("valid data");
    BlogModel.createBlog(blogReqData, (err, blog) => {
      if (err) {
        res.send(err);
        res.json({ status: false, message: err.message, data: blog });
      } else {
        res.redirect("http://localhost:3001/blog/message");
      }
    });
  }
};

// update blog
exports.updateBlog = (req, res) => {
  // console.log("updateBlog data");
  const blogReqData = new BlogModel(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .send(400)
      .send({ success: false, message: "please fill all required fields" });
  } else {
    console.log("valid data");
    BlogModel.updateBlog(req.params.id, blogReqData, (err, blog) => {
      if (err) {
        res.send(err);
        res.json({ status: false, message: err.message, data: blog });
      } else {
        // res.redirect("http://localhost:3001/blog/message");
        res.json({
          status: true,
          message: "Blog uppdated successfully",
          data: blog.id,
        });
      }
    });
  }
};

// delete blog
exports.deleteBlog = (req, res) => {
  // console.log("deleteBlog");
  BlogModel.deleteBlog(req.params.id, (err, blog) => {
    if (err) res.send(err);
    res.json({
      success: true,
      message: "Blog deleted successfully!!!!",
    });
  });
};
