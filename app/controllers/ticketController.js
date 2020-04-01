const Ticket = require('../models/ticket');

module.exports.list = (req, res) => {
    Ticket.find()
        .then(ticket => ticket ? res.json(ticket): res.json({}))
        .catch(err => res.json(err));
}

module.exports.show = (req, res) => {
    const id = req.params.id;
    Ticket.findById()
        .then(ticket => ticket ? res.json(ticket): res.json({}))
        .catch(err => res.json(err));
}

module.exports.listPersonnel = (req, res) => {
    const personnel = req.params.personnelType;
    const id = req.params.id;
    const key = `${personnel}Id`
    Ticket.find({ [key]: id }).populate('customerId').populate('employeeId')
        .then(personnelRes => res.json(personnelRes));
}

module.exports.create = (req, res) => {
    const body = req.body;
    const aTicket = new Ticket(body);
    aTicket.save()
        .then(ticket => ticket ? res.json(ticket): res.json({}))
        .catch(err => res.json(err));
}
module.exports.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Ticket.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(ticket => ticket ? res.json(ticket): res.json({}))
        .catch(err => res.json(err));
}
module.exports.delete = (req, res) => {
    const id = req.params.id;
    Ticket.findByIdAndDelete(id)
    .then(ticket => ticket ? res.json(ticket): res.json({}))
    .catch(err => res.json(err));
}