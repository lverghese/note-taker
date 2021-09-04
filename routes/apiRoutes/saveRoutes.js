const router = require('express').Router();
const path = require('path');
const fs = require('fs'); 

const { notes } = require('../../db/db.json')

//route that reads db.json and returns saved notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../../db/db.json"))
});




module.exports = router;

