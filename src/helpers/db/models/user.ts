import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema<{}>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
      minLength: [6, "Your password must be at least 6 characters long"],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    // @ts-ignore
    this.password = bcrypt.hashSync(this.password, 10);
    next();
  } catch (err: any) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default (mongoose.models.User as mongoose.Model<IUserItem>) ||
  mongoose.model<IUserItem>("User", UserSchema);
