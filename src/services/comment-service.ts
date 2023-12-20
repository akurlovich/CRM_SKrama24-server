import commentModel from "../models/comment-model";
import { IComment } from "../types/IComment";


class CommentService {
  async addComment(comment: IComment) {
    return await commentModel.create(comment);
  };

  async getCommentByID(id: string) {
    return await commentModel.findById(id);
  };

  async getAllComments() {
    return await commentModel.find();
  };
};

export default new CommentService();