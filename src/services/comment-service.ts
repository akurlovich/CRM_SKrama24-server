import { ObjectId } from "mongoose";
import commentModel from "../models/comment-model";
import { IComment } from "../types/IComment";


class CommentService {
  async addComment(comment: IComment) {
    // console.log('comment in', comment)
    const newComment = await commentModel.create(comment);
    // console.log('new comment', newComment)
    return newComment;
  };

  async getCommentByID(id: string) {
    return await commentModel.findById(id);
  };

  async getAllComments() {
    return await commentModel.find();
  };

  async deleteAllCompanyComments(ids: ObjectId[]) {
    return await commentModel.deleteMany({_id: ids});
    // return await orderItemModel.deleteMany({});
  };
};

export default new CommentService();