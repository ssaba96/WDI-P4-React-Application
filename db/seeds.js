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
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_C4KEVUwCVTnkl3lcTGPO6r2n3Z5JU8FkVKV2H6ovxVuhxoYIZA',
      myWickedTalent: 'I can write blog for you',
      basedIn: 'London',
      rating: 3
    }, {
      name: 'Assistant',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hGbp7SyUZjEwMcqDBTVQEdUOjDwPwNrOXpMFfUXnNvzOBd-0',
      myWickedTalent: 'I can assist you in office work',
      basedIn: 'Wolverhampton',
      rating: 2
    }, {
      name: 'Makeup Artist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10bpk_YMDowzycCTtYhJzhv4Y0UVgtVExiW5OMrRUOHS0CqDj',
      myWickedTalent: 'I can do professional makeup',
      basedIn: ' East London',
      rating: 4
    }, {
      name: 'Tutor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-OZjtIX3XIWT7dnZvwyYXLM_F9goPymJB34Krlz2p7zj4Msq',
      myWickedTalent: 'I can provide tution',
      basedIn: 'London, whitechapel',
      rating: 5
    }, {
      name: 'Writer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QBbIqtccN91-wI8dB5lCy8WbIQRD_zZi6REn4AHL9Sx7dgDbnA',
      myWickedTalent: 'I can write essay/article for you',
      basedIn: 'London',
      rating: 4
    }, {
      name: 'Chef',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9LCJW_tL14jCZRb7kXHM7ScmMlMCsoqBirSAgNT56hXuTOUZXw',
      myWickedTalent: 'I can deliver fresh cooked food to you',
      basedIn: 'London, Slough',
      rating: 3
    }, {
      name: 'Virtual Assistant',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UBnU4FPAbaxorgM9Me_XSHTwoSqPDwnb5oXGPkC5gZcEOWal',
      myWickedTalent: 'I can virtually assist you',
      basedIn: 'Dudley',
      rating: 4
    }, {
      name: 'Painting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hlh3U952wSdJ5aAiqOkAWX5LfV5uI_PZoNHFrajD8AE6LWH2',
      myWickedTalent: 'I can create art pieces for you',
      basedIn: 'London',
      rating: 4
    }, {
      name: 'Errands',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YLAHNlU9IvPSz65Anv2k7jB0lWSHiwdfDxohZxXRzwQ8CBJ2',
      myWickedTalent: 'I can run errands for you',
      basedIn: 'Central London',
      rating: 3
    }, {
      name: 'Child Carer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAMjr4LUqyTVVgMzM6kOnpQ3aignbEGRTw7chXZuCvNm1-5y7uA',
      myWickedTalent: 'I can be a child carer',
      basedIn: 'London, Oxford Circus',
      rating: 2
    }, {
      name: 'Photographer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeEWohoso0x28zs6i5b0E0G_WEOTqr32dDCLK9qE6dYxxkcY4',
      myWickedTalent: 'I can produce professional photos for you',
      basedIn: 'Manchester',
      rating: 4
    }, {
      name: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      skills: 'Hac diam pharetra luctus pretium vitae sollicitudin fames duis odio dictum',
      education: 'Human give me attention meow immediately regret falling into bathtub, paw at beetle and eat it before it gets away',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuC3eEK3rPaqErawpPDgyd0seRa5Njy0fmfM42Vz_NNyxQuj36g',
      myWickedTalent: 'I can develop websites for you',
      basedIn: 'Birmingham',
      rating: 5
    }]))
    .then(talents => console.log(`${talents.length} talents created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
