import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";

passport.use(User.createStrategy());


passport.use(new GithubStrategy({
    clientID: GIT_ID,
    clientSecret: GIT_SECRET,
    callbackURL: "http://localhost:4000/auth/github/callback"
}));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());