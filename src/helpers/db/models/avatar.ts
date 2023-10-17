import mongoose from "mongoose";

const AvatarSchema = new mongoose.Schema<{}>(
  {
    name: {
      type: String,
      required: true,
    },
    images: { type: [String], required: true },
    model: { type: String, required: true },
  },
  { timestamps: true }
);

export default (mongoose.models.Avatar as mongoose.Model<IAvatarItem>) ||
  mongoose.model<IAvatarItem>("Avatar", AvatarSchema);
