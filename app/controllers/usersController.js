const User = require('../models/user');


//Get users
module.exports = {
    list: (req, res) => {
        User.find()
            .then(user => user ? res.json(user) : {})
            .catch(err => res.json(err));
    }
}

//Get user by id
module.exports.show = (req, res) => {
    User.find()
        .then(user => user ? res.json(user) : res.json({}))
        .catch(err => res.json(err));
}

//Create user
module.exports.create = (req, res) => {
    const body = req.body;
    const user = new User(body);
    user.save()
        .then(savedUser => res.json(savedUser))
        .catch(err => res.json(err));
}

//update user
module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    User.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(user => user? res.json(user) : res.json({}))
        .catch(err => res.json(err));
}
//delete user
module.exports.delete = (req, res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then(user => user? res.json(user) : res.json({}))
        .catch(err => res.json(err));
}