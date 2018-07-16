const mongoose = require('mongoose');

const talentSchema = new mongoose.Schema({
  name: { type: String, required: 'This field is required' },
  description: String ,
  image: { type: String, required: 'This field is required' }
});


talentSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Talent', talentSchema);
