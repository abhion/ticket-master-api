const Customer = require('../models/customer');

module.exports.list = (req, res) => {
    Customer.find()
        .then(customer => customer ? res.json(customer): res.json({}))
        .catch(err => res.json(err));
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Customer.findById()
        .then(customer => customer ? res.json(customer): res.json({}))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    const body = req.body;
    const aCustomer = new Customer(body);
    aCustomer.save()
        .then(customer => customer ? res.json(customer): res.json({}))
        .catch(err => res.json(err));
}
module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Customer.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(customer => customer ? res.json(customer): res.json({}))
        .catch(err => res.json(err));
}
module.exports.delete = (req, res) => {
    const id = req.params.id;
    Customer.findByIdAndDelete(id)
    .then(customer => customer ? res.json(customer): res.json({}))
    .catch(err => res.json(err));
}