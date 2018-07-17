const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: String,
  description: String ,
  image: String,
  myWickedTalent: String
});


talentSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Talent', talentSchema);
