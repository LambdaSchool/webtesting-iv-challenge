const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecordSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  recordType: {
    required: true,
    type: String,
  }
});

RecordSchema.methods.getRecordByName = function() {
  return this.name;
}

RecordSchema.statics.getAllRecords = (cb) => {
  Record.find({}, (err, records) => {
    if (err) console.error(err);
    cb(records);
  });
};

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;