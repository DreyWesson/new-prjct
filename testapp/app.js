const yargs = require("yargs");
const notes = require("./note.js");
const { title, body } = yargs.argv;
const cmd = yargs.argv._[0];

switch (cmd) {
  case "add":
    console.log("adding note...");
    notes.addingNote(title, body);
    break;
  case "remove":
    console.log("removing note...");
    notes.removeNote(title);
    break;
  case "read":
    console.log("reading note...");
    notes.readNote(title);
    break;
  case "list":
    console.log("listing all notes...");
    notes.getAll();
    break;
  default:
    console.log("unknown command was used");
    break;
}
