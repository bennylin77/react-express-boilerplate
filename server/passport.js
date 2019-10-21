const passport = require('passport');
const passportJWT = require('passport-jwt');

const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const JWTStrategy = passportJWT.Strategy;
const User = require('./schema/user');

const { JWT_SECRET } = process.env;

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
},
((email, password, cb) => User.findOne({ email })
	.then((user) => {
		if (!user || !password || !user.isValidPassword(password)) {
			return cb(null, false, { message: 'Incorrect email or password.' });
		}
		return cb(null, user, { message: 'Sign in successfully' });
	})
	.catch((err) => cb(err)))));

passport.use(new JWTStrategy({
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: JWT_SECRET,
},
((jwtPayload, next) => User.findById(jwtPayload.id)
	.then((user) => {
		next(null, user);
	})
	.catch((err) => {
		console.log(err);
		next(err);
	}))));
