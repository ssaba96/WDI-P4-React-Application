const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: String,
  description: String ,
  skills: String,
  education: String,
  image: String,
  myWickedTalent: String,
  basedIn: String,
  rating: Number
});


talentSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Talent', talentSchema);
