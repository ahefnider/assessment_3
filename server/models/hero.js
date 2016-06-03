var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PowerSchema = require('./powers').schema;


var HeroSchema = new Schema({
  alias: { type: String, required: true },
  first_name: { type: String, required: true},
  last_name: { type: String, required: false},
  city: { type: String, required: false},
  power_name: [PowerSchema]
});

var Hero = mongoose.model('Hero', HeroSchema);

module.exports = Hero;
