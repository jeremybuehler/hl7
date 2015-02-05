var hl7 = require('../lib/hl7');

var d = {
  subcomponentSeperator: "&",
  repititionCharacter: "~",
  componentSeperator: "^",
  fieldSeperator: "|"
}
//
// var c = new hl7.component(["something", "something"]);
//
// console.log(c.toString(d))
//
//
var f = new hl7.field(["name", ["adrress1", "address2"], "city"], "name2");

console.log(f.toString(d));
//
// var s = new hl7.segment("PID", ["name", "address"], "city");
//
// console.log(s.toString(d));
//
//
// var h = new hl7.header("Sending Application", "Recieving Application")
//
// console.log(h.toString(d));

var m = new hl7.message("Sending Application", "Recieving Application")

m.addSegment("PID", "ID", "address", "city", "state");

console.log(m.toString());

m.getSegment("PID").editField(1, f);

console.log(m.toString());
