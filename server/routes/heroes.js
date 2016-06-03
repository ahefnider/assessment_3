var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

router.get('/', function (req, res) {
  Hero.find({}, function (err, hero) {
    if (err) {
      console.log('heroes.js')
      res.sendStatus(500);
      return;
    }

    res.send(hero);
  });
});

router.post('/', function (req, res) {
  var hero = new Hero(req.body);
  hero.save(function (err) {
    if (err) {
      console.log('heroes.js');
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

// router.delete('/:id', function (req, res) {
//   Hero.findByIdAndRemove(req.params.id, function (err) {
//     if (err) {
//       res.sendStatus(500);
//       return;
//     }
//
//     res.sendStatus(204);
//   });
// });


module.exports = router;
