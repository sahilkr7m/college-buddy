const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs.controller");

// get all blogs
router.get("/", blogController.getBlogList);

// get blog by id
router.get("/:id", blogController.getBlogById);

// create new blog
router.post("/", blogController.createNewBlog);

// update a blog
router.put("/:id", blogController.updateBlog);

// delete a blog
router.delete("/:id", blogController.deleteBlog);

module.exports = router;
