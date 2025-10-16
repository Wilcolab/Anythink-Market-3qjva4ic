/**
 * Express router providing Comments API endpoints.
 *
 * @module routes/api/comments
 *
 * @requires express.Router
 * @requires mongoose
 * @requires Comment - Mongoose model for comments
 *
 * @description
 * Exposes two endpoints mounted at the router root:
 *  - GET  /  : Retrieve all comments
 *  - POST /  : Create a new comment
 *
 * Examples:
 * const commentsRouter = require('./routes/api/comments');
 * app.use('/api/comments', commentsRouter);
 */

/**
 * GET /
 *
 * Fetch all comments from the database.
 *
 * @async
 * @function getComments
 * @memberof module:routes/api/comments
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Sends a JSON array of Comment documents with status 200 on success.
 * @throws {500} Responds with { error: "Failed to fetch comments" } if a database error occurs.
 */

/**
 * POST /
 *
 * Create a new comment document using the request body.
 *
 * Expected request body: an object matching the Comment Mongoose schema.
 *
 * @async
 * @function createComment
 * @memberof module:routes/api/comments
 * @param {import('express').Request} req - Express request object. req.body should contain comment fields.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Sends the created Comment document with status 201 on success.
 * @throws {400} Responds with { error: "Failed to create comment" } when validation or saving fails.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

//Hey GitHub Copilot

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});