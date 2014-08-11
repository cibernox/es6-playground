module.exports = function(app) {
  var express = require('express');
  var scenariosRouter = express.Router();
  scenariosRouter.get('/', function(req, res) {
    res.send({
      scenarios: [
        { id: '1', description: "cricket_fixtures.rb", example_ids: [1,2,3,8,9,10] },
        { id: '2', description: "english_premier_league.rb", example_ids: [4, 5] },
        { id: '3', description: "world_cup_competition.rb", example_ids: [6] },
        { id: '4', description: "world_cup_match.rb", example_ids: [7] }
      ]
    });
  });
  app.use('/api/scenarios', scenariosRouter);
};
