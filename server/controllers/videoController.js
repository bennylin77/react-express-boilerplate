const mongoose = require("mongoose");
const Video = require("../schema/video");
const router = require("express").Router();

const all = (req, res) => {
  Video.find( {}, 'id').sort({createdAt: -1}).exec(function (err, videos) {
      if (err)
          res.send(err);
      else
          res.json(videos);
  });
}

const add = (req, res) => {
  const video = new Video();
  video.save(function (err) {
      if (err)
          res.send(err);
      else
          res.json(video);
  });
}

const update = (req, res) => {
  const set = {};
  for (let field of req.body) {
      set[field] = req.body[field];
  }
  Video.findOneAndUpdate({_id: req.id}, {$set: set},
                           {new: true}, function(err, video){
      if(err){
          console.log("Something wrong when updating data!");
      }
      res.json(video);
  });
}

// route middleware to validate :id
router.param('id', function(req, res, next, id) {
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
router.get('/all', all);
router.get('/add', add);
router.route("/:id").put(update);

module.exports = router;
