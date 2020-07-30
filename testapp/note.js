const fs = require("fs");

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    return [];
  }
};

let notes = fetchNotes();

const addingNote = (title, body) => {
  notes;
  let note = {
    title,
    body,
  };
  const duplicate = notes.filter((note) => note.title === title);
  if (duplicate.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNote(note);
  } else console.log(`Error: Title already exit`);
};

const removeNote = (title) => {
  notes;
  const filteredNotes = notes.filter((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
};

const readNote = (title) => {
  notes;
  const filteredNotes = notes.filter((note) => note.title === title);
  logNote(filteredNotes[0]);
};

const getAll = () => {
  notes;
  notes.forEach((note) => logNote(notes));
};

const logNote = (note) => {
  console.log("=========================");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll,
};
