module.exports = function(app) {
  var express = require('express');
  var scenariosRouter = express.Router();
  scenariosRouter.get('/', function(req, res) {
    res.send({
      scenarios: [
        { id: '1', name: "cricket_fixtures.rb", examples: [1,2,3] },
        { id: '2', name: "english_premier_league.rb", examples: [4, 5] },
        { id: '3', name: "world_cup_competition.rb", examples: [6] },
        { id: '4', name: "world_cup_match.rb", examples: [7] }
      ]
    });
  });
  app.use('/api/scenarios', scenariosRouter);
};
