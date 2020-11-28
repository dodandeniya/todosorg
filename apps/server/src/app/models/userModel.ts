import * as mongoose from 'mongoose';
import { IUser } from '@todosorg/common-share';
import * as bcript from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

interface IUserDocument extends IUser, mongoose.Document {
  matchPassword: any;
}

userSchema.methods.matchPassword = async function (enteredPassword: any) {
  return await bcript.compare(enteredPassword, this.password);
};

userSchema.pre<IUserDocument>('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcript.genSalt(10);
  this.password = await bcript.hash(this.password, salt);
});

const User = mongoose.model<IUserDocument>('User', userSchema);

export default User;
