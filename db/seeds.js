const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

const Talent = require('../models/talent');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  User.create([{
    username: 'chavez',
    email: 'sabziamjad@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass'
  }])
    .then(() => Talent.create([{
      name: 'blog',
      description: 'I will..',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C4KEVUwCVTnkl3lcTGPO6r2n3Z5JU8FkVKV2H6ovxVuhxoYIZA',
      myWickedTalent: 'I can write blog for you'
    }, {
      name: 'writer',
      description: 'I will..',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmx7vwn1TctEurOmaXT4wycxMSveVBLCYbiWn0nWUQTpqUVXaWw',
      myWickedTalent: 'I can write content for you'
    }]))
    .then(talents => console.log(`${talents.length} talents created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
