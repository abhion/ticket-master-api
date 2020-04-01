const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer = require('../models/customer');

const TicketSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    customerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    departmentId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },
    employeeId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Employee'
    },
    message: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId
    }
});
const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;