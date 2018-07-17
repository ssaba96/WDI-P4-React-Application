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
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C4KEVUwCVTnkl3lcTGPO6r2n3Z5JU8FkVKV2H6ovxVuhxoYIZA',
      myWickedTalent: 'I can write blog for you'
    }, {
      name: 'writer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBmx7vwn1TctEurOmaXT4wycxMSveVBLCYbiWn0nWUQTpqUVXaWw',
      myWickedTalent: 'I can write content for you'
    }]))
    .then(talents => console.log(`${talents.length} talents created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
