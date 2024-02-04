import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  content: { type: String, required: true },
  user_id: { type: String, required: true },
});

export default mongoose.model("Todo", todoSchema);
