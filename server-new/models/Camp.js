const mongoose = require('mongoose');
const campSchema = new mongoose.Schema({
    schemeName: String,
    sponsoredAgency: String,
    eventTitle: String,
    dateTime: String,
    venue: String,
    guestDetails: String,
    action: {
      type: Boolean,
      default: false,
    },
  });
const Camp = mongoose.model('Camp', campSchema);  

module.exports = Camp;