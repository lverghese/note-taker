const router = require('express').Router();
const path = require('path');
const fs = require('fs'); 

const { notes } = require('../../db/db.json')

//route that reads db.json and returns saved notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"))
});

//post receive new note to save, add to json, and return to user
router.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    console.log(noteList)
    let noteListLength = (noteList.notes.length).toString();
    
    //this is where the id for each note
    newNote.id = noteListLength;
  
    //push new or updated note to db.json data
    noteList.notes.push(newNote);
  
    //writes new data to json file and shows updated note
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
  
    res.json(noteList);
  });



module.exports = router;

