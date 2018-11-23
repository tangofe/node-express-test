/**
 * Created by 54054 on 2018/11/20.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100}
  }
);

GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);