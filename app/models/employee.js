const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },
    userId: {
        type: Schema.Types.ObjectId
    }
})

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;