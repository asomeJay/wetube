import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import { githubLoginCallback, facebookLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GIT_ID,
        clientSecret: process.env.GIT_SECRET,
        callbackURL: `http://localhost:4000${routes.githubCallback}`
      },
      githubLoginCallback
    )
);

passport.use(new FacebookStrategy({
  clientID: process.env.FB_ID,
  clientSecret: process.env.FB_SECRET,
  callbackURL: `https://0866c412.ngrok.io${routes.facebookCallback}`
  ,
  profileFields: ["id", "displayName", "photos", "email"],
  scope: ["public_profile", "email"],
},
  facebookLoginCallback
)
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));