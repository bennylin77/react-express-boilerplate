const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
	email: { type: String, required: true, unique: true },
	passwordHash: { type: String, required: true },
}, { timestamps: true });

userSchema.methods.isValidPassword = function (password) {
	return bcrypt.compareSync(password, this.passwordHash);
};
userSchema.virtual('password').set(function (value) {
	this.passwordHash = bcrypt.hashSync(value, 12);
});
userSchema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform(doc, ret) { delete ret._id; },
});
module.exports = mongoose.model('User', userSchema);
