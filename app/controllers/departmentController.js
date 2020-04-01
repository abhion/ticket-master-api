const Department = require('../models/department');

module.exports.list = (req, res) => {
    Department.find()
        .then(department => department ? res.json(department) : res.json({}))
        .catch(err => res.json(err));
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Department.findById(id)
        .then(department => res.json(department))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    const body = req.body;
    const departmentObj = new Department(body);
    departmentObj.save()
        .then(department => res.json(department))
        .catch(err => res.json(err));
}

module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Department.findByIdAndUpdate(id, body, {runValidators: true, new: true})
        .then(department => department ? res.json(department) : res.json({}))
        .catch(err => res.json(err));

}

module.exports.delete = (req, res) => {
    const id = req.params.id;
    Department.findByIdAndDelete(id)
        .then(department => department ? res.json(department) : res.json({}))
        .catch(err => res.json(err));

}


