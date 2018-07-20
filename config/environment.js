const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/talents';
const port = process.env.PORT || 4000;
const secret = '🏴⭐️☺️🎉🔑🗝';

module.exports = { secret, dbURI, port };
