const passport    = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
const User = require("./schema/user");
const JWT_SECRET = process.env.JWT_SECRET;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
      return User.findOne({email})
          .then(user => {
                if (!user || !user.isValidPassword(password)) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }
                return cb(null, user, {message: 'Logged In Successfully'});
          })
          .catch(err => {
                return cb(err);
          });
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : JWT_SECRET
    },
    function (jwtPayload, next) {
        return User.findById(jwtPayload.id)
            .then(user => {
                next(null, user);
            })
            .catch(err => {
								console.log(err);
                next(err);
            });
    }
));
