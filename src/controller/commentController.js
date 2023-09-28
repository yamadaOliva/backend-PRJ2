import commentService from "../service/commentService.js";
const addCommentController = async (req, res) => {
  const comment = req.body;
  try {
    const result = await commentService.createComment(comment);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const getListCommentController = async (req, res) => {
  const { limit, page, idShowing } = req.query;
  try {
    const result = await commentService.getListComment(limit, page, idShowing);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const updateCommentController = async (req, res) => {
  const data = req.body;
  try {
    const result = await commentService.updateComment(data);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const deleteCommentController = async (req, res) => {
  const id = req.body;
  try {
    const result = await commentService.deleteComment(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  addCommentController,
  getListCommentController,
  updateCommentController,
  deleteCommentController,
};
