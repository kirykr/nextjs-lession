import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Eamil already exists!'],
    required: [true, 'Email is required'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  match: [/^(?=.{8,20}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username is invalid, it should contain 8-20 alphanumeric letters and unique!"]
  },
  image: {
    type: String,
  }
});

const User = models.user || model("User", UserSchema)

export default User;