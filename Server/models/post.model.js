import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    content: { type: String, required: true },
    photo: { type: String, required: false },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;