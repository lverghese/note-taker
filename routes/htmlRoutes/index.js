const path = require('path');
const router = require('express').Router();

//gets base html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
  //gets notes html
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });


module.exports = router;