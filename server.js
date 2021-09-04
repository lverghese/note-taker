const fs = require("fs");
const express = require("express");

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/', apiRoutes);


//post receive new note to save, add to json, and return to user
app.post("/api/notes", (res, req) => {
  let newNote = req.body;
  let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  let noteListLength = (noteListLength.length).toString();

  //this is where the id for each note
  newNote.id = noteListLength;

  //push new or updated note to db.json data
  noteList.push(newNote);

  //writes new data to json file and shows updated note
  fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
  res.json(noteList);
});















app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });