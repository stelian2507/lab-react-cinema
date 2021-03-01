const express = require('express');
const { default: MovieInfo } = require('../../client/src/components/movieInfo');
const router = express.Router();

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});

router.get('/movies', (req,res) => {
  Movie.find()
.then(movies) => res.json(movies))
.catch(error) =>
console.log('error 2'))
})

router.get('/movies/:id'), (req, res) =>
{
  Movie.findById(req,prams.id)
  .then((movies) => res.json(movies))
  .catch((error) => 
  console.log('error 3')
})
})

module.exports = router;


