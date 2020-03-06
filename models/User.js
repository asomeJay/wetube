import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
});

UserSchema.plugin(passportLocalMongoose, {usernameFiled: "email"}); 

const model = mongoose.Model("User", UserSchema);