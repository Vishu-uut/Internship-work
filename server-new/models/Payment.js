const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
    sno: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    adhaarNo: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: String,
      required: true,
    },
    mobiliserName: {
      type: String,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);  

  module.exports = Payment;