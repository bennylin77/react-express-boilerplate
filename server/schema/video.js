const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
	title: String,
	url: String,
	width: Number,
	height: Number,
}, { timestamps: true });
videoSchema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform(doc, ret) { delete ret._id; },
});
module.exports = mongoose.model('Video', videoSchema);
