const dbCon = require("../../config/db.config");

var Blog = function (blog) {
  this.title = blog.title;
  this.category = blog.category;
  this.address = blog.address;
  this.create_date = blog.create_date;
  this.img_src = blog.img_src;
  this.blog_data = blog.blog_data;
  this.budget = blog.budget;
};


// get all blogs
Blog.getAllBlogs = (result) => {
  dbCon.query("SELECT * FROM blog", (err, res) => {
    if (err) {
      console.log("Error while fetching blogs", err);
      result(null, err);
    } else {
      console.log("Blogs fetched successfully");
      result(null, res);
    }
  });
};

// get blog by id
Blog.getBlogById = (id, result) => {
  dbCon.query("SELECT * FROM blog where id = ?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching blogs by id", err);
      result(null, err);
    } else {
      //   console.log("Blogs fetched successfully");
      result(null, res);
    }
  });
};

// create a new blog
Blog.createBlog = (blogReqData, result) => {
  dbCon.query("INSERT INTO blog SET ? ", blogReqData, (err, res) => {
    if (err) {
      console.log("Error inserting blog", err);
      result(null, err);
    } else {
      console.log("Created blog");
      result(null, res);
    }
  });
};

// update a blog
Blog.updateBlog = (id, blogReqData, result) => {
  dbCon.query(
    "UPDATE blog SET title = ?, create_date = ?, blog_data = ? WHERE id = ?",
    [blogReqData.title, blogReqData.create_date, blogReqData.blog_data, id],
    (err, res) => {
      if (err) {
        console.log("Error while updating the blog");
        result(null, err);
      } else {
        console.log("Updated blog successfully");
        result(null, res);
      }
    }
  );
};

// delete a Blog
Blog.deleteBlog = (id, result) => {
  dbCon.query("DELETE from blog where id = ?", [id], (err, res) => {
    if (err) {
      console.log("Error while deleting the blog");
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Blog;
