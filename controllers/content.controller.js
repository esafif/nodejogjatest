const content_model = require('../models/usercontent.model');

exports.test = function (req, res) {
    content_model.find({}, function(err, content){
        if(err) return next(err);
        res.send(content)
    })
};

exports.content_read = function(req, res){
    content_model.findById(req.params.id, function(err, content){
        if(err) return next(err);
        res.send(content)
    })
}

exports.content_delete = function (req, res) {
    content_model.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.content_update = function (req, res) {
    content_model.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, content) {
        if (err) return next(err);
        res.send('Content udpated.');
    });
};

exports.content_create = function (req, res) {
    let content = new content_model(
        {
            id_content: req.body.id_content,
            name_user: req.body.name_user,
            content: req.body.content,
            image_prof: req.body.image_prof,
            review: req.body.review
        }
    );

    content.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('Content created successfully')
    })
};