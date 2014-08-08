module.exports = function(app) {
  var express = require('express');
  var scenariosRouter = express.Router();
  scenariosRouter.get('/', function(req, res) {
    res.send({
      scenarios: [
        { id: '1', description: "cricket_fixtures.rb", examples: [1,2,3] },
        { id: '2', description: "english_premier_league.rb", examples: [4, 5] },
        { id: '3', description: "world_cup_competition.rb", examples: [6] },
        { id: '4', description: "world_cup_match.rb", examples: [7] }
      ]
    });
  });
  app.use('/api/scenarios', scenariosRouter);
};
