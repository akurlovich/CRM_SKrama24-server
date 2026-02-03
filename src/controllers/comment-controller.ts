import { NextFunction, Request, Response } from "express";
import commentService from "../services/comment-service";
import companyService from "../services/company-service";
import { IComment, IEntity } from "../types/IComment";
import carrierService from "../services/carrier-service";

class CommentController {
  async addComment(req: Request, res: Response, next: NextFunction) {
    // console.log('comment data in req.body', req.body)
    const { comment, entity} : { comment: IComment, entity: IEntity } = req.body;
    
    try {
      const newComment = await commentService.addComment(comment);

      switch (entity) {
        case 'carrier':
          // console.log('carrier')
          await carrierService.updateCarrierAddComment(newComment);
          break;
        
        case 'company':
          // console.log('company')
          await companyService.updateCompanyAddComment(newComment);
          break;
      
        default:
          break;
      };
    // console.log('comment in req.body', comment)
    // console.log('comment from req.body', { companyID, userID, description, dealType, date, time });
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