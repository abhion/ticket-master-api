const Employee = require('../models/employee');

module.exports.list = (req, res) => {
    Employee.find()
        .then(employee => employee ? res.json(employee): res.json({}))
        .catch(err => res.json(err));
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Employee.findById()
        .then(employee => employee ? res.json(employee): res.json({}))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    const body = req.body;
    const aEmployee = new Employee(body);
    aEmployee.save()
        .then(employee => employee ? res.json(employee): res.json({}))
        .catch(err => res.json(err));
}
module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Employee.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(employee => employee ? res.json(employee): res.json({}))
        .catch(err => res.json(err));
}
module.exports.delete = (req, res) => {
    const id = req.params.id;
    Employee.findByIdAndDelete(id)
    .then(employee => employee ? res.json(employee): res.json({}))
    .catch(err => res.json(err));
}