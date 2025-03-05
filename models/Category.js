import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Category", CategorySchema);
const userModel = mongoose.models.use || mongoose.model("Category", CategorySchema);
export default userModel

