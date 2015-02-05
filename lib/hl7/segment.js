var field = require('./field');

var segment = function() {

  this.name = "";
  this.value = [];

  if (arguments.length >= 1) {
    this.name = arguments[0]
  }

  if (arguments.length >= 2) {

    if (Array.isArray(arguments[i])) {
      var fields = new Array();
      for (var ii = 0; ii < arguments[i].length; ii++) {
        fields.push(new field(arguments[i][ii]));
      }
      this.value.push(fields);
    } else {
      for (var i = 1; i < arguments.length; i++) {
        this.value.push(new field(arguments[i]));
      }
    }

  }

}

segment.prototype.addField = function(fieldValue) {
  this.value.push(new field(fieldValue));
}

segment.prototype.editField = function(index, fieldObject) {
  this.value[index] = fieldObject;
}

segment.prototype.toString = function(delimiters) {

  var returnString = this.name + delimiters.fieldSeperator;

  for (var i = 0; i < this.value.length; i++) {

    returnString += this.value[i].toString(delimiters);

    if (i != this.value.length -1) returnString += delimiters.fieldSeperator

  }

  return returnString;
}

module.exports = segment;
