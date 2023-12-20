import { NextFunction, Request, Response } from "express";
import commentService from "../services/comment-service";

class CommentController {
  async addComment(req: Request, res: Response, next: NextFunction) {
    try {
      const newComment = await commentService.addComment(req.body);
      return res.json(newComment);
    } catch (error) {
      next(error);
    }
  };

  async getCommentByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const comment = await commentService.getCommentByID(req.params.id);
      return res.json(comment);
    } catch (error) {
      next(error);
    }
  };

  async getAllComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await commentService.getAllComments();
      return res.json(comments);
    } catch (error) {
      next(error);
    }
  };
};

export default new CommentController;