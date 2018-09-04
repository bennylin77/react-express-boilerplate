const express = require('express');
const router  = express.Router();
const jwt      = require('jsonwebtoken');
const passport = require('passport');
const User = require("../schema/user");
const mongoose = require("mongoose");
const JWT_SECRET = process.env.JWT_SECRET;

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

router.post("/signup", (req, res, next) => {
	const { email, password } = req.body;
	User.create({ email: email, password: password })
		.then(user => {
			req.login(user, {session: false}, (err) => {
					if (err) {
							res.send(err);
					}
					const token = jwt.sign({id: user.id}, JWT_SECRET);
					return res.json({user, token});
			});
		})
		.catch(err => {
			if (err.name === "ValidationError") {
				req.flash("Sorry, that username is already taken.");
				res.redirect("/signup");
			} else next(err);
		});
});

module.exports = router;
