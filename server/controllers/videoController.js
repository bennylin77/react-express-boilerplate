const mongoose = require("mongoose");
const Video = require("../schema/video");
const router = require("express").Router();

const all = async (req, res) => {
	const pageOptions = {
	    page: parseInt(req.query.page) || 1,
	    limit: parseInt(req.query.limit) || 100
	}
	try {
		const offset = (pageOptions.page-1)*pageOptions.limit;
		const query = await Video.find({}).sort({createdAt: -1}).skip(offset).limit(pageOptions.limit).exec()
		const total = await Video.count({}).exec()
		const data = {items: query, totalPages: Math.ceil(total/pageOptions.limit), page: pageOptions.page}
		const response = {
			status: "success",
			data: data,
			message: ""
		}
		return res.json(response);
	} catch(err) {
		console.log(err)
	}
}

const add = async (req, res) => {
	try {
		let video = new Video();
		video = await video.save();
		const response = {
			status: "success",
			data: {item: video},
			message: "Successfully, add video"
		}
		return res.json(response);
	} catch(err) {
		console.log(err)
	}
}

const single = async (req, res) => {
	try {
		const video = await Video.findById(req.id).exec();
		const response = {
			status: "success",
			data: {item: video},
			message: ""
		}
		return res.json(response);
	} catch(err) {
		console.log(err)
	}
}

const update = async (req, res) => {
  const set = {};
  for (let field in req.body) {
      set[field] = req.body[field];
  }
	try {
	  const video = await Video.findOneAndUpdate({_id: req.id}, {$set: set}, {new: true}).exec();
		const response = {
			status: "success",
			data: {item: video},
			message: `Successfully, update video ${video.id}`
		}
		return res.json(response);
	} catch(err) {
		console.log(err)
	}
}

const destroy = async (req, res) =>{
	try {
		const video = await Video.findOneAndRemove({_id: req.id}).exec();
		const response = {
			status: "success",
			data: {},
			message: `Successfully, remove video ${video.id}`
		}
		return res.json(response);
	} catch(err) {
		console.log(err)
	}
}

// route middleware to validate :id
router.param('id', (req, res, next, id)=>{
    Video.findById(id, function (err, video) {
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.json({message : err.status  + ' ' + err});
        } else {
            req.id = id;
            next();
        }
    });
});
router.get('/', all);
router.get('/add', add);
router.route("/:id").get(single).put(update).delete(destroy);
module.exports = router;
