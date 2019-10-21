const express = require('express');

const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../schema/user');

const { JWT_SECRET } = process.env;

const signIn = (req, res, next) => {
	passport.authenticate('local', { session: false }, (err, user, info) => {
		if (err || !user) {
			return res.json({
				status: 'failure',
				message: info ? info.message : 'Login failed',
			});
		}
		req.login(user, { session: false }, async (err) => {
			if (err) {
				res.send(err);
			}
			const token = jwt.sign({ id: user.id }, JWT_SECRET);
			const response = {
				status: 'success',
				data: { user, token },
				message: 'Sign in successfully',
			};
			return res.json(response);
		});
	})(req, res);
};

const signUp = (req, res, next) => {
	const { email, password, confirmPassword } = req.body;
	if (!email || !password || !confirmPassword) {
		const response = {
			status: 'failure',
			data: {},
			message: 'Some fields are blank',
		};
		return res.json(response);
	}
	if (password !== confirmPassword) {
		const response = {
			status: 'failure',
			data: {},
			message: 'The passwords are not equal',
		};
		return res.json(response);
	}
	User.create({ email, password })
		.then((user) => {
			req.login(user, { session: false }, (err) => {
				if (err) {
					res.send(err);
				}
				const token = jwt.sign({ id: user.id }, JWT_SECRET);
				const response = {
					status: 'success',
					data: { user, token },
					message: 'Sign in successfully',
				};
				return res.json(response);
			});
		})
		.catch((err) => {
			if (err.name === 'ValidationError') {
				const response = {
					status: 'failure',
					message: 'Sorry, that email is already taken.',
				};
				return res.json(response);
			} next(err);
		});
};

/*
router.post('/signin', (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
								status: "failure",
                message: info ? info.message : 'Login failed'
            });
        }
        req.login(user, {session: false}, async (err) => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign({id: user.id}, JWT_SECRET);
						const response = {
							status: "success",
							data: {user, token},
							message: "Sign in successfully"
						}
            return res.json(response);
        });
    })
    (req, res);
});
*/
/*
router.post("/signup", (req, res, next) => {
	const { email, password, confirmPassword } = req.body;
	if(!email || !password || !confirmPassword){
		const response = {
			status: "failure",
			data: {},
			message: "Some fields are blank"
		}
		return res.json(response);
	}

	if(password!==confirmPassword){
		const response = {
			status: "failure",
			data: {},
			message: "The passwords are not equal"
		}
		return res.json(response);
	}

	User.create({ email: email, password: password })
		.then(user => {
			req.login(user, {session: false}, (err) => {
					if (err) {
							res.send(err);
					}
					const token = jwt.sign({id: user.id}, JWT_SECRET);
					const response = {
						status: "success",
						data: {user, token},
						message: "Sign in successfully"
					}
					return res.json(response);
			});
		})
		.catch(err => {
			if (err.name === "ValidationError") {
				const response = {
					status: "failure",
					message: "Sorry, that email is already taken."
				}
				return res.json(response);
			} else next(err);
		});
});
*/

router.post('/signin', signIn);
router.post('/signup', signUp);
module.exports = router;
