const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  registrationDate: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  panchayat: {
    type: String,
    required: true,
  },
  postOffice: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  camp: {
    type: String,
    required: true,
  },
  jobRolePreference: {
    type: String,
    required: true,
  },
  photograph: {
    type: String, // Assuming you want to store the photo as binary data (you may need to adjust this based on your needs)
  },
  aadharPhoto: {
    type: String,
  },
  // email:{type:String, unique:true} //if we want to check that this user exist or not
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
