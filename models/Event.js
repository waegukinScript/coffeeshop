const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  fistName: String,
  lastName: String,
  appointmentdate: String,
  appointmenttime: String,
  phone: String,
  message: String,
  createdAt: String
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
